import React from 'react'
import  { Redirect, useHistory  } from 'react-router-dom'
const baseUrl = 'http://localhost:5000/api/'


const getUser = () => {
    return fetch(`http://localhost:5000/api/users/`)
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        //this.setState({ totalReactPackages: data.total })
        //console.log(data)
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
}

const getUserById = (id) => {
    return fetch(`http://localhost:5000/api/users/${id}`)
    .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        console.log(data)
    })
    .catch(error => {
        //this.setState({ errorMessage: error.toString() });
        console.error('There was an error!', error);
    });
}

const addNewUser = (data) => {
    return fetch('http://localhost:5000/api/users/', {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(async res => {
        var user = await res.json();
        if(user){
           
            localStorage.setItem("user",JSON.stringify(user.user))
            localStorage.setItem("token",JSON.stringify(user.token))
            window.location.href = "/myhome";
           
        }
    })
}

const loginUser = (data) => {
    return fetch('http://localhost:5000/api/login', {
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async res => {
        var user = await res.json();
        if (!res.ok) {
            // get error message from body or default to response status
            const error = (user && user.message) || res.status;
            return Promise.reject(error);
        }

            localStorage.setItem("user",JSON.stringify(user.user))
            localStorage.setItem("token",JSON.stringify(user.token))
           
            window.location.href = "/myhome";
    })
    .catch(error => {
       // this.setState({ errorMessage: error.toString() });
       alert("Can't log in ");
        console.error('There was an error!', error);
    });
}


 
    


export {getUser, getUserById, addNewUser, loginUser, baseUrl}