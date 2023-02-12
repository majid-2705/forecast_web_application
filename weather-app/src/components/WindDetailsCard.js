import React from 'react'
import '../style/windDetailsCardStyle.css'
import windSpeed from '../assets/otherImageIcons/windSpeed.png'
import windDirection from '../assets/otherImageIcons/windDirection.png'
import {weatherDirectionSymol} from '../assets/weatherDirection'

const Card =({header, index, icon, windSpeed, windDirIcon, windDirection})=>{
let myStyle ={justifyContent: 'center', alignItems: 'center', margin: '0'}
return (
    <div className = 'card'>
        <p className='header'>{header}</p>
        <div className='windSpeedContainer' style={index ===4 || index === 5 ? myStyle : {}}>
         {index===2 && <> <img src={icon} alt="Wind speed icon" />
         <p className='windSpeed' style={{marginLeft: '40px'}}>{windSpeed}<span><sup>m</sup>&frasl;<sub>s</sub></span></p> </>}
         {index === 4 && <p className='humidity'>{windSpeed}<span style={{color: "red !important"}}>&#37;</span></p>}
         {index === 5 && <p className='humidity'>{windSpeed}<span >hPa</span></p>}
        </div>
        <div className='windDirectionContainer'>

        {index ===2 && <><img src={windDirIcon} alt="Wind direction" />
            <p>{windDirection}</p></>}
        </div>

    </div>
)

}

const x = 0;
const WindDetailsCard =({weekData, index, clickedCardIndex})=>{
return(
<div className = 'windDetailsCardContainer'>

    {
    index===2 &&        (<Card
                        index={2}
                        header='Wind status'
                        icon={windSpeed}
                        windSpeed={ weekData?.forecast[clickedCardIndex < 0 ? x : clickedCardIndex]?.maxWindSpeed}
                        windDirIcon={windDirection}
                        windDirection={weekData?.forecast[clickedCardIndex < 0 ? x : clickedCardIndex]?.windDir}
                        />)

    }

    {
    index===4   &&        (<Card
                         index={4}
                         header='Max rel humidity'
                         icon={''}
                         windSpeed={weekData?.forecast[clickedCardIndex < 0 ? 1 : clickedCardIndex]?.maxRelHumidity}

                         />)
    }
    {
    index===5   &&        (<Card
                         index={5}
                         header='Pressure'
                         icon={''}
                         windSpeed={ weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.pressure}

                         />)
    }


        {/*
         <p>Wind speed</p>
         {index===2 && (<p>{ weekData?.forecast[0]?.maxWindSpeed}<span>m/s</span></p>)}
         {index===4 && (<p>{weekData?.forecast[0]?.minRelHumidity}<span>%</span></p>)}
         {index===5 && (<p>{ weekData?.forecast[0]?.pressure}<span>km</span></p>)}
         {index===6 && (<p>{weekData?.forecast[0]?.windDir}</p>)}

         <p>description</p>

        */}
</div>
)
}

export default WindDetailsCard