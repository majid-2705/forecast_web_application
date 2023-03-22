import React, {useState, useContext, useEffect} from 'react'
import api from '../assets/api'
import {countryCode} from '../assets/countryCodeApi'
import '../style/sideBarStyle.css'
import {weatherIconsArray} from '../assets/api'
import {useDispatch, useSelector} from 'react-redux'
import {setCity, setId, setAdminArea, setClickedCardIndex} from '../redux/slices/locationSlice'
import {useGetSearchLocationQuery, useGetCurrentWeatherApiQuery} from '../redux/services/weatherApi'
import {Context} from '../App';
import {useNavigate} from 'react-router-dom'
import {formatDate} from '../assets/formatDate'
import { Autocomplete, TextField } from '@mui/material';

const SideBarComponent = () =>{

const {city, id, adminArea} = useSelector(state =>state.location)
const [searchInput, setSearchInput] = useState('')
const navigate = useNavigate();
const dispatch = useDispatch()
//fetch city's locationdata to pull out the city's id
const {data: loc, isLoading: loading, isFetching: isFetchingLocation, isError: isErrorLocation} = useGetSearchLocationQuery( searchInput, {skip: !searchInput ? true : false})

//locationData contains the city's id property
const {locationData, fetchedCity} = useContext(Context)
//fetch the current weather details based on the city's id
const {data: currentWeatherData, isLoading: isCurrentLoading, isError: isErrorCurrent} = useGetCurrentWeatherApiQuery(id , {skip: !id? true: false})

//return an object of an image and a weather description to render in the DOM
const {image, description} = weatherIconsArray?.find(item => currentWeatherData?.current?.symbol === item.symbol) || {}


useEffect(()=>{

if(city === fetchedCity?.name)
{
setSearchInput('')
}
},[city])




let handleClick  = (event, city, country, id, adminarea) =>{
//returns an array contains one object that reffers to the matched country
const matchedCountry = countryCode.filter(item => item.name === country)
let code = matchedCountry[0].code


dispatch(setId(id))
dispatch(setCity(`${city}+${country}+${code}`))
dispatch(setAdminArea(adminarea))
navigate(`/today/${city}+${country}+${code}`)
}

useEffect(()=>{
dispatch(setId(locationData?.locations[0]?.id))
}, [])

return(

    <div className='sidebarContainer'>
        <Autocomplete
              value={searchInput}
              onInputChange={(event, newValue) =>{setSearchInput(newValue)}}
              options={loc?.locations || []}
              getOptionLabel={(option)=>{
              const adminArea = option.adminArea2 ? "("+option.adminArea2+")" : ""
              return option.name? option.name +", " +option.country + " " + adminArea: searchInput}
              }
              renderInput={(params)=> <TextField {...params} label="Type a location"/>}
              onChange={(event, newValue) => {handleClick(event, newValue?.name, newValue?.country, newValue?.id, newValue?.adminArea2)}}
              freeSolo
              sx={{
                margin: "16px 16px 0 16px",
                    '& .MuiFormLabel-root ': {
                      top: "-5px"
                    },
                     '& .MuiOutlinedInput-root ': {
                      padding: "3px"
                    },

              }
              }
        />


        <div className='weatherImg'>
              <img src={image}/>
        </div>
        <div className='temperature'>
              <p>Now {currentWeatherData?.current?.temperature}°C</p>

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
        <p> {`${city.split('+')?.[0] || fetchedCity?.name}, ${city.split('+')?.[1] || fetchedCity?.country?.name} ${adminArea ? "("+adminArea+")" : ""}`}</p>
        </div>
    </div>

    )
}
export default SideBarComponent

