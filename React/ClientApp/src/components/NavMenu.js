import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

      this.handleShow = this.handleShow.bind(this);
      this.wrap = React.createRef();

    }
    handleShow() {
        const wrapper = this.wrap.current;
        wrapper.classList.toggle('openNavMenu');
    }

    render() {
        return (
            <header>
                <div className="headerRow">
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navBarHeader" light>
                        <div className="navMenuRow">
                            <NavbarBrand tag={Link} to="/">React</NavbarBrand>
                            <div className="navbarBtn" onClick={this.handleShow}>
                                <span className="navBarIcon">X</span>
                            </div>
                        </div>
                    </Navbar>

                </div>
                <div ref={this.wrap} className="rightMenu">
                    <ul className="navbar-nav flex-grow">
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} className="text-dark" to="/Users">Users</NavLink>
                        </NavItem>
                    </ul>
                </div>
            </header>
        )
    }
        
}
