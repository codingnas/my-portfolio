import './Homepage.css';
import { AiOutlineGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import TypeIt from "typeit-react";
import profile from "../images/profile.jpg"


function Homepage() {
  return (
    <IconContext.Provider value={{size: "2.5em"}} color={{ color: "#635255" }}>
    <div className='body-homepage'>
      <div className='title-name-lower'>
     <TypeIt className="title-name" element={"h1"}
      options={{
        strings: ["Hi I'm Nasra Saleh."],
        speed: 60,
        waitUntilVisible: true, 
      }}
      /> 
      </div>
     <h2 className='subheading-under-title'> Developer, Designer and Fashion Enthusiast. </h2>
     <break></break>
     <h2 className='homepage-description grid-container'> I am a Software Programmer based in Coventry, England. I used to work
        in a Lab as a Scientist and left the test tubes to build and test software. 
    </h2>
    <break></break>
    <h2 className='homepage-subheading-two'> Learn more 
    <Link to="/about"> about me. </Link> 
    </h2>
    <break></break>
    <div className='smallest-subheading-icons'>
    <h5 className='homepage-smallest-subheading'> Get in touch. </h5>
    <div className='icons-position'>
    <a href="https://github.com/codingnas" target="_blank"> 
    <AiOutlineGithub title='github' /> 
    </a>
    <a href="https://mobile.twitter.com/codingnas"  target="_blank">
    <AiOutlineTwitter />
    </a>
    <a href="https://uk.linkedin.com/in/nasra-saleh-185537222?trk=people-guest_people_search-card" target="_blank">
    <AiFillLinkedin />
    </a>
    </div>

    <div className='img-position'> 
      <img alt="me" className="profile-img"src={profile} width="390" height="450" />
    </div>
    </div>
  


  </div>
  </IconContext.Provider>
  );
}

export default Homepage;