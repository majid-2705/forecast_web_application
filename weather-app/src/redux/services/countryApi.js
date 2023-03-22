import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'spott.p.rapidapi.com',
        'x-rapidapi-key': '6e4bb62ec0msh084a4eb0f5c4a3bp149a1ejsn039034dc54d7',

};

const createRequest = (url) => ({ url, headers: cryptoNewsHeader});

export const countryApi = createApi({
reducerPath: 'countryApi',
baseQuery : fetchBaseQuery({
      baseUrl : 'https://spott.p.rapidapi.com'
            }),
endpoints: (builder) =>({

//retrieve the user's location (city)
getCity : builder.query({ query: ()=> createRequest('/places/ip/me')

 }),

})
})
export const {useGetCityQuery} = countryApi