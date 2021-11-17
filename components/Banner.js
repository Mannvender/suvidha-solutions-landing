import React from "react";
import { Flex, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import Button from "components/Button";
import { LinkExternal as Link } from "components/Links";

const OutlineHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.primary};
  text-shadow: ${({ theme }) => `
   ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px,
    ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px;
  `};
  -webkit-font-smoothing: antialiased;
`;
const Banner = (props) => {
  const { fontWeights } = useTheme();
  return (
    <Flex flexDirection="row" pt={[6]} justifyContent="space-between">
      <Flex flexBasis={["90%"]} flexDirection="column" width={["30vw"]}>
        <Heading
          fontSize={[4, 7]}
          fontWeight={[fontWeights.bold]}
          marginBottom={[0]}
        >
          THE
        </Heading>
        <OutlineHeading
          fontSize={[4, 6]}
          fontWeight={[fontWeights.bold]}
          marginBottom={[0]}
        >
          SHAPE SHIFTER
        </OutlineHeading>
        <Heading
          fontSize={[4, 7]}
          fontWeight={[fontWeights.bold]}
          marginBottom={[5]}
        >
          CHEETAH
        </Heading>
        <Link
          href="https://discord.gg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>FIND MORE</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Banner;
