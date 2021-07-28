import axios from 'axios';

const KEY = "AIzaSyBu-qyTk-AIFoco8rXtLTvG8oeax7l_zko";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});