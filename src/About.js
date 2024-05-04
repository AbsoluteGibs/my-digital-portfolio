import './styles/content.css';
import {NavLink} from "react-router-dom";

function About() {
    return (
      <div className="content-div">
        <div className='typewriter-container'>
          <h1 className="typewriter">About Me</h1>
        </div>
        <div>
          <div className='grid-container'>
            <div className='grid-text-left'>
              <p>
                Hello visitor! Welcome to my portfolio. My name is Kelvin. I have taken a liking to programming in general and I like to challenge myself to build
                programmes, apps, websites from time to time. During my free time, I also try out coding practices, networking with my peers and learning concepts
                that can potentially hone my existing works into more polished works. As I figure out my way in life, I will continuously learn new technologies
                that are being thrown at me to upgrade myself and for my career. One particular technology that I am looking very closely at is blockchain. Find out
                more about my works <NavLink to="/my-works">here</NavLink>.
              </p>
            </div>
            <div className='grid-image-right'>
              <img className='myself' src={process.env.PUBLIC_URL + "/myPic.jpg"} alt='Myself'/>
            </div>
          </div>
          <div className='content-spacer'/>
          <div className='grid-container'>
            <div className='grid-image-left'>
              <img className='myself' src={process.env.PUBLIC_URL + "/mySummary.png"} alt='Hobbies'/>
            </div>
            <div className='grid-text-right'>
              <p>
                Outside of programming, I enjoy playing video games with my friends. I am also an Anime junkie, I appreciate and like listening to music from all
                sorts of genre (rock, classical, pop, funk, disco, house), a good majority of them being Japanese. I also find myself taking on a lot of temporary 
                jobs to test the waters, such as: warehouse assistant, waiter, events security, remote wordpress admin, math tutoring, retail assistant, food delivery. 
                I feel that this trait made me become a person who is able to adapt to changing environments!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;