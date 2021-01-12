import React, { useEffect, useState } from 'react';
import { Flex, Box, Container, Spacer, Avatar, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react';

import { authenticate, userSession } from '../lib/auth';
import { getTasks } from '../lib/storage';

const index = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((data) => {
        window.history.replaceState({}, document.title, '/');
        setUserData(data);
      });
    } else if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, []);

  if (!userSession.isUserSignedIn()) {
    return (
      <button
        onClick={() => authenticate()}
        type="button"
      >
        Continue with BlockStack
      </button>
    );
  }

  if (!userData) {
    return (
      <div>loading...</div>
    );
  }

  return (
    <>
      <Container>
        <Flex>
          <Box>
            Complete
          </Box>
          <Spacer />
          <Box>
            <Menu>
              <MenuButton as={Flex}>
                <Avatar name={userData.profile.name} src={userData.profile.image[0].contentUrl} />
                {userData.profile.name}
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>

      {JSON.stringify(userData)}
    </>
  );
};

export default index;
