import {createContext} from 'react'
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Routes, Route, useParams} from 'react-router-dom'
import SearchComponent from './components/SearchComponent'
import Loader from './components/Loader'
import Error from './components/Error'
import NavBarComponent from './components/NavBarComponent'
import {useGetSearchLocationQuery, useGetCurrentWeatherApiQuery} from './redux/services/weatherApi'
import {useGetCityQuery} from './redux/services/countryApi'
import {setCity} from './redux/slices/locationSlice'
import {useDispatch, useSelector} from 'react-redux'
import Today from './pages/Today'
import Home from './pages/Home'
import Week from './pages/Week'



export const Context = createContext();
const App=()=> {
const {cityParam} = useParams()
const dispatcher = useDispatch()
const {city, clickedCardIndex} = useSelector(state => state.location )




//fetch data on first page load to get user's geolocation
const {data: fetchedCity, isLoading,  isError, isFetching} = useGetCityQuery()
//fetch city's locationdata to pull out the city's id
const {data: locationData, isLoading: loading, isFetching: isFetchingLocation, isError: isErrorLocation} = useGetSearchLocationQuery( city || fetchedCity?.name )
if(isFetchingLocation || isLoading) return <Loader />
if(!locationData?.locations[0]?.id) return <Error city={city}/>

  return (
    <Context.Provider  value={{fetchedCity,locationData}} >
    <div className="App">
        <NavBarComponent />

       {/*contains both sideBar and the main page (today and week pages)*/}
        <div className='pageContainer'>
            <SearchComponent/>

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
