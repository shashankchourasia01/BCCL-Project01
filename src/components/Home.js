import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_Img from './Sign_Img'
import {NavLink} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'

function Home() {

    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzN9p_I-4avRHDZaWjcm0mHEKYJXuNCwuPs16vAUONEZVhDhyCNO2hludQWqVjEQKMq/exec'; // Add your own app script link here

    const [inpval, setInpVal] = useState({
        name:"",
        email:"",
        date:"",
        password:"",
        Contact:"",
        Address:""
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
        fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
          .then((response) => {
         
            setTimeout(() => {
            
            }, 5000);
            setInpVal({
                name:"",
                email:"",
                date:"",
                password:"",
                Contact:"",
                Address:""
            });
          })
          .catch((error) => console.error('Error!', error.message));
      };

   
    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);

        const {value, name} = e.target;
        // console.log(value,name);

        setInpVal(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    
    const addData = (e) => {
        e.preventDefault();

        const { name, email, date, password, Contact, Address } = inpval;

        if (name === "") {
            toast.error(' name field is requred!',{
                position: "top-center",
            });
        } else if (email === "") {
             toast.error('email field is requred',{
                position: "top-center",
            });
        } else if (!email.includes("@")) {
             toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (date === "") {
             toast.error('date field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('password length greater five',{
                position: "top-center",
            });
        } else if (Contact.length < 10) {
            toast.error('Enter Valid Contact-No',{
               position: "top-center",
           });
       } else if (Address === "") {
        toast.error('Address field is requred',{
           position: "top-center",
       });
   }
        
        else {
            console.log("data added succesfully");
            // history("/login")
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));

        }

        // axios.post('https://sheet.best/api/sheets/a414bab1-5c6b-4b6a-adf7-f7d1de324582', addData).then((Response)=>{
        //     // console.log(Response);

        // })

    }

    return (
        <>
            <div className='container mt-3'>
                <section className='d-flex justify-content-between'>
                    <div className='left_data mt-3 p-3' style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Registration Form</h3>
                        <Form name="submit-to-google-sheet" onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={handleChange} value={inpval.name} placeholder="Enter Your Name" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={handleChange} value={inpval.email} placeholder="Enter Your email" />

                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="date" name='date' onChange={handleChange} value={inpval.date} />

                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={handleChange} value={inpval.password} placeholder="Password" />
                            </Form.Group>

                            {/* Latest form update */}

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="Contact" name='Contact' onChange={handleChange} value={inpval.Contact} placeholder="Contact" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="Address" name='Address' onChange={handleChange} value={inpval.Address} placeholder="Address" />
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