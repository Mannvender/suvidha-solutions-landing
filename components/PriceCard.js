import React from "react";
import { Flex, Heading, Text, Box } from "rebass";
import { useTheme } from "styled-components";

const PriceCard = ({
  heading,
  subHeading,
  eyeCatcher,
  eyeCatcherDescription,
  features,
  terms,
  flexBasis,
  backgroundColor,
}) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      width={"100%"}
      flexBasis={flexBasis}
      backgroundColor={backgroundColor}
      p={[3]}
      mb={[4, 4, 0]}
    >
      <Heading mb={[2]} fontSize={[4]}>
        {heading}
      </Heading>
      <Text mb={[4]} fontSize={[1]} color={colors.dark3} minHeight={["40px"]}>
        {subHeading}
      </Text>
      <Heading mb={[2]} fontSize={[5]}>
        {eyeCatcher}
      </Heading>
      <Text mb={[4]} fontSize={[1]} color={colors.dark3}>
        {eyeCatcherDescription}
      </Text>

      <Text fontSize={[1]} color={colors.dark3} mb={[2]}>
        Features
      </Text>
      <Box minHeight={["140px"]}>
        {features.map((feature) => (
          <Box p={[2]} mb={[1]} backgroundColor={colors.accent4}>
            {feature}
          </Box>
        ))}
      </Box>
      <hr />
      <Text fontSize={[1]} color={colors.dark3} mb={[2]}>
        Terms
      </Text>
      {terms.map((term) => (
        <Box p={[2]} mb={[1]} backgroundColor={colors.accent4}>
          {term}
        </Box>
      ))}
    </Flex>
  );
};

export default PriceCard;
