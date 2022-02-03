import "./main.css";
import Swan from "../swan/swan";

const Main = () => {
   return (
      <section className="section__main">
         <div className="block-1">
            <div className="box">
               <img
                  src="https://static.wixstatic.com/media/ad420a_ca05081d4ece492fb6589c81baee1091~mv2.jpg/v1/crop/x_1416,y_0,w_3091,h_3414/fill/w_238,h_263,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-11967148821.webp"
                  alt="..."
               />
			   </div>
			   <Swan/>
         </div>
      </section>
   );
};

export default Main;
