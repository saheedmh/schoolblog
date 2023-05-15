
import './styles/signups.css';
import Homepage from './homepage';
import {useRef, useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify'

function Register(){
const  [id, setId] = useState("");
  const  [name, setName] = useState("");
  const [pass, setPass]=useState('');
  const [email, setEmail]= useState('')
  const [gender, setGender]= useState('Female')
  
  const hadleSubmit =(e)=>{
e.preventDefault();
let item ={id, name, email, pass, gender};
//console.log(item);
fetch('http://localhost:8000/users',{
  method : "POST",
  header :{'content-type' : 'application/json'},
  body:JSON.stringify(item)
}).then((res)=>{
  toast.success('register successfull')
}).catch((err)=>{
  toast.error('failed :' +err.message);
});

} 
  
  
  
  
    return ( 
      
    
      <div className="signup-container">
  
        <h1>welcome to HackYourFuture institute</h1>
        <form action="" className="signup-form" onSubmit={hadleSubmit} >
           
           <h1>Create an account</h1>
           <p>connect with your friends today</p>
           <input type="text" placeholder='Enter YOur Username' value={id} onChange={(e) => setId(e.target.value)}/><br />
           
           <input type="text"  placeholder='Enter YOur Email' className='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
           <input type="text"  placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)}/><br />
           
           
           <input type="password"   placeholder='Enter Your Password' className='pass' value={pass} onChange={(e) => setPass(e.target.value)} />
           <legend htmlFor="">Gender</legend>
           <input type="radio"  id="" checked={gender==="Male"} name="gender" value="Male" className='' onChange={(e) => setGender(e.target.value)} />
           <legend>Male</legend>
           
           <input type="radio"  checked={gender==="Female"}name="gender" id=""value="Female" className='' onChange={(e) => setGender(e.target.value)} />
           <legend>female</legend>
           <button className='btn-id'  >login</button><br></br>
         <span>or With</span><br /><br /><br />

         <Link to="homepage"><button >login with facebook</button><br></br><br />
</Link>
         <button id='btn-id'>login with google</button><br></br>
         <p>Already have an account? <Link className="link"  >Login</Link></p>
        </form>
        </div>   
     

        
     );

}
 
export default Register ;