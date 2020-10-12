import axios from 'axios';

const searchVideos = async (searchText) => {
    // makes post request to backend and returns user token

    try {
        const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&type=video&key=AIzaSyDRW8Omm-brsqLXQ4xJarzScNROnsMurPA`);

        return videosResponse

    } catch (err) {
        // No response indicating a network error
        if (!err.response) {
            return {
                error: "Network Error: Cannot connect to Youtube API"
            }
        }
        return {
            error: "An Error occured, Please contact support"
        }
    }
}

export default searchVideos;
