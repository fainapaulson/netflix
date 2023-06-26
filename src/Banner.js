import React, { useEffect, useState } from 'react'
import instance from './baseUrl'
import { requests } from './requests'
import './banner.css'

function Banner() {
    // state
    const [movie,setMovie]=useState({})
    const baseUrl = "https://image.tmdb.org/t/p/original/";

    const fetchData=async ()=>{
        const {data}=await instance.get(requests.fetchTrending)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }

    console.log(movie);
    
    const truncate =(str,n)=>{
        return str?.length>n ? str.substr(0,n)+"....":str
    }


    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='banner'
    style={{backgroundImage:`url(${baseUrl}${movie.backdrop_path})`
}}

    >
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <p>{truncate(movie?.overview,200)}</p>

        </div>


    </div>
  )
}

export default Banner