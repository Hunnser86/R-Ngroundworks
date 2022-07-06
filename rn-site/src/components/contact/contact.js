import React, { useState, useRef}   from 'react'
import emailjs from '@emailjs/browser';
import FormInput from '../form inputs/form_inputs';
import './contact.css'

function Contact() {
    
    const form = useRef();   

    

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone_number: ""
    });

    const inputs = [
        {
            id: 1,
            name: "firstname",
            type: "text",
            placeholder: "First Name",
            errorMessage:"First Name should be 3-16 characters and shouldn't include any special characters!",
            label: "First Name",
            pattern: "^[A-Za-z]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "lastname",
            type: "text",
            placeholder: "Last Name",
            errorMessage:"Last Name should be 3-16 characters and shouldn't include any special characters!",
            label: "Last Name",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 3,
            name: "email",
            type: "email",
            placeholder: "email",
            errorMessage:"Please enter a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: 4,
            name: "phone_number",
            type: "tel",
            placeholder: "Phone Number",
            label: "Phone Number",
            errorMessage:"Phone Number should be 11 characters long.  Please use your area code for landline phones!",
            pattern: "^[0-9]{11}$",
            required: true
        }
    ]

    

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };
    console.log(values)
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_30c8km9', 'template_8byarfy', form.current, '2vIikI7QBsjPQCTwT')
          .then((result) => {
              console.log(result.text);
              console.log("message sent");
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
        };
    
    return (
        <div className='form' id='form'>
            <h1>Contact Us</h1>
            <h3>
                Please fill out the form below for a free consultation
                on any work you would like us to do for you.
            </h3>
            <form ref={form} method='POST' onSubmit={sendEmail}>
                {inputs.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <label htmlFor="text_area">Details</label>
                <textarea name="text_area" 
                id="text_area" 
                cols="30" rows="10" 
                placeholder='Describe the work...'
                onChange={onChange}
                required
                >    
                </textarea>
                
                <button type='submit' value={'send'}>Submit</button>
            </form>
        </div>
    )
};

export default Contact