// Importing Axios for API calling
import axios from "axios";
import { strings } from "../utils/strings";

// Importing BASE_URL for API Calling
import { BASE_URL } from "./endpoints";


/**
 * Function: fetchImages
 * Purpose: Fetches a list of images from the Picsum API.
 * 
 * Returns:
 * - An array of image objects if the request is successful.
 * - An empty array `[]` if an error occurs.
 */

export const fetchImages = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/v2/list`);
      return response.data;
  } catch (error) {
      console.error(strings.error1, error);
      return [];
  }
};


/**
 * Function: fetchImageById
 * Purpose: Fetches detailed information about a specific image by its ID.
 * 
 * Parameters:
 * - id (number | string): The ID of the image to fetch.
 * 
 * Returns:
 * - An object containing image details if successful.
 * - `null` if an error occurs.
 */

export const fetchImageById = async (id) => {
  try {
      const response = await axios.get(`${BASE_URL}/id/${id}/info`);
      return response.data;
  } catch (error) {
      console.error(strings.error2, error);
      return null;
  }
};

