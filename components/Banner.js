import React from "react";
import { Flex, Heading, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import Button from "components/Button";
import NavLink from "next/link";

const OutlineHeading = styled(Heading)`
  color: ${(props) => props.theme.colors.primary};
  text-shadow: ${({ theme }) => `
   ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px,
    ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px, ${theme.colors.light} 0px 0px 1px;
  `};
  -webkit-font-smoothing: antialiased;
`;
const Banner = ({ onCtaClick }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="row"
      pt={[6]}
      px={[4, 4, 0]}
      justifyContent="space-between"
    >
      <Flex flexBasis={["90%"]} flexDirection="column" width={["30vw"]}>
        <Heading
          fontSize={[6, 7]}
          fontWeight={["bold"]}
          marginBottom={[2]}
          letterSpacing="2px"
        >
          Quality digital service you really want !
        </Heading>
        <Text mr={[3]} fontSize={[1, 2]} mb={[4]}>
          We are delivering top level digital services with our best experienced
          team, just get started with us.
        </Text>
        {/* <OutlineHeading fontSize={[6]} fontWeight={["bold"]} marginBottom={[0]}>
          You really want
        </OutlineHeading> */}
        <Flex flexWrap="wrap">
          <Button onClick={onCtaClick}>Get Stated</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
