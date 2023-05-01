import Staffs from './staffcomponent';
import FirstComponent from './firstcomponent';
import SecondComponent from './secondcomponent';
import Fourthcomponent from './forthcomponent';
import Cards from './cardcomponent';
import Logos from './logos';
import Contactus from './contactcomponent';


const Homepage = () => {
    return ( 
        <div className="homepage">
        <Staffs/>
           <FirstComponent/>
           <SecondComponent/>
           <Fourthcomponent/>
           <Cards/>
            <Logos/>
            <Contactus/>
           </div>
     );
}
 
export default Homepage;