import React,{useState,useEffect} from 'react'
import Card from './Card.jsx';

const Popular = () => {
  const YOUR_API_KEY=import.meta.env.VITE_API_KEY;
  const [movieData,setMovieData]=useState([]);
  const [search,setSearch]=useState("");

  async function fetchMovies(){
    const url=`https://api.themoviedb.org/3/movie/popular?api_key=${YOUR_API_KEY}`;
    const res=await fetch(url);
    const data=await res.json();
    setMovieData(data.results);
  }

  async function searchMovies(){
    const url=`https://api.themoviedb.org/3/search/movie?api_key=${YOUR_API_KEY}&query=${search}`;
    const res=await fetch(url);
    const data=await res.json();
    setMovieData(data.results);
  }

  function inputHandler(e){
    setSearch(e.target.value);
  }

  useEffect(()=>{
    fetchMovies();
  },[]);

  useEffect(()=>{
    if (search.trim() === "") {
      fetchMovies();
      return;
    }
  },[search]);

  return (
    <div>
      <div className='flex justify-center items-center gap-6 mb-8'>
        <input onChange={inputHandler} className='border-2 border-green-300 px-4 py-1' placeholder='Search for a movie...'></input>
        <button onClick={searchMovies} className='px-3 py-1 rounded bg-green-300 text-gray-800'>Search</button>
      </div>
      <div className='grid gap-5 grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 shrink-2 pb-5'>
        {movieData?.map((movie)=>{
          return <Card key={movie.id} data={movie}></Card>
        })}
      </div>
    </div>
  )
}

export default Popular
