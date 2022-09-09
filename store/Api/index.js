import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { setIsLoading, setNewsData } from '../Slices/NewsSlice'

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `https://api.nytimes.com/svc/mostpopular/v2/`
    }),
    tagTypes: ['News'],
    endpoints: (builder) => ({
        getPopularNewsByPeriod: builder.query({
            query: (period) => ({url: `emailed/${period}.json?api-key=iJTfy4A68D2C56AIFXo2MfaQmBw0JZOn`}),
            providesTags: (result, error, period) => [{type: 'News', period}],
            async onQueryStarted(
                args,
                {
                    dispatch,
                    getState,
                    queryFulfilled,
                }
            ) {
                console.log(args, "QUERY STARTED")
                dispatch(setIsLoading(true));
                try {
                    const {news} = getState()
                    const {data} = await queryFulfilled
                    const {results} = data;
                    
                    if(news?.data?.length && results?.length) {
                        const temp = [...news.data, ...results];
                        dispatch(setNewsData(temp));
                    } else if (results.length) {
                        dispatch(setNewsData(results));
                    }
                } catch (err) {
                    console.log(err);
                }
                dispatch(setIsLoading(false));
            },
        })
    }),
})

export const { 
    useGetPopularNewsByPeriodQuery
} = newsApi