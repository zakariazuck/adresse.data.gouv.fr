import {useState, useEffect} from 'react' // eslint-disable-line unicorn/filename-case
import {useRouter} from 'next/router'
import {Map} from 'react-feather'

import Loader from '@/components/loader'
import Page from '@/layouts/main'
import Head from '@/components/head'
import StatsCommune from '@/components/commune/stats-commune'
import ValidationCommune from '@/components/commune/validation-commune'
import AdministrationCommune from '@/components/commune/administration-commune'

function CommunePage() {
  const router = useRouter()
  const {codeCommune} = router.query
  const [communeInfos, setCommuneInfos] = useState()

  useEffect(() => {
    const getCommuneInfos = async codeCommune => {
      const response = await fetch(`https://plateforme.adresse.data.gouv.fr/lookup/${codeCommune}`)
      const commune = await response.json()
      setCommuneInfos(commune)
    }

    if (codeCommune) {
      getCommuneInfos(codeCommune)
    }
  }, [codeCommune])

  console.log(communeInfos)

  return communeInfos ? (
    <Page id='page' title={`Informations sur la commune de ${communeInfos.nomCommune}`}>
      <Head title={`Informations sur la commune de ${communeInfos.nomCommune}`} icon={<Map size={56} />} />
      <StatsCommune codeCommune={codeCommune} communeInfos={communeInfos} />
      <ValidationCommune communeInfos={communeInfos} />
      <AdministrationCommune />
    </Page>
  ) : (
    <div className='center'>
      <Loader />
      <style jsx>{`
        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: auto;
        }
      `}</style>
    </div>
  )
}

export default CommunePage
