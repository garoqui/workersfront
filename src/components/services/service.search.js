import React, {useState, useEffect} from 'react'




const SearchService = ( {service})=>{
    
    const [serviceSelected, setServiceSelected] = useState([]) 
        

    useEffect(()=> {        
        if(service.length> 0){
            console.log(service)
            setServiceSelected(service) 
        }else{
            console.log("servicio vacio")
            setServiceSelected([])
        }        
    },[service])

    return(
        <div class="bg-light">
            <div class={serviceSelected.length>0 ? 'dropdown position-absolute bg-light' : 'dropdown-menu position-absolute bg-light'}>
            {serviceSelected.map( res =>(
                    <a className="dropdown-item cursor-pointer" key={res._id}>{res.name}</a>
                ))}    
            </div>  
        </div>
        
    )
}

export default SearchService