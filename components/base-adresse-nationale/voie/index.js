import PropTypes from 'prop-types'
import Link from 'next/link'
import colors from '@/styles/colors'

import {getNumeroComplet} from '@/lib/ban'

import Tag from '@/components/tag'

import AddressesList from '../addresses-list'
import ParcellesList from '../parcelles-list'
import Numero from './numero'
import Notification from '@/components/notification'

function Voie({type, nomVoie, commune, numeros, parcelles, displayBBox, nbNumeros}) {
  const isToponyme = type === 'lieu-dit'
  const {region, departement} = commune

  return (
    <>
      <div className='heading'>
        <h2>{nomVoie}</h2>
        {commune && <h4><Link href={`/base-adresse-nationale?id=${commune.id}`} as={`/base-adresse-nationale/${commune.id}`}><a>{commune.nom} - {commune.code}</a></Link></h4>}
        {region && departement && (
          <div className='region'>{region.nom} - {departement.nom} ({departement.code})</div>
        )}
        <div className='number-of-numeros'>{nbNumeros > 0 ? (nbNumeros > 1 ? `${nbNumeros} numéros répertoriés` : '1 numéro répertorié') : 'Aucun numéros répertorié'}</div>
      </div>

      {!displayBBox && (
        <Notification type='warning' message='Aucune position n’est connue pour cette adresse, elle ne peut donc pas être affichée sur la carte.' />
      )}

      {isToponyme ? (
        <Tag type='lieu-dit' />
      ) : (
        <div className='numeros-list'>
          <AddressesList
            title='Numéros de la voie'
            addresses={numeros}
            placeholder='Rechercher un numéro'
            getLabel={getNumeroComplet}
            addressComponent={numero => (
              <Numero isCertified={numero.certifie} {...numero} />
            )}
          />
        </div>
      )}

      {parcelles && <div style={{marginTop: '1em'}}>Parcelles cadastrales : <ParcellesList parcelles={parcelles} /></div>}

      <style jsx>{`
        .heading {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 1.2em 0;
          border-bottom: solid 1px ${colors.lightGrey}
        }

        .heading h2, h4 {
          margin-bottom: 0.2em;
        }

        .region {
          margin-top: 0.5em;
          font-style: italic;
          font-size: 17px;
          color: ${colors.almostBlack};
        }

        .number-of-numeros {
          font-weight: bolder;
          margin: 2em 0 0.7em 0;
        }
        `}</style>
    </>
  )
}

Voie.propTypes = {
  commune: null,
  numeros: null,
  nbNumeros: null,
  parcelles: null,
  displayBBox: null
}

Voie.propTypes = {
  nomVoie: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['voie', 'lieu-dit']),
  commune: PropTypes.shape({
    id: PropTypes.string,
    nom: PropTypes.string,
    code: PropTypes.string,
    region: PropTypes.object,
    departement: PropTypes.object
  }),
  displayBBox: PropTypes.array,
  nbNumeros: PropTypes.number,
  numeros: PropTypes.array,
  parcelles: PropTypes.array
}

export default Voie
