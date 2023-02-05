import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH="40" p={'16'} color="white">
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'center'} w={'full'}>
          <Heading
            size={'md'}
            textTransform="uppercase"
            textAlign={['center', 'left']}
          >
            Subscribe to get Updates
          </Heading>
          <HStack>
            <Input
              placeholder="Enter your email"
              borderRadius={'none'}
              border={'none'}
              focusBorderColor={'none'}
              outline="none"
            />
            <Button
              p={'0'}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading size={'md'} textAlign={'center'} textTransform="uppercase">
            Video Hub
          </Heading>
          <Text color={'whiteAlpha.500'}>All rights reserved.</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform="uppercase">
            Social Media
          </Heading>
          <HStack>
            <Button colorScheme="purple" variant={'link'}>
              <a
                href="https://www.linkedin.com/in/ramit-mehta/"
                target={'blank'}
              >
                <AiOutlineLinkedin size={'25'} />
              </a>
            </Button>
            <Button colorScheme="purple" variant={'link'}>
              <a href="https://github.com/ramit-mehta" target={'blank'}>
                <AiOutlineGithub size={'25'} />
              </a>
            </Button>
            <Button colorScheme="purple" variant={'link'}>
              <a href="https://www.instagram.com" target={'blank'}>
                <AiOutlineInstagram size={'25'} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
