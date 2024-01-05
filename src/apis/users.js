import { Api } from './api'

export const login = async ( email) => {
    const response = await Api().post('users/', {email})
    return response.data.token}

export const getUsers = async () => {
    const response = await Api().get('users')
    return response.data
}