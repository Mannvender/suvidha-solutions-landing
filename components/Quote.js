import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
export const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.dark};
`;

const Quote = () => {
  const { colors, fontWeights } = useTheme();
  return (
    <Flex
      maxWidth={["1000px"]}
      margin={[4, 4, 4, 0]}
      flexDirection={["row"]}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 100%, rgba(0,0,0,0.2) 0%)`,
      }}
    >
      <Box
        sx={{ position: "relative" }}
        flexBasis={["100%", "40%", "30%"]}
        height={["250px", "300px"]}
      >
        <Image
          src={`/motivational.jpg`}
          alt={`bender`}
          layout="fill"
          objectFit="cover"
          objectPosition={`0% 50%`}
          quality="70"
        />
      </Box>
      <Box flexBasis={["100%", "60%", "70%"]} p={[4]}>
        <Heading
          fontSize={[3, 4, 5]}
          fontWeight={["normal"]}
          color={colors.dark}
          mb={[3]}
        >
          “Great companies don't hire skilled people and motivate them, they
          hire already motivated people and inspire them.”
        </Heading>
        <Text fontSize={[3, 4]} marginTop={[1]} color={colors.dark}>
          Simon Sinek, <StyledSpan>Start with Why</StyledSpan>
        </Text>
      </Box>
    </Flex>
  );
};

export default Quote;
