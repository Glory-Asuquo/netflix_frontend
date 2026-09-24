import axios from 'axios';

export default axios.create({
    baseURL:'http://3.148.250.222:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
