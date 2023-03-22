import React, {useContext,useEffect} from 'react'
import {Context} from '../App'
import '../style/homeStyle.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {setCity, setClickedCardIndex, setPreviousUvIndex, setAdminArea} from '../redux/slices/locationSlice'


let Home = ()=>{

const {fetchedCity, locationData} = useContext(Context)
const dispatch = useDispatch()
const {clickedCardIndex} = useSelector(state => state.location)
const {city} = useSelector(state => state.location)

useEffect(()=>{
dispatch(setCity(`${fetchedCity?.name}+${fetchedCity?.country?.name}+${fetchedCity?.country?.id}`))

}, [])
useEffect(()=>{
dispatch(setClickedCardIndex(-1))
dispatch(setPreviousUvIndex(NaN))
}, [clickedCardIndex, city])

useEffect(()=>{
dispatch(setAdminArea(locationData?.locations[0]?.adminArea2))
}, [locationData?.locations[0]?.id])

return(
<>
<div className="homeContainer">
<h3 className='homeHeader'>World Weather Forecast Application</h3>
<p className='homePresentation'>Your current location is <span className='usersCity'>{fetchedCity?.name}</span>.<br/>
Get more details about <Link className='todaysDetails' to={`/today/${fetchedCity?.name}`} >today&#39;s</Link> and next <Link className='weekDetails' to={`/week/${fetchedCity?.name}`}>week&#39;s</Link> weather forecast in {fetchedCity?.name}!
</p>

</div>

</>
)
}
export default Home