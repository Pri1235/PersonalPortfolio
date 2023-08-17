import { Navbar,Container,Nav} from "react-bootstrap";
import { useState,useEffect} from "react";
import logo from '../assets/img/Priyal.png';
import NavIcon1 from '../assets/img/nav-icon1.svg';
import NavIcon2 from '../assets/img/nav-icon2.svg';
import NavIcon3 from '../assets/img/nav-icon3.svg';
import NavIcon4 from '../assets/img/email-18-svgrepo-com.svg';
import NavIcon5 from '../assets/img/github-142-svgrepo-com.svg'

export const NavBar = () => {
    const [activeLink,setActiveLink] = useState('home');
    const [ scrolled,setScrolled] = useState(false);
    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);
    },[])
    const onUUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'?'active navbar-link':'navbar-link'} onClick={()=> onUUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link'} onClick={()=> onUUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link'}onClick={()=> onUUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#recommendations" className={activeLink==='recommendations'?'active navbar-link':'navbar-link'}onClick={()=> onUUpdateActiveLink('recommendations')}>Recommendations</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://linkedin.com/in/priyal-chawda-a103571bb"  target="_blank"><img src={NavIcon1} alt="linkedin" /></a>
                <a href="https://github.com/Pri1235"  target="_blank"><img src={NavIcon5} alt="git" /></a>
                <a href="mailto:priyalcd123@gmail.com"  target="_blank"><img src={NavIcon4} alt="gmail" /></a>
            </div>
            <a className="vvd" href="#connect"><span>Let's Connect</span></a>

            {/* <button className="vvd" onClick={()=> console.log('connect')}><span><a href="#" className="lets-btn">Let's Connect</a></span></button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
