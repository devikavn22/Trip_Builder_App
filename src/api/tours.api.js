import axios from "axios";

export const getTours = async () => {
  try {
    const response = await axios.get(
      "https://www.course-api.com/react-tours-project"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching tours:", error);
    throw error;
  }
};
