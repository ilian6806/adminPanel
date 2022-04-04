
const BASE_URL = 'http://localhost:4000';

const fetchData = async (url, callback) => {
    const response = await fetch(BASE_URL + url);
    const data = await response.json();
    callback(data);
};

export default fetchData;