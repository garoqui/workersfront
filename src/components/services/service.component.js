import React, { useEffect, useState } from 'react'
import { getAll, findByID } from '../../services/service.service'
import  ModalService  from '../services/service.modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import SearchService from './service.search'


const GetServices = () => {

    //show or not modal window
    const [visibleModal, setVisibleModal] = useState(false)
    //all services
    const [services, setService] = useState([])
    //service by id
    const [ serviceSelected, setServiceSelected] = useState({})
    //search charge
    const [ search, setSearch] = useState([])

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

    //set search
    const handleSearch = ( e )=>{
        if(e.target.value.length){
            const serviceFilter = services.filter( ser => ser.name.toLowerCase().includes(e.target.value.toLowerCase()))        
            setSearch(serviceFilter)
        }else{            
            setSearch([])
        }       
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
        <div className="p-3">
            <div className="row">
                <div className="col-sm-6 text-left   "><h5>Servicios</h5></div>

                <div className="col-sm-3">
                    <div className=" input-group mb-3 text-right">
                        <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
                        <input type="text" className="form-control" onChange = { (e)=>handleSearch(e)} aria-label="search" />
                    </div>

                    <div>
                        <SearchService service={search}/>
                    </div>

                </div>
                
                <div className="col-sm-3 text-left"><button type="button" className="btn btn-success">Nuevo Servicio</button></div>
            </div>
            
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