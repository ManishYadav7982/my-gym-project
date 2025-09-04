// ✅ API Keys
const API_NINJAS_KEY = 'gHUNlF5WRp7mIhWiTh366A==VtWb4MeMNmeFYFqw';
const YOUTUBE_API_KEY = '645320a5f1mshb76626d68f1db4ep1bfbfajsn679d95fdc365';

// ✅ Options for exercise API (API-Ninjas)
export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-Api-Key': "gHUNlF5WRp7mIhWiTh366A==VtWb4MeMNmeFYFqw",
  },
};

// ✅ Options for YouTube API (RapidAPI)
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':  '645320a5f1mshb76626d68f1db4ep1bfbfajsn679d95fdc365',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

// ✅ ✅ Only ONE export fetchData function here
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

