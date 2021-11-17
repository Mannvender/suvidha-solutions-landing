import React from "react";
import { Box, Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
const StyledSpan = styled.span`
  color: ${(props) => props.theme.colors.dark2};
`;

const Quote = () => {
  const { colors, fontWeights } = useTheme();
  return (
    <Flex
      maxWidth={["1000px"]}
      margin={["0 0"]}
      flexDirection={["row"]}
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      sx={{
        background: `linear-gradient(90deg, ${colors.accent1} 100%, rgba(0,0,0,0.2) 0%)`,
      }}
    >
      <Box sx={{ position: "relative" }} flexBasis={["30%"]} height="300px">
        <Image
          src={`/julie_mao.jpg`}
          alt={`bender`}
          layout="fill"
          objectFit="cover"
          quality="70"
        />
      </Box>
      <Box flexBasis={["100%", "70%"]} p={[4]}>
        <Heading fontSize={[4, 5]} fontWeight={["normal"]} color={colors.dark}>
          “The Cheating Cheetah has different mood and appearance for different
          people, it shows you what you wanna see... Don't fall for his tricks”
        </Heading>
        <Heading
          fontSize={[3, 5]}
          fontWeight={[fontWeights.bold]}
          marginTop={[1]}
          color={colors.dark2}
        >
          Boss Lady, <StyledSpan>Designer</StyledSpan>
        </Heading>
      </Box>
    </Flex>
  );
};

export default Quote;
