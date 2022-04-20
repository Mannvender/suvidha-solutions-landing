import React from "react";
import { Flex, Heading, Text, Box } from "rebass";
import { useTheme } from "styled-components";

const MediaCard = ({
  flexBasis,
  backgroundColor,
  description,
  children,
  mr,
}) => {
  const { colors } = useTheme();
  return (
    <Flex
      flexDirection="column"
      width={"100%"}
      flexBasis={flexBasis}
      backgroundColor={backgroundColor}
      p={[3]}
      mb={[4]}
      mr={mr}
      sx={{
        borderColor: colors.accent1,
        borderWidth: 10,
        borderStyle: "solid",
      }}
      alignItems="center"
    >
      {children}
      <Text textAlign={"center"} mt={[4]}>
        {description}
      </Text>
    </Flex>
  );
};

export default MediaCard;
