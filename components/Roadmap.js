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
            bg={colors.dark3}
          >
            <Flex
              flexBasis={["50%"]}
              height="100%"
              alignItems="center"
              p={[4]}
              sx={{
                backgroundColor: colors[item.color] || item.color,
              }}
            >
              <Heading textAlign="left" fontSize={[6]} fontWeight={900}>
                {item.when}%
              </Heading>
            </Flex>
            <Box flexBasis={["100%", "50%"]} p={[4]}>
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
