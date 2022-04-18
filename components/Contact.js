import React, { useState } from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdMessage, MdLocationOn } from "react-icons/md";
import { CONTACT } from "messages";

const getIcon = (name) => {
  const { colors } = useTheme();
  switch (name) {
    case "Phone":
      return <FaPhoneSquareAlt fill={colors.primary} size={20} />;
    case "Email":
      return <MdEmail fill={colors.primary} size={20} />;
    case "Address":
      return <MdLocationOn fill={colors.primary} size={20} />;
    case "Send a message":
      return <MdMessage fill={colors.primary} size={20} />;
  }
};

export const StyledFlex = styled(Flex)`
  color: ${(props) => props.theme.colors.light3};
  &:hover {
    color: ${(props) => props.theme.colors.dark2};
  }
`;
const Contact = () => {
  const { colors } = useTheme();
  const [activeSections, setActive] = useState([]);

  const handleClick = (id) => {
    if (activeSections.includes(id)) {
      setActive(activeSections.filter((item) => item !== id));
    } else {
      setActive([...activeSections, id]);
    }
  };
  return (
    <Flex
      maxWidth="1000px"
      flexDirection="column"
      height={["auto", "auto"]}
      alignItems="center"
      justifyContent="center"
      role="region"
      aria-label="FAQs"
      px={[4, 4, 4, 0]}
      id="faqs"
      sx={{ position: "relative" }}
    >
      <Heading
        fontSize={[5, 6]}
        fontWeight={[600]}
        pt={[4]}
        pb={[4]}
        color={colors.dark}
      >
        Got A Project Or A Partnership In Mind?
      </Heading>
      <Flex
        flexWrap="wrap"
        justifyContent="space-around"
        width={["100%"]}
        mb={[5]}
      >
        {CONTACT.map((item) => (
          <Box
            key={item.name}
            p={[4]}
            flexBasis="100%"
            sx={{
              backgroundColor: colors.dark3,
              cursor: "pointer",
            }}
            mb={[2]}
            onClick={() => handleClick(item.name)}
          >
            <StyledFlex justifyContent="space-between">
              <Box display={"flex"} flexDirection="row">
                {getIcon(item.name)}
                <Text mr={[3]} fontSize={[2, 3]} ml={[2]}>
                  {item.name}
                </Text>
              </Box>
              {activeSections.includes(item.name) ? (
                <AiOutlineMinus size={20} />
              ) : (
                <AiOutlinePlus size={20} />
              )}
            </StyledFlex>
            <Box
              height={activeSections.includes(item.name) ? item.height : "0px"}
              sx={{
                overflow: "hidden",
                transition: "all 0.4s ease",
              }}
              display="flex"
              flexDirection={"column"}
              justifyContent={item.align}
            >
              {!item.iframe &&
                item.value.map((v, i) => (
                  <Text
                    mt={[3]}
                    color={colors.primary}
                    fontSize={[1, 4]}
                    key={i}
                  >
                    {v}
                  </Text>
                ))}
              {item.iframe && (
                <iframe
                  src={item.link}
                  width="640"
                  height="947"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  Loading…
                </iframe>
              )}
            </Box>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default Contact;
