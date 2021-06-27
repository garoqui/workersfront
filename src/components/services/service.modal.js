import React, {useState, useEffect} from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { update, create } from '../../services/service.service'
import { useFormik } from 'formik'


const ModalService = ({isOpen, isClose, service, crudOperation}) => {

   const [ initialService, setService] = useState({})

     //form new service
     const formService = useFormik({
        initialValues : {
            name : ""
        }
    })

  useEffect(()=> setService(service), [isOpen])

   const updateNameService = (event)=>{       
       setService({...initialService,name: event.target.value})      
   }
//update service
   const onSubmit = ()=>{
       update(initialService._id, initialService)
       .then( res => isClose())
       setService({})

   }
//new service
   const onSave = ()=>{
       create(formService.values)
       .then( res => isClose() )
       formService.resetForm()
   }

    return (
        <div>         
            <div>{isOpen}</div>
        <Modal show={isOpen}>
            <Modal.Header>Editar Servicio</Modal.Header>
            <Modal.Body>                
                    {crudOperation ==="edit" ?<input className="w-100" onChange={(e)=> updateNameService(e)} value={initialService.name}></input> : null}
                    {crudOperation ==="new" ? <input name="name" onChange = {formService.handleChange} value={formService.values.name}></input> : null}              
            </Modal.Body>
            <Modal.Footer>
                <div className="row">
                    {crudOperation ==="edit" ?<div className="col p-2"><button type="button" className="btn btn-success" onClick={()=> onSubmit()}>Aceptar</button></div> : null}
                    {crudOperation ==="new" ? <div className="col p-2"><button type="button" className="btn btn-success" onClick={()=> onSave()}>Guardar</button></div> : null}
                    <div className="col p-2"><button type="button" className="btn btn-danger" onClick= {()=>isClose()}>Cancelar</button></div>
                </div>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default ModalService