import React, { useEffect } from 'react';
import LoggedInNavBar from '../NavBar/LoggedInNavBar';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from 'react';

export default function Dashboard() {
    const [users, setUSers] = useState([])

    const data = [
        { name: 'Aug', team1: 95, team2: 90, team3: 80 },
        { name: 'Sep', team1: 65, team2: 35, team3: 30 },
        { name: 'Oct', team1: 90, team2: 70, team3: 75 },
        { name: 'Nov', team1: 50, team2: 50, team3: 45 },
        { name: 'Dec', team1: 75, team2: 80, team3: 85 },
        { name: 'Jan', team1: 70, team2: 30, team3: 20 },        
      ];

    useEffect(() => {
        getUsers()
      }, []);

    const getUsers = async () => {
        const {data: users} = await axios.get('http://localhost:5000/api/users')
        setUSers(users)
    }
    
    return (
        <>
        <LoggedInNavBar />
        <div className="mt-3">
            <h1>Dashboard</h1>
        </div>
        <div className="mt-5 row justify-content-center">
            <div className="col-5">
                <div className="row justify-content-center">
                    <h5>Monthly Scores</h5>
                </div>
                <div className="row justify-content-center">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="team1" stroke="#4ebf61" />
                        <Line type="monotone" dataKey="team2" stroke="#ffa47a" />
                        <Line type="monotone" dataKey="team3" stroke="#8855cc" />
                    </LineChart>
                </div>
            </div>

            <div className="col-5">
                <div className="row justify-content-center">
                    <h5>What's the risk of burnout in your employees?</h5>
                </div>
                {users.map(user => (
                        <div className="row justify-content-center">
                            <div className="col-4">
                            <p key={user._id}>{user.FirstName} {user.LastName}</p>
                            </div>
                            <div className="col-1">
                            <p key={user._id}>{user.scores[0]}</p>

                            </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}

