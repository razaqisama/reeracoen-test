import { useRouter } from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { DetailNews, Loader } from "../../components"

import { setDetailedNews, setIsLoading } from "../../store/Slices/NewsSlice";

const News = () => {
    const dispatch = useDispatch();
    const {query} = useRouter();
    
    const {detailedNews, isLoading} = useSelector(state => state.news)
    
    useEffect(() => {
        dispatch(setIsLoading(true));
        dispatch(setDetailedNews({id: query.id}))
        dispatch(setIsLoading(false));
    }, [])

    if(isLoading) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <Loader />
            </div>
        )
    }

    if(!detailedNews) {
        return (
            <div className="w-screen h-screen flex flex-col justify-center items-center px-4">
                <img src="https://i.pinimg.com/564x/1d/83/a6/1d83a6d88d8be5b041a9a98fd5048311.jpg" alt="notfound"></img>
                <p className="text-xl lg:text-4xl font-bold text-center">NOT FOUND</p>
            </div>
        )
    }

    return (
        <div className="pb-16 py-16 px-8">
            <DetailNews 
                title={detailedNews.title}
                byline={detailedNews.byline}
                published_date={detailedNews.published_date}
                abstract={detailedNews.abstract}
            />
        </div>
    )
}


export default News