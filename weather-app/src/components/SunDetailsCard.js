import React from 'react'
import '../style/sunDetailsCardStyle.css'
import sunrise from '../assets/otherImageIcons/sunrise.png'
import sunset from '../assets/otherImageIcons/sunset.png'
import moonrise from '../assets/otherImageIcons/moonrise.png'
import moonset from '../assets/otherImageIcons/moonset.png'

const Card = ({header, index, riseIcon, setIcon, riseTime, setTime})=>{

return(
    <>
    <p>{header} </p>
    <div className='sunriseContainer'>
        <img alt='sunrise' src={riseIcon}/>
        <p> {riseTime}</p>
    </div>
    <div className='sunsetContainer'>
    <img alt='sunset' src={setIcon} />
    <p>{setTime} </p>
    </div>
    </>
)
}
const SunDetailsCard =({weekData, index, clickedCardIndex})=>{

return(
     <div className='sunDetailsCardContainer'>
     {
    index === 3 &&
            (<Card
                            header = 'Sunrise & sunset'
                            riseIcon = {sunrise}
                            riseTime = {weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.sunrise ?
                            weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.sunrise : "Not available"}
                            setIcon = {sunset}
                            setTime = {weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.sunset ?
                            weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.sunset : "Not Available"}
                            />)
     }


    {
        index === 6 &&
                       ( <Card
                        header = 'Moonrise & moonset'
                        riseIcon = {moonrise}
                        riseTime = {weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.moonrise ?
                        weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.moonrise : "Not available"}
                        setIcon = {moonset}
                        setTime = {weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.moonset ?
                        weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.moonset : "Not available"}

                        />)
    }
    </div>
)
}

export default SunDetailsCard