import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/movie/day',
  params: {language: 'en-US'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDc1NDMxMGIwZjVmNTc4OTY2NTlkN2U3YjNiM2M5OSIsInN1YiI6IjY1MTZjZTQxOTY3Y2M3MDBlMjljNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gX7IIO1mra9GDRtn9YVtq6jk4lp-mVqNo-qkDjk4fA0'
  }
};

export const findTrending = async () => {
	const { data } = await axios(options)
    return data;
}