import './styles/heading.css';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const navlinkstyle =({isActive}) =>{
 return{
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration:isActive ? 'underline' : 'none',
    
 }
    }
    return (  
        <>
        <div className="main-header">
        <img src="./images/logo.png" alt="" />
        <div className="navbar">
           <div className='Link' >
           <NavLink className='links' style={navlinkstyle} to={'/'} >home</NavLink>
            <NavLink className='links' style={navlinkstyle} to={'/program'} >the program</NavLink>
            
            
           
            <NavLink className='links' style={navlinkstyle} to={'/about'}>about</NavLink>
            <NavLink className='links' style={navlinkstyle} to={'signup'}>signUp</NavLink>
            <NavLink className='links' style={navlinkstyle} to={'/loginpage'}>login</NavLink>
            
            <select name="" id=""><option value="">for you</option>
            
            <option value="">support</option>
             <option value=""> alumni </option>
            <option value="">student</option>
            </select>
            <button type='button' className='btn'>apply now</button>
        </div>
        </div>
        
    </div>
    </>
    
    );
}
 
export default Header;
