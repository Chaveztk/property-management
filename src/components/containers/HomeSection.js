import React from 'react';


function HomeSection(props) {

   return (
     <header className="masthead">
       <div className="container">
       <img className='' src={props.imgUrl} alt='' />
           <div className="masthead-subheading">Welcome To Our Studio!</div>
           <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>

       </div>
     </header>

   )
}



export default HomeSection;
