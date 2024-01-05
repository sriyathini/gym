// import Footer from "../pages/Footer";
import Homesec from "../pages/Homepage";
import About from "./About";
import Class from "./Class";
import Contact from "./Contact";
import Gallery from './Gallery';


function Home(){
    return(
        <div>
           
            <Homesec/>
            <About />
            <Gallery />
            <Class />
            <Contact />
            {/* <Footer/> */}
         
           
        </div>
       
    );
}
export default Home;
