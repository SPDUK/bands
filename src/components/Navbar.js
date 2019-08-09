import React, { Component } from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { create } from 'domain';
import { Button } from 'antd';

const createSocialLink = ({ url, icon }) => (
  <a key={url} href={url}>
    <img
      style={{ width: 13, height: 13, filter: 'brightness(0) invert(1)' }}
      src={icon && icon.childImageSharp ? icon.childImageSharp.fluid.src : icon}
      alt={url}
    />
  </a>
);

const Navbar = ({ socialLinks, brand }) => (
  <div
    style={{
      backgroundColor: 'black',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-around',
    }}
  >
    <Button type="primary">hi.</Button>

    <h1>{brand}</h1>
    {socialLinks.map(createSocialLink)}
  </div>
);

Navbar.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      icon: PropTypes.object,
    })
  ),
  brand: PropTypes.string,
};

createSocialLink.propTypes = {
  url: PropTypes.string,
  icon: PropTypes.object,
};

// class Navbar extends Component {
//   state = {
//     active: false,
//     navBarActiveClass: '',
//   };

//   toggleHamburger = () => {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: 'is-active',
//             })
//           : this.setState({
//               navBarActiveClass: '',
//             });
//       }
//     );
//   };

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand">
//             <Link to="/" className="navbar-item" title="Logo">
//               <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
//             </Link>
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
//               <Link className="navbar-item" to="/about">
//                 About
//               </Link>
//               <Link className="navbar-item" to="/products">
//                 Products
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link>
//               <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//               <Link className="navbar-item" to="/contact/examples">
//                 Form Examples
//               </Link>
//             </div>
//             <div className="navbar-end has-text-centered">
//               <a
//                 className="navbar-item"
//                 href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="icon">
//                   <img src={github} alt="Github" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// }

export default Navbar;
