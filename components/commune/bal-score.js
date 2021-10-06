import theme from '@/styles/theme'

function BalScore() {
  return (
    <div className='score'>
      <span className='a'>A</span>
      <span className='selected b'>B</span>
      <span className='c'>C</span>
      <span className='d'>D</span>
      <span className='e'>E</span>
      <style jsx>{`
        .score {
          display: flex;
          justify-content: space-around;
          width: 100%;
          background-color: white;
          padding: 1em;
          border-radius: 3px;
          max-width: 1000px;
          margin: auto;
        }

        .score span {
          color: #26353f;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 30px;
          font-weight: bolder;
          padding: .5em;
          border-radius: 12px;
          margin: auto;
        }

        .score .selected {
          font-size: 40px;
          border: 2px solid black;
        }

        .a {
          background-color: #2bd119;
        }

        .b {
          background-color: #43f642;
        }

        .c {
          background-color: #fff001;
        }

        .d {
          background-color: #ff7f00;
        }

        .e {
          background-color: #fe0000;
        }

        @media (max-width: ${theme.breakPoints.tablet}) {
          .score span {
            padding: .4em;
            border-radius: 8px;
          }
        }
      `}</style>
    </div>
  )
}

export default BalScore
