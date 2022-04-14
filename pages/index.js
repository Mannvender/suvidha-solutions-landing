import React, { useRef } from "react";
import { Box, Flex, Heading } from "rebass";
import Header from "components/Header";
import Banner from "components/Banner";
import Quote from "components/Quote";
import FAQ from "components/FAQ";
import Roadmap from "components/Roadmap";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styled, { useTheme } from "styled-components";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { FAQS } from "messages";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;
const BannerImageContainer = styled(Box)`
  position: relative;
  top: 100%;
  left: 25%;
  transform: translateY(-620px);
  @media (min-width: 1000px) {
    left: 50%;
  }
`;

const Index = () => {
  const { colors } = useTheme();
  const parallax = useRef(null);
  const handleFindMore = () => {
    parallax?.current?.scrollTo(1);
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
          offset={2}
          factor={isMobile ? 3.2 : 1.3}
          speed={1}
          style={{ backgroundColor: colors.accent5 }}
        />
        <ParallaxLayer
          offset={isMobile ? 4 : 3.1}
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
            backgroundImage: "url(./planet_bg.svg)",
          }}
        />
        {/* assets */}
        <ParallaxLayer offset={0} speed={1} style={{ pointerEvents: "none" }}>
          <BannerImageContainer height="620px" width="620px">
            <Image
              src={`/cheetah_transparent.png`}
              alt={`cheetah`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
          </BannerImageContainer>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={isMobile ? 5 : 4}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={isMobile ? 4 : 3}
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
          offset={isMobile ? 4.75 : 3.75}
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
          offset={isMobile ? 4 : 2.9}
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
          offset={isMobile ? 1.22 : 1.33}
          speed={isMobile ? -0.2 : -0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={"./meteor.png"}
            style={{
              width: isMobile ? "40%" : "20%",
              marginLeft: isMobile ? "60%" : "82%",
              transform: "rotate(-30deg)",
            }}
          />
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
          offset={isMobile ? 3.7 : 2.9}
          speed={-0.2}
          factor={2}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={"./ticket.png"}
            style={{
              width: isMobile ? "35%" : "18%",
              marginLeft: isMobile ? "58%" : "75%",
              transform: "rotate(-25deg)",
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
            src={"./passport.png"}
            style={{
              width: isMobile ? "50%" : "25%",
              marginLeft: "-6%",
              transform: "rotate(70deg)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 4.5 : 4.1}
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
            width={["110px", "230px"]}
          >
            <Image
              src={`/team_2.png`}
              alt={`chicorita cheetah`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[4, 5]}
              color={colors.dark}
              width="100%"
              sx={{
                position: "absolute",
                bottom: "-32px",
              }}
            >
              Chicorita
            </Heading>
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
              src={`/team_3.png`}
              alt={`developer cheetah`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[4, 5]}
              color={colors.dark}
              width="100%"
              sx={{
                position: "absolute",
                bottom: "-32px",
              }}
            >
              1000101
            </Heading>
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
          <Heading fontSize={[5, 8]} color={colors.dark}>
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
              src={`/team_1.png`}
              alt={`cheesy cheetah`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[4, 5]}
              color={colors.dark}
              width="100%"
              sx={{
                position: "absolute",
                bottom: "-45px",
              }}
            >
              Cheesy
            </Heading>
          </Box>
        </ParallaxLayer>

        {/* Various Sections */}
        <ParallaxLayer
          factor={1}
          offset={0}
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
          offset={isMobile ? 0 : 0.05}
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
          factor={1}
          offset={isMobile ? 2.5 : 2}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5rem 0",
          }}
        >
          <Box>
            <Roadmap />
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          factor={1}
          offset={isMobile ? 4 : 3.1}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FAQ faqs={FAQS} />
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default Index;
