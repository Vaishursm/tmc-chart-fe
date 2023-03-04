import Header from './components/header';
import {Grid} from '@mui/material'
import SideMenu from './components/sidemenu';
import { GlobalProvider } from './context/GlobalState';
import Graph from './components/graph';
import TimeRange from './components/timerange';

function App() {
return (
<GlobalProvider>
<Header/>
<Grid container spacing={2} style={{"marginTop": "1rem"}}>
<Grid item xs={3} sm={3} md={2} lg={2}>
<SideMenu/>
</Grid>
<Grid item xs={9} sm={9} md={10} lg={10}>
<TimeRange/>
<Graph/>
</Grid>
</Grid>
</GlobalProvider>
);
}

export default App;
