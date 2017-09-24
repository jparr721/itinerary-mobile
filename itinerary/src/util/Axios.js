import axios from 'axios';

export const BASE_URL = 'http://travelapi-env.2xnegqgnvd.us-east-2.elasticbeanstalk.com/'

export const api = axios.create({
  baseURL: 'http://travelapi-env.2xnegqgnvd.us-east-2.elasticbeanstalk.com/',
});
