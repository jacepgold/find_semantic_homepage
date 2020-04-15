import React from 'react';
import {
  Container,
  Menu,
  Image,
  Dropdown,
  Divider,
  Header,
} from 'semantic-ui-react';

const HomePage = () => (
  <div>
    <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src='https://react.semantic-ui.com/logo.png' style={{ marginRight: '1.5em' }} />
          Jace Gold
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item 1</Dropdown.Item>
            <Dropdown.Item>List Item 2</Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item 1</Dropdown.Item>
                <Dropdown.Item>List Item 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Jace's Website</Header>
      <p>
        This is a website. I don't know what else to say yet
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
      </p>

      <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
      <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' style={{ martinTop: '2em' }} />
    </Container>
  </div>
);

export default HomePage;