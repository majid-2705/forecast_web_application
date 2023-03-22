import {createContext} from 'react'
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import SideBarComponent from './components/SideBarComponent'
import Loader from './components/Loader'
import Error from './components/Error'
import NavBarComponent from './components/NavBarComponent'
import {useGetLocQuery, useGetCurrentWeatherApiQuery} from './redux/services/weatherApi'
import {useGetCityQuery} from './redux/services/countryApi'
import {setCity} from './redux/slices/locationSlice'
import {useSelector} from 'react-redux'
import Today from './pages/Today'
import Home from './pages/Home'
import Week from './pages/Week'


export const Context = createContext();
const App=()=> {
const {cityParam} = useParams()
const {city, clickedCardIndex, id} = useSelector(state => state.location )




//fetch data on first page load to get user's geolocation
const {data: fetchedCity, isLoading,  isError, isFetching} = useGetCityQuery()

const searchedLocation = city.split('+')

//fetch city's locationdata to pull out the city's id
const {data: locationData, isLoading: loading, isFetching: isFetchingLocation, isError: isErrorLocation} = useGetLocQuery({city: searchedLocation[0] || fetchedCity?.name, country: searchedLocation[2] || fetchedCity?.country?.id}, {skip: !fetchedCity ? true : false})


if(isFetchingLocation || isLoading) return <Loader />
if(!locationData?.locations[0]?.id) return <Error city={city}/>






  return (
    <Context.Provider  value={{fetchedCity,locationData}} >
    <div className="App">
        <NavBarComponent />

       {/*contains both sideBar and the main page (today and week pages)*/}
        <div className='pageContainer'>
            <SideBarComponent/>

           {/*the container of today and weekpages*/}
            <div className='mainSectionContainer'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path= '/today/:cityParam' element={<Today /> }/>
                    <Route path= '/week/:cityParam' element={<Week /> }/>
                </Routes>
            </div>
        </div>


    </div>

    </Context.Provider>

  );
}

export default App;
