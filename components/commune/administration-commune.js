import Section from '@/components/section'
import Button from '@/components/button'

function AdministrationCommune() {
  return (
    <Section background='dark'>
      <h4>Administration</h4>
      <div className='button-container'>
        <div className='flex-button'>
          <Button>Relancer la consolidation des données</Button>
        </div>
        <div className='flex-button'>
          <Button>Changer la source</Button>
        </div>
        <div className='flex-button'>
          <Button>Paramétrer le multi-source</Button>
        </div>
      </div>
      <style jsx>{`
        .button-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          grid-gap: .5em;
          justify-items: center;
        }

        .flex-button {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Section>
  )
}

export default AdministrationCommune
