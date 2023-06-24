import React from 'react';
import { Line, XAxis, YAxis, Tooltip, LineChart, CartesianGrid, ResponsiveContainer } from 'recharts';
import './Stats.css'
import { readUser } from '../functions/Database-Functions';
import { useState, useEffect } from "react";
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';

export default function Stats() {
  
  const [userInfo, setUserInfo] = useState({});
  const [user, setUser] = useState("");

  onAuthStateChanged(auth, (user) => {
		if (user) {
      setUser(user);
    }
	})
 
  useEffect(() => {
    readUser(user)
    .then((res) => {
      setUserInfo(userInfo => ({...res}));
    })
  }, [user])
  
  return (
		<>
		<h1 className="userTitle">{userInfo.username}'s Twitter</h1>
		<h2 className="userGraphTitle">Followers over Time</h2>
		<ResponsiveContainer width="95%" aspect={3}>
		<LineChart
		  width={500}
		  height={300}
		  data={userInfo.stats}
		  margin={{
			top: 40,
			right: 40,
			left: 40,
			bottom: 40,
		  }}
		>
		  <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
		  <XAxis dataKey="x" tick={{fill:"#000"}}/>
		  <YAxis tick={{fill:"#000"}} domain={[0, 5]} />
		  <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
		  <Line type="monotone" dataKey="y" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
		  
		</LineChart>
	  </ResponsiveContainer>
	</>
    );

}