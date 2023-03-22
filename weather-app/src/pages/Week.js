import React , {useEffect, useContext, useRef} from 'react'
import {Link, useParams} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import WeekCard from '../components/WeekCard'
import UvDetailsCard from '../components/UvDetailsCard'
import WindDetailsCard from '../components/WindDetailsCard'
import SunDetailsCard from '../components/SunDetailsCard'
import '../style/weekStyle.css'
import {useSelector, useDispatch} from 'react-redux'
import {useGetNowCastQuery, useGetWeekCastQuery } from '../redux/services/weatherApi'
import {weatherIconsArray} from '../assets/api'
import {formatDate} from '../assets/formatDate'
import {setCity, setPreviousUvIndex, setClickedCardIndex} from '../redux/slices/locationSlice'
import {Context} from '../App'


const Week = () =>{

const {clickedCardIndex, id} = useSelector(state=> state.location)
const dispatch = useDispatch()
const {cityParam} = useParams()

useEffect(()=>{
dispatch(setCity(cityParam))
}, [cityParam])

useEffect(()=>
{
return () =>{
dispatch(setClickedCardIndex(-1))
dispatch(setPreviousUvIndex(NaN))
}
}, [])

const details = useRef()

const {locationData} = useContext(Context)

//fetch data of one week, including today's highlight
const {data: weekData, isLoading: isLoadingWeek, isError: isErrorWeek} = useGetWeekCastQuery(id)

return(
        <>
        <div className='weekPageContainer'>
        <p className="weekHeaders">This week</p>
        { weekData ?(
        <Swiper
        className="swiper"
        modules={[Navigation]}
        navigation
        breakpoints={{
        0:{slidesPerView: 1},
        480:{
        slidesPerView: 2,
        spaceBetween: 16
        },
        768: {
        slidesPerView: 4,
        spaceBetween: 16},
        1024: {
        slidesPerView: 6,
        spaceBetween: 16},
        1150: {
        slidesPerView: 8,
        spaceBetween:16
        }
        }}
        >
        {
        weekData && weekData?.forecast?.map((element, index) => (
        <SwiperSlide key={index}>
        <WeekCard
                index={index}
                weekData= {weekData}
                description={ element.symbolPhrase || weatherIconsArray.find((obj) => obj.symbol === element?.symbol)?.description}
                date={element.date}
                image = {weatherIconsArray.find((obj) =>obj.symbol === element?.symbol).image}
                minTemperature={element.minTemp}
                maxTemperature={element.maxTemp}

        />
        </SwiperSlide>
        ))
        }

        </Swiper>
        ) : (<p>No estimation available for the next coming 2 hours</p>)

        }

        {clickedCardIndex >=0 &&
        <div>

           <p className="weekHeaders"
            ref={details}>
            More details for {clickedCardIndex===0 ? 'today' : formatDate(weekData?.forecast[clickedCardIndex]?.date, "standardDate") }
           </p>
            <div className = 'weekTodayDetails'>
                <UvDetailsCard  weekData={weekData} index={1} clickedCardIndex={clickedCardIndex}/>
                <WindDetailsCard weekData={weekData} index={2} clickedCardIndex={clickedCardIndex}/>
                <SunDetailsCard weekData={weekData} index={3} clickedCardIndex={clickedCardIndex}/>
                <WindDetailsCard weekData={weekData} index={4} clickedCardIndex={clickedCardIndex}/>
                <WindDetailsCard weekData={weekData} index={5} clickedCardIndex={clickedCardIndex}/>
                <SunDetailsCard weekData={weekData} index={6} clickedCardIndex={clickedCardIndex}/>
            </div>
        </div>
            }
            {clickedCardIndex < 0 &&
            <div style={{
                        display: 'flex',
                        justifyContent:'center',
                        alignItems: 'center',
                        backgroundColor: '#0D9EE7',
                        borderRadius: "5px",
                        color: 'white',
                        margin: '24px',
                        height: '150px'
                        }}>
                 <h3>Click on the cards to see more details</h3>
            </div>
            }
          </div>
        </>
)


}
export default Week