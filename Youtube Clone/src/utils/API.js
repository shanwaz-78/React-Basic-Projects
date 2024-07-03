const BASE_URL = `https://youtube-v31.p.rapidapi.com`;

async function fetchData(url) {
  const requestHeader = {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(`${BASE_URL}/${url}`, requestHeader);
    if (!response.ok) {
      throw new Error(`Invalid api key or url`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`${error.message}: ${error}`);
    throw error;
  }
}

export default fetchData;
