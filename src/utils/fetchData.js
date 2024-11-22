export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=10',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
  };
export const fetchData = async(url, options) =>{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;

}