import axios from 'axios';

export default axios.create({
    baseURL:'http://3.143.23.134',
    headers: {
        'Content-Type': 'application/json',
    },
});
