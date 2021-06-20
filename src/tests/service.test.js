import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import GetServices from '../components/services/service.component'



 describe('GetServices', ()=>{ 
     let component
    beforeEach( ()=> {         
        component = render(<GetServices/>)          
    })

    test('prueba', ()=>{
        const tag = component.getByText(/servicios/i)        
        /* expect(tag).toContainHTML('<h2></h2>') */
    })

    
    

    

    
    
 /*    it("must display a word", ()=>{
        expect(screen.queryByText("Servicio")).toBeInTheDocument();
    }) */

    
   /*  test('renders content', ()=>{
        //const component = render(<GetServices/>)
        component.
        expect(component.container.querySelector('li'))
        
    }) */

 }) 
