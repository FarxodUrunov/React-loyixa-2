import "./nav.css";

const Nav = () => {
   return (
      <section className="section__nav">
         <div className="block">
            <div className="nav__box">
               <h1>K. Griffith</h1>
               <ul>
                  <li>
                     <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">APPEARANCES</a>
                  </li>
                  <li>
                     <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">BOOKS</a>
                  </li>
                  <li>
                     <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">NEWS</a>
                  </li>
                  <li>
                     <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">ABOUT</a>
                  </li>
                  <li>
                     <a href="https://getbootstrap.com/docs/4.0/examples/pricing/">CONTACT</a>
                  </li>
               </ul>
            </div>
            <span></span>
            <div className="row">
               <div className="col-6"></div>
               <div className="col-6 info">
                  <h1>Kayla Griffith</h1>
                  <p>Award Winning Author</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Nav;
