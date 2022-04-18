import axios from "axios";

export const getPhoto = async () => {
    return (await axios.get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24')).data;
}

export const getPhotoInformation = async (getLocation: string) => {
    return (await axios.get(`https://jsonplaceholder.typicode.com/photos?id=${getLocation}`)).data;
}