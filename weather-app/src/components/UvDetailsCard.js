import React, {useRef, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import '../style/uvDetailsCardStyle.css'
import '../style/guageStyle.css'
import {setPreviousUvIndex, setClickedCardIndex} from '../redux/slices/locationSlice'

const UvDetailsCard = ({weekData, clickedCardIndex}) =>{
const {previousUvIndex, city} = useSelector(state=>state.location)
const dispatch = useDispatch()


useEffect(()=>{
var currentUvIndex = weekData?.forecast[clickedCardIndex]?.uvIndex
if(currentUvIndex >12)
{
currentUvIndex = 12
}

//previousIndex > 0
if(clickedCardIndex >=0 && previousUvIndex)
{
let keyFrames =[
{transform: `rotate(${previousUvIndex*180/12}deg)`},
{transform: `rotate(${currentUvIndex*180/12}deg)`}
]
const angle = Math.abs(previousUvIndex*180/12 - currentUvIndex*180/12 )
let duration = 750
document.getElementById("recto").animate(keyFrames, duration)
//when animation is finished, rotate in angle that corresponds to the current UVindex
document.getElementById("recto").style.transform = `rotate(${currentUvIndex*180/12}deg)`
dispatch(setPreviousUvIndex(currentUvIndex))
}

//previousIndex=0
if(clickedCardIndex >=0 && !previousUvIndex)
{


let keyFrames =[
{transform: `rotate(0deg)`},
{transform: `rotate(${currentUvIndex*180/12}deg)`}
]
const duration = 500
document.getElementById("recto").animate(keyFrames, duration)
//when animation is finished, rotate in angle that corresponds to the current UVindex
document.getElementById("recto").style.transform = `rotate(${currentUvIndex*180/12}deg)`
dispatch(setPreviousUvIndex(currentUvIndex))
}


if(clickedCardIndex<0)
{
let keyFrames =[
{transform: `rotate(0)`},
{transform: `rotate(${weekData?.forecast[0]?.uvIndex*180/12}deg)`}
]
const duration = 500
document.getElementById("recto").animate(keyFrames, duration)
//when animation is finished, rotate in angle that corresponds to the current UVindex
document.getElementById("recto").style.transform = `rotate(${weekData?.forecast[0]?.uvIndex*180/12}deg)`

}


}, [clickedCardIndex <0 ? weekData : clickedCardIndex])
return (
   <div className="uvDetailsCardContainer">
   <p className='uvCardHeader'>UV index</p>
       <div className="guageContainer">

           <div className='guageChildContainer'>
            <div  className="indexContainer">
                  <div className="rotativeRect" id='recto'
                  >


                  </div>
            </div>
            <div className="index">

            </div>
            <div className ="indexCover">
            </div>

            <div className ="cover">
            {   weekData?.forecast[clickedCardIndex]?.uvIndex > 12 ? <p>>12</p> :
                <p>{weekData?.forecast[clickedCardIndex < 0 ? 0 : clickedCardIndex]?.uvIndex}</p>

            }

            </div>
             <div className='rect' >
             </div>
             <div className='span1Container'>
             <span>3</span>
             </div>
             <div className='span2Container'>
             <span>9</span>
             </div>


           </div>
        </div>

   </div>
)
}
export default UvDetailsCard