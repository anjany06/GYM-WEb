export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList?limit=10',
  headers: {
    'x-rapidapi-key':'9698000bc5mshfee972b6c5a30e8p181602jsn377b1da073b1',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9698000bc5mshfee972b6c5a30e8p181602jsn377b1da073b1',
      'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
export const fetchData = async(url, options) =>{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;

}