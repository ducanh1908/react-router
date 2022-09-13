import React from 'react';

import { useFormik } from 'formik';

Contact.propTypes = {
    
};

function Contact(props) {
    const initialValues = {name:'', email:'', phone:'', message:'',}

    const validate = values =>{
     

    }
    const onSubmit = values => console.log(values);

    const formik = useFormik({initialValues,
        onSubmit,
        validate})
    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={formik.handleChange} value ={formik.values.name}/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" onChange={formik.handleChange} value ={formik.values.email}/>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" onChange={formik.handleChange} value ={formik.values.phone}/>
                <label htmlFor="message">Message</label>
                <textarea type="text" name="message" id="message" onChange={formik.handleChange} value ={formik.values.message}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Contact;