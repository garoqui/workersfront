import React, {Component} from 'react'
import {getAll} from '../../services/service.service'

class Service1 extends Component{

    constructor(props){
        super(props)
        this.state = {
            services : []
        }
    }

    getServices = ()=>{
        getAll().then(res => {
            this.setState({
                services : [...this.state.services,res.data.services]
            }, ()=> console.log(this.state))
        })
        
    }
    



    render(){
        return(
            <div>HolA
                <button onClick= {this.getServices}>Services</button>
            </div>
        )
    }
}

export default Service1

