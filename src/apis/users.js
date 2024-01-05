import { Api } from './api'

export const login = async ( email) => {
    const response = await Api().post('users/', {email})
    return response.data.token}

export const getUsers = async (email) => {
    const response = await Api().get(`users?email=${email}`)
    console.log('response.data.id: ' + response.data._id)

    return response.data._id
}