import axios from 'axios'

const URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {maxResults: '100'},
  headers: {
    'X-RapidAPI-Key': 'fb08c70e0cmshe105fcfe8b478fdp1f53b1jsnd1902e2d1e0b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const axiosAPI = async (url) => {
    const { data } = await axios.get(`${URL}/${url}`, options)
    return data
}