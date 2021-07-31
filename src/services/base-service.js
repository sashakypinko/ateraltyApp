import axios from 'react-native-axios';
import {API_BASE_URL} from "../config";

export default class BaseService {

    constructor() {
        this.instance = axios.create({
            baseURL: API_BASE_URL,
            params: {
                token: ''
            }
        });
    }

    makeRequest = (request) => {
        return new Promise((resolve, reject) => {
            request
                .then(({data}) => resolve(data))
                .catch(reject);
        })
    }

    get = (url, params = {token: ''}) => {
        const request = this.instance.get(url, {
            headers: {
                'Content-Type': 'application/json',
                token: params.token
            },
            params
        });

        return this.makeRequest(request);
    };

    post = (url, params = {}) => {
        const request = this.instance.post(url, params);

        return this.makeRequest(request);
    };
}