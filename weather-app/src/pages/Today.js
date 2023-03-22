import React , {useEffect, useContext} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Pagination, Navigation, EffectCube} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay } from 'swiper';
import {Link, useParams} from 'react-router-dom'
import TwoHoursCard from '../components/TwoHoursCard'
import UvDetailsCard from '../components/UvDetailsCard'
import WindDetailsCard from '../components/WindDetailsCard'
import SunDetailsCard from '../components/SunDetailsCard'
import '../style/todayStyle.css'
import {useSelector, useDispatch} from 'react-redux'
import {useGetNowCastQuery, useGetWeekCastQuery} from '../redux/services/weatherApi'
import {weatherIconsArray} from '../assets/api'
import {setCity, setClickedCardIndex, setPreviousUvIndex} from '../redux/slices/locationSlice'
import {Context} from '../App'
const Today = () =>{

const {clickedCardIndex,previousUvIndex} = useSelector(state => state.location)

const {city, id} = useSelector(state =>state.location)
const dispatch = useDispatch()
const {cityParam} = useParams();

useEffect(()=>{
dispatch(setCity(cityParam))
}, [cityParam])

const {locationData} = useContext(Context)

//fetch data of one week, including today's highlight
const {data: weekData, isFteching: isFetchingWeek, isLoading: isLoadingWeek,isError: isErrorWeek} = useGetWeekCastQuery(id, { skip: !id ? true : false })

//fetch data for the upcoming 2 hours (every 15 min)
const {data, isFetching: isFetchingHourly, isLoading, isError: isErrorNow} = useGetNowCastQuery(id, {skip: !id ? true : false})


return(
        <>
        <p className="headers">Upcoming 2 hours (every 15min) </p>
        { data ? (

        <Swiper
                className="swiper"
                modules={[Navigation, Pagination]}
                navigation
                //pagination={{clickable: true}}
                breakpoints={{
                0: {
                slidesPerView: 1
                },

                480:{
                slidesPerView: 2,
                spaceBetween: 16,
                },
                768:{
                slidesPerView: 4,
                spaceBetween: 16
                },
                1024:{
                slidesPerView: 6,
                spaceBetween: 16
                },
                1150:{
                slidesPerView: 8,
                spaceBetween: 16
                }

                }}

                >
            {
              data && data?.forecast?.map((element, index) => (
                <SwiperSlide>
                <TwoHoursCard
                        key={index}
                        description={ element.symbolPhrase || weatherIconsArray.find((obj) => obj.symbol === element?.symbol)?.description}
                        image = {weatherIconsArray.find((obj) =>obj.symbol === element?.symbol).image}
                        temperature={element.temperature}
                />
                </SwiperSlide>
                ))
            }
        </Swiper>

        ) : (<p>No estimation available for the next coming 2 hours</p>)

        }

        {

        <div>
            <p className="headers">Today&#39;s highlight</p>

            <div className = 'todayDetails'>
                <UvDetailsCard  weekData={weekData} index={1}  clickedCardIndex={clickedCardIndex}/>
                <WindDetailsCard weekData={weekData} index={2} clickedCardIndex={clickedCardIndex}/>
                <SunDetailsCard weekData={weekData} index={3} clickedCardIndex={clickedCardIndex}/>
                <WindDetailsCard weekData={weekData} index={4} clickedCardIndex={clickedCardIndex}/>
                <WindDetailsCard weekData={weekData} index={5} clickedCardIndex={clickedCardIndex}/>
                <SunDetailsCard weekData={weekData} index={6} clickedCardIndex={clickedCardIndex}/>
            </div>

        </div>

        }

        </>
)


}
export default Today