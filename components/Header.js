import React from "react";
import { Flex, Heading, Box } from "rebass";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { SiDiscord, SiTwitter } from "react-icons/si";
import NavLink from "next/link";
import { LinkExternal as Link } from "components/Links";

const StyledHeader = styled.nav`
  width: 100%;
  max-width: 1040px;
  padding: 20px 24px 0px 10px;
  display: flex;
  flex-direction: row;
  @media (min-width: 1000px) {
    padding: 10px 10px;
  }
  @media (min-width: 1400px) {
    padding: 60px 0;
  }
`;
const Header = () => {
  const { colors } = useTheme();

  return (
    <>
      <StyledHeader>
        <Flex flexBasis="50%">
          <NavLink href="/">
            <Box
              sx={{
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
              }}
              height="100px"
              width="100px"
              mb={[3, 0]}
            >
              <Image
                src={`/logo.png`}
                alt={`bender`}
                layout="fill"
                objectFit="cover"
                quality="70"
              />
            </Box>
          </NavLink>
        </Flex>
        <Flex
          flexBasis={["50%"]}
          justifyContent="flex-end"
          alignItems="center"
          pl={[3]}
        >
          <Link
            href="https://twitter.com/CheetahsNft"
            target="_blank"
            rel="noopener noreferrer"
            marginRight={[4]}
          >
            <SiTwitter fill={colors.light} size="36px" />
          </Link>
          <Link
            href="http://Discord.gg/sgysnJXmA7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiDiscord fill={colors.light} size="36px" />
          </Link>
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
