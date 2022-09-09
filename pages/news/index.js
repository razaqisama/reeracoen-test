import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LoadingButton from '@mui/lab/LoadingButton';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Loader, PreviewNews } from '../../components';


import {useGetPopularNewsByPeriodQuery} from '../../store/Api'

const NewsList = () => {
    const [index, setIndex] = useState(0);
    const [paramIndex, setParamIndex] = useState(1);
    const {isLoading} = useGetPopularNewsByPeriodQuery(paramIndex)

    const news = useSelector(state => state.news);

    const loadMoreNews = (e) => {
      e.preventDefault();
      setIndex(index + 1)
      switch (index % 3) {
        case 0:
          setParamIndex(7)
          break;
        case 1:
          setParamIndex(30)
          break;
        default: 
          setParamIndex(1)
          break;
      }
    }
    
    if(isLoading) {
      return (
        <div className="w-screen h-screen flex justify-center items-center">
          <Loader />
      </div>
      )
    }

    return (
      <div className="pb-16 pt-12 px-2 lg:px-16 flex flex-col justify-center items-center">
          <List sx={{width: '100%', bgcolor: 'background.paper' }}>
            {news.data.map((item, index) => (
              <ListItem
                key={index}
              >
                <PreviewNews 
                  id={item.id}
                  title={item.title}
                  abstract={item.abstract}
                  section={item.section}
                  byline={item.byline}
                  media={item.media}
                  published_date={item.published_date}
                  des_facet={item.des_facet}
                />
              </ListItem>
            ))}
          </List>
          <LoadingButton 
            onClick={loadMoreNews}
            className="w-full" 
            loading={news.isLoading} 
            variant="outlined">
            Load More News
          </LoadingButton>
      </div>

    )
}


export default NewsList