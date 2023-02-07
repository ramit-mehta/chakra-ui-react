import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

// CSS Object
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom="2px solid"
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems="center"
          direction={['column', 'column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '300', '400']}
            filter={'hue-rotate(-130deg)'}
          />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            laborum impedit minima officia porro earum nisi deleniti corporis.
            Quibusdam voluptatibus voluptas, reiciendis eos aspernatur dolore
            cumque animi dolor soluta eum ut! Delectus maxime nobis atque, nemo
            rem facere ducimus dicta architecto est cupiditate, magnam pariatur
            temporibus explicabo sapiente fugit? Sapiente nisi libero aliquam
            quibusdam, deleniti molestiae soluta tenetur pariatur ratione, sit
            assumenda explicabo officiis ullam dolorum id dolores voluptate
            natus debitis voluptatum fuga, harum quas excepturi dolore! Non vel
            alias cumque recusandae animi blanditiis amet natus ea voluptas sit
            asperiores repellendus, eius maxime ad illo sint velit ut tempora
            nam?
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

// MyCarousel component
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={['100%', '100vh']}>
      <Image src={img1} />
      <Heading
        fontSize={['14px', '50px']}
        bgColor={'blackAlpha.600'}
        color={'white'}
        {...headingOptions}
      >
        Watch The Future
      </Heading>
    </Box>

    <Box w="full" h={['100%', '100vh']}>
      <Image src={img2} />
      <Heading
        fontSize={['14px', '50px']}
        bgColor={'whiteAlpha.400'}
        color={'black'}
        {...headingOptions}
      >
        Future is Gaming
      </Heading>
    </Box>

    <Box w="full" h={['100%', '100vh']}>
      <Image src={img3} />
      <Heading
        fontSize={['14px', '50px']}
        bgColor={'whiteAlpha.400'}
        color={'black'}
        {...headingOptions}
      >
        Gaming on Console
      </Heading>
    </Box>
    <Box w="full" h={['100%', '100vh']}>
      <Image src={img4} />
      <Heading
        fontSize={['14px', '50px']}
        bgColor={'whiteAlpha.600'}
        color={'black'}
        {...headingOptions}
      >
        The World of Lofi
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
