import PropTypes from 'prop-types'
import Image from 'next/image'
import {DownloadCloud} from 'react-feather'

import theme from '@/styles/theme'

function DocDownload({title, link, src, alt, isReverse, children}) {
  return (
    <div className='doc-container'>
      <div className='text-container'>
        <h3>{title}</h3>
        {children}
      </div>
      <div className='img-container'>
        <div className='preview'>
          <Image width={200} height={280} layout='fixed' src={src} alt={alt} />
        </div>
        <a href={link}>
          <DownloadCloud style={{verticalAlign: 'bottom', marginRight: '5px'}} />
          Télécharger
        </a>
      </div>
      <style jsx>{`
        .doc-container {
          display: flex;
          flex-wrap: wrap;
          flex-direction: ${isReverse ? 'row-reverse' : 'row'};
          margin: 1em 0;
        }

        .text-container {
          flex: 2;
          margin: auto;
          min-width: 250px;
        }

        .img-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .preview {
          display: flex;
          margin: 1em;
          border: 5px solid ${theme.colors.whiteBlue};
          border-radius: ${theme.borderRadius};
        }
      `}</style>
    </div>
  )
}

DocDownload.propTypes = {
  isReverse: PropTypes.bool,
  children: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}

DocDownload.defaultProps = {
  isReverse: false,
  children: null,
  link: null,
  title: null,
  src: null,
  alt: null
}

export default DocDownload

