import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const host = `${process.env.REACT_APP_HOST_LOCATION}`
const key = `${process.env.REACT_APP_KEY}`

console.log(host)
const cryptoNewsHeader = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': host,
        'x-rapidapi-key':  key,

};

const _BASEURL = `https://${host}`
const createRequest = (url) => ({ url, headers: cryptoNewsHeader});

export const countryApi = createApi({
reducerPath: 'countryApi',
baseQuery : fetchBaseQuery({
      baseUrl : _BASEURL
            }),
endpoints: (builder) =>({

//retrieve the user's location (city)
getCity : builder.query({ query: ()=> createRequest('/places/ip/me')

 }),

})
})
export const {useGetCityQuery} = countryApi