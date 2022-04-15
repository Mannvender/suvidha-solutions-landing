import React, { useState } from "react";
import { Heading, Box, Flex, Text } from "rebass";
import styled, { useTheme } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail, MdMessage } from "react-icons/md";

export const StyledFlex = styled(Flex)`
  color: ${(props) => props.theme.colors.light3};
  &:hover {
    color: ${(props) => props.theme.colors.dark2};
  }
`;
const FaqsSection = () => {
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
      px={[4, 4, 0]}
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
        <Box
          p={[4]}
          flexBasis="100%"
          sx={{
            backgroundColor: colors.dark3,
            cursor: "pointer",
          }}
          mb={[2]}
          onClick={() => handleClick("phone")}
        >
          <StyledFlex justifyContent="space-between">
            <Box display={"flex"} flexDirection="row">
              <FaPhoneSquareAlt fill={colors.light} size={20} />
              <Text mr={[3]} fontSize={[2, 3]} ml={[2]}>
                Phone
              </Text>
            </Box>
            {activeSections.includes("phone") ? (
              <AiOutlineMinus size={20} />
            ) : (
              <AiOutlinePlus size={20} />
            )}
          </StyledFlex>
          <Box
            height={activeSections.includes("phone") ? "40px" : "0px"}
            sx={{
              overflow: "hidden",
              transition: "all 0.4s ease",
            }}
          >
            <Text mt={[3]} color={colors.accent5} fontSize={[1, 4]}>
              7127855864
            </Text>
          </Box>
        </Box>
        <Box
          p={[4]}
          flexBasis="100%"
          sx={{
            backgroundColor: colors.dark3,
            cursor: "pointer",
          }}
          mb={[2]}
          onClick={() => handleClick("email")}
        >
          <StyledFlex justifyContent="space-between">
            <Box display={"flex"} flexDirection="row">
              <MdEmail fill={colors.light} size={22} />
              <Text mr={[3]} fontSize={[2, 3]} ml={[2]}>
                Email
              </Text>
            </Box>
            {activeSections.includes("email") ? (
              <AiOutlineMinus size={20} />
            ) : (
              <AiOutlinePlus size={20} />
            )}
          </StyledFlex>
          <Box
            height={activeSections.includes("email") ? "48px" : "0px"}
            sx={{
              overflow: "hidden",
              transition: "all 0.4s ease",
            }}
          >
            <Text mt={[3]} color={colors.accent5} fontSize={[1, 4]}>
              dalal.naresh@gmail.com
            </Text>
          </Box>
        </Box>
        <Box
          p={[4]}
          flexBasis="100%"
          sx={{
            backgroundColor: colors.dark3,
            cursor: "pointer",
          }}
          mb={[2]}
          onClick={() => handleClick("message")}
        >
          <StyledFlex justifyContent="space-between">
            <Box display={"flex"} flexDirection="row">
              <MdMessage fill={colors.light} size={22} />
              <Text mr={[3]} fontSize={[2, 3]} ml={[2]}>
                Send a message
              </Text>
            </Box>
            {activeSections.includes("message") ? (
              <AiOutlineMinus size={20} />
            ) : (
              <AiOutlinePlus size={20} />
            )}
          </StyledFlex>
          <Box
            height={activeSections.includes("message") ? "947px" : "0px"}
            sx={{
              overflow: "hidden",
              transition: "all 0.4s ease",
            }}
            display="flex"
            justifyContent={"center"}
            pt={[3]}
          >
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScdW6ExhTts62ZmoPSaSINuBuuUft6ZjwLMl-fqHAZGzgVGjQ/viewform?embedded=true"
              width="640"
              height="947"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default FaqsSection;
