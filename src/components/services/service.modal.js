import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { update } from '../../services/service.service'


const ModalService = ({isOpen, isClose, service}) => {

   const [ initialService, setService] = useState({})

  useEffect(()=> setService(service), [isOpen])

   const updateNameService = (event)=>{       
       setService({...initialService,name: event.target.value})      
   }

   const onSubmit = ()=>{
       update(initialService._id, initialService)
       .then( res => isClose())
   }

    return (
        <div>
            <div>{isOpen}</div>
        <Modal show={isOpen}>
            <Modal.Header>Editar Servicio</Modal.Header>
            <Modal.Body>                
                    <input className="w-100" onChange={(e)=> updateNameService(e)} value={initialService.name}></input>                
            </Modal.Body>
            <Modal.Footer>
                <div className="row">
                    <div className="col p-2"><button type="button" className="btn btn-success" onClick={()=> onSubmit()}>Aceptar</button></div>
                    <div className="col p-2"><button type="button" className="btn btn-danger" onClick= {()=>isClose()}>Cancelar</button></div>
                </div>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default ModalService