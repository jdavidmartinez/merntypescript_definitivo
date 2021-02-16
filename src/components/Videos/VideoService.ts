import axios from 'axios'
import {Video} from './Video'

//const API = 'http://localhost:4000'

export const getVideos = async () => {
    return  await axios.get('http://localhost:4000/videos')
    
}
export const createVideo = async (video: Video) => {
    return  axios.post('http://localhost:4000/videos', video)
    
}