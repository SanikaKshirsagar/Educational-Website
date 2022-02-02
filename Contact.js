import React from 'react';
import './Contact.css';

const Contact=()=>{
  return(
    <>
      <section className='section'>
        <div className='container'>
          <div className='card-shadow'>
            <div className='card-body'>
              <div className='row'>
                <div className='col-md-6'>
                  <h4>Contact Form</h4>
                  <hr/>
                  <div className='form-group'>
                    <label className='mb-1'>Full Name</label>
                    <input type='text' className='form-control' placeholder='Enter Full Name'/>
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Phone Number</label>
                    <input type='text' className='form-control' placeholder='Enter Phone Number'/>
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Email Address</label>
                    <input type='text' className='form-control' placeholder='Enter Email Address'/>
                  </div>
                  <div className='form-group'>
                    <label className='mb-1'>Message</label>
                    <textarea rows='3'className='form-control' placeholder='Type your Message...'/>
                  </div>
                  <div className='form-group py-3'>
                    <button type='button' className='btn btn-primary'>Send Response</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;