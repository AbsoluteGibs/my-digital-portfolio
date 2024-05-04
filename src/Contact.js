import './styles/content.css';

function Contact() {
  const LinkedInRedirect = () => {
    window.open("https://sg.linkedin.com/in/kelvin-chew-developer", "_blank")
  }

  const GithubRedirect = () => {
    window.open("https://github.com/AbsoluteGibs", "_blank")
  }

  const EmailRedirect = () => {
    window.location.href = "mailto:notsokelvio@gmail.com";
  }

  return (
    <div className="content-div">
      <div className='typewriter-container'>
        <h1 className="typewriter">Reach out to me</h1>
      </div>
      <div>
        <div className='contact-badges'>
          <img className='linkedInIcon' src={process.env.PUBLIC_URL + "/linkedin-svgrepo-com.svg"} alt="linkedin icon"/>
          <button title='test' className='linkedInR' onClick={LinkedInRedirect}>My LinkedIn</button>
        </div>
        <div className='contact-badges'>
          <img className='githubIcon' src={process.env.PUBLIC_URL + "/github-142-svgrepo-com.svg"} alt="github icon"/>
          <button className='githubR' onClick={GithubRedirect}>Github Repos</button>
        </div>
        <div className='contact-badges'>
          <img className='emailIcon' src={process.env.PUBLIC_URL + "/email-svgrepo-com.svg"} alt="email icon"/>
          <button className='emailR' onClick={EmailRedirect}>Work E-mail</button>
        </div>
      </div>
    </div>
  );
}
  
export default Contact;