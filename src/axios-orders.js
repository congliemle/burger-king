import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-king-fb1a3.firebaseio.com/'
});

export default instance;