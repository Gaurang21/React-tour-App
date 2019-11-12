import image from "../images/India.jpg";
import image2 from "../images/image2.jpg";
import React from 'react';
function Home(props)
{
return <div><h1>India</h1><br></br>
 <img src={image}  />;
 <p>It gives us immense delight in introducing ourselves as a leading
   Travel Agent of India with our Head Offices all across India.
   Hindustan Tours is very successfully in operation
    from 2018 in Guest Handling from all over the world. We have
    exceptionally earned a good reputation in offering the best, prompt
    and dedicated services to all our patrons from the very beginning.
    Our services include Tour Management, Event Management, & other
    offsite logistics. </p>
   <img src={image2}  />;
   </div>
}
export default Home;
