import React from 'react'
import '../style/weekCardStyle.css'
import maxTemp from '../assets/otherImageIcons/maxTemp.png'
import minTemp from '../assets/otherImageIcons/minTemp.png'
import {formatDate} from '../assets/formatDate'
import {useDispatch, useSelector} from 'react-redux'
import {setAreDetailsChecked, setClickedCardIndex} from '../redux/slices/locationSlice'

const WeekCard = ({index,
                    weekData,
                    image,
                    description
                    ,date,
                    minTemperature,
                    maxTemperature,
                    }) =>{



const dispatch = useDispatch();

const handleCardClick=()=>{
dispatch(setAreDetailsChecked(true))
dispatch(setClickedCardIndex(index))
}

return (
<div className='weekCard'
     onClick={() =>  handleCardClick() }>
    <p className='description'>{formatDate(date, "date")}</p>
    <img className='image 'src={image} alt={description} />
    <div className="min_maxTempContainer">
        <div className='maxTempContainer'>
            <img alt="Maximum temperature" src={maxTemp} />
            <p className = 'temperature'>{maxTemperature}°C</p>
        </div>
        <div className='minTempContainer'>
            <img alt="Minimum temperature" src={minTemp} />
            <p className = 'temperature'>{minTemperature}°C</p>
        </div>
    </div>
</div>
)
}
export default WeekCard