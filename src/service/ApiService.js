import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/twitter/search/recent';

class ApiService {
    searchTwitter(mood) {
        return axios.get(USER_API_BASE_URL + '/' + mood);
    }

}

export default new ApiService();