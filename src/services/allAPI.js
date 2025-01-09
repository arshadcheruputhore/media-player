import commonAPI from "./commonAPI";
import serverURL from "./server_URL";


// api call for upload video
export const videoUploadAPI = async (reqVideoDetail) => {
    return await commonAPI('POST', `${serverURL}/AllVideos`, reqVideoDetail)     
}


// api call for get videos
export const videoGetAPI = async () => {
    return await commonAPI('GET', `${serverURL}/AllVideos`, '');
}

// api call for delete videos
export const videoDeleteAPI = async (videoID) => {
    return await commonAPI('DELETE', `${serverURL}/AllVideos/${videoID}`, {});
}

// api call for save watch history
export const videoHistoryAPI = async (historyDetail) => {
    return await commonAPI('POST', `${serverURL}/history`, historyDetail);
}

// api call for get watch history
export const watchHistoryAPI = async () => {
    return await commonAPI('GET', `${serverURL}/history`, '')
}

// api call for delete watch history
export const deleteWatchHistory = async (videoID) => {
    return await commonAPI('DELETE', `${serverURL}/history/${videoID}`, {})
}

// api call for add category 
export const addCategoryAPI = async (categoryDetails) => {
    return await commonAPI('POST', `${serverURL}/VideoCategory`, categoryDetails)
}

// api call for get category
export const getCategoryAPI = async () => {
    return await commonAPI('GET', `${serverURL}/VideoCategory`,'')
}

// api cal for delete category
export const deleteCategoryAPI = async (ID) => {
    return await commonAPI('DELETE', `${serverURL}/VideoCategory/${ID}`, {})
}

// api call for get sinle video
export const getDroppedVideo = async (ID) => {
    return await commonAPI('GET', `${serverURL}/AllVideos/${ID}`, '')
}

// api call for get update category
export const updateCategoryAPI = async (categoryID, categoryDetails) => {
    return await commonAPI('PUT', `${serverURL}/VideoCategory/${categoryID}`, categoryDetails)
}