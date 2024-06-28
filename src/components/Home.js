import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_Img from './Sign_Img'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Home() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzN9p_I-4avRHDZaWjcm0mHEKYJXuNCwuPs16vAUONEZVhDhyCNO2hludQWqVjEQKMq/exec' // Add your own app script link here

    const [inpval, setInpVal] = useState({
        name: "",
        email: "",
        date: "",
        password: "",
        Contact: "",
        Address: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInpVal((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, date, password, Contact, Address } = inpval;

        if (name === "") {
            toast.error('Name field is required!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('Email field is required!', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please enter a valid email address!', {
                position: "top-center",
            });
        } else if (date === "") {
            toast.error('Date field is required!', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password field is required!', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length should be greater than five!', {
                position: "top-center",
            });
        } else if (Contact.length < 10) {
            toast.error('Enter a valid contact number!', {
                position: "top-center",
            });
        } else if (Address === "") {
            toast.error('Address field is required!', {
                position: "top-center",
            });
        } else {
            fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
                .then((response) => {
                    toast.success('Data submitted successfully!', {
                        position: "top-center",
                    });
                    setInpVal({
                        name: "",
                        email: "",
                        date: "",
                        password: "",
                        Contact: "",
                        Address: ""
                    });
                })
                .catch((error) => {
                    toast.error('Error submitting data!', {
                        position: "top-center",
                    });
                    console.error('Error!', error.message);
                });
        }
    };

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Registration Form</h3>
                        <Form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Control type="text" name='name' onChange={handleChange} value={inpval.name} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={handleChange} value={inpval.email} placeholder="Enter Your email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                                <Form.Control type="date" name='date' onChange={handleChange} value={inpval.date} />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={handleChange} value={inpval.password} placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicContact">
                                <Form.Control type="text" name='Contact' onChange={handleChange} value={inpval.Contact} placeholder="Contact" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicAddress">
                                <Form.Control type="text" name='Address' onChange={handleChange} value={inpval.Address} placeholder="Address" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' style={{ background: "rgb(67,190,127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account. <span> <NavLink to="/login"> SignIn </NavLink> </span></p>
                    </div>
                    <Sign_Img />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home