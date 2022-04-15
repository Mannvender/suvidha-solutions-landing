import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
import { useTheme } from "styled-components";
import { SERVICES } from "messages";

const Roadmap = () => {
  const { colors, fontWeights } = useTheme();

  return (
    <>
      <Heading
        fontSize={[5, 6]}
        fontWeight={[600]}
        pt={[4]}
        pb={[4]}
        color={colors.dark}
        textAlign="center"
      >
        Save time managing your business with our services
      </Heading>
      <Flex flexWrap="wrap" maxWidth={["1000px"]} m={[4, 4, 0]}>
        {SERVICES.map((item, i) => {
          return (
            <Flex
              key={i}
              flexBasis={[item.basis || "100%"]}
              margin={["0 0"]}
              flexDirection={["row"]}
              alignItems={["flex-start", "center"]}
              justifyContent="center"
              flexWrap="wrap"
              bg={colors.dark3}
            >
              <Flex
                flexBasis={["100%", "30%"]}
                height={["auto", "100%", "100%"]}
                alignItems="center"
                px={[4]}
                py={[4]}
                sx={{
                  backgroundColor: colors[item.color] || item.color,
                }}
              >
                <Heading textAlign="left" fontSize={[4, 6]} fontWeight={900}>
                  {item.when}
                </Heading>
              </Flex>
              <Box flexBasis={["100%", "70%"]} p={[4]}>
                <Heading letterSpacing={2} fontSize={[5]} mb={[3]}>
                  {item.heading}
                </Heading>
                {item.items.map((item) => (
                  <Box
                    sx={{
                      display: "inline-block",
                      color: "white",
                      backgroundColor: colors.accent4,
                      px: 2,
                      py: 1,
                      mr: 3,
                    }}
                  >
                    <Text
                      fontSize={[1, 2]}
                      fontWeight={[fontWeights.normal]}
                      marginTop={[1]}
                      color={colors.dark2}
                    >
                      {item}
                    </Text>
                  </Box>
                ))}
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
};

export default Roadmap;
