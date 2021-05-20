import admin from "firebase-admin";
import serviceAccount from "./serviceKey.json";
import requests from './requests';
import axios from 'axios';
import express from 'express'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://disney-clone-76a2f-default-rtdb.firebaseio.com"
});

    const db = admin.firestore();
    const url = axios.create({
        baseURL : "https://api.themoviedb.org/3",
    })
    
    const [res,setRes] = useState([]);

    { Object.entries(requests).map(([key,value]) => (
        useEffect(() => {
          async function fetchData() {
            const request = await url.get(value);
            const values = request.data.results;
            setRes(values);
            return request;
          }
          fetchData() 
        },[value]),

        res && res.map((movie) => (
          db.ref(`movies/${key}`).doc({id}).set({
            name: movie.name || movie.original_name || movie.title,
            description: movie.overview,
            backdrop_path: movie.backdrop_path,
            poster_path: movie.poster_path,
            date: movie.release_date || movie.first_air_date
          })
          .then((movie) => {        
            console.log("Document written with ID: ", movie.id);
            return {id: movie.id, ...movie.data()}
          })
          .catch(err => {
            console.log(err);
          })