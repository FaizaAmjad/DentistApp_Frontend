import { Api } from './api'

export const login = async ( email) => {
    const response = await Api().post('users/', { })
    return response.data.token}