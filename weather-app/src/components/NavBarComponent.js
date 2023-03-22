import React, {useContext,useState, useEffect} from 'react'
import '../style/navbarStyle.css'
import {Context} from '../App'
import {Link} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import {setPhoneMode, setId} from '../redux/slices/locationSlice'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import logo from '../assets/logo.png'


const NavBarComponent = () =>{


const dispatch = useDispatch()
const {fetchedCity, locationData} = useContext(Context)
const {city, isPhoneMode, id} = useSelector(state => state.location)
const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)


const handleClick= () =>{
setIsHamburgerClicked(!isHamburgerClicked)
}


window.addEventListener("resize", ()=>{
checkWindowResizing()
})

useEffect(()=>{
checkWindowResizing()
},[])

function checkWindowResizing (){
if(window.innerWidth<=768)
{
 dispatch(setPhoneMode(true))
}
else {
dispatch(setPhoneMode(false))
}
}

useEffect(()=>{
dispatch(setId(locationData?.locations[0]?.id))
}, [locationData?.locations[0]?.id])



return(
<>
<div className='navBarContainer'  id='nav' >
    <img className='logo' src={logo}/>

    <div className={`menu ${isHamburgerClicked ? "active" : ""}`} id="menu" style={{display: isPhoneMode ?"block" : "flex", left: isHamburgerClicked ? '0' : ""}}>
        <div  className="home">
            <Link to={`/`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Home</h3></Link>
        </div>
         <div className="today">
            <Link  to={`/today/${city}`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Today</h3></Link>
        </div>
         <div  className="today">
            <Link to={`/week/${city}`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Week</h3></Link>
        </div>
    </div>
    {
    isPhoneMode && <div className='hamburgerContainer' >
    {!isHamburgerClicked ? <GiHamburgerMenu id="hamburger" size={24}
                onClick={handleClick}
                /> :
                <AiOutlineClose id="close"
                onClick={()=>setIsHamburgerClicked(false)}
                size={24}
               />}
    </div>

    }
</div>

</>
)
}
export default NavBarComponent