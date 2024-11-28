export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=10',
  headers: {
    'x-rapidapi-key':'55f76791c3msh2abf30b33d3862cp10d788jsn45c36aa54bdd',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '55f76791c3msh2abf30b33d3862cp10d788jsn45c36aa54bdd',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async(url, options) =>{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;

}