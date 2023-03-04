import React,{Component} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Line, LineChart,CartesianGrid,XAxis, YAxis, Tooltip, Legend } from "recharts";

export default class Graph extends Component{
state ={

}
static contextType = GlobalContext
render(){
const {movementType, data} = this.context
let graphdata = data[movementType]
return(
<>
<LineChart width={1000} height={500} data={graphdata}
margin={{ top: 70, right: 30, left: 20, bottom: 5 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="date" interval="preserveStartEnd" />
<YAxis/>
<Tooltip />
<Legend />
<Line type="monotone" dataKey="total" stroke="#8884d8" />
</LineChart>
</>
)
}
}