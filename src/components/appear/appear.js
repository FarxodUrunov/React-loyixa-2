import "./appear.css";

const Appear = () => {
   return (
      <section className="section__apper">
         <div className="apper__block">
            <h2>See Upcoming Appearances</h2>
            <p>'m a paragraph. Click here to add your own text and edit me. It's easy.</p>
            <div className="apper__box">
               <h3>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3>
               <button type="button">Join</button>
            </div>
            <div className="apper__box">
               <h3>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3>
               <button type="button">Join</button>
            </div>
            <div className="apper__box">
               <h3>January 18th 2023, The Breakfast Club, Virtual Book Reading of Swan Isle, 7PM - 8PM EST</h3>
               <button type="button">Join</button>
            </div>
         </div>
         <div className="apper__contact">
            <img
               src="https://static.wixstatic.com/media/ad420a_3b0ac18b8f8c44e6968cf137c044b3b4~mv2.jpg/v1/crop/x_1678,y_0,w_3414,h_3414/fill/w_177,h_177,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-11967148791.webp"
               alt="..."
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
               <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
            </svg>

            <h2>About Kayla Griffith</h2>
            <p>
               I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great
               place for you to tell a story and let your users know a little more about you.
            </p>
            <button type="button">Read More</button>
         </div>
      </section>
   );
};

export default Appear;
