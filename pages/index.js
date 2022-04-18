import React, { useRef } from "react";
import { Box, Flex, Heading, Text } from "rebass";
import Header from "components/Header";
import Banner from "components/Banner";
import Quote from "components/Quote";
import Contact from "components/Contact";
import Services from "components/Services";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { isMobile } from "react-device-detect";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const BannerImageContainer = styled(Box)`
  position: relative;
  top: 100%;
  left: 35%;
  transform: translateY(-620px);
  @media (min-width: 1000px) {
    left: 50%;
  }
`;

const Index = () => {
  const { colors } = useTheme();
  const parallax = useRef(null);
  const handleFindMore = () => {
    parallax?.current?.scrollTo(4);
  };
  return (
    <Box
      position="relative"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: colors.light2,
      }}
    >
      <Parallax pages={isMobile ? 6 : 5} ref={parallax}>
        {/* background colors */}
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{
            backgroundImage: `radial-gradient(at 98% 5%, ${colors.accent2} 0, ${colors.primary} 57%)`,
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: colors.accent4 }}
        />
        <ParallaxLayer
          offset={isMobile ? 2 : 2}
          factor={isMobile ? 2.5 : 1}
          speed={1}
          style={{ backgroundColor: colors.accent5 }}
        />
        <ParallaxLayer
          offset={isMobile ? 4 : 3}
          speed={1}
          factor={1.2}
          style={{ backgroundColor: colors.accent4 }}
        />
        <ParallaxLayer
          offset={isMobile ? 5 : 4}
          speed={1}
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: "url(./starry_night.jpg)",
          }}
        />
        {/* assets */}
        <ParallaxLayer offset={0} speed={1} style={{ pointerEvents: "none" }}>
          <BannerImageContainer height="620px" width="620px">
            <Image
              src={`/banner_04.png`}
              alt={`banner`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
          </BannerImageContainer>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={isMobile ? 4 : 4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={isMobile ? 3 : 3}
          speed={0.8}
          style={{ opacity: 0.1 }}
        >
          <Box
            sx={{
              position: "relative",
              marginLeft: "55%",
              transform: "rotate(-30deg)",
            }}
            height={["60px", "120px", "240px"]}
            width={["50px", "100px", "200px"]}
          >
            <Image
              src={`/asteroid.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              marginLeft: "5%",
              transform: "rotate(0deg)",
            }}
            height={["50px", "60px", "120px"]}
            width={["40px", "50px", "100px"]}
          >
            <Image
              src={`/asteroid.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 3.75 : 3.75}
          speed={0.5}
          style={{ opacity: 0.1 }}
        >
          <Box
            sx={{
              position: "relative",
              marginLeft: "70%",
              transform: "rotate(90deg)",
            }}
            height={["89px", "120px", "240px"]}
            width={["80px", "100px", "200px"]}
          >
            <Image
              src={`/asteroid.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              marginLeft: "40%",
              transform: "rotate(45deg)",
            }}
            height={["90px", "120px", "240px"]}
            width={["85px", "100px", "200px"]}
          >
            <Image
              src={`/asteroid.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 2.9 : 2.9}
          speed={0.2}
          style={{ opacity: 0.2 }}
        >
          <Box
            sx={{
              position: "relative",
              marginLeft: "85%",
              transform: "rotate(120deg)",
            }}
            height={["100px", "120px", "240px"]}
            width={["100px", "100px", "200px"]}
          >
            <Image
              src={`/asteroid.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
          <Box
            sx={{
              position: "relative",
              marginLeft: "20%",
              transform: "rotate(-145deg)",
            }}
            height={["100px", "120px", "120px"]}
            width={["100px", "100px", "100px"]}
          >
            <Image
              src={`/asteroid.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 1 : 1}
          speed={isMobile ? 0.2 : 0.5}
          style={{
            pointerEvents: "none",
            marginTop: isMobile ? "-100px" : "-160px",
          }}
        >
          <img
            src={"./spaceship.svg"}
            style={{
              width: isMobile ? "15%" : "8%",
              marginLeft: isMobile ? "20%" : "22%",
              transform: "rotate(-20deg)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 2.01 : 2.2}
          speed={1.2}
          factor={2}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={"./satellite.svg"}
            style={{
              width: isMobile ? "15%" : "25%",
              marginLeft: "70%",
              transform: "rotate(70deg)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 4.3 : 4.3}
          speed={isMobile ? -0.7 : -0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Box
            sx={{
              position: "relative",
              marginLeft: isMobile ? "35%" : "59%",
            }}
            height={["250px", "400px", "500px"]}
            width={["250px", "400px", "500px"]}
          >
            <Image
              src={`/planet.svg`}
              alt={`asteroid`}
              layout="fill"
              objectFit="cover"
              quality="80"
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 5.1 : 4.1} speed={-0.3}>
          <Box
            sx={{
              position: "relative",
              left: "20%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
            }}
            height={["180px", "350px"]}
            width={["110px", "250px"]}
          >
            <Image
              src={`/mannvender.jpeg`}
              alt={`Mannvender`}
              layout="fill"
              objectFit="contain"
              quality="70"
            />
            <Heading
              height={"50px"}
              textAlign="center"
              fontSize={[2, 4, 5]}
              color={colors.light}
              width="100%"
              sx={{
                backgroundColor: colors.dark3,
                paddingY: 1,
              }}
              letterSpacing={2}
            >
              Mannvender
            </Heading>
            <Text
              textAlign="center"
              fontSize={[1, 3, 4]}
              letterSpacing={2}
              color={colors.light}
              width="100%"
              sx={{
                position: "absolute",
                bottom: "-75px",
                backgroundColor: colors.dark3,
                paddingY: 2,
              }}
            >
              Frontend & All Things JavaScript
            </Text>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer offset={isMobile ? 5.1 : 4.1} speed={-0.3}>
          <Box
            sx={{
              position: "relative",
              left: "80%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
            }}
            height={["180px", "350px"]}
            width={["110px", "230px"]}
          >
            <Image
              src={`/ajay.png`}
              alt={`developer`}
              layout="fill"
              objectFit="contain"
              quality="70"
            />
            <Heading
              textAlign="center"
              height={"50px"}
              fontSize={[2, 4, 5]}
              color={colors.light}
              width="100%"
              sx={{
                backgroundColor: colors.dark3,
                paddingY: 1,
              }}
              letterSpacing={2}
            >
              Ajay Kumar
            </Heading>
            <Text
              textAlign="center"
              fontSize={[1, 3, 4]}
              letterSpacing={2}
              color={colors.light}
              width="100%"
              sx={{
                position: "absolute",
                bottom: "-75px",
                backgroundColor: colors.dark3,
                paddingY: 2,
              }}
            >
              DevOps & Cloud Management
            </Text>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 5 : 4}
          speed={-0}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Heading fontSize={[5, 7]} color={colors.light}>
            Team
          </Heading>
          <Box
            sx={{
              position: "relative",
            }}
            height={["200px", "350px"]}
            width={["130px", "250px"]}
          >
            <Image
              src={`/naresh.jpeg`}
              alt={`Naresh`}
              layout="fill"
              objectFit="contain"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[2, 4, 5]}
              letterSpacing={2}
              color={colors.light}
              width="100%"
              sx={{
                position: "relative",
                top: "30px",
                backgroundColor: colors.dark3,
                paddingY: 1,
              }}
            >
              Naresh Dalal
            </Heading>
            <Text
              textAlign="center"
              fontSize={[1, 3, 4]}
              letterSpacing={2}
              color={colors.light}
              width="100%"
              sx={{
                position: "absolute",
                bottom: "-75px",
                backgroundColor: colors.dark3,
                paddingY: 1,
              }}
            >
              Solution Architect & Captain
            </Text>
          </Box>
        </ParallaxLayer>

        {/* Various Sections */}
        <ParallaxLayer
          factor={1}
          offset={0.1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5rem 0",
          }}
        >
          <Flex height={["90vh"]} width={["100vw"]} maxWidth={["1000px"]}>
            <Banner onCtaClick={handleFindMore} />
          </Flex>
        </ParallaxLayer>

        <ParallaxLayer
          factor={0.2}
          offset={0}
          speed={1.2}
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Header />
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5rem 0",
          }}
        >
          <Box>
            <Quote />
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          factor={isMobile ? 1.5 : 1}
          offset={isMobile ? 2 : 2}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5rem 0",
          }}
        >
          <Box>
            <Services />
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={isMobile ? 4 : 3}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default Index;
