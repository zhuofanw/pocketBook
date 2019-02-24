import {getJSON} from "jquery";
import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || "https://5c71a5d70eddba001435b63a.mockapi.io/"

export const getAll = () =>
    axios.get(`${api}/api/v1/records`)
export const create = (body) =>
    axios.post(`${api}/api/v1/records`,body)