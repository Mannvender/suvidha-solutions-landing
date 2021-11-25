import React from "react";
import { Flex, Heading } from "rebass";
import styled from "styled-components";
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
const Banner = ({ onCtaClick }) => {
  return (
    <Flex
      flexDirection="row"
      pt={[6]}
      px={[4, 4, 0]}
      justifyContent="space-between"
    >
      <Flex flexBasis={["90%"]} flexDirection="column" width={["30vw"]}>
        <Heading fontSize={[6, 7]} fontWeight={["bold"]} marginBottom={[0]}>
          THE
        </Heading>
        <OutlineHeading fontSize={[6]} fontWeight={["bold"]} marginBottom={[0]}>
          SHAPE SHIFTER
        </OutlineHeading>
        <Heading fontSize={[6, 7]} fontWeight={["bold"]} marginBottom={[5]}>
          CHEETAH
        </Heading>
        <Button onClick={onCtaClick}>FIND MORE</Button>
      </Flex>
    </Flex>
  );
};

export default Banner;
