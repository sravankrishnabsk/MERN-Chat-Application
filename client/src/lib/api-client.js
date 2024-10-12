// We are going to create a wrapper of our axios and all library functions that we are going to use to interact with our API. This will make it easier to manage our API calls and also to handle errors in a centralized way.

import { HOST } from "@/utils/constants";
import axios from "axios";

// The code below creates an instance of axios with a base URL of the server URL. This instance will be used to make all API calls to the server. This will make it easier to manage the base URL and also to handle errors in a centralized way.
const apiClient = axios.create({
    baseURL: HOST,
});

export default apiClient;