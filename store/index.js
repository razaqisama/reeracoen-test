import { configureStore } from "@reduxjs/toolkit";
import News from "./Slices/NewsSlice";

import {newsApi} from './Api';

const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        news: News
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(newsApi.middleware)
    }
})

export default store