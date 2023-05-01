import FirstComponent from './firstcomponent';
import SecondComponent from './secondcomponent';
import Footer from './footer';

;
const Homepage = () => {
    return ( 
        <div className="homepage">
           <FirstComponent/>
           <SecondComponent/>
           <Footer/>
  </div>
     );
}
 
export default Homepage;