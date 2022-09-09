import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
	name: 'news',
	initialState: {
        data: [],
        detailedNews: {},
        isLoading: false,
	},
	reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setNewsData: (state, action) => {
            state.data = action.payload;
        },
        setDetailedNews: (state, action) => {
            const {id} = action.payload
            const data = JSON.parse(JSON.stringify(state.data));

            const detailedData = data.find((item) => {
                return `${item.id}` === `${id}`
            })

            state.detailedNews = detailedData
        }
	},
})

export const {
    setNewsData,
    setIsLoading,
    setDetailedNews
} = newsSlice.actions

export default newsSlice.reducer