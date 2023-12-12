import { Api } from './api'



export const getClinics = async () => {
  const response = await Api().get('clinics')

  return response.data
}
export const book=async(slot_id)=>{
    
    const response = await Api().post(`slots/${slot_id}/book`, {
        booked:true
      })
    
    return response.data}

    
export const unBook=async(slot_id)=>{
    
    const response = await Api().post(`slots/${slot_id}/unbook`, {
       booked:false 
      })
    
    return response.data}