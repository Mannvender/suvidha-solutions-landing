import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Box, Text, Flex } from 'rebass';
import { useTheme } from 'styled-components';
import { STORY } from 'messages';
import Image from "next/image";

const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;

export default function App() {
  const { colors } = useTheme();
  const parallax = useRef(null);
  return (
    <Box
      position='relative'
      sx={{
        width: '100vw',
        height: '100vh',
        backgroundColor: colors.light2,
      }}
    >
      <Parallax ref={parallax} pages={8}>
        {STORY.map((elem) => {
          return (
            <ParallaxLayer
              key={elem.level}
              offset={elem.offset}
              speed={1}
              factor={0.8}
              style={{ 
                backgroundSize: '50%',
                position: 'relative',
              }}
            >
              <Flex>
                <Box
                  width={['40%']}
                  height={['35%']}
                  p={[1, 2, 3]}
                  sx={{
                    position: 'absolute',
                    top: '30%',
                    left: elem.left ? '5%' :'auto',
                    right: !elem.left ? '5%' :'auto',
                    borderRadius: '10px',
                    zIndex:'100'
                  }}
                >
                  <Text
                    fontSize={[2, 3, 4]}
                    color='white'
                    textAlign={'center'}
                    m={['auto']}
                  >
                    {elem.statement}
                  </Text>
                </Box>
                <Box
                  width={['40%']}
                  height={['80%']}
                  p={[1, 2, 3]}
                  sx={{
                    
                    position: 'absolute',
                    top: '4',
                    left: !elem.left ? '5%' :'auto',
                    right: elem.left ? '5%' :'auto',
                    borderRadius: '10px',
                    zIndex:'100'
                  }}
                >
                  <Image
                    src={elem.src}
                    alt={`bender`}
                    layout='fill'
                    width='50%'
                    height='80%'
                    quality='70'
                  />
                </Box>
              </Flex>
            </ParallaxLayer>
          );
        })}

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={5}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'contain',
          }}
        />
        <ParallaxLayer
          offset={4}
          speed={0}
          factor={4}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'contain',
          }}
        />

        {/* <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: 'none' }}
        >
          <img
            src={url('satellite4')}
            style={{ width: '15%', marginLeft: '70%' }}
          />
        </ParallaxLayer> */}

        <ParallaxLayer offset={0.9} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.25} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.5} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2.75} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={2.9} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '40%' }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={3.2} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.5} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.9} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          />
          <img
            src={url('cloud')}
            style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer> */}

        {/* <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true),
          }}
        />

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('server')} style={{ width: '20%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url('clients-main')} style={{ width: '40%' }} />
        </ParallaxLayer> */}
      </Parallax>
    </Box>
  );
}
