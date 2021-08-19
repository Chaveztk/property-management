import React from 'react';


function HomeSection(props) {

   return (
     <header class="masthead">
       <div class="container">
       <img className='' src={props.imgUrl} alt='' />
           <div class="masthead-subheading">Welcome To Our Studio!</div>
           <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>

       </div>
     </header>

   )
}



export default HomeSection;
