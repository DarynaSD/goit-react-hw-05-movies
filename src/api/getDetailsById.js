import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie';

  export const getDetailsById = async movieId => {
  const { data } = await axios(`${BASE_URL}/${movieId}`, {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDc1NDMxMGIwZjVmNTc4OTY2NTlkN2U3YjNiM2M5OSIsInN1YiI6IjY1MTZjZTQxOTY3Y2M3MDBlMjljNDE1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gX7IIO1mra9GDRtn9YVtq6jk4lp-mVqNo-qkDjk4fA0',
    },
  });

  return data;
};