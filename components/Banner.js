import React from "react";
import { Flex, Heading, Text } from "rebass";
import { useTheme } from "styled-components";
import Button from "components/Button";
import { isDesktop } from "react-device-detect";

const Banner = ({ onCtaClick }) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="row"
      pt={[4, 6]}
      px={[4, 4, 4, 0]}
      justifyContent="space-between"
    >
      <Flex
        flexBasis={["90%"]}
        flexDirection="column"
        width={["56vw", "50vw", "30vw"]}
      >
        <Heading
          fontSize={[5, 6, 6]}
          fontWeight={["bold"]}
          marginBottom={[2]}
          letterSpacing={2}
          mb={[4]}
        >
          Quality digital service you really want !
        </Heading>
        {isDesktop && (
          <Text mr={[3]} fontSize={[1, 2]} mb={[4]}>
            We are delivering top level digital services with our best
            experienced team, just get started with us.
          </Text>
        )}
        <Flex flexWrap="wrap">
          <Button onClick={onCtaClick}>Get in touch</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Banner;
