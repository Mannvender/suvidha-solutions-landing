import React, { useRef } from "react";
import { Box, Flex } from "rebass";
import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Quote from "components/Quote";
import Mint from "components/Mint";
import Roadmap from "components/Roadmap";
import { MINT_DATE, DATE_OPTIONS } from "messages";
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
  return (
    <Box
      position="relative"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#253237",
      }}
    >
      <Parallax pages={3}>
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
              transform: "translateY(-700px)",
            }}
            height="700px"
            width="700px"
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
          factor={3}
          style={{
            backgroundImage: url("stars", true),
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1.3}
          speed={-0.3}
          style={{ pointerEvents: "none" }}
        >
          <img
            src={url("satellite4")}
            style={{ width: "15%", marginLeft: "70%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "55%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "15%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "70%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "40%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img
            src={url("cloud")}
            style={{ display: "block", width: "10%", marginLeft: "10%" }}
          />
          <img
            src={url("cloud")}
            style={{ display: "block", width: "20%", marginLeft: "75%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
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
        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
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
          offset={2.5}
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
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: "80%",
            backgroundPosition: "center",
            backgroundImage: url("clients", true),
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => parallax.current.scrollTo(0)}
        >
          <img src={url("clients-main")} style={{ width: "40%" }} />
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
            <Banner />
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
      </Parallax>

      {/* <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={url("bash")} style={{ width: "40%" }} />
        </ParallaxLayer> */}
    </Box>
  );
};

export default Index;
