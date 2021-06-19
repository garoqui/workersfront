import axios from 'axios'
import { URLSERVER }  from '../constants/server'

export const getAll = async()=>{
    console.log( URLSERVER + "/service/service")
    return await axios.get( URLSERVER + "/service/service")
}

export const findByID = async( id)=>{
    return await axios.put( URLSERVER +"/service/service/"+ id)
}

export const update = async( id, value )=>{
    return await axios.put( URLSERVER +"/service/service/"+ id , value)
}

