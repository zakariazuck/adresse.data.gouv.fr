
/* eslint-disable unicorn/prefer-query-selector */
import {useEffect, useState} from 'react'

const getSeasonColors = () => {
  const now = new Date()
  const year = now.getFullYear()

  const winter = new Date(`${year}-12-21`)
  const lastYearWinter = new Date(`${year - 1}-03-20`)
  const spring = new Date(`${year}-03-20`)
  const nextYearSpring = new Date(`${year + 1}-03-20`)
  const summer = new Date(`${year}-06-21`)
  const fall = new Date(`${year}-09-22`)

  const winterColors = ['#008DFF', '#8BF7DC', '#638BFC', '#ABD7FC', '#3FDEFF', '#05BDC2', '#B3FFF3', '#74BFFC', '#77F9FF', '#43B5F3', '#C4F6D8', '#9FF9E1', '#D3ECEA', '#76ADC3', '#BBD6E9', '#74BFFC']
  const springColors = ['#87D6A6', '#93F78B', '#027A00', '#FCABD8', '#F9D8FF', '#23BE65', '#F5B3FF', '#60B7B6', '#64A46A', '#3C634B', '#D29EC7', '#D8ADFF', '#BBF99F', '#C0E9BB', '#60B7B6', '#C71EA3']
  const fallColors = ['#C20505', '#FCE563', '#FCBF63', '#FC6363', '#FFE23F', '#FFB700', '#F19800', '#EC8C24', '#9E3200', '#C37676', '#E9A64F', '#C37679', '#F3DA43', '#C94976', '#F3DA43', '#C3A476']
  const summerColors = []

  if (now >= spring && now < summer) {
    return springColors
  }

  if (now >= fall && now < winter) {
    return fallColors
  }

  if ((now >= winter || now >= lastYearWinter) && (now < nextYearSpring || now < spring)) {
    return winterColors
  }

  return summerColors
}

function Frise() {
  const [isMounted, setIsMounted] = useState(false)

  const changeVegetationColor = () => {
    const currentSeasonColors = getSeasonColors()

    const tree1 = document.getElementsByClassName('tree-one-color')
    const tree2 = document.getElementsByClassName('tree-two-color')
    const tree3 = document.getElementsByClassName('tree-three-color')
    const tree4 = document.getElementsByClassName('tree-four-color')
    const tree5 = document.getElementsByClassName('tree-five-color')
    const tree6 = document.getElementsByClassName('tree-six-color')

    const bush1Left = document.getElementsByClassName('bush-one-left')
    const bush1Middle = document.getElementsByClassName('bush-one-middle')
    const bush1Right = document.getElementsByClassName('bush-one-right')
    const bush2Left = document.getElementsByClassName('bush-two-left')
    const bush2Middle = document.getElementsByClassName('bush-two-middle')
    const bush3Left = document.getElementsByClassName('bush-three-left')
    const bush3Middle = document.getElementsByClassName('bush-three-middle')
    const bush4Left = document.getElementsByClassName('bush-four-left')
    const bush4Middle = document.getElementsByClassName('bush-four-middle')
    const bush4Right = document.getElementsByClassName('bush-four-right')

    // Tree-one
    for (const treeColor of tree1) {
      treeColor.style.fill = currentSeasonColors[0]
    }

    // Tree-two
    for (const treeColor of tree2) {
      treeColor.style.fill = currentSeasonColors[1]
    }

    // Tree-three
    for (const treeColor of tree3) {
      treeColor.style.fill = currentSeasonColors[2]
    }

    // Tree-four
    for (const treeColor of tree4) {
      treeColor.style.fill = currentSeasonColors[3]
    }

    // Tree-five
    for (const treeColor of tree5) {
      treeColor.style.fill = currentSeasonColors[4]
    }

    // Tree-six
    for (const treeColor of tree6) {
      treeColor.style.fill = currentSeasonColors[5]
    }

    // Bush-one-left
    for (const bushColor of bush1Left) {
      bushColor.style.fill = currentSeasonColors[6]
    }

    // Bush-one-middle
    for (const bushColor of bush1Middle) {
      bushColor.style.fill = currentSeasonColors[7]
    }

    // Bush-one-right
    for (const bushColor of bush1Right) {
      bushColor.style.fill = currentSeasonColors[8]
    }

    // Bush-two-left
    for (const bushColor of bush2Left) {
      bushColor.style.fill = currentSeasonColors[9]
    }

    // Bush-two-middle
    for (const bushColor of bush2Middle) {
      bushColor.style.fill = currentSeasonColors[10]
    }

    // Bush-three-left
    for (const bushColor of bush3Left) {
      bushColor.style.fill = currentSeasonColors[11]
    }

    // Bush-three-middle
    for (const bushColor of bush3Middle) {
      bushColor.style.fill = currentSeasonColors[12]
    }

    // Bush-four-left
    for (const bushColor of bush4Left) {
      bushColor.style.fill = currentSeasonColors[13]
    }

    // Bush-four-middle
    for (const bushColor of bush4Middle) {
      bushColor.style.fill = currentSeasonColors[14]
    }

    // Bush-four-right
    for (const bushColor of bush4Right) {
      bushColor.style.fill = currentSeasonColors[15]
    }
  }

  useEffect(() => {
    // Change colors only if component is mounted to access to document object
    if (isMounted) {
      changeVegetationColor()
    } else {
      setIsMounted(true)
    }
  }, [isMounted])

  return (
    <div className='frise'>
      <svg id='background' viewBox='0 0 1020 264' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'>
        <defs>
          <polygon id='path-1' points='13.8916531 -0.0970873786 64.4268644 -0.0970873786 78.1592587 32.9029126 0.159258749 32.9029126' />
          <polygon id='path-3' points='13.8712116 -0.0970873786 64.4064229 -0.0970873786 78.1388172 32.9029126 0.138817228 32.9029126' />
        </defs>
        <g id='/home' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g id='Group-5' transform='translate(-0.000000, 0.000000)'>
            <g id='tree-one' transform='translate(754.145631, 18.796117)'>
              <path d='M26.8737864,0.203883495 C50.8737864,51.6782492 58.8737864,84.8037085 50.8737864,99.5802614 C38.8737864,121.745091 14.8737864,121.745091 2.87378641,99.5802614 C-5.12621359,84.8037085 2.87378641,51.6782492 26.8737864,0.203883495 Z' className='tree-one-color' fill='#88FF00' />
              <rect id='Rectangle' fill='#65402D' x='25.8737864' y='62.2038835' width='4' height='96' />
              <polygon id='Rectangle' fill='#65402D' points='36.2530916 69.2038835 39.8737864 71.3953989 29.4944812 85.2038835 25.8737864 83.0123681' />
              <polygon id='Rectangle' fill='#65402D' points='18.4944812 90.2038835 14.8737864 92.3953989 25.2530916 106.203883 28.8737864 104.012368' />
            </g>
            <g id='tree-five' transform='translate(351.019417, 32.000000)'>
              <path d='M27,0 C51,51.4743657 59,84.599825 51,99.376378 C39,121.541207 15,121.541207 3,99.376378 C-5,84.599825 3,51.4743657 27,0 Z' className='tree-five-color' fill='#D6FF3F' />
              <rect id='Rectangle' fill='#65402D' x='26' y='63' width='4' height='96' />
              <polygon id='Rectangle' fill='#65402D' points='35.3793052 70 39 72.1915154 28.6206948 86 25 83.8084846' />
              <polygon id='Rectangle' fill='#65402D' points='18.6206948 90 15 92.1915154 25.3793052 106 29 103.808485' />
            </g>
            <g id='bush-two' transform='translate(512.359223, 146.951456)'>
              <path d='M60.043473,40.0485437 C59.2278161,40.0485437 58.5238371,40.0004428 57.9195472,39.906943 C49.2410185,39.1462596 42.6601942,35.3052274 42.6601942,27.6485437 C42.6601942,19.3223532 50.4422004,12.5196787 60.2421726,12.0719903 C63.3463195,4.99559957 70.4540659,0.0485436893 78.7259486,0.0485436893 C88.880526,0.0485436893 97.2807431,7.50378646 98.6736007,17.2004826 C104.782293,17.4444841 109.660194,22.4637953 109.660194,28.6199723 C109.660194,34.931798 104.532515,40.0485437 98.2072027,40.0485437 L98.2072027,40.0485437 Z' className='bush-two-left' fill='#7CC376' transform='translate(76.160194, 20.048544) scale(-1, 1) translate(-76.160194, -20.048544) ' />
              <path d='M16.4959841,40.0485437 C15.6949982,40.0485437 15.0043657,40.0095813 14.4121662,39.9338588 C6.02251863,39.317706 -0.339805825,36.2049722 -0.339805825,29.9997125 C-0.339805825,23.2057537 7.28698266,17.6635123 16.8525564,17.3698698 C19.963061,11.8685362 26.7975637,8.04854369 34.7286595,8.04854369 C44.4980511,8.04854369 52.6035928,13.8445807 54.1340309,21.440774 C59.9914988,21.6606523 64.6601942,25.7397673 64.6601942,30.7394528 C64.6601942,35.8807217 59.723334,40.0485437 53.6334085,40.0485437 L53.8441942,40.0455437 L53.7329082,40.0485437 L53.7329082,40.0485437 Z' className='bush-two-middle' fill='#9E9D00' />
            </g>
            <g id='bush-three' transform='translate(739.621359, 145.242718)'>
              <path d='M59.7813371,39.7572816 C58.9656802,39.7572816 58.2617012,39.7091807 57.6574113,39.6156809 C48.9788826,38.8549974 42.3980583,35.0139652 42.3980583,27.3572816 C42.3980583,19.0310911 50.1800645,12.2284166 59.9800367,11.7807282 C63.0841836,4.70433744 70.19193,-0.242718447 78.4638127,-0.242718447 C88.6183901,-0.242718447 97.0186072,7.21252432 98.4114648,16.9092205 C104.520157,17.1532219 109.398058,22.1725332 109.398058,28.3287101 C109.398058,34.6405358 104.270379,39.7572816 97.9450668,39.7572816 L97.9450668,39.7572816 Z' className='bush-three-left' fill='#85F343' transform='translate(75.898058, 19.757282) scale(-1, 1) translate(-75.898058, -19.757282) ' />
              <path d='M16.2338482,40.7572816 C15.4328622,40.7572816 14.7422298,40.7183191 14.1500302,40.6425966 C5.76038271,40.0264439 -0.601941748,36.9137101 -0.601941748,30.7084504 C-0.601941748,23.9144916 7.02484674,18.3722502 16.5904205,18.0786076 C19.700925,12.577274 26.5354278,8.75728155 34.4665236,8.75728155 C44.2359152,8.75728155 52.3414569,14.5533186 53.871895,22.1495118 C59.7293629,22.3693902 64.3980583,26.4485052 64.3980583,31.4481906 C64.3980583,36.5894596 59.4611981,40.7572816 53.3712725,40.7572816 L53.5820583,40.7542816 L53.4707722,40.7572816 L53.4707722,40.7572816 Z' className='bush-one-middle' fill='#D8FFA8' />
            </g>
            <g id='bush-four' transform='translate(832.019417, 135.000000)'>
              <path d='M62.0062408,51 C60.7471539,51 59.7254416,50.8837211 58.9060157,50.6601574 C49.769528,49.3835311 43,44.4565556 43,35.0571429 C43,24.5155819 51.5146498,15.8734353 62.3335958,15.0622245 C65.8666355,6.1833805 73.768845,0 82.9504422,0 C94.3759688,0 103.820342,9.57506979 105.329796,22.0044457 C112.356906,22.1995351 118,28.6147205 118,36.5 C118,44.5081289 112.179702,51 105,51 C104.952324,51 104.904708,50.9997137 104.857154,50.9991427 L104.780964,51 L104.780964,51 Z' className='bush-four-right' fill='#C3E94F' transform='translate(80.500000, 25.500000) scale(-1, 1) translate(-80.500000, -25.500000) ' />
              <path d='M16.8357899,52 C16.034804,52 15.3441715,51.9610376 14.751972,51.8853151 C6.36232446,51.2691623 0,48.1564285 0,41.9511688 C0,35.1572101 7.62678849,29.6149686 17.1923622,29.3213261 C20.3028668,23.8199925 27.1373695,20 35.0684653,20 C44.8378569,20 52.9433986,25.7960371 54.4738367,33.3922303 C60.3313046,33.6121086 65,37.6912237 65,42.6909091 C65,47.832178 60.0631399,52 53.9732143,52 L54.184,51.997 L54.072714,52 L54.072714,52 Z' className='bush-four-middle' fill='#7CC376' />
            </g>
            <g id='bush-one' transform='translate(315.000000, 145.242718)'>
              <path d='M42.3735418,39.7572816 C41.272922,39.7572816 40.3803797,39.6655731 39.6650716,39.4892695 C31.8301719,38.4723496 26.0194175,34.5114819 26.0194175,26.9426919 C26.0194175,18.33481 33.5351654,11.3025932 42.9976953,10.8448112 C46.2245739,4.27188012 52.9086021,-0.242718447 60.6308227,-0.242718447 C70.2171152,-0.242718447 78.2035006,6.7145071 79.962223,15.9287735 C86.0744906,15.9628876 91.0194175,21.2837953 91.0194175,27.8423879 C91.0194175,34.422802 86.0415308,39.7572816 79.9009964,39.7572816 C79.8487366,39.7572816 79.7965609,39.7568952 79.7444718,39.7561249 L79.6607181,39.7572816 L79.6607181,39.7572816 Z' className='bush-one-left' fill='#2E9E00' />
              <path d='M86.8359047,39.7572816 C86.3537967,39.7572816 85.9183683,39.7374364 85.526076,39.6985345 C77.9067992,39.2437558 72.0194175,36.113052 72.0194175,29.6396991 C72.0194175,22.7835399 78.6236967,17.1934604 86.895514,16.9214923 C89.4309331,10.9532662 95.4408477,6.75728155 102.451108,6.75728155 C111.028062,6.75728155 118.107581,13.0383241 119.158659,21.1614473 C124.105079,21.4726759 128.019417,25.5121741 128.019417,30.4495892 C128.019417,35.4450644 124.012479,39.5213808 118.98303,39.7474034 C118.901097,39.754046 118.815571,39.7572816 118.727118,39.7572816 L118.727118,39.7572816 Z' className='bush-one-middle' fill='#D8FFA8' transform='translate(100.019417, 23.257282) scale(-1, 1) translate(-100.019417, -23.257282) ' />
              <path d='M13.8041635,39.7572816 C12.9728904,39.7572816 12.2842792,39.6949345 11.7191333,39.5746305 C5.0228044,38.8042814 0.0194174757,35.5574627 0.0194174757,29.2649739 C0.0194174757,22.2057763 6.31636174,16.4408213 14.2369365,16.082625 C16.8861095,10.5641631 22.4988438,6.75728155 28.9944635,6.75728155 C37.0442259,6.75728155 43.7380832,12.6037593 45.1177501,20.3103662 C50.0794692,20.5923048 54.0194175,24.8345493 54.0194175,30.0265123 C54.0194175,35.208359 50.0948079,39.4441845 45.1459196,39.7406987 C45.0446415,39.7519077 44.9384793,39.7572816 44.827589,39.7572816 L44.827589,39.7572816 Z' className='bush-one-right' fill='#A9BA96' />
            </g>
            <g id='bush-one' transform='translate(1.019417, 146.000000)'>
              <path d='M42.3541243,40 C41.2535045,40 40.3609622,39.9082915 39.6456541,39.731988 C31.8107544,38.715068 26,34.7542004 26,27.1854103 C26,18.5775284 33.515748,11.5453116 42.9782778,11.0875297 C46.2051564,4.51459857 52.8891847,0 60.6114052,0 C70.1976977,0 78.1840831,6.95722555 79.9428055,16.171492 C86.0550731,16.205606 91,21.5265138 91,28.0851064 C91,34.6655204 86.0221133,40 79.8815789,40 C79.8293191,40 79.7771434,39.9996136 79.7250543,39.9988434 L79.6413007,40 L79.6413007,40 Z' className='bush-one-left' fill='#2E9E00' />
              <path d='M86.8164872,40 C86.3343792,40 85.8989509,39.9801549 85.5066585,39.9412529 C77.8873818,39.4864743 72,36.3557705 72,29.8824176 C72,23.0262583 78.6042792,17.4361788 86.8760966,17.1642107 C89.4115156,11.1959846 95.4214302,7 102.431691,7 C111.008645,7 118.088163,13.2810426 119.139242,21.4041657 C124.085661,21.7153944 128,25.7548925 128,30.6923077 C128,35.6877828 123.993061,39.7640992 118.963612,39.9901218 C118.88168,39.9967644 118.796153,40 118.707701,40 L118.707701,40 Z' className='bush-one-middle' fill='#D8FFA8' transform='translate(100.000000, 23.500000) scale(-1, 1) translate(-100.000000, -23.500000) ' />
              <path d='M13.784746,40 C12.953473,40 12.2648617,39.937653 11.6997158,39.8173489 C5.00338692,39.0469999 0,35.8001811 0,29.5076923 C0,22.4484948 6.29694426,16.6835398 14.2175191,16.3253434 C16.866692,10.8068815 22.4794263,7 28.975046,7 C37.0248084,7 43.7186657,12.8464777 45.0983327,20.5530846 C50.0600517,20.8350233 54,25.0772677 54,30.2692308 C54,35.4510775 50.0753905,39.686903 45.1265021,39.9834171 C45.025224,39.9946262 44.9190618,40 44.8081715,40 L44.8081715,40 Z' className='bush-one-right' fill='#A9BA96' />
            </g>
            <g id='bush-four' transform='translate(116.786408, 144.388350)'>
              <path d='M59.6162886,40.6116505 C58.8006317,40.6116505 58.0966526,40.5635496 57.4923628,40.4700498 C48.8138341,39.7093664 42.2330097,35.8683342 42.2330097,28.2116505 C42.2330097,19.88546 50.0150159,13.0827855 59.8149882,12.6350971 C62.919135,5.55870637 70.0268815,0.611650485 78.2987641,0.611650485 C88.4533415,0.611650485 96.8535586,8.06689325 98.2464162,17.7635894 C104.355108,18.0075909 109.23301,23.0269021 109.23301,29.1830791 C109.23301,35.4949048 104.105331,40.6116505 97.7800183,40.6116505 L97.7800183,40.6116505 Z' className='bush-four-left' fill='#2C884C' transform='translate(75.733010, 20.611650) scale(-1, 1) translate(-75.733010, -20.611650) ' />
              <path d='M17.0687997,40.6116505 C16.2678137,40.6116505 15.5771812,40.5726881 14.9849817,40.4969656 C6.59533417,39.8808128 0.233009709,36.768079 0.233009709,30.5628193 C0.233009709,23.7688605 7.8597982,18.2266191 17.425372,17.9329766 C20.5358765,12.431643 27.3703792,8.61165049 35.301475,8.61165049 C45.0708666,8.61165049 53.1764084,14.4076875 54.7068464,22.0038808 C60.5643143,22.2237591 65.2330097,26.3028741 65.2330097,31.3025596 C65.2330097,36.4438285 60.2961496,40.6116505 54.206224,40.6116505 L54.4170097,40.6086505 L54.3057237,40.6116505 L54.3057237,40.6116505 Z' className='bush-four-middle' fill='#7CC376' />
            </g>
            <g id='bush-three' transform='translate(174.883495, 145.242718)'>
              <path d='M59.5192012,39.7572816 C58.7035443,39.7572816 57.9995653,39.7091807 57.3952754,39.6156809 C48.7167467,38.8549974 42.1359223,35.0139652 42.1359223,27.3572816 C42.1359223,19.0310911 49.9179286,12.2284166 59.7179008,11.7807282 C62.8220476,4.70433744 69.9297941,-0.242718447 78.2016768,-0.242718447 C88.3562541,-0.242718447 96.7564712,7.21252432 98.1493289,16.9092205 C104.258021,17.1532219 109.135922,22.1725332 109.135922,28.3287101 C109.135922,34.6405358 104.008243,39.7572816 97.6829309,39.7572816 L97.6829309,39.7572816 Z' className='bush-three-left' fill='#85F343' transform='translate(75.635922, 19.757282) scale(-1, 1) translate(-75.635922, -19.757282) ' />
              <path d='M16.9717123,40.7572816 C16.1707263,40.7572816 15.4800938,40.7183191 14.8878943,40.6425966 C6.49824679,40.0264439 0.13592233,36.9137101 0.13592233,30.7084504 C0.13592233,23.9144916 7.76271082,18.3722502 17.3282846,18.0786076 C20.4387891,12.577274 27.2732919,8.75728155 35.2043877,8.75728155 C44.9737793,8.75728155 53.079321,14.5533186 54.6097591,22.1495118 C60.4672269,22.3693902 65.1359223,26.4485052 65.1359223,31.4481906 C65.1359223,36.5894596 60.1990622,40.7572816 54.1091366,40.7572816 L54.3199223,40.7542816 L54.2086363,40.7572816 L54.2086363,40.7572816 Z' className='bush-three-middle' fill='#24EC64' />
            </g>
            <g id='road' transform='translate(0.000000, 188.000000)'>
              <rect fill='#1C1C1C' x='0' y='0' width='1019' height='76' />
              <g id='Group' transform='translate(59.000000, 33.000000)' fill='#FFFFFF'>
                <rect id='Rectangle' x='0' y='0' width='46' height='12' />
                <rect id='Rectangle' x='102' y='0' width='46' height='12' />
                <rect id='Rectangle' x='203' y='0' width='46' height='12' />
                <rect id='Rectangle' x='305' y='0' width='46' height='12' />
                <rect id='Rectangle' x='406' y='0' width='46' height='12' />
                <rect id='Rectangle' x='508' y='0' width='46' height='12' />
                <rect id='Rectangle' x='609' y='0' width='46' height='12' />
                <rect id='Rectangle' x='711' y='0' width='46' height='12' />
                <rect id='Rectangle' x='812' y='0' width='46' height='12' />
                <rect id='Rectangle' x='914' y='0' width='46' height='12' />
              </g>
            </g>
            <g id='tree-six' transform='translate(385.019417, 26.000000)'>
              <path d='M28.5,2.27373675e-13 C53.8333333,51.4743657 62.2777778,84.599825 53.8333333,99.376378 C41.1666667,121.541207 15.8333333,121.541207 3.16666667,99.376378 C-5.27777778,84.599825 3.16666667,51.4743657 28.5,2.27373675e-13 Z' id='Rectangle' fill='#FC6363' />
              <path d='M28.5,2.27373675e-13 C53.8333333,51.4743657 62.2777778,84.599825 53.8333333,99.376378 C41.1666667,121.541207 15.8333333,121.541207 3.16666667,99.376378 C-5.27777778,84.599825 3.16666667,51.4743657 28.5,2.27373675e-13 Z' className='tree-six-color' fill='#10705C' />
              <rect id='Rectangle' fill='#65402D' x='27' y='62' width='5' height='96' />
              <polygon id='Rectangle' fill='#65402D' points='39.1206842 70 43 72.1915154 31.8793158 86 28 83.8084846' />
              <polygon id='Rectangle' fill='#65402D' points='19.8793158 90 16 92.1915154 27.1206842 106 31 103.808485' />
            </g>
            <g id='tree-six' transform='translate(557.019417, 0.000000)'>
              <path d='M33.5,0 C63.2777778,60.7930009 73.2037037,99.9153106 63.2777778,117.366929 C48.3888889,143.544357 18.6111111,143.544357 3.72222222,117.366929 C-6.2037037,99.9153106 3.72222222,60.7930009 33.5,0 Z' id='Rectangle' fill='#FC6363' />
              <path d='M33.5,0 C63.2777778,60.7930009 73.2037037,99.9153106 63.2777778,117.366929 C48.3888889,143.544357 18.6111111,143.544357 3.72222222,117.366929 C-6.2037037,99.9153106 3.72222222,60.7930009 33.5,0 Z' className='tree-six-color' fill='#10705C' />
              <rect id='Rectangle' fill='#65402D' x='31' y='73' width='6' height='113' />
              <polygon id='Rectangle' fill='#65402D' points='45.6034421 82 50 84.6024245 37.3965579 101 33 98.3975755' />
              <polygon id='Rectangle' fill='#65402D' points='23.3965579 106 19 108.602425 31.6034421 125 36 122.397575' />
            </g>
            <g id='tree-six' transform='translate(717.019417, 0.000000)'>
              <path d='M33.5,0 C63.2777778,60.7930009 73.2037037,99.9153106 63.2777778,117.366929 C48.3888889,143.544357 18.6111111,143.544357 3.72222222,117.366929 C-6.2037037,99.9153106 3.72222222,60.7930009 33.5,0 Z' id='Rectangle' fill='#FC6363' />
              <path d='M33.5,0 C63.2777778,60.7930009 73.2037037,99.9153106 63.2777778,117.366929 C48.3888889,143.544357 18.6111111,143.544357 3.72222222,117.366929 C-6.2037037,99.9153106 3.72222222,60.7930009 33.5,0 Z' className='tree-six-color' fill='#10705C' />
              <rect id='Rectangle' fill='#65402D' x='31' y='73' width='6' height='113' />
              <polygon id='Rectangle' fill='#65402D' points='45.6034421 82 50 84.6024245 37.3965579 101 33 98.3975755' />
              <polygon id='Rectangle' fill='#65402D' points='22.3965579 106 18 108.602425 30.6034421 125 35 122.397575' />
            </g>
            <rect id='Rectangle' fill='#E3D4A6' x='430.339806' y='68.1987436' width='117.802399' height='4.42261565' />
            <g id='2-floor' transform='translate(433.019417, 68.000000)'>
              <rect id='Rectangle' fill='#F49494' x='0' y='0' width='113' height='29' />
              <g id='window-3' transform='translate(49.000000, 6.000000)'>
                <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.23529412' y='1.7804878' width='9.52941176' height='12.4390244' />
                <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.05882353 1.56097561 11.9411765 1.56097561 2.05882353 14.4390244' />
                <line x1='2.05882353' y1='9.75609756' x2='11.7352941' y2='9.75609756' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
                <rect id='Rectangle' fill='#FFFFFF' x='0.411764706' y='0' width='13.1764706' height='1' />
                <rect id='Rectangle' fill='#FFFFFF' x='0' y='14.8292683' width='14' height='1.17073171' />
              </g>
            </g>
            <polygon id='Rectangle' fill='#44D7B6' points='593.860159 93.8106698 671.8806 93.8106698 671.8806 185.017665 593.860159 185.017665' />
            <rect id='Rectangle' fill='#44D7B6' x='599.903996' y='100.403947' width='4.94495756' height='2.19775892' />
            <polygon id='Rectangle' fill='#44D7B6' points='593.860159 160.17204 671.8806 160.17204 671.8806 181.600189 593.860159 181.600189' />
            <polygon id='Rectangle' fill='#44D7B6' points='593.860159 91.0634711 671.8806 91.0634711 671.8806 93.8106698 593.860159 93.8106698' />
            <g id='window-3' transform='translate(623.529904, 141.062486)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.64831919' y='2.09887946' width='13.3843124' height='18.32927' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.74719865 2.19775892 15.9337521 2.19775892 2.74719865 20.32927' />
              <line x1='2.74719865' y1='13.7359932' x2='15.6590323' y2='13.7359932' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.549439729' y='0' width='17.5820713' height='1.09887946' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.8787097' width='18.6809508' height='1.64831919' />
            </g>
            <g id='window-3' transform='translate(648.804132, 141.062486)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.64831919' y='2.09887946' width='13.3843124' height='18.32927' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.74719865 2.19775892 15.9337521 2.19775892 2.74719865 20.32927' />
              <line x1='2.74719865' y1='13.7359932' x2='15.6590323' y2='13.7359932' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.549439729' y='0' width='17.5820713' height='1.09887946' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.8787097' width='18.6809508' height='1.64831919' />
            </g>
            <g id='window-3' transform='translate(623.529904, 106.447784)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.64831919' y='2.09887946' width='13.3843124' height='18.32927' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.74719865 2.19775892 15.9337521 2.19775892 2.74719865 20.32927' />
              <line x1='2.74719865' y1='13.7359932' x2='15.6590323' y2='13.7359932' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.549439729' y='0' width='17.5820713' height='1.09887946' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.8787097' width='18.6809508' height='1.64831919' />
            </g>
            <g id='window-3' transform='translate(598.255677, 106.447784)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.64831919' y='2.09887946' width='13.3843124' height='18.32927' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.74719865 2.19775892 15.9337521 2.19775892 2.74719865 20.32927' />
              <line x1='2.74719865' y1='13.7359932' x2='15.6590323' y2='13.7359932' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.549439729' y='0' width='17.5820713' height='1.09887946' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.8787097' width='18.6809508' height='1.64831919' />
            </g>
            <g id='window-3' transform='translate(648.804132, 106.447784)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.64831919' y='2.09887946' width='13.3843124' height='18.32927' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.74719865 2.19775892 15.9337521 2.19775892 2.74719865 20.32927' />
              <line x1='2.74719865' y1='13.7359932' x2='15.6590323' y2='13.7359932' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.549439729' y='0' width='17.5820713' height='1.09887946' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.8787097' width='18.6809508' height='1.64831919' />
            </g>
            <g id='door' transform='translate(598.255677, 141.062486)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#D8D8D8' x='1' y='1' width='16.6809508' height='42.5046181' />
              <rect id='Rectangle' fill='#4F5666' x='2.74719865' y='1.64831919' width='13.1865535' height='20.8787097' />
              <polygon id='Rectangle' fillOpacity='0.091673951' fill='#FFFFFF' points='2.74719865 1.64831919 15.9337521 1.64831919 2.74719865 22.5270289' />
              <rect id='Rectangle' fill='#FFFFFF' x='2.74719865' y='25.2742275' width='13.1865535' height='18.6809508' />
            </g>
            <g id='Line-+-Line-+-Line-+-Line-+-Line-Mask' transform='translate(593.860159, 58.097087)'>
              <mask id='mask-2' fill='white'>
                <use xlinkHref='#path-1' />
              </mask>
              <use id='Mask' fill='#243655' xlinkHref='#path-1' />
              <line x1='10.4328437' y1='5.40291262' x2='67.8856738' y2='5.40291262' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-2)' />
              <line x1='10.4328437' y1='10.4029126' x2='67.8856738' y2='10.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-2)' />
              <line x1='5.43611825' y1='15.4029126' x2='72.1592587' y2='15.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-2)' />
              <line x1='4.15925875' y1='20.4029126' x2='77.1592587' y2='20.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-2)' />
              <line x1='2.15925875' y1='25.4029126' x2='75.1592587' y2='25.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-2)' />
            </g>
            <polygon id='Rectangle' fill='#44D7B6' points='592.761279 88.3162725 672.97948 88.3162725 672.97948 91.0634711 592.761279 91.0634711' />
            <polygon id='Triangle' stroke='#2F4771' strokeWidth='2' fill='#44D7B6' points='632.870379 61.9431655 645.507493 86.6679533 620.233266 86.6679533' />
            <g id='tiny-window' transform='translate(628.474862, 72.382520)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='1' y='1' width='6.79103566' height='11.7359932' />
              <polygon id='Rectangle' fillOpacity='0.13005354' fill='#FFFFFF' points='1.09887946 1.09887946 7.69215621 1.09887946 1.09887946 12.6371138' />
            </g>
            <rect id='Rectangle' fill='#44D7B6' x='647.705252' y='97.1073081' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#44D7B6' x='650.452451' y='99.8545068' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#44D7B6' x='614.189429' y='131.722011' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#44D7B6' x='619.683826' y='136.117529' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#44D7B6' x='652.65021' y='136.117529' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#44D7B6' x='651.001891' y='133.91977' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#44D7B6' x='653.199649' y='97.1073081' width='4.94495756' height='2.19775892' />
            <polygon id='Rectangle' fill='#B498B8' points='671.8806 93.8106698 749.901042 93.8106698 749.901042 185.017665 671.8806 185.017665' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(737.538648, 101.502826) scale(-1, 1) translate(-737.538648, -101.502826) ' x='735.066169' y='100.403947' width='4.94495756' height='2.19775892' />
            <polygon id='Rectangle' fill='#878A9A' points='671.8806 160.17204 749.901042 160.17204 749.901042 181.600189 671.8806 181.600189' />
            <polygon id='Rectangle' fill='#878A9A' points='671.8806 91.0634711 749.901042 91.0634711 749.901042 93.8106698 671.8806 93.8106698' />
            <g id='window-3' transform='translate(701.550346, 141.062486)'>
              <path d='M9.34047539,1.44135644 C11.4242896,1.44135644 13.6532973,2.02859178 16.0326316,3.17851241 L16.0326316,3.17851241 L16.0326316,20.503073 L2.64831919,20.503073 L2.64831919,3.17851241 C5.02765348,2.02859178 7.25666117,1.44135644 9.34047539,1.44135644 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.74719865,3.0323889 C5.10194034,1.69343354 7.29969926,1.02395586 9.34047539,1.02395586 C11.3812515,1.02395586 13.5790104,1.69343354 15.9337521,3.0323889 L2.74719865,20.9910951 L2.74719865,3.0323889 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.74719865' y1='14.0793931' x2='15.6590323' y2='14.0793931' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.60983871' y1='9.21560273' x2='16.208472' y2='9.21560273' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.9910951' width='18.6809508' height='1.53593379' />
              <line x1='9.34047539' y1='1.27994482' x2='9.40915536' y2='20.9910951' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='window-3' transform='translate(726.824573, 141.062486)'>
              <path d='M9.34047539,1.44135644 C11.4242896,1.44135644 13.6532973,2.02859178 16.0326316,3.17851241 L16.0326316,3.17851241 L16.0326316,20.503073 L2.64831919,20.503073 L2.64831919,3.17851241 C5.02765348,2.02859178 7.25666117,1.44135644 9.34047539,1.44135644 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.74719865,3.0323889 C5.10194034,1.69343354 7.29969926,1.02395586 9.34047539,1.02395586 C11.3812515,1.02395586 13.5790104,1.69343354 15.9337521,3.0323889 L2.74719865,20.9910951 L2.74719865,3.0323889 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.74719865' y1='14.0793931' x2='15.6590323' y2='14.0793931' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.60983871' y1='9.21560273' x2='16.208472' y2='9.21560273' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.9910951' width='18.6809508' height='1.53593379' />
              <line x1='9.34047539' y1='1.27994482' x2='9.40915536' y2='20.9910951' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='window-3' transform='translate(701.550346, 106.447784)'>
              <path d='M9.34047539,1.44135644 C11.4242896,1.44135644 13.6532973,2.02859178 16.0326316,3.17851241 L16.0326316,3.17851241 L16.0326316,20.503073 L2.64831919,20.503073 L2.64831919,3.17851241 C5.02765348,2.02859178 7.25666117,1.44135644 9.34047539,1.44135644 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.74719865,3.0323889 C5.10194034,1.69343354 7.29969926,1.02395586 9.34047539,1.02395586 C11.3812515,1.02395586 13.5790104,1.69343354 15.9337521,3.0323889 L2.74719865,20.9910951 L2.74719865,3.0323889 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.74719865' y1='14.0793931' x2='15.6590323' y2='14.0793931' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.60983871' y1='9.21560273' x2='16.208472' y2='9.21560273' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.9910951' width='18.6809508' height='1.53593379' />
              <line x1='9.34047539' y1='1.27994482' x2='9.40915536' y2='20.9910951' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='window-3' transform='translate(676.276118, 106.447784)'>
              <path d='M9.34047539,1.44135644 C11.4242896,1.44135644 13.6532973,2.02859178 16.0326316,3.17851241 L16.0326316,3.17851241 L16.0326316,20.503073 L2.64831919,20.503073 L2.64831919,3.17851241 C5.02765348,2.02859178 7.25666117,1.44135644 9.34047539,1.44135644 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.74719865,3.0323889 C5.10194034,1.69343354 7.29969926,1.02395586 9.34047539,1.02395586 C11.3812515,1.02395586 13.5790104,1.69343354 15.9337521,3.0323889 L2.74719865,20.9910951 L2.74719865,3.0323889 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.74719865' y1='14.0793931' x2='15.6590323' y2='14.0793931' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.60983871' y1='9.21560273' x2='16.208472' y2='9.21560273' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.9910951' width='18.6809508' height='1.53593379' />
              <line x1='9.34047539' y1='1.27994482' x2='9.40915536' y2='20.9910951' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='window-3' transform='translate(726.824573, 106.447784)'>
              <path d='M9.34047539,1.44135644 C11.4242896,1.44135644 13.6532973,2.02859178 16.0326316,3.17851241 L16.0326316,3.17851241 L16.0326316,20.503073 L2.64831919,20.503073 L2.64831919,3.17851241 C5.02765348,2.02859178 7.25666117,1.44135644 9.34047539,1.44135644 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.74719865,3.0323889 C5.10194034,1.69343354 7.29969926,1.02395586 9.34047539,1.02395586 C11.3812515,1.02395586 13.5790104,1.69343354 15.9337521,3.0323889 L2.74719865,20.9910951 L2.74719865,3.0323889 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.74719865' y1='14.0793931' x2='15.6590323' y2='14.0793931' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.60983871' y1='9.21560273' x2='16.208472' y2='9.21560273' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='20.9910951' width='18.6809508' height='1.53593379' />
              <line x1='9.34047539' y1='1.27994482' x2='9.40915536' y2='20.9910951' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='door' transform='translate(676.276118, 141.062486)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#D8D8D8' x='1' y='1' width='16.6809508' height='42.5046181' />
              <rect id='Rectangle' fill='#4F5666' x='2.74719865' y='1.64831919' width='13.1865535' height='20.8787097' />
              <polygon id='Rectangle' fillOpacity='0.091673951' fill='#FFFFFF' points='2.74719865 1.64831919 15.9337521 1.64831919 2.74719865 22.5270289' />
              <rect id='Rectangle' fill='#FFFFFF' x='2.74719865' y='25.2742275' width='13.1865535' height='18.6809508' />
            </g>
            <g id='Line-+-Line-+-Line-+-Line-+-Line-Mask' transform='translate(671.880600, 58.097087)'>
              <mask id='mask-4' fill='white'>
                <use xlinkHref='#path-3' />
              </mask>
              <use id='Mask' fill='#243655' xlinkHref='#path-3' />
              <line x1='10.4124021' y1='5.40291262' x2='67.8652323' y2='5.40291262' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-4)' />
              <line x1='10.4124021' y1='10.4029126' x2='67.8652323' y2='10.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-4)' />
              <line x1='5.41567673' y1='15.4029126' x2='72.1388172' y2='15.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-4)' />
              <line x1='4.13881723' y1='20.4029126' x2='77.1388172' y2='20.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-4)' />
              <line x1='2.13881723' y1='25.4029126' x2='75.1388172' y2='25.4029126' id='Line' stroke='#2F4771' strokeWidth='3' strokeLinecap='square' mask='url(#mask-4)' />
            </g>
            <polygon id='Rectangle' fill='#8593A4' points='670.781721 88.3162725 750.999921 88.3162725 750.999921 91.0634711 670.781721 91.0634711' />
            <polygon id='Triangle' stroke='#2F4771' strokeWidth='2' fill='#878A9A' points='710.890821 61.9431655 723.527935 86.6679533 698.253707 86.6679533' />
            <g id='tiny-window' transform='translate(706.495303, 70.734201)'>
              <ellipse id='Oval' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' cx='4.39551783' cy='7.08954489' rx='4.39551783' ry='6.64644833' />
              <path d='M1.02562083,12.2695089 C5.05659225,7.78853684 7.07207797,4.40604526 7.07207797,2.12203421 C7.07207797,-1.30398238 6.6612568,0.886193111 4.39551783,0.886193111 C2.12977886,0.886193111 0.293034522,3.66352831 0.293034522,7.08954489 C0.293034522,9.37355595 0.537229957,11.1002106 1.02562083,12.2695089 Z' id='Oval' fillOpacity='0.0919471154' fill='#FFFFFF' />
            </g>
            <rect id='Rectangle' fill='#878A9A' transform='translate(689.737391, 98.206188) scale(-1, 1) translate(-689.737391, -98.206188) ' x='687.264913' y='97.1073081' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(686.990193, 100.953386) scale(-1, 1) translate(-686.990193, -100.953386) ' x='684.517714' y='99.8545068' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(723.253215, 132.820891) scale(-1, 1) translate(-723.253215, -132.820891) ' x='720.780736' y='131.722011' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(717.758818, 137.216408) scale(-1, 1) translate(-717.758818, -137.216408) ' x='715.286339' y='136.117529' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(684.792434, 137.216408) scale(-1, 1) translate(-684.792434, -137.216408) ' x='682.319955' y='136.117529' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(686.440753, 135.018649) scale(-1, 1) translate(-686.440753, -135.018649) ' x='683.968274' y='133.91977' width='4.94495756' height='2.19775892' />
            <rect id='Rectangle' fill='#878A9A' transform='translate(684.242994, 98.206188) scale(-1, 1) translate(-684.242994, -98.206188) ' x='681.770515' y='97.1073081' width='4.94495756' height='2.19775892' />
            <g id='double-window' transform='translate(438.782981, 73.274700)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.2061679' y='1.80411194' width='9.2575671' height='12.8760708' />
              <line x1='2.01027984' y1='10.0513992' x2='11.4585951' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.402055968' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='15.2781268' width='13.6699029' height='1.2061679' />
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='12.6596231' y='1.80411194' width='9.2575671' height='12.8760708' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.01027984 1.60822387 22.1130782 1.60822387 2.01027984 14.8760708' />
              <line x1='12.463735' y1='10.0513992' x2='21.9120503' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.8555111' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.4534552' y='15.2781268' width='13.6699029' height='1.2061679' />
            </g>
            <g id='window-3' transform='translate(447.628212, 150.268418)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='3' fill='#4F5666' x='1.5' y='1.5' width='14.6904626' height='13.4842947' />
              <polygon id='Rectangle' fillOpacity='0.0281905594' fill='#FFFFFF' points='0.899515047 0.852635932 16.7909475 0.852635932 0.899515047 15.6316588' />
            </g>
            <g id='double-window' transform='translate(515.977727, 73.073672)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.2061679' y='1.80411194' width='9.2575671' height='12.8760708' />
              <line x1='2.01027984' y1='10.0513992' x2='11.4585951' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.402055968' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='15.2781268' width='13.6699029' height='1.2061679' />
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='12.6596231' y='1.80411194' width='9.2575671' height='12.8760708' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.01027984 1.60822387 22.1130782 1.60822387 2.01027984 14.8760708' />
              <line x1='12.463735' y1='10.0513992' x2='21.9120503' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.8555111' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.4534552' y='15.2781268' width='13.6699029' height='1.2061679' />
            </g>
            <rect id='Rectangle' fill='#5D5153' x='432.752142' y='143.031411' width='112.977727' height='38.9994289' />
            <polygon id='Rectangle' fillOpacity='0.119727928' fill='#000000' points='545.729869 143.031411 545.729869 166.752713 510.905607 159.440857 490.34044 155.122904 467.233361 150.27124 454.366413 147.569638 445.963063 145.805234 432.752142 143.031411' />
            <g id='rayure' transform='translate(433.019417, 128.000000)'>
              <rect id='Rectangle' fill='#D00290' x='0' y='0' width='113' height='15' />
              <path d='M6,0 L11,0 L11,14.6052632 C10.1666667,14.8684211 9.33333333,15 8.5,15 C7.66666667,15 6.83333333,14.8684211 6,14.6052632 L6,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M16,0 L21,0 L21,14.6052632 C20.1666667,14.8684211 19.3333333,15 18.5,15 C17.6666667,15 16.8333333,14.8684211 16,14.6052632 L16,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M27,0 L32,0 L32,14.6052632 C31.1666667,14.8684211 30.3333333,15 29.5,15 C28.6666667,15 27.8333333,14.8684211 27,14.6052632 L27,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M38,0 L43,0 L43,14.6052632 C42.1666667,14.8684211 41.3333333,15 40.5,15 C39.6666667,15 38.8333333,14.8684211 38,14.6052632 L38,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M48,0 L53,0 L53,14.6052632 C52.1666667,14.8684211 51.3333333,15 50.5,15 C49.6666667,15 48.8333333,14.8684211 48,14.6052632 L48,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M58,0 L63,0 L63,14.6052632 C62.1666667,14.8684211 61.3333333,15 60.5,15 C59.6666667,15 58.8333333,14.8684211 58,14.6052632 L58,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M69,0 L74,0 L74,14.6052632 C73.1666667,14.8684211 72.3333333,15 71.5,15 C70.6666667,15 69.8333333,14.8684211 69,14.6052632 L69,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M79,0 L84,0 L84,14.6052632 C83.1666667,14.8684211 82.3333333,15 81.5,15 C80.6666667,15 79.8333333,14.8684211 79,14.6052632 L79,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M90,0 L95,0 L95,14.6052632 C94.1666667,14.8684211 93.3333333,15 92.5,15 C91.6666667,15 90.8333333,14.8684211 90,14.6052632 L90,0 Z' id='Rectangle' fill='#FFFFFF' />
              <path d='M102,0 L107,0 L107,14.6052632 C106.166667,14.8684211 105.333333,15 104.5,15 C103.666667,15 102.833333,14.8684211 102,14.6052632 L102,0 Z' id='Rectangle' fill='#FFFFFF' />
            </g>
            <rect id='Rectangle' fill='#655E56' x='432.752142' y='172.331239' width='112.977727' height='16.0822387' />
            <g id='door' transform='translate(477.782410, 150.268418)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#D8D8D8' x='1' y='1' width='21.7213021' height='30.5665334' />
              <rect id='Rectangle' fill='#4F5666' x='3.48842678' y='1.2061679' width='16.7444486' height='15.2781268' />
              <polygon id='Rectangle' fillOpacity='0.091673951' fill='#FFFFFF' points='3.48842678 1.2061679 20.2328753 1.2061679 3.48842678 16.4842947' />
              <rect id='Rectangle' fill='#FFFFFF' x='3.48842678' y='18.4945745' width='16.7444486' height='13.6699029' />
            </g>
            <g id='double-window' transform='translate(438.782981, 105.238150)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.2061679' y='1.80411194' width='9.2575671' height='12.8760708' />
              <line x1='2.01027984' y1='10.0513992' x2='11.4585951' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.402055968' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='15.2781268' width='13.6699029' height='1.2061679' />
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='12.6596231' y='1.80411194' width='9.2575671' height='12.8760708' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.01027984 1.60822387 22.1130782 1.60822387 2.01027984 14.8760708' />
              <line x1='12.463735' y1='10.0513992' x2='21.9120503' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.8555111' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.4534552' y='15.2781268' width='13.6699029' height='1.2061679' />
            </g>
            <g id='window-3' transform='translate(512.359223, 150.268418)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='3' fill='#4F5666' x='1.5' y='1.5' width='14.6904626' height='13.4842947' />
              <polygon id='Rectangle' fillOpacity='0.0281905594' fill='#FFFFFF' points='0.899515047 0.852635932 16.7909475 0.852635932 0.899515047 15.6316588' />
            </g>
            <g id='1-floor' transform='translate(433.019417, 99.000000)'>
              <rect id='Rectangle' fill='#F49494' x='0' y='0' width='113' height='29' />
              <g id='window-3' transform='translate(49.000000, 6.000000)'>
                <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.23529412' y='1.7804878' width='9.52941176' height='12.4390244' />
                <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.05882353 1.56097561 11.9411765 1.56097561 2.05882353 14.4390244' />
                <line x1='2.05882353' y1='9.75609756' x2='11.7352941' y2='9.75609756' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
                <rect id='Rectangle' fill='#FFFFFF' x='0.411764706' y='0' width='13.1764706' height='1' />
                <rect id='Rectangle' fill='#FFFFFF' x='0' y='14.8292683' width='14' height='1.17073171' />
              </g>
            </g>
            <rect id='Rectangle' fill='#476397' x='430.339806' y='94.3826385' width='117.802399' height='4.42261565' />
            <path d='M306.904861,119.910734 L342.855423,150.316218 L342.855423,184.740054 L270.44183,184.740054 L270.44183,150.318329 L306.904861,119.910734 Z' id='Rectangle' stroke='#979797' fill='#4F5666' />
            <g id='double-window' transform='translate(515.977727, 105.238150)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='2.2061679' y='1.80411194' width='9.2575671' height='12.8760708' />
              <line x1='2.01027984' y1='10.0513992' x2='11.4585951' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0.402055968' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='15.2781268' width='13.6699029' height='1.2061679' />
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' x='12.6596231' y='1.80411194' width='9.2575671' height='12.8760708' />
              <polygon id='Rectangle' fillOpacity='0.0865930944' fill='#FFFFFF' points='2.01027984 1.60822387 22.1130782 1.60822387 2.01027984 14.8760708' />
              <line x1='12.463735' y1='10.0513992' x2='21.9120503' y2='10.0513992' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.8555111' y='0' width='12.865791' height='1' />
              <rect id='Rectangle' fill='#FFFFFF' x='10.4534552' y='15.2781268' width='13.6699029' height='1.2061679' />
            </g>
            <rect id='Rectangle' stroke='#979797' fill='#F9A720' x='301.461658' y='172.455875' width='9.85693989' height='13.992917' />
            <path d='M306.904861,119.910734 L342.855423,150.316218 L342.855423,184.740054 L270.44183,184.740054 L270.44183,150.318329 L306.904861,119.910734 Z' id='Rectangle' stroke='#979797' fill='#AA7DA4' />
            <rect id='Rectangle' stroke='#979797' fill='#FBC873' x='301.461658' y='172.455875' width='9.85693989' height='13.992917' />
            <rect id='Rectangle' stroke='#979797' fill='#F9A720' x='280.781772' y='155.75422' width='9.85693989' height='13.992917' />
            <rect id='Rectangle' stroke='#979797' fill='#F9A720' x='322.141544' y='155.75422' width='9.85693989' height='13.992917' />
            <path d='M306.648627,114.138202 L348.231278,150.618243 L343.379847,150.618243 L306.908536,118.593642 L270.123067,150.618243 L265.065975,150.618243 L306.648627,114.138202 Z' id='Rectangle' stroke='#979797' fill='#F5A623' />
            <path d='M306.648627,119.729559 L341.857835,150.618243 L337.952216,150.618243 L306.870142,123.325804 L275.520332,150.618243 L271.439418,150.618243 L306.648627,119.729559 Z' id='Rectangle' stroke='#979797' fill='#C6851B' />
            <rect id='Rectangle' stroke='#979797' fill='#F9BB20' x='280.781772' y='155.75422' width='9.85693989' height='13.992917' />
            <rect id='Rectangle' stroke='#979797' fill='#F9BB20' x='322.141544' y='155.75422' width='9.85693989' height='13.992917' />
            <path d='M306.648627,114.138202 L348.231278,150.618243 L343.379847,150.618243 L306.908536,118.593642 L270.123067,150.618243 L265.065975,150.618243 L306.648627,114.138202 Z' id='Rectangle' stroke='#979797' fill='#F5DD23' />
            <path d='M306.648627,119.729559 L341.857835,150.618243 L337.952216,150.618243 L306.870142,123.325804 L275.520332,150.618243 L271.439418,150.618243 L306.648627,119.729559 Z' id='Rectangle' stroke='#979797' fill='#E0AA51' />
            <polygon id='Rectangle' fill='#4F5666' points='181.087461 150.084249 218.052756 119.257801 254.501054 150.084249 254.501054 185.240054 181.087461 185.240054' />
            <rect id='Rectangle' fill='#F9A720' x='212.107289' y='171.955875' width='10.8569399' height='14.992917' />
            <rect id='Rectangle' fill='#F9A720' x='191.427404' y='155.25422' width='10.8569399' height='14.992917' />
            <rect id='Rectangle' fill='#F9A720' x='232.787175' y='155.25422' width='10.8569399' height='14.992917' />
            <polygon id='Rectangle' fill='#F5A623' points='217.794258 113.473064 260.70502 151.118243 254.337114 151.118243 218.052756 119.257801 181.45585 151.118243 174.883495 151.118243' />
            <polygon id='Rectangle' fill='#C6851B' points='217.794258 119.06442 254.331578 151.118243 248.909483 151.118243 218.014362 123.989963 186.853114 151.118243 181.256937 151.118243' />
            <polygon id='Rectangle' fill='#E2E2E2' points='181.087461 150.084249 218.052756 119.257801 254.501054 150.084249 254.501054 185.240054 181.087461 185.240054' />
            <rect id='Rectangle' fill='#053DC3' x='212.107289' y='171.955875' width='10.8569399' height='14.992917' />
            <rect id='Rectangle' fill='#1BBFC6' x='191.427404' y='155.25422' width='10.8569399' height='14.992917' />
            <rect id='Rectangle' fill='#1BBFC6' x='232.787175' y='155.25422' width='10.8569399' height='14.992917' />
            <polygon id='Rectangle' fill='#053DC3' points='217.794258 113.473064 260.70502 151.118243 254.337114 151.118243 218.052756 119.257801 181.45585 151.118243 174.883495 151.118243' />
            <polygon id='Rectangle' fill='#1BBFC6' points='217.794258 119.06442 254.331578 151.118243 248.909483 151.118243 218.014362 123.989963 186.853114 151.118243 181.256937 151.118243' />
            <polygon id='Rectangle' fill='#F5A623' points='135.087787 111.764326 179.020234 150.305819 172.500711 150.305819 135.35244 117.686795 97.8841788 150.305819 91.1553398 150.305819' />
            <polygon id='Rectangle' fill='#F5A623' points='135.087787 111.764326 179.020234 150.305819 172.500711 150.305819 135.35244 117.686795 97.8841788 150.305819 91.1553398 150.305819' />
            <polygon id='Rectangle' fill='#4F5666' points='97.5070189 149.247206 135.35244 117.686795 172.668555 149.247206 172.668555 185.240054 97.5070189 185.240054' />
            <rect id='Rectangle' fill='#F9A720' x='129.265415' y='171.598901' width='11.1154385' height='15.3498912' />
            <rect id='Rectangle' fill='#F9A720' x='150.437678' y='154.540271' width='11.1154385' height='15.3498912' />
            <polygon id='Rectangle' fill='#8E939F' points='97.5070189 149.247206 135.35244 117.686795 172.668555 149.247206 172.668555 185.240054 97.5070189 185.240054' />
            <polygon id='Rectangle' fill='#C6851B' points='135.087787 117.48881 172.495043 150.305819 166.943851 150.305819 135.313132 122.531628 103.40995 150.305819 97.6805307 150.305819' />
            <rect id='Rectangle' fill='#F9A720' x='129.265415' y='171.598901' width='11.1154385' height='15.3498912' />
            <rect id='Rectangle' fill='#F9A720' x='150.437678' y='154.540271' width='11.1154385' height='15.3498912' />
            <rect id='Rectangle' fill='#F9A720' x='108.573601' y='154.540271' width='11.1154385' height='15.3498912' />
            <polygon id='Rectangle' fill='#C6851B' points='134.459578 117.48881 177.019417 151.118243 169.405429 153.48881 134.70678 123.020741 99.7092403 153.48881 93.1873949 152.248927' />
            <path d='M119.208589,154.540271 L119.208589,169.890163 L119.208589,154.540271 Z' id='Rectangle' fill='#F9A720' />
            <g id='tree-automn' transform='translate(239.815534, 38.446602)'>
              <path d='M23.2038835,-0.446601942 C43.6483279,47.4778075 50.4631428,78.3187524 43.6483279,92.0762327 C33.4261057,112.712453 12.9816613,112.712453 2.75943905,92.0762327 C-4.05537576,78.3187524 2.75943905,47.4778075 23.2038835,-0.446601942 Z' id='Rectangle' fill='#FCBF63' />
              <rect id='Rectangle' fill='#65402D' x='21.2038835' y='57.5533981' width='4' height='89' />
              <polygon id='Rectangle' fill='#65402D' points='31.1004308 64.5533981 34.2038835 66.6079437 25.3073362 79.5533981 22.2038835 77.4988524' />
              <polygon id='Rectangle' fill='#65402D' points='16.3073362 83.5533981 13.2038835 85.6079437 22.1004308 98.5533981 25.2038835 96.4988524' />
            </g>
            <g id='tree-four' transform='translate(331.019417, 57.000000)'>
              <path d='M20,0 C37.7777778,41.711986 43.7037037,68.5550306 37.7777778,80.5291339 C28.8888889,98.4902887 11.1111111,98.4902887 2.22222222,80.5291339 C-3.7037037,68.5550306 2.22222222,41.711986 20,0 Z' id='Rectangle' fill='#FC6363' />
              <path d='M20,0 C37.7777778,41.711986 43.7037037,68.5550306 37.7777778,80.5291339 C28.8888889,98.4902887 11.1111111,98.4902887 2.22222222,80.5291339 C-3.7037037,68.5550306 2.22222222,41.711986 20,0 Z' className='tree-four-color' fill='#5AA342' />
              <rect id='Rectangle' fill='#65402D' x='19' y='51' width='3' height='78' />
              <polygon id='Rectangle' fill='#65402D' points='27.4137894 57 30 58.7806063 22.5862106 70 20 68.2193937' />
              <polygon id='Rectangle' fill='#65402D' points='13.5862106 73 11 74.7806063 18.4137894 86 21 84.2193937' />
            </g>
            <g id='tree-five' transform='translate(542.019417, 25.000000)'>
              <path d='M27,0 C51,51.4743657 59,84.599825 51,99.376378 C39,121.541207 15,121.541207 3,99.376378 C-5,84.599825 3,51.4743657 27,0 Z' className='tree-five-color' fill='#D6FF3F' />
              <rect id='Rectangle' fill='#65402D' x='26' y='63' width='4' height='96' />
              <polygon id='Rectangle' fill='#65402D' points='35.3793052 70 39 72.1915154 28.6206948 86 25 83.8084846' />
              <polygon id='Rectangle' fill='#65402D' points='18.6206948 90 15 92.1915154 25.3793052 106 29 103.808485' />
            </g>
            <g id='tree-five' transform='translate(775.019417, 27.000000)'>
              <path d='M27,0 C51,51.4743657 59,84.599825 51,99.376378 C39,121.541207 15,121.541207 3,99.376378 C-5,84.599825 3,51.4743657 27,0 Z' className='tree-five-color' fill='#D6FF3F' />
              <rect id='Rectangle' fill='#65402D' x='26' y='62' width='4' height='96' />
              <polygon id='Rectangle' fill='#65402D' points='36.3793052 69 40 71.1915154 29.6206948 85 26 82.8084846' />
              <polygon id='Rectangle' fill='#65402D' points='18.6206948 90 15 92.1915154 25.3793052 106 29 103.808485' />
            </g>
            <g id='tree-four' transform='translate(653.019417, 56.000000)'>
              <path d='M20,0 C37.7777778,41.711986 43.7037037,68.5550306 37.7777778,80.5291339 C28.8888889,98.4902887 11.1111111,98.4902887 2.22222222,80.5291339 C-3.7037037,68.5550306 2.22222222,41.711986 20,0 Z' id='Rectangle' fill='#FC6363' />
              <path d='M20,0 C37.7777778,41.711986 43.7037037,68.5550306 37.7777778,80.5291339 C28.8888889,98.4902887 11.1111111,98.4902887 2.22222222,80.5291339 C-3.7037037,68.5550306 2.22222222,41.711986 20,0 Z' className='tree-four-color' fill='#5AA342' />
              <rect id='Rectangle' fill='#65402D' x='19' y='51' width='3' height='78' />
              <polygon id='Rectangle' fill='#65402D' points='27.4137894 57 30 58.7806063 22.5862106 70 20 68.2193937' />
              <polygon id='Rectangle' fill='#65402D' points='14.5862106 73 12 74.7806063 19.4137894 86 22 84.2193937' />
            </g>
            <g id='tree-four' transform='translate(159.019417, 71.000000)'>
              <path d='M18,0 C34,37.2745407 39.3333333,61.2619423 34,71.9622047 C26,88.0125984 10,88.0125984 2,71.9622047 C-3.33333333,61.2619423 2,37.2745407 18,0 Z' className='tree-four-color' fill='#5AA342' />
              <rect id='Rectangle' fill='#65402D' x='16' y='45' width='3' height='69' />
              <polygon id='Rectangle' fill='#65402D' points='23.6724105 50 26 51.6436366 19.3275895 62 17 60.3563634' />
              <polygon id='Rectangle' fill='#65402D' points='12.3275895 65 10 66.6436366 16.6724105 77 19 75.3563634' />
            </g>
            <g id='tree-one' transform='translate(188.019417, 26.000000)'>
              <path d='M27,0 C51,51.4743657 59,84.599825 51,99.376378 C39,121.541207 15,121.541207 3,99.376378 C-5,84.599825 3,51.4743657 27,0 Z' className='tree-one-color' fill='#88FF00' />
              <rect id='Rectangle' fill='#65402D' x='26' y='63' width='4' height='96' />
              <polygon id='Rectangle' fill='#65402D' points='36.3793052 70 40 72.1915154 29.6206948 86 26 83.8084846' />
              <polygon id='Rectangle' fill='#65402D' points='19.6206948 90 16 92.1915154 26.3793052 106 30 103.808485' />
            </g>
            <g id='tree-three' transform='translate(240.019417, 38.000000)'>
              <path d='M23,0 C43.4444444,47.9244094 50.2592593,78.7653543 43.4444444,92.5228346 C33.2222222,113.159055 12.7777778,113.159055 2.55555556,92.5228346 C-4.25925926,78.7653543 2.55555556,47.9244094 23,0 Z' className='tree-three-color' fill='#D4FC63' />
              <rect id='Rectangle' fill='#65402D' x='21' y='58' width='4' height='89' />
              <polygon id='Rectangle' fill='#65402D' points='30.8965473 65 34 67.0545457 25.1034527 80 22 77.9454543' />
              <polygon id='Rectangle' fill='#65402D' points='16.1034527 84 13 86.0545457 21.8965473 99 25 96.9454543' />
            </g>
            <g id='tree-one' transform='translate(51.019417, 111.000000)'>
              <path d='M12.5,0 C23.6111111,23.9622047 27.3148148,39.3826772 23.6111111,46.2614173 C18.0555556,56.5795276 6.94444444,56.5795276 1.38888889,46.2614173 C-2.31481481,39.3826772 1.38888889,23.9622047 12.5,0 Z' className='tree-one-color' fill='#88FF00' />
              <rect id='Rectangle' fill='#65402D' x='12' y='30' width='2' height='44' />
              <polygon id='Rectangle' fill='#65402D' points='16.4482737 33 18 33.958788 13.5517263 40 12 39.041212' />
              <polygon id='Rectangle' fill='#65402D' points='9.55172633 42 8 42.958788 12.4482737 49 14 48.041212' />
            </g>
            <g id='tree-three' transform='translate(67.815534, 37.446602)'>
              <path d='M23.2038835,-0.446601942 C43.6483279,47.4778075 50.4631428,78.3187524 43.6483279,92.0762327 C33.4261057,112.712453 12.9816613,112.712453 2.75943905,92.0762327 C-4.05537576,78.3187524 2.75943905,47.4778075 23.2038835,-0.446601942 Z' className='tree-three-color' fill='#D4FC63' />
              <rect id='Rectangle' fill='#65402D' x='21.2038835' y='57.5533981' width='4' height='89' />
              <polygon id='Rectangle' fill='#65402D' points='31.1004308 64.5533981 34.2038835 66.6079437 25.3073362 79.5533981 22.2038835 77.4988524' />
              <polygon id='Rectangle' fill='#65402D' points='16.3073362 83.5533981 13.2038835 85.6079437 22.1004308 98.5533981 25.2038835 96.4988524' />
            </g>
            <g id='tree-two' transform='translate(60.019417, 74.000000)'>
              <path d='M18,0 C34,37.2745407 39.3333333,61.2619423 34,71.9622047 C26,88.0125984 10,88.0125984 2,71.9622047 C-3.33333333,61.2619423 2,37.2745407 18,0 Z' className='tree-two-color' fill='#10705C' />
              <rect id='Rectangle' fill='#65402D' x='16' y='45' width='3' height='69' />
              <polygon id='Rectangle' fill='#65402D' points='23.6724105 50 26 51.6436366 19.3275895 62 17 60.3563634' />
              <polygon id='Rectangle' fill='#65402D' points='12.3275895 65 10 66.6436366 16.6724105 77 19 75.3563634' />
            </g>
            <polygon id='Rectangle' fill='#FFB02F' points='822.200702 92.7448851 877.073391 92.7448851 877.073391 185.692502 822.200702 185.692502' />
            <rect id='Rectangle' fill='#FF9F00' x='826.12018' y='93.8647359' width='5.03932862' height='2.23970161' />
            <rect id='Rectangle' fill='#FF9F00' x='828.919807' y='96.6643629' width='5.03932862' height='2.23970161' />
            <rect id='Rectangle' fill='#FF9F00' x='855.236301' y='93.8647359' width='5.03932862' height='2.23970161' />
            <rect id='Rectangle' fill='#FF9F00' x='852.996599' y='96.6643629' width='5.03932862' height='2.23970161' />
            <polygon id='Rectangle' fill='#FF9F00' points='822.200702 161.292304 877.073391 161.292304 877.073391 183.129395 822.200702 183.129395' />
            <polygon id='Rectangle' fill='#FF9F00' points='822.200702 89.9452581 877.073391 89.9452581 877.073391 92.7448851 822.200702 92.7448851' />
            <polygon id='Rectangle' fill='#FF9F00' points='822.200702 131.379738 877.073391 131.379738 877.073391 134.179365 822.200702 134.179365' />
            <g id='window-3' transform='translate(852.996599, 140.898470)'>
              <path d='M9.51873183,1.44977942 C11.6480021,1.44977942 13.9259352,2.05047463 16.3576875,3.22720344 L16.3576875,3.22720344 L16.3576875,20.9134441 L2.67977621,20.9134441 L2.67977621,3.22720344 C5.11152848,2.05047463 7.38946154,1.44977942 9.51873183,1.44977942 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.79962701,3.09025992 C5.1993073,1.72575153 7.43900891,1.04349734 9.51873183,1.04349734 C11.5984548,1.04349734 13.8381564,1.72575153 16.2378367,3.09025992 L2.79962701,21.3916955 L2.79962701,3.09025992 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.79962701' y1='14.3480884' x2='15.957874' y2='14.3480884' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.65964566' y1='9.39147606' x2='16.5177994' y2='9.39147606' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='21.3916955' width='19.0374637' height='1.56524601' />
              <line x1='9.51873183' y1='1.30437167' x2='9.58872251' y2='21.3916955' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='window-3' transform='translate(852.996599, 99.463990)'>
              <path d='M9.51873183,1.44977942 C11.6480021,1.44977942 13.9259352,2.05047463 16.3576875,3.22720344 L16.3576875,3.22720344 L16.3576875,20.9134441 L2.67977621,20.9134441 L2.67977621,3.22720344 C5.11152848,2.05047463 7.38946154,1.44977942 9.51873183,1.44977942 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.79962701,3.09025992 C5.1993073,1.72575153 7.43900891,1.04349734 9.51873183,1.04349734 C11.5984548,1.04349734 13.8381564,1.72575153 16.2378367,3.09025992 L2.79962701,21.3916955 L2.79962701,3.09025992 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.79962701' y1='14.3480884' x2='15.957874' y2='14.3480884' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.65964566' y1='9.39147606' x2='16.5177994' y2='9.39147606' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='21.3916955' width='19.0374637' height='1.56524601' />
              <line x1='9.51873183' y1='1.30437167' x2='9.58872251' y2='21.3916955' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <g id='window-3' transform='translate(827.240031, 100.318359)'>
              <path d='M9.51873183,1.44977942 C11.6480021,1.44977942 13.9259352,2.05047463 16.3576875,3.22720344 L16.3576875,3.22720344 L16.3576875,20.9134441 L2.67977621,20.9134441 L2.67977621,3.22720344 C5.11152848,2.05047463 7.38946154,1.44977942 9.51873183,1.44977942 Z' id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#4F5666' />
              <path d='M2.79962701,3.09025992 C5.1993073,1.72575153 7.43900891,1.04349734 9.51873183,1.04349734 C11.5984548,1.04349734 13.8381564,1.72575153 16.2378367,3.09025992 L2.79962701,21.3916955 L2.79962701,3.09025992 Z' id='Rectangle' fillOpacity='0.106861888' fill='#FFFFFF' />
              <line x1='2.79962701' y1='14.3480884' x2='15.957874' y2='14.3480884' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <line x1='2.65964566' y1='9.39147606' x2='16.5177994' y2='9.39147606' id='Line-2' stroke='#FFFFFF' strokeLinecap='square' />
              <rect id='Rectangle' fill='#FFFFFF' x='0' y='21.3916955' width='19.0374637' height='1.56524601' />
              <line x1='9.51873183' y1='1.30437167' x2='9.58872251' y2='21.3916955' id='Line-3' stroke='#FFFFFF' strokeLinecap='square' />
            </g>
            <polygon id='Rectangle' fill='#8593A4' points='821.640777 87.1456311 877.073391 87.1456311 877.073391 89.9452581 821.640777 89.9452581' />
            <g id='door' transform='translate(827.240031, 140.898470)'>
              <rect id='Rectangle' stroke='#FFFFFF' strokeWidth='2' fill='#D8D8D8' x='1' y='1' width='17.0374637' height='43.3539575' />
              <rect id='Rectangle' fill='#4F5666' x='2.79962701' y='1.67977621' width='13.4382096' height='21.2771653' />
              <polygon id='Rectangle' fillOpacity='0.091673951' fill='#FFFFFF' points='2.79962701 1.67977621 16.2378367 1.67977621 2.79962701 22.9569415' />
              <rect id='Rectangle' fill='#FFFFFF' x='2.79962701' y='25.7565685' width='13.4382096' height='19.0374637' />
            </g>
            <rect id='Rectangle' fill='#FF9F00' x='847.397345' y='124.660633' width='5.03932862' height='2.23970161' />
            <image id='Rectangle-1' x='0.262135922' y='183.589367' width='1019' height='7.99607651' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAD+4AAAAgCAYAAACG9LAgAAAABGdBTUEAALGN5fIAKQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAP7qADAAQAAAABAAAAIAAAAADf37IrAAAJUUlEQVR4Ae3bsQ0AIQwEwef7L8t9gUQJbDrOLxk53TUz+3MECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIDAk8D/tDIiQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEroBw3yMQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIEgINwPeKYECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQEC47wcIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAQEO4HPFMCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQICDc9wMECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCAICPcDnikBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEBDu+wECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIBAEhPsBz5QAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECAj3/QABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEAgCwv2AZ0qAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBIT7foAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECAQB4X7AMyVAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAsJ9P0CAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBIKAcD/gmRIgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAeG+HyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAkFAuB/wTAkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAgHDfDxAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgSAg3A94pgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAQLjvBwgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQBAQ7gc8UwIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgINz3AwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIAgI9wOeKQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQEO77AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgEASE+wHPlAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQICPf9AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQCALC/YBnSoAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEhPt+gAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIBAHhfsAzJUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECwn0/QIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEgoBwP+CZEiBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBAzHZA4tnupeLAAAAAElFTkSuQmCC' />
            <rect id='Rectangle' fill='#FF9F00' x='852.996599' y='128.020185' width='5.03932862' height='2.23970161' />
            <path d='M681.158346,210.509293 C686.355513,206.467618 722.590323,207.634602 726.303622,208.52319 C730.016922,209.411777 744.012632,223.561061 745.447114,225.268594 C746.881597,226.976127 765.182695,225.268594 767.714659,229.508814 C768.936014,231.554189 768.936014,248.94228 760.747729,247.751104 C758.795157,247.467057 757.419031,241.669257 753.143276,241.669257 C748.117875,241.669257 745.86596,247.816735 742.741954,247.751104 C738.586705,247.663808 731.794733,247.663808 722.366038,247.751104 L701.387939,247.751104 C698.983698,243.696539 696.556317,241.669257 694.105795,241.669257 C691.655273,241.669257 689.190607,243.696539 686.711797,247.751104 L678.867734,247.751104 C676.930031,225.617679 677.693569,213.203742 681.158346,210.509293 Z' id='Rectangle' fill='#52D7F1' />
            <path d='M698.773296,213.428041 C700.58073,213.335044 702.348081,213.065064 703.626532,214.292377 C705.185816,215.789289 704.936436,217.739754 704.856146,219.897609 C704.826821,220.719587 704.81968,221.064182 704.812455,221.412117 C704.772705,223.326343 704.915818,225.486933 703.626532,226.724648 C702.51095,227.795607 700.904259,227.474548 699.293199,227.352051 C698.557877,227.29614 697.804697,227.240187 697.04889,227.238018 C696.291406,227.235844 695.531028,227.292461 694.785659,227.349499 C693.207033,227.470299 691.609221,227.789971 690.499509,226.724648 C689.476495,225.742554 689.51855,224.2673 689.577214,222.801695 L689.595069,222.33978 L689.595069,222.33978 L689.602118,222.110162 C689.61709,221.535353 689.631517,220.960343 689.620135,220.398007 C689.609983,219.896415 689.584658,219.403765 689.559654,218.921953 C689.555746,218.84663 689.551501,218.77146 689.547065,218.696468 L689.519282,218.248881 C689.426615,216.765516 689.371552,215.375216 690.499509,214.292377 C691.471638,213.359133 692.838741,213.353861 694.250568,213.416338 L694.958587,213.44924 L694.958587,213.44924 L695.194568,213.458586 C695.816669,213.480625 696.444292,213.502251 697.065038,213.493787 C697.641516,213.485926 698.2126,213.456891 698.773296,213.428041 Z' id='Rectangle' stroke='#979797' strokeWidth='3' fill='#767674' />
            <path d='M722.796592,213.428041 C724.604026,213.335044 726.371377,213.065064 727.649828,214.292377 C727.79691,214.433575 727.992257,214.625191 728.226989,214.859523 L728.527006,215.160732 C730.380752,217.031642 733.990398,220.844714 736.310656,223.958624 C737.096985,225.013919 737.733832,225.976028 738.058367,226.73541 C737.049569,227.336366 734.567315,227.400552 731.920518,227.410626 L731.256148,227.412297 C731.145101,227.41248 731.033957,227.41264 730.922812,227.41281 L730.25668,227.414241 L729.430435,227.414024 C727.209839,227.406085 725.039902,227.341752 723.40593,227.293409 C722.387171,227.263268 721.571865,227.239452 721.072186,227.238018 C720.314702,227.235844 719.554325,227.292461 718.808956,227.349499 C717.23033,227.470299 715.632518,227.789971 714.522806,226.724648 C713.595772,225.834695 713.54333,224.53978 713.585367,223.211434 L713.601808,222.767924 C713.610708,222.54606 713.619825,222.324413 713.625546,222.104705 L713.625546,222.104705 L713.643832,221.288635 C713.648388,220.989542 713.649383,220.692077 713.643431,220.398007 C713.633279,219.896415 713.607954,219.403765 713.582951,218.921953 C713.579042,218.84663 713.574798,218.77146 713.570361,218.696468 L713.542578,218.248881 C713.449911,216.765516 713.394849,215.375216 714.522806,214.292377 C715.494935,213.359133 716.862037,213.353861 718.273864,213.416338 L718.981883,213.44924 L718.981883,213.44924 L719.217864,213.458586 C719.839965,213.480625 720.467589,213.502251 721.088334,213.493787 C721.664812,213.485926 722.235897,213.456891 722.796592,213.428041 Z' id='Rectangle' stroke='#979797' strokeWidth='3' fill='#767674' />
            <image id='Ellipse-34' x='689.786408' y='243.495146' width='9.46134484' height='11.1067961' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAABGdBTUEAALGN5fIAKQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALqADAAQAAAABAAAANgAAAAAhytp9AAACLklEQVRoBe2YjU3DMBCFKROUCTATNBvgERjBG9ANWiagG1BGYIK0ExAmSDsB2QDeQ7kostKfJI5/JJ70dHF+7r5cLKfp7MaNNNJk8GMd54g0VcGH2l+Iu9oIYUSwFfwN//R0ifPfYAV7E4Ff4b6wp873cgPPAB7S4VPQsr9EXgM7F7vMzkihqSJrsJYTKWT5hKeCtfOWqMWao6RwNRPZyacej4IPBS1NIfygaZMH6LRASyRDL61wtlwcOnLpvUoKZ4WGtevra8jLCMG5qp2VwVH7bmMZL8+Rx9htaRzf2M0qc9u6C4Nt1RrHtklo0wUVc7el67kNnmGHHIw9asLLVDEcJCLd5vT5I2rsEy0JPoMV/DdATEV3nCqc36npKVXwjOCL1NoNXkVwlSD4PcGb12hCNzDnqsLlKTmx40nqH9z3Y2PHD76LOqh3IHjlIJHvFFWqHT8S/Oi7XQ7qFQQvHCTynaLgC4hvTn6IpqQHgeXvcb5BUzA/eppPt3cOEtG+zakxSKHbZMza4NzO4djhS4HmqiL6kI2I40sXm6wusXa96XYX/BI7YwU3XcDtfTH+x3K22wKvsRFb15XAXYqbiODXl2Dt43kE8GToLa4ynFuhpg1rK3iQFK4KAT8KWu7UNzxXNdZ0Ik6bLTz1tGEN1nIug4xTTB1+Dyyd01oJFcZb2FX3N8g1SZeRt1MKe7fwkCfADq/hwcAzXOxCGknoBaxqC1SFMV3A+zruEEfpF5IrLMb8vkymAAAAAElFTkSuQmCC' />
            <image id='Ellipse-34' x='747.883495' y='243.495146' width='9.46134484' height='11.1067961' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAABGdBTUEAALGN5fIAKQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALqADAAQAAAABAAAANgAAAAAhytp9AAACLklEQVRoBe2YjU3DMBCFKROUCTATNBvgERjBG9ANWiagG1BGYIK0ExAmSDsB2QDeQ7kostKfJI5/JJ70dHF+7r5cLKfp7MaNNNJk8GMd54g0VcGH2l+Iu9oIYUSwFfwN//R0ifPfYAV7E4Ff4b6wp873cgPPAB7S4VPQsr9EXgM7F7vMzkihqSJrsJYTKWT5hKeCtfOWqMWao6RwNRPZyacej4IPBS1NIfygaZMH6LRASyRDL61wtlwcOnLpvUoKZ4WGtevra8jLCMG5qp2VwVH7bmMZL8+Rx9htaRzf2M0qc9u6C4Nt1RrHtklo0wUVc7el67kNnmGHHIw9asLLVDEcJCLd5vT5I2rsEy0JPoMV/DdATEV3nCqc36npKVXwjOCL1NoNXkVwlSD4PcGb12hCNzDnqsLlKTmx40nqH9z3Y2PHD76LOqh3IHjlIJHvFFWqHT8S/Oi7XQ7qFQQvHCTynaLgC4hvTn6IpqQHgeXvcb5BUzA/eppPt3cOEtG+zakxSKHbZMza4NzO4djhS4HmqiL6kI2I40sXm6wusXa96XYX/BI7YwU3XcDtfTH+x3K22wKvsRFb15XAXYqbiODXl2Dt43kE8GToLa4ynFuhpg1rK3iQFK4KAT8KWu7UNzxXNdZ0Ik6bLTz1tGEN1nIug4xTTB1+Dyyd01oJFcZb2FX3N8g1SZeRt1MKe7fwkCfADq/hwcAzXOxCGknoBaxqC1SFMV3A+zruEEfpF5IrLMb8vkymAAAAAElFTkSuQmCC' />
            <path d='M217.51757,168.645215 C222.714736,164.603541 258.949547,165.770524 262.662846,166.659112 C266.376145,167.5477 280.371855,181.696983 281.806338,183.404516 C283.24082,185.112049 301.541918,183.404516 304.073882,187.644736 C305.295238,189.690111 305.295238,207.078202 297.106952,205.887026 C295.15438,205.602979 293.778255,199.805179 289.5025,199.805179 C284.477098,199.805179 282.225184,205.952657 279.101178,205.887026 C274.945928,205.799731 268.153956,205.799731 258.725261,205.887026 L237.747163,205.887026 C235.342922,201.832461 232.91554,199.805179 230.465018,199.805179 C228.014496,199.805179 225.54983,201.832461 223.07102,205.887026 L215.226957,205.887026 C213.289254,183.753602 214.052792,171.339665 217.51757,168.645215 Z' id='Rectangle' fill='#EACA38' transform='translate(259.422052, 185.867803) scale(-1, 1) translate(-259.422052, -185.867803) ' />
            <path d='M290.6665,173.272702 C292.473934,173.179704 294.241285,172.909724 295.519736,174.137037 C297.07902,175.633949 296.82964,177.584414 296.74935,179.742269 C296.720025,180.564247 296.712884,180.908842 296.705804,181.250432 L296.705804,181.250432 L296.680812,182.250165 C296.627196,183.855375 296.588782,185.543023 295.519736,186.569308 C294.606987,187.445547 293.365479,187.38994 292.061804,187.27366 L291.625309,187.233847 C291.479287,187.220624 291.332863,187.207847 291.186403,187.196711 C290.451081,187.140801 289.697901,187.084847 288.942094,187.082678 C288.184609,187.080504 287.424232,187.137122 286.678863,187.194159 C285.100237,187.314959 283.502425,187.634632 282.392713,186.569308 C281.423541,185.638903 281.410277,184.265884 281.461446,182.877773 L281.488273,182.18444 L281.488273,182.18444 L281.495322,181.954822 C281.510294,181.380013 281.524721,180.805003 281.513339,180.242667 C281.503186,179.741076 281.477862,179.248425 281.452858,178.766614 C281.362955,177.034185 281.095563,175.382302 282.392713,174.137037 C283.472856,173.100099 285.040622,173.208807 286.615557,173.283153 L287.087772,173.303246 C287.709873,173.325285 288.337496,173.346912 288.958241,173.338447 C289.53472,173.330586 290.105804,173.301551 290.6665,173.272702 Z' id='Rectangle' stroke='#979797' strokeWidth='3' fill='#767674' transform='translate(289.093905, 180.253689) scale(-1, 1) translate(-289.093905, -180.253689) ' />
            <path d='M259.155816,173.272702 C260.96325,173.179704 262.730601,172.909724 264.009052,174.137037 C264.126717,174.249996 264.275272,174.395222 264.45017,174.568772 L264.731708,174.849847 C266.532657,176.657841 270.283328,180.600405 272.669879,183.803284 C273.456208,184.858579 274.093056,185.820688 274.41759,186.58007 C272.277999,187.814199 263.968667,187.262435 259.765154,187.138069 C258.746394,187.107928 257.931089,187.084112 257.43141,187.082678 C256.673925,187.080504 255.913548,187.137122 255.168179,187.194159 C253.589553,187.314959 251.991741,187.634632 250.882029,186.569308 C249.928457,185.653879 249.916157,184.303277 249.956354,182.94392 L249.970477,182.491061 L249.970477,182.491061 L249.976712,182.265485 L249.991109,181.703041 C250.003382,181.212344 250.012375,180.722913 250.002655,180.242667 C249.992502,179.741076 249.967177,179.248425 249.942174,178.766614 C249.852271,177.034185 249.584878,175.382302 250.882029,174.137037 C252.070186,172.996406 253.848366,173.242004 255.577088,173.303246 C256.199188,173.325285 256.826812,173.346912 257.447557,173.338447 C258.024036,173.330586 258.59512,173.301551 259.155816,173.272702 Z' id='Rectangle' stroke='#979797' strokeWidth='3' fill='#767674' transform='translate(262.226346, 180.251891) scale(-1, 1) translate(-262.226346, -180.251891) ' />
            <image id='Ellipse-34' transform='translate(229.876303, 208.893204) scale(-1, 1) translate(-229.876303, -208.893204) ' x='225.145631' y='203.339806' width='9.46134484' height='11.1067961' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAABGdBTUEAALGN5fIAKQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALqADAAQAAAABAAAANgAAAAAhytp9AAACLklEQVRoBe2YjU3DMBCFKROUCTATNBvgERjBG9ANWiagG1BGYIK0ExAmSDsB2QDeQ7kostKfJI5/JJ70dHF+7r5cLKfp7MaNNNJk8GMd54g0VcGH2l+Iu9oIYUSwFfwN//R0ifPfYAV7E4Ff4b6wp873cgPPAB7S4VPQsr9EXgM7F7vMzkihqSJrsJYTKWT5hKeCtfOWqMWao6RwNRPZyacej4IPBS1NIfygaZMH6LRASyRDL61wtlwcOnLpvUoKZ4WGtevra8jLCMG5qp2VwVH7bmMZL8+Rx9htaRzf2M0qc9u6C4Nt1RrHtklo0wUVc7el67kNnmGHHIw9asLLVDEcJCLd5vT5I2rsEy0JPoMV/DdATEV3nCqc36npKVXwjOCL1NoNXkVwlSD4PcGb12hCNzDnqsLlKTmx40nqH9z3Y2PHD76LOqh3IHjlIJHvFFWqHT8S/Oi7XQ7qFQQvHCTynaLgC4hvTn6IpqQHgeXvcb5BUzA/eppPt3cOEtG+zakxSKHbZMza4NzO4djhS4HmqiL6kI2I40sXm6wusXa96XYX/BI7YwU3XcDtfTH+x3K22wKvsRFb15XAXYqbiODXl2Dt43kE8GToLa4ynFuhpg1rK3iQFK4KAT8KWu7UNzxXNdZ0Ik6bLTz1tGEN1nIug4xTTB1+Dyyd01oJFcZb2FX3N8g1SZeRt1MKe7fwkCfADq/hwcAzXOxCGknoBaxqC1SFMV3A+zruEEfpF5IrLMb8vkymAAAAAElFTkSuQmCC' />
            <image id='Ellipse-34' transform='translate(288.973391, 208.893204) scale(-1, 1) translate(-288.973391, -208.893204) ' x='284.242718' y='203.339806' width='9.46134484' height='11.1067961' xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA2CAYAAAC4PKvBAAAABGdBTUEAALGN5fIAKQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAALqADAAQAAAABAAAANgAAAAAhytp9AAACLklEQVRoBe2YjU3DMBCFKROUCTATNBvgERjBG9ANWiagG1BGYIK0ExAmSDsB2QDeQ7kostKfJI5/JJ70dHF+7r5cLKfp7MaNNNJk8GMd54g0VcGH2l+Iu9oIYUSwFfwN//R0ifPfYAV7E4Ff4b6wp873cgPPAB7S4VPQsr9EXgM7F7vMzkihqSJrsJYTKWT5hKeCtfOWqMWao6RwNRPZyacej4IPBS1NIfygaZMH6LRASyRDL61wtlwcOnLpvUoKZ4WGtevra8jLCMG5qp2VwVH7bmMZL8+Rx9htaRzf2M0qc9u6C4Nt1RrHtklo0wUVc7el67kNnmGHHIw9asLLVDEcJCLd5vT5I2rsEy0JPoMV/DdATEV3nCqc36npKVXwjOCL1NoNXkVwlSD4PcGb12hCNzDnqsLlKTmx40nqH9z3Y2PHD76LOqh3IHjlIJHvFFWqHT8S/Oi7XQ7qFQQvHCTynaLgC4hvTn6IpqQHgeXvcb5BUzA/eppPt3cOEtG+zakxSKHbZMza4NzO4djhS4HmqiL6kI2I40sXm6wusXa96XYX/BI7YwU3XcDtfTH+x3K22wKvsRFb15XAXYqbiODXl2Dt43kE8GToLa4ynFuhpg1rK3iQFK4KAT8KWu7UNzxXNdZ0Ik6bLTz1tGEN1nIug4xTTB1+Dyyd01oJFcZb2FX3N8g1SZeRt1MKe7fwkCfADq/hwcAzXOxCGknoBaxqC1SFMV3A+zruEEfpF5IrLMb8vkymAAAAAElFTkSuQmCC' />
            <g id='garage' transform='translate(907.019417, 117.000000)'>
              <rect id='Rectangle' strokeOpacity='0.249134411' stroke='#1BBFC6' fill='#4E93E0' x='4.5' y='9.5' width='103' height='57' />
              <rect id='Rectangle' fill='#38C2C6' transform='translate(56.000000, 5.000000) scale(1, -1) translate(-56.000000, -5.000000) ' x='0' y='0' width='112' height='10' />
              <g id='doors' transform='translate(23.000000, 47.000000)' fill='#38C6C6'>
                <rect id='Rectangle' x='0' y='0' width='16.9380531' height='20' />
                <polygon id='Rectangle' points='49.0619469 0 57.6330203 0 66 0 66 20 49.0619469 20' />
              </g>
              <g id='windows' transform='translate(13.000000, 17.000000)'>
                <rect id='Rectangle' fill='#1BBFC6' x='0' y='0' width='12.8456376' height='13.3157895' />
                <rect id='Rectangle' fill='#FFE839' x='0' y='0' width='12.8456376' height='3.47368421' />
                <rect id='Rectangle' fill='#FFE839' x='9.44295302' y='29.5263158' width='18' height='3.47368421' />
                <rect id='Rectangle' fill='#FFE839' x='58.4899329' y='29.5263158' width='18' height='3.47368421' />
                <rect id='Rectangle' fill='#1BBFC6' x='36.7852349' y='0' width='12.8456376' height='13.3157895' />
                <rect id='Rectangle' fill='#FFE839' x='36.7852349' y='0' width='12.8456376' height='3.47368421' />
                <rect id='Rectangle' fill='#38C6C6' x='74.1543624' y='0' width='12.8456376' height='13.3157895' />
                <rect id='Rectangle' fill='#FFE839' x='74.1543624' y='0' width='12.8456376' height='3.47368421' />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <style jsx>{`
        .frise {
          width: 100%;
          margin-bottom: -1em;
          overflow: hidden;
        }

        svg {
          margin-left: -10px;
          margin-right: -10px;
        }
      `}</style>
    </div>
  )
}

export default Frise
