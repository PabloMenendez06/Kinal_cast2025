import axios from "axios";
import { data } from "react-router-dom";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8080/twitch/v1',
    timeout: 5000
})

export const login = async(data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const register = async(data) =>{
    try {
        return await apiClient.post('/auth/register', data)
    } catch (e) {
        error:true,
        e
    }
}

export const getChannels = async () =>{
    try {
        return await apiClient.get('/channels')
    } catch (e) {
        error: true,
        e
    }
}

export const getFollowedChannels = async () =>{
    try {
        return await apiClient.get('/channels/followed')
    } catch (error) {
        checkResponseStatus(e)
        return{
            error: true,
            e
        }
    }
}
