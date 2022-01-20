import { NavLink } from "react-router-dom";
import "../style.css"
const Nav = () =>{
    return(
        <nav  className="navbar  navbar-expand-lg nav-academica">
  <div className="container-fluid container">
    <div className="brand-and-small">
    <NavLink to="/" id="academica" className="navbar-brand" ><i class="bi i bi-brightness-high-fill"></i>Academica</NavLink><h5 id="nav-clima" >/clima</h5>
    </div>
    
  </div>
</nav>
    )
}
export default Nav;