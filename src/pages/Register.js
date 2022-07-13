import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './login.css';


function Register ()  {
  


        const [Data,setData] = useState([]);
        const GetRegData = () =>{
            //get Reg data
            const url = 'http://localhost:8000/Regmanagement'
            axios.get(url)
            .then(response=>{
                const result = response.data;
                const {status, message, data}=result;
                if(status !== 'SUCCESS'){
                    alert(message,status)
                }
                else{
                    setData(data)
                    console.log(data)
                }
            }) 
            .catch(err=>{
                console.log(err)
            }) 
        }
        //call this function use in uneffect
    
        useEffect(()=>{
            GetRegData();
        },[])

    
    const initialValues = { username: "", nic: "", email: "", password: "", repassword: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "Username is required!";
      }
      if (!values.email) {
        errors.email = "Email is required!";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }

      if (!values.nic) {
        errors.nic = "NIC is required";
      } else if (values.nic.length < 9) {
        errors.nic = "NIC must be more than 10 characters";
      } else if (values.nic.length > 12) {
        errors.nic = "NIC cannot exceed more than 12 characters";
      }

      if (!values.repassword) {
        errors.repassword = "Re-entering password is required";
      } else if (values.repassword !== values.password) {
        errors.repassword = "Password mismatched";
      } 



      return errors;
    };
   
    return (
      <div>
          <body className="bb"><br/><br/>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Signed in successfully</div>
        ) : (
          <pre>{JSON.stringify()}</pre>
        )}
  <div className="bb">
        <form onSubmit={handleSubmit}>
        <div className="create">
       <div className="h0"> <h1>Sign Up</h1></div>
       <div className="ho">   <p>Please fill in this form to create an account.</p></div>
    <hr/>
       
          <div >
            <div className="group">
              <label  className="l2">Username</label><br/>
              <input className="label1" type="text" name="username" placeholder="Username" value={formValues.username} onChange={handleChange}/>
            </div>
            <p>{formErrors.username}</p>

            <div className="group">
              <label className="l2">NIC</label><br/>
              <input className="label1"
                type="text" name="nic" placeholder="NIC" value={formValues.nic} onChange={handleChange}/>
            </div>
            <p>{formErrors.nic}</p>

            <div className="group">
              <label  className="l2">Email</label><br/>
              <input className="label1"
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>

            <div className="group">
              <label  className="l2">Password</label><br/>
              <input className="label1" type="password" id="myInput" name="password" placeholder="Password" value={formValues.password} onChange={handleChange}    />
             
            </div>
            <p>{formErrors.password}</p>
            <div className="group">
             <label  className="l2">Re enter Password</label><br/>
              <input className="label1"  type="password" 
                name="repassword"
                placeholder="Confirm Password"
                value={formValues.repassword}
                onChange={handleChange}
                
              />
              
            </div>
     
           
            <p>{formErrors.repassword}</p>
            <hr/>
            <p className="para">   &nbsp;&nbsp;&nbsp;&nbsp;By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
            <button type="submit" class="registerbtn">Register</button>
            <div class="container signin">
            <br/>  <p>    Already have an account? <a href="#">Sign in</a>.</p>
  </div>




            

            
          </div></div>
        </form></div><br/><br/></body><br/><br/>
      </div>
    );
  }
  
  export default Register;
  