import React from 'react';
import { Line, XAxis, YAxis, Tooltip, LineChart, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Stats.css'

const data = [
	{x: "2023-06-17", y: 132244806},
	{x: "2023-06-18", y: 132248957},
	{x: "2023-06-19", y: 132252047},
	{x: "2023-06-20", y: 132258177},
	{x: "2023-06-21", y: 132243114},
	{x: "2023-06-22", y: 132234896},
	{x: "2023-06-23", y: 132229792},
];

export default function Demo() {
    return (
		<>
		<h1 className="userTitle">Barack Obama's Twitter</h1>
		<h2 className="userGraphTitle">Followers over Time</h2>
		<ResponsiveContainer width="95%" aspect={3}>
		<LineChart
		  width={500}
		  height={300}
		  data={data}
		  margin={{
			top: 40,
			right: 40,
			left: 40,
			bottom: 40,
		  }}
		>
		  <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
		  <XAxis dataKey="x" tick={{fill:"#000"}}/>
		  <YAxis tick={{fill:"#000"}} domain={[132220000, 132260000]} />
		  <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#000" }} itemStyle={{ color: "#000" }} cursor={false}/>
		  <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
		  
		</LineChart>
	  </ResponsiveContainer>
	</>
    );

}