import { Api } from './api'

export const createEmergencySlot = async (start,end,dentist_id,clinic_id) => {
    const response = await Api().post('emergency-slots/create',{ 
    start : start,
    end :end,
    dentist_id:dentist_id,
    clinic_id:clinic_id
    })
    return response.data 
}

export const deleteEmergencySlot = async (emergencySlot_id) => {
    const response = await Api().delete(`emergency-slots/${emergencySlot_id}`)
    return response.data
}

export const getEmergencySlots = async (date) => {
    const response = await Api().get(`emergency-slots/${date}`, {
        date: date,
    })
    return response.data
}

export const modifyBarrierScore = async (newLow, newMedium, newHigh) => {
    const response = await Api().put('emergency-slots/barrier', {
        newLow: newLow,
        newMedium: newMedium,
        newHigh: newHigh
    })
    return response.data
}

export const modifyAvailability = async (newAvailability) => {
    const response = await Api().put('emergency-slots/availability', {
        availability: newAvailability
    })
    return response.data
}