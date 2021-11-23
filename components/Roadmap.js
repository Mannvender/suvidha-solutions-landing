import React from "react";
import { Box, Flex, Heading, Card, Text } from "rebass";
import { useTheme } from "styled-components";
import Image from "next/image";
import { ROADMAP } from "messages";

const Roadmap = () => {
  const { colors, fontWeights } = useTheme();
  // const { flags } = useFlags();

  return (
    <Flex flexWrap="wrap" maxWidth={["1000px"]}>
      {ROADMAP.map((item) => {
        return (
          <Flex
            flexBasis={["50%"]}
            margin={["0 0"]}
            flexDirection={["row"]}
            alignItems="center"
            justifyContent="center"
            flexWrap="wrap"
            bg="rgba(0,0,0,0.72)"
          >
            <Box
              sx={{ position: "relative" }}
              flexBasis={["40%"]}
              height="100%"
            >
              <Image
                src={`/${item.when}_percent.png`}
                alt={`bender`}
                layout="fill"
                objectFit="cover"
                quality="70"
              />
            </Box>
            <Box flexBasis={["100%", "60%"]} p={[4]}>
              <Text
                fontSize={[2]}
                fontWeight={[fontWeights.normal]}
                marginTop={[1]}
                color={colors.dark2}
              >
                {item.what}
              </Text>
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default Roadmap;
