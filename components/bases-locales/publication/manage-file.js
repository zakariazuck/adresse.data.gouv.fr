import React, {useState, useCallback, useEffect} from 'react'
import PropTypes from 'prop-types'
import {uniq} from 'lodash'
import {prevalidate} from '@etalab/bal'

import {getFileExtension} from '@/lib/bal/file'

import FileHander from '../validator/file-handler'
import Report from '../validator/report'

import theme from '@/styles/theme'

const ManageFile = React.memo(({error, handleError, handleFile}) => {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [report, setReport] = useState(null)

  const parseFile = useCallback(async file => {
    try {
      const report = await prevalidate(file)
      const communes = uniq(report.rows.map(r => r.parsedValues.commune_insee || r.additionalValues.cle_interop.codeCommune))

      if (communes.length !== 1) {
        throw new Error('Fichier BAL vide ou contenant plusieurs communes')
      }

      if (report.parseOk) {
        if (report.profilesValidation['1.3-etalab'].isValid) {
          handleFile(file)
        } else {
          setReport(report)
        }
      } else {
        handleError(`Impossible d’analyser le fichier… [${report.parseErrors[0].message}]`)
      }
    } catch (err) {
      const error = `Impossible d’analyser le fichier… [${err.message}]`
      handleError(error)
    }
  }, [handleError, handleFile])

  useEffect(() => {
    if (file) {
      handleError(null)
      setReport(null)
    }
  }, [file, handleError])

  useEffect(() => {
    if (error) {
      setFile(null)
      setLoading(false)
      setReport(null)
    }
  }, [error])

  useEffect(() => {
    if (report) {
      setLoading(false)
    }
  }, [report])

  const handleFileDrop = useCallback(fileList => {
    const file = fileList[0] // Keep only the first file
    const fileExtension = getFileExtension(file.name)

    setLoading(true)

    if (!fileExtension || fileExtension !== 'csv') {
      handleError('Ce type de fichier n’est pas supporté. Vous devez déposer un fichier *.csv.')
    } else if (file.size > 10 * 1024 * 1024) {
      handleError('Ce fichier est trop volumineux. Vous devez déposer un fichier de moins de 10 Mo.')
    } else {
      setFile(file)
      parseFile(file)
    }
  }, [setLoading, handleError, parseFile])

  return (
    <>
      <FileHander
        file={file}
        onFileDrop={handleFileDrop}
        isLoading={loading}
      />

      {report && (
        <>
          <h3 style={{color: theme.colors.red}}>Base adresses locales non conforme</h3>
          <Report report={report} />
        </>
      )}
    </>
  )
})

ManageFile.defaultProps = {
  error: null
}

ManageFile.propTypes = {
  error: PropTypes.object,
  handleError: PropTypes.func.isRequired,
  handleFile: PropTypes.func.isRequired
}

export default ManageFile
