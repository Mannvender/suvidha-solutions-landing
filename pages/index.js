import React, { useRef } from "react";
import { Box, Flex, Heading } from "rebass";
import Header from "components/Header";
import Banner from "components/Banner";
import Quote from "components/Quote";
import FAQ from "components/FAQ";
import Mint from "components/Mint";
import Roadmap from "components/Roadmap";
import { MINT_DATE, DATE_OPTIONS, FAQS } from "messages";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import { useTheme } from "styled-components";
import Image from "next/image";

const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

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
      <Parallax pages={5} ref={parallax}>
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
          factor={1.2}
          speed={1}
          style={{ backgroundColor: colors.accent5 }}
        />
        <ParallaxLayer
          offset={3}
          speed={1}
          factor={1.2}
          style={{ backgroundColor: colors.accent4 }}
        />
        <ParallaxLayer
          offset={4}
          speed={1}
          style={{ backgroundColor: colors.accent5 }}
        />
        {/* assets */}
        <ParallaxLayer offset={0} speed={1} style={{ pointerEvents: "none" }}>
          <Box
            sx={{
              position: "relative",
              top: "100%",
              left: "50%",
              transform: "translateY(-620px)",
            }}
            height="620px"
            width="620px"
          >
            <Image
              src={`/cheetah_transparent.png`}
              alt={`bender`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
          </Box>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3.2}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={3} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "60%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "25%", marginLeft: "30%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "80%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={4.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "5%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "15%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.225}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={"./meteor.png"}
            style={{ width: "30%", marginLeft: "70%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.7}
          speed={-0.3}
          factor={2}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={"./ticket.png"}
            style={{
              width: "16%",
              marginLeft: "75%",
              transform: "rotate(-25deg)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.2}
          speed={1.2}
          factor={2}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={"./passport.png"}
            style={{
              width: "25%",
              marginLeft: "-6%",
              transform: "rotate(70deg)",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={4.55}
          speed={-0.4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <img src={url("earth")} style={{ width: "60%" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={4.1} speed={-0.3}>
          <Box
            sx={{
              position: "relative",
              left: "20%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
            }}
            height="350px"
            width="230px"
          >
            <Image
              src={`/team_2.png`}
              alt={`bender`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[5]}
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
        <ParallaxLayer offset={4.1} speed={-0.3}>
          <Box
            sx={{
              position: "relative",
              left: "80%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              display: "flex",
            }}
            height="350px"
            width="230px"
          >
            <Image
              src={`/team_3.png`}
              alt={`bender`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[5]}
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
          offset={4}
          speed={-0}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          // onClick={() => parallax.current.scrollTo(0)}
        >
          <Heading fontSize={[8]} color={colors.dark}>
            Team
          </Heading>
          <Box
            sx={{
              position: "relative",
            }}
            height="350px"
            width="250px"
          >
            <Image
              src={`/team_1.png`}
              alt={`bender`}
              layout="fill"
              objectFit="cover"
              quality="70"
            />
            <Heading
              textAlign="center"
              fontSize={[5]}
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
          factor={1}
          offset={2}
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
          offset={3}
          speed={0.1}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5rem 0",
          }}
        >
          <Box>
            <FAQ faqs={FAQS} />
          </Box>
        </ParallaxLayer>
      </Parallax>
    </Box>
  );
};

export default Index;
