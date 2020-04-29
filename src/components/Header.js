import React from 'react';
import {
  Menu,
  Container,
  Dropdown,
  Image,
} from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const Header = () => (
  <Menu fixed='top' inverted>
    <Container>
      <Menu.Item as='a' header>
        <Link to='/'>
          <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
        </Link>
        <Link to='/'>
          Jace Gold
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/'>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/about'>
          About
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/gallery'>
          Gallery
        </Link>
      </Menu.Item>

      <Dropdown item simple text='Dropdown'>
        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to='/'>
              Home
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to='/about'>
              About
            </Link>
          </Dropdown.Item>

          <Dropdown.Divider />

          <Dropdown.Item>
            <i className='dropdown icon' />
            <span className='text'>More</span>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to='/gallery'>
                  Gallery
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>List Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Item>List Item 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  </Menu>
);

export default Header;