import {getJSON} from "jquery"

const api = process.env.REACT_APP_RECORDS_API_URL || "https://5c71a5d70eddba001435b63a.mockapi.io/"

export const getAll = () =>
    getJSON(`${api}/api/v1/records`)