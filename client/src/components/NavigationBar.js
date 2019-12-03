import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavigationBar = (props) => {
  return (
    <div className="floatNav">
      <p>Navigation</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Appetizers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Lunch</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Dinners</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Desserts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>

      </Nav>
      <hr />

    </div>
  );
}

export default NavigationBar;