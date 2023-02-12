import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const cryptoNewsHeader = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
    'x-rapidapi-key': '6e4bb62ec0msh084a4eb0f5c4a3bp149a1ejsn039034dc54d7',
};
const createRequest = (url) => ({ url, headers: cryptoNewsHeader});

export const weatherApi = createApi({
reducerPath: 'weatherApi',
baseQuery : fetchBaseQuery({
    baseUrl : 'https://foreca-weather.p.rapidapi.com/',
            }),
endpoints: (builder) =>({
getSearchLocation : builder.query({ query: (city)=> createRequest(`/location/search/${city}`) }),

getCurrentWeatherApi : builder.query({ query:  (id) => createRequest(`/current/${id}`)}),

//this returns data of the forecast for every 15 min
getNowCast : builder.query({ query: (id) => createRequest(`/forecast/15minutely/${id}`)}),

getWeekCast: builder.query({ query:(id) => createRequest(`/forecast/daily/${id}&?alt=0&tempunit=C&windunit=MS&periods=8&dataset=full`)})

})
})
export const {useGetSearchLocationQuery,
                useGetCurrentWeatherApiQuery,
                useGetNowCastQuery,
                useGetWeekCastQuery} = weatherApi
