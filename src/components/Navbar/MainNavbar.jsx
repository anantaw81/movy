// TODO fix this code link

import {
  Box,
  Center,
  Spacer,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { Navbar } from './Navbar';
import { NavLink } from './NavLink';
import { UserProfile } from './UserProfile';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';

export const MainNavbar = ({ pageNum }) => (
  <Box minH="0rem" bg={mode('gray.50', 'gray.700')}>
    <Navbar>
      <Navbar.Brand>
        <Center marginEnd="10">
          <Image src={logo} mt={2} width="100px" />
        </Center>
      </Navbar.Brand>
      <Navbar.Links>
        {pageNum === 1 && (
          <>
            <Link to="/">
              <NavLink isActive>Main</NavLink>
            </Link>
            <Link to="/explore">
              <NavLink>Explore</NavLink>
            </Link>
            {/* <NavLink>About</NavLink> */}
          </>
        )}
        {pageNum === 2 && (
          <>
            <Link to="/">
              <NavLink>Main</NavLink>
            </Link>
            <Link to="/explore">
              <NavLink isActive>Explore</NavLink>
            </Link>
          </>
        )}
        {/* <NavLink></NavLink> */}
      </Navbar.Links>
      {/* <Navbar.UserProfile>
        <UserProfile
          name="Christian Schröter"
          avatarUrl="https://ca.slack-edge.com/T024F7F15-UJVQ359SP-81fc55875723-512"
          email="mail@chidori-ui.com"
        />
      </Navbar.UserProfile> */}
    </Navbar>
  </Box>
);
