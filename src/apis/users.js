import { Api } from './api'

export const login = async ( email) => {
    const response = await Api().post('users/', {email})
    return response.data.token}

export const getUserInfo = async () => {
    const response = await Api().get('me')
    
    return response.data
}