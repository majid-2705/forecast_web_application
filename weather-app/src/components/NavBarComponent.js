import React, {useContext,useState, useEffect} from 'react'
import '../style/navbarStyle.css'
import {Context} from '../App'
import {Link} from 'react-router-dom'
import {useDispatch ,useSelector} from 'react-redux'
import {setCity} from '../redux/slices/locationSlice'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import logo from '../assets/logo.png'


const NavBarComponent = () =>{


const dispatch = useDispatch()
const {fetchedCity} = useContext(Context)
const {city} = useSelector(state => state.location)

const [isHamburgerClicked, setIsHamburgerClicked] = useState(false)
const [isPhoneMode, setPhoneMode] = useState(false);
const [windowSize, setWindowSize] = useState(window.screen.width)
const handleClick= () =>{
if(isHamburgerClicked)
{
setIsHamburgerClicked(!isHamburgerClicked)
}
else{
setIsHamburgerClicked(!isHamburgerClicked)
}
}


window.addEventListener("resize", function(){
setWindowSize(window.screen.width)
})
useEffect( ()=> {
if(windowSize<425)
{
setPhoneMode(true)
}
else {
setPhoneMode(false)
}
}, [windowSize])



useEffect(()=>{
if(windowSize<425)
{
if(isPhoneMode) {
    const mobileScreen = document.getElementById("mobileMode")
    if(isHamburgerClicked )
    {
    mobileScreen.style.display="block"
    mobileScreen.style.animationName="show"
    }
    else {
    mobileScreen.style.animationName="hide"
    }
    $("#mobileMode").on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(){
    if(!isHamburgerClicked)
    {
    mobileScreen.style.left="-50%"
    }
    else{
    mobileScreen.style.left="0"

    }

    })

}
}
}, [isHamburgerClicked])

return(
<>
<div className='hamburgerContainer'>
{!isHamburgerClicked ? <GiHamburgerMenu size={24}
            onClick={handleClick}
            /> :
            <AiOutlineClose
            onClick={()=>setIsHamburgerClicked(false)}
            size={24}
            />}
</div>
{
isPhoneMode ?
(<div id="mobileMode">

    <div >
    <Link className="home" to={`/`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Home</h3></Link>
    </div>
     <div>
    <Link className="today" to={`/today/${city}`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Today</h3></Link>
    </div>
     <div>
    <Link className="today" to={`/week/${city}`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Week</h3></Link>
    </div>

</div>) :
(
<div className= 'navBarContainer'  id='animation'> <img className='logo' src={logo}/>

    <div className="menu">
        <div >
            <Link className="home" to={`/`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Home</h3></Link>
        </div>
         <div>
            <Link className="today" to={`/today/${city}`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Today</h3></Link>
        </div>
         <div>
            <Link className="today" to={`/week/${city}`} onClick={()=>{setIsHamburgerClicked(false)}} ><h3>Week</h3></Link>
        </div>
    </div>
</div>
)

}
</>
)
}
export default NavBarComponent