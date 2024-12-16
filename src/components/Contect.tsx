import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsTelephoneOutboundFill } from "react-icons/bs"


const Contect = () => {
  return (
    <div id='contect' className='pt-32 container flex'>
    <div className='contect-grid md:grid-col-2'>
        <div className="contect-space">
            <h2 className="contect-heading" data-aos="zoom-in-up">Get in touch</h2>
            <p className= 'contect-text'data-aos="zoom-in-up">
                Drop me a line , give me a call, or send me a message by submitting a form. 

            </p>
            <div className='contect-flex' data-aos="zoom-in-up">
               <TfiEmail  size={30}/> hina.1shine1984@gmail.com


            </div>

            <div className='contect-flex'>
                <BsTelephoneOutboundFill  size={30}/> 0340-1196988


            </div>
        </div>
        


        <div className='contect-space' >
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text" 
                className='input-field'id='name' />

            </div>
            <div className='form' data-aos="zoom-in-up">
                <label htmlFor='email'>Email</label>
                <input type="text" 
                className='input-field'id='email' />

            </div>
            <div className='form'data-aos="zoom-in-up">
                <label htmlFor='msg'>Message</label>
                <textarea  
                className='textarea-field'id='msg' rows={8}>
                    
                </textarea>
            </div>
            <button className='button'>send</button>




        </div>
    </div> 
   </div>
  )
}

export default Contect
