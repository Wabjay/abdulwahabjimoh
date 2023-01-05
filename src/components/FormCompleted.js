import React, {useState, useEffect} from "react";
import Congrats from '../images/congrats.png'
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { send } from 'emailjs-com';
import { useFormData } from "../context/index1";
export default function FormCompleted() {
  const navigate = useNavigate();
  const { data } = useFormData();
  // const [value, setValue] = useState('')

useEffect(()=>{
  console.log(data)
  },[])


  const complete = ()=>{
    console.log(data)
    send(
      'service_ptty7wg',
      'template_c80z6yr',
      data,
      'qg2fLddYzQHEXo1xt'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      })
    // get value from setFormValue from context
    navigate('/')
  }
  return(
  <div className="congrats">
<img src={Congrats} alt="" className="congratsImg" />
  <h2 className="formHeader">Congratulations</h2>
  <p className="CongratsText">Your preliminary offer is on the way. A member of our team will be in touch with you.</p>
  <Button type="primary" onClick={complete} className="CongratsBtn" > Go to dashboard</Button>
  </div> 
)}
