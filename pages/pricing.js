import Header from "components/Header";
import { Flex, Box, Text, Heading } from "rebass";
import styled, { useTheme } from "styled-components";
import { HEADING, PRICING, SUBTEXT } from "messages.pricing";
import PriceCard from "components/PriceCard";

const Pricing = () => {
  const { colors } = useTheme();
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      backgroundColor={colors.primary}
      alignContent="center"
      px={[4, 4, 0, 0]}
    >
      <Box width={"100%"} maxWidth={["1000px"]} mx="auto">
        <Header />
        <Heading fontSize={[6]} textAlign="center" mb={[3]}>
          {HEADING}
        </Heading>
        <Text textAlign="center" mb={[5]}>
          {SUBTEXT}
        </Text>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="space-evenly"
          color={colors.dark}
          mb={[4]}
        >
          {PRICING.map((item) => (
            <PriceCard
              flexBasis={["100%", "44%", "23%"]}
              backgroundColor={colors.light}
              heading={item.name}
              subHeading={item.suitedFor}
              eyeCatcher={item.rate.hourly}
              eyeCatcherDescription="Per member per hour"
              features={item.features}
              terms={item.terms}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Pricing;
