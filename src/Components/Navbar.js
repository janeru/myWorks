import React, { Component } from "react";
import logo from "../self_learning.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.navRef = React.createRef();
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    componentDidMount() {
        console.log(this.navRef)
        window.addEventListener('resize', this.changeSize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.changeSize);
    }
    changeSize = () => {
        console.log('width:' + window.screen.width)

        if (window.screen.width > 600) {
            console.log(this.navRef.current.clientHeight)
            this.navRef.current.style.height = '80px'
        }
    }
    render() {
        return (
            <nav ref={this.navRef} className="nav" id="navbar" style={{ 'height': this.props.show ? '100px' : '0px' }}>
                <div className="nav-content">
                    <img
                        src={logo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    />
                    <h2 className="worksTitle">Works</h2>
                    <ul className="nav-items">

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section1"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                React
              </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                DataScience
              </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Vue
                   </Link>
                        </li>

                    </ul>
                </div>

            </nav>
        );
    }
}
