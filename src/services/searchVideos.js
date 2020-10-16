import axios from 'axios';
import {
    handleErrors
} from "../utils"

const searchVideos = async (searchText) => {

    try {
        const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&q=
            ${searchText}&type=video&maxResults=50&key=AIzaSyDRW8Omm-brsqLXQ4xJarzScNROnsMurPA`);
        const processedVideoResponse = processVideoResponse(videosResponse)
        return processedVideoResponse

    } catch (err) {
        return handleErrors(err)
    }
}


const processVideoResponse = (videosResponse) => {
    return videosResponse.data.items.map((videoItem) => {
        return {
            videoId: videoItem.id.videoId,
            title: videoItem.snippet.title,
            channelTitle: videoItem.snippet.channelTitle,
            thumbnailSrc: videoItem.snippet.thumbnails.high.url
        }
    })
}

export default searchVideos;
