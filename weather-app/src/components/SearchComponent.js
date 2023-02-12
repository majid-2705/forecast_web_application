import React, {useState, useContext, useEffect} from 'react'
import api from '../assets/api'
import '../style/searchBarStyle.css'
import {GoSearch} from 'react-icons/go'
import {TiDelete} from 'react-icons/ti'
import { IconContext } from "react-icons";
import {weatherIconsArray} from '../assets/api'
import {useDispatch, useSelector} from 'react-redux'
import {setCity, setClickedCardIndex} from '../redux/slices/locationSlice'
import {useGetSearchLocationQuery, useGetCurrentWeatherApiQuery} from '../redux/services/weatherApi'
import {Context} from '../App';
import {useNavigate} from 'react-router-dom'
import {formatDate} from '../assets/formatDate'

const SearchComponent = () =>{

const navigate = useNavigate();
const dispatch = useDispatch()
const [searchInput, setSearchInput] = useState('')
const {city} = useSelector(state =>state.location)

//locationData contains the city's id property
const {locationData, fetchedCity} = useContext(Context)

//fetch the current weather details based on the city's id
const {data: currentWeatherData, isLoading: isCurrentLoading, isError: isErrorCurrent} = useGetCurrentWeatherApiQuery(locationData?.locations[0]?.id, {skip: !city? true: false})

//return an object of an image and a weather description to render in the DOM
const {image, description} = weatherIconsArray?.find(item => currentWeatherData?.current?.symbol === item.symbol) || {}
useEffect(()=>{

if(city === fetchedCity?.name)
setSearchInput('')
},[city])

const handleSubmit=(e) =>{
e.preventDefault();
if(!searchInput){
alert("Please set a location in the search field")
return
}

//update the city state
dispatch(setCity(searchInput))
navigate(`/today/${searchInput}`)

}


return(

    <div className='sidebarContainer'>

        <form onSubmit={handleSubmit}>
            <div className="searchContainer">
              <GoSearch className='icon'/>
              <input
              value={searchInput}
              onChange={(e) =>{setSearchInput(e.target.value)}}
              placeholder='search'/>
              <IconContext.Provider value={{color: 'black'}}>
              {
              window.screen.width >=425 &&
              <TiDelete
              onClick={()=>{setSearchInput('')}}
              className='deleteIcon'/>}
              </IconContext.Provider>
            </div>
        </form>

        <div className='weatherImg'>
              <img src={image}/>
        </div>
        <div className='temperature'>
              <p>{currentWeatherData?.current?.temperature}°C</p>

        </div>
        <div className='date'>
           {formatDate(currentWeatherData?.current?.time, "dayAndTime")}
        </div>

        <hr className='separator'/>

        <div className='weatherState'>
            <p>{description}</p>
            <p>{ `Wind speed: ${currentWeatherData?.current?.windSpeed} m/s`}</p>
        </div>

        <div className='countryAndCity'>
             <p> {`${locationData?.locations[0]?.name}, ${locationData?.locations[0]?.country}`}</p>
        </div>
    </div>

    )
}
export default SearchComponent

