import axios from "axios";
import { API_BASE_URL } from "../redux/constants";

export default axios.create({
  baseURL: API_BASE_URL + "/api/v1",
  headers: {
    "content-type": "application/json"
  }
});


