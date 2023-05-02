import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const host = `${process.env.REACT_APP_HOST_FORECAST}`
const key = `${process.env.REACT_APP_KEY}`

const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': host,
    'x-rapidapi-key':  key,
};

const _BASEURL = `https://${host}`
const createRequest = (url) => ({ url, headers: cryptoNewsHeader});

export const weatherApi = createApi({
reducerPath: 'weatherApi',
baseQuery : fetchBaseQuery({
    baseUrl : _BASEURL
            }),
endpoints: (builder) =>({
//Fetch the forecast data based on the user's location
getSearchLocation : builder.query({ query: (city)=> createRequest(`/location/search/${city}`)}),

getLoc : builder.query({ query: ({city, country})=> createRequest(`/location/search/${city}?country=${country}`)}),

//fetch current weather forecast
getCurrentWeatherApi : builder.query({ query:  (id) => createRequest(`/current/${id}`)}),

//fetch data of the forecast for every 15 min
getNowCast : builder.query({ query: (id) => createRequest(`/forecast/15minutely/${id}`)}),
//fetch data of the forecast for one week
getWeekCast: builder.query({ query:(id) => createRequest(`/forecast/daily/${id}&?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`)})

})
})
export const {useGetSearchLocationQuery,
                useGetCurrentWeatherApiQuery,
                useGetNowCastQuery,
                useGetWeekCastQuery,
                useGetLocQuery} = weatherApi
