import "./swan.css";

const Swan = () => {
   return (
      <div className="block__swan">
         <div className="swan__title">
            <span className="span1">
               New Release
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
               </svg>
            </span>
            <h2>The Swan Isle</h2>
            <h3>(2023)</h3>
            <p>
               I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great
               place for you to tell a story and let your users know a little more about you.
            </p>
            <h4>Order Now</h4>
            <button type="button">Amazon</button>
            <button type="button">Google</button>
            <button type="button">ibooks</button>
         </div>
         <div className="swan__img">
            <img
               src="https://static.wixstatic.com/media/ad420a_ac6bbfd46dbe4c83a234221d29d67791~mv2.png/v1/fill/w_385,h_543,al_c,q_85,usm_0.66_1.00_0.01/Screen%20Shot%202021-02-07%20at%209_24_47.webp"
               alt="..."
            />
         </div>
      </div>
   );
};

export default Swan;
