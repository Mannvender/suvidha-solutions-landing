import React from "react";
import { Flex, Box, Text } from "rebass";
import Image from "next/image";
import styled, { useTheme } from "styled-components";
import { SiDiscord, SiTwitter, SiFacebook, SiLinkedin } from "react-icons/si";
import NavLink from "next/link";
import { LinkExternal as Link } from "components/Links";
import { isMobile } from "react-device-detect";

const StyledHeader = styled.nav`
  width: 100%;
  max-width: 1040px;
  padding: 0px 24px 0px 10px;
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
              height={["175px", "250px"]}
              width={["175px", "250px"]}
              mb={[3, 0]}
            >
              <Image
                src={`/logos/transparent.png`}
                alt={`logo`}
                layout="fill"
                objectFit="cover"
                quality="100"
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
          <Link href="/pricing" marginRight={[3]}>
            <Text fontSize={[2]} color={colors.light}>
              Pricing
            </Text>
          </Link>
          {/* <Link
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            marginRight={[3]}
          >
            <SiTwitter fill={colors.light} size={isMobile ? "20px" : "28px"} />
          </Link> */}
          <Link
            href="http://Discord.gg/"
            target="_blank"
            rel="noopener noreferrer"
            marginRight={[3]}
          >
            <SiDiscord fill={colors.light} size={isMobile ? "20px" : "28px"} />
          </Link>
          {/* <Link
            href="http://fb.com/"
            target="_blank"
            rel="noopener noreferrer"
            marginRight={[3]}
          >
            <SiFacebook fill={colors.light} size={isMobile ? "20px" : "28px"} />
          </Link> */}
          <Link
            href="http://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin fill={colors.light} size={isMobile ? "20px" : "27px"} />
          </Link>
        </Flex>
      </StyledHeader>
    </>
  );
};

export default Header;
