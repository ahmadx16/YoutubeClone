export const addCommasToNumber = (number) => {
    return parseInt(number).toLocaleString()
}

export const handleErrors = (err) => {
    // No response indicating a network error
    if (!err.response) {
        return {
            error: "Network Error: Cannot connect to Youtube API"
        }
    }
    if (err.response.status === 403) {
        return {
            error: "Youtube quota for today has expired"
        }
    }
    return {
        error: "An Error occured, Please contact support"
    }
}
