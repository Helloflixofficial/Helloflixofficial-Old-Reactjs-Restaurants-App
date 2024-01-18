import axios from 'axios';
const url = "https://gogoanime.herokuapp.com/anime-movies";

export const function () => {
  return (
    axios.get(url)
  .then(response => response.json())
  .then(data => console.log(data));
  )
}

export default api