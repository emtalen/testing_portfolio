import React from "react";
import {Menu} from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <h3 className="header item">My Portfolio</h3>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
