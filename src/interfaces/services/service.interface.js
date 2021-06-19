import React from 'react'
import {getAll}  from '../services/service'


function ServicesCrud (){

    const getServices = ()=>{
        const services = await getAll;
        return services;
    }


}

export default ServicesCrud