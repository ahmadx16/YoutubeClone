import axios from 'axios';
import {
    handleErrors
} from "../utils"

const getVideoDetails = async (videoId) => {

    try {
        const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&part=statistics&key=AIzaSyDRW8Omm-brsqLXQ4xJarzScNROnsMurPA`);

        const processedVideoDetail = processVideoDetail(videosResponse)
        return processedVideoDetail

    } catch (err) {
        return handleErrors(err)
    }
}

const processVideoDetail = (videosResponse) => {
    const videoDetail = videosResponse.data.items[0]

    return {
        title: videoDetail.snippet.title,
        channelTitle: videoDetail.snippet.channelTitle,
        description: videoDetail.snippet.description,
        viewCount: videoDetail.statistics.viewCount
    }
}

export default getVideoDetails;
