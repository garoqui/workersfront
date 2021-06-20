import React, { useEffect, useState } from 'react'
import { getAll, findByID } from '../../services/service.service'
import  ModalService  from '../services/service.modal'


const GetServices = () => {

    //show or not modal window
    const [visibleModal, setVisibleModal] = useState(false)
    //all services
    const [services, setService] = useState([])
    //service by id
    const [ serviceSelected, setServiceSelected] = useState({})

    //charge services to services hook
    useEffect(() => {        
        getAll().then( res => setService(res)).catch( err => console.log(err))
           
    },[])

    useEffect(() => {        
        getAll().then( res => setService(res)).catch( err => console.log(err))
    },[visibleModal])

    
    //charge service to serviceSelected
    const getService = (id)=>{                
            findByID(id)
            .then(res=>{
                setServiceSelected(res)
                openModal()
            })        
    } 

    ///open modal
    const openModal = ()=>{
        setVisibleModal(true)
        
    }

     ///close modal
     const closeModal = ()=>{
        setVisibleModal(false)
        
    }


    

    return (
        <div>
            <div><h2>SERVICIOS</h2></div>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Servicio</th>
                        <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(res => (
                            <tr key={res._id}>
                                <td>{res.name}</td>
                                <td>
                                    <button type="button" className="btn btn-success" onClick= {()=> getService(res._id)}>E</button>
                                    <button type="button" className="btn btn-danger" onClick={()=> openModal()} >X</button>                                   
                                </td>
                            </tr>
                        )
                        )
                    }

                </tbody>
            </table>
            <ModalService isOpen={visibleModal} isClose={closeModal} service={serviceSelected} ></ModalService>
        </div>

    )
}

export default GetServices