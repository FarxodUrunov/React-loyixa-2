import "./main.css";
import Swan from "../swan/swan";

const Main = () => {
   return (
      <section className="section__main">
         <div className="block-1">
            <div className="box">
               <img src="img/f1.png" alt="..." />
            </div>
            <Swan />
         </div>
      </section>
   );
};

export default Main;
