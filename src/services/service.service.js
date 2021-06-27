import axios from 'axios'
import { URLSERVER }  from '../constants/server'

export const getAll = async()=>{    
    return await axios.get( URLSERVER + "/service/service")
    .then( res => res.data.services)
}

export const findByID = async( id)=>{
    return await axios.put( URLSERVER +"/service/service/"+ id)
    .then( res => res.data.service)
}

export const update = async( id, value )=>{
    return await axios.put( URLSERVER +"/service/service/"+ id , value)
}

export const create = async( value )=>{
    return await axios.post( URLSERVER +"/service/service/", value)

}

