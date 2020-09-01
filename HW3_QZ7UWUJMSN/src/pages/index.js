import CustomHead from "../Components/CustomHeader"
import Navbar from "../Components/navbar";
import Content from "../Components/layout";

function index () {
  return (
      <div> 
       <CustomHead />
       <Navbar />
       <Content />
      </div>
     );
   };
   
   export default index;