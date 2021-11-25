import React from 'react';
import { Box, Flex, Heading, Card, Text } from 'rebass';
import { useTheme } from 'styled-components';
import Image from 'next/image';
import { ROADMAP } from 'messages';

const Roadmap = () => {
  const { colors, fontWeights } = useTheme();
  // const { flags } = useFlags();

  return (
    <Box>
      <Heading
        fontSize={[6, 8]}
        fontWeight={[600]}
        textAlign={'center'}
        pt={[4]}
        pb={[4]}
        color={colors.dark}
      >
        Roadmap
      </Heading>
      <Flex flexWrap='wrap' maxWidth={['1000px']} mx={[4, 4, 0]}>
        {ROADMAP.map((item) => {
          return (
            <Flex
              flexBasis={[item.basis || '50%']}
              margin={['0 0']}
              flexDirection={['row']}
              alignItems={['flex-start', 'center']}
              justifyContent='center'
              flexWrap='wrap'
              bg={colors.dark3}
            >
              <Flex
                flexBasis={['100%', '50%']}
                height={['auto', '100%', '100%']}
                alignItems='center'
                justifyContent={'center'}
                px={[2, 4]}
                py={[2, 4]}
                sx={{
                  backgroundColor: colors[item.color] || item.color,
                }}
              >
                <Heading
                  textAlign={['center']}
                  fontSize={[4, 6]}
                  fontWeight={900}
                >
                  {item.when}%
                </Heading>
              </Flex>
              <Box flexBasis={['100%', '50%']} p={[3, 4]}>
                <Text
                  fontSize={[1, 2]}
                  fontWeight={[fontWeights.normal]}
                  marginTop={[1]}
                  color={colors.dark2}
                >
                  {item.what}
                </Text>
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Roadmap;
