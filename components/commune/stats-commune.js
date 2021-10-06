import PropTypes from 'prop-types'

import Section from '@/components/section'
import Button from '@/components/button'

function StatsCommune({codeCommune, communeInfos}) {
  const {nomCommune, nbNumeros, nbVoies, nbNumerosCertifies, typeComposition} = communeInfos

  return (
    <Section>
      <div style={{padding: '1em', fontSize: '1em', textAlign: 'center'}}>
        <h3>Les adresses de {nomCommune} proviennnent d’un{typeComposition === 'bal' ? 'e' : ''} <a>{typeComposition === 'bal' ? 'Base Adresse Locale' : typeComposition}</a></h3>
        <p><i>Code Commune : {codeCommune} </i></p>
      </div>
      <div className='parent-container'>
        <h3>État de la Base Adresse Nationale : </h3>
        <div className='horizontal-container'>
          {nbNumerosCertifies === nbNumeros ?
            <div className='big-numeros-container'>
              <span className='big-numeros valid'>{nbNumeros}</span>
              <span> adresse certifiées</span>
            </div> :
            (nbNumerosCertifies === 0 ?
              <div>
                <span className='big-numeros danger'>{nbNumeros}</span>
                <span> adresses non certifiées (ou en attente de certification)</span>
              </div> : (
                <div className='double-counter'>
                  <div>
                    <span className='big-numeros'>{nbNumeros}</span><span> adresses </span>
                  </div>
                  <div>
                    dont <span className='big-numeros'>{nbNumerosCertifies}</span> certifiées
                  </div>
                </div>
              ))}
          <div>
            <span className='big-numeros'> {nbVoies}</span> voies
          </div>
        </div>
        <div className='big-text'>
          Les adresses de la commune proviennent de la Base Adresse Locale <a>nomDeLaBAL</a> gérée sur <a href='https://mes-adresses.data.gouv.fr'>mes-adresses</a>
        </div>
        <div>
          <b>Dernière mise à jour des données: <i>il y a un mois</i></b>
        </div>
      </div>
      <div style={{textAlign: 'center', margin: '2em 0'}}>
        <Button>Contacter la mairie de cette commune</Button>
      </div>
      <style jsx>{`
        .parent-container {
          text-align: center;
          padding: 1.5em 0;
        }

        .grid-container {
          display: grid;
          grid-gap: 1em;
          justify-content: center;
          align-content: center;
          font-family: Helvetica Neue;
        }

        .horizontal-container {
          padding 1em 0;
          max-width: 1000px;
          display: grid;
          margin: auto;
          justify-content: center;
          grid-gap: 1em;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        .double-counter {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }

        .big-numeros {
          font-size: 55px;
          font-weight: bolder;
          margin: .5em 0;
        }

        .big-text {
          font-size: 20px;
          font-weight: bold;
          padding: 1em 0;
        }

        .valid {
          color: green;
        }

        .danger {
          color: orange;
        }
      `}</style>
    </Section>
  )
}

StatsCommune.propTypes = {
  codeCommune: PropTypes.string.isRequired,
  communeInfos: PropTypes.object.isRequired
}

export default StatsCommune
