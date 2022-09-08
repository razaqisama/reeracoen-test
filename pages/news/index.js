import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { PreviewNews } from '../../components/PreviewNews';

const NewsList = () => {
    return (
        <List sx={{ marginTop:"24px", marginBottom:"24px", paddingLeft: "120px", paddingRight: "120px", width: '100%', bgcolor: 'background.paper' }}>
          {Array(100).fill(1).map((value) => (
            <ListItem
              key={value}
              disableGutters
            >
              <PreviewNews />
            </ListItem>
          ))}
        </List>
    )
}


export default NewsList