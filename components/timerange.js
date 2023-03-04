import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TimeRange(){
const {timerange, changeTimeRange} = useContext(GlobalContext)
console.log(timerange)
return(
<FormControl>
<InputLabel id="demo-simple-select-label">Age</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={timerange}
label="Age"
onChange={(event)=>{changeTimeRange(event.target.value)}}
>
<MenuItem value={15}>15 mins</MenuItem>
<MenuItem value={30}>30 mins</MenuItem>
<MenuItem value={45}>45 mins</MenuItem>
<MenuItem value={60}>60 mins</MenuItem>
</Select>
</FormControl>
)
}