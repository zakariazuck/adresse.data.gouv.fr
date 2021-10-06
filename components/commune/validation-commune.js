import PropTypes from 'prop-types'

import Section from '@/components/section'
import Button from '@/components/button'
import BalScore from '@/components/commune/bal-score'

import ExpandableMenu from '@/components/api-doc/api-adresse/expandable-menu'

import theme from '../../styles/theme'

function ValidationCommune({communeInfos}) {
  const title = (
    <div className='get'>
      <div className='method'>Avertissement</div>
      <div className='description'>
        <div><b>champ source vide</b></div>
        <div>Le champ source ne doit pas être vide</div>
      </div>
      <style jsx>{`
        .get {
          display: flex;
          align-items: center;
        }

        .method {
          background-color: ${theme.colors.orange};
          color: ${theme.colors.white};
          font-weight: 600;
          border-radius: 3px;
          padding: 0.3em;
          margin-right: 1em;
          text-align: center;
          text-transform: uppercase;
        }

        .description {
          width: 100%;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          font-weight: 500;
        }

        @media (max-width: ${theme.breakPoints.tablet}) {
          .method {
            font-size: .7em;
          }
        }
        `}</style>
    </div>
  )

  return (
    <Section background='grey' title='Qualité des adresses :'>
      <BalScore />
      <div style={{paddingTop: '1.5em'}}>
        <h3>Liste des principales anomalies :</h3>
        <ExpandableMenu title={title}>
          <div className='details'>Clé d’interopérabilité invalide (voie)</div>
        </ExpandableMenu>
        <ExpandableMenu title={title}>
          <div className='details'>Le champ source ne doit pas être vide</div>
        </ExpandableMenu>
        <ExpandableMenu title={title}>
          <div className='details'>Description de l’erreur avec pluss de détails</div>
        </ExpandableMenu>
      </div>
      <div className='button-container'>
        <div>
          <Button>Télécharger les données au format CSV</Button>
        </div>
        <div>
          <Button>Télécharger les données au format JSON</Button>
        </div>
        <div>
          <Button>Télécharger les données au format Shape</Button>
        </div>
      </div>
      <style jsx>{`
        .details {
          padding: 1em;
        }

        .button-container {
          margin-top: 4em;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: .5em;
          justify-items: center;
        }

        .button-container div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Section>
  )
}

ValidationCommune.propTypes = {
  communeInfos: PropTypes.object.isRequired
}

export default ValidationCommune
