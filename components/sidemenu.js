import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { GlobalContext } from '../context/GlobalState';

export default class SideMenu extends React.Component {

static contextType = GlobalContext
handleChange = (event) => {

const {changeMovementType} = this.context
changeMovementType(event.target.textContent)
};
render(){
let typesarray = []
const {movementType, data} = this.context
for (let _key in data) {
typesarray.push(_key)
}

return (
<Box
sx={{ flexGrow: 1, bgcolor: 'background.paper', height: "100vh" }}
>
<Tabs
orientation="vertical"
value={movementType}
onChange={this.handleChange}
aria-label="Vertical tabs example"
sx={{ borderRight: 1, borderColor: 'divider' }}
>
{
typesarray.map((item,i) => {
return <Tab label={item} value={item} key={item} id= {`vertical-tab-${i}`}
aria-controls= {`vertical-tabpanel-${i}`} />
})}
</Tabs>
</Box>
);
}
}
