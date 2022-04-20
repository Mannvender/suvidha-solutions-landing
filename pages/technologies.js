import Header from "components/Header";
import { Box, Text, Heading } from "rebass";
import { useTheme } from "styled-components";
import { HEADING, STACK, SUBTEXT } from "messages.technologies";
import Card from "components/MediaCard";
import { FaAngular, FaReact, FaSass } from "react-icons/fa";
import {
  SiJavascript,
  SiVueDotJs,
  SiSvelte,
  SiNextDotJs,
  SiNodeDotJs,
  SiFlutter,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiAmazonaws,
  SiGooglecloud,
  SiAzuredevops,
  SiDocker,
  SiJenkins,
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

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
        {Object.keys(STACK).map((category) => (
          <>
            <Heading mb={[4]}>{category}</Heading>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              color={colors.dark}
              mb={[4]}
              justifyContent={["space-between", "space-between", "flex-start"]}
            >
              {STACK[category].map((tech) => (
                <Card
                  flexBasis={["46%", "30%", "15%"]}
                  backgroundColor={colors.light}
                  description={tech.name}
                  mr={[0, 0, 4]}
                >
                  {getIcon(tech.name.toLowerCase())}
                </Card>
              ))}
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

const getIcon = (name) => {
  switch (name) {
    case "react native":
    case "react":
      return <FaReact size={"50px"} />;
    case "angular":
      return <FaAngular size={"50px"} />;
    case "javascript":
      return <SiJavascript size={"50px"} />;
    case "vuejs":
      return <SiVueDotJs size={"50px"} />;
    case "sass":
      return <FaSass size={"50px"} />;
    case "svelte":
      return <SiSvelte size={"50px"} />;
    case "nextjs":
      return <SiNextDotJs size={"50px"} />;
    case "nodejs":
      return <SiNodeDotJs size={"50px"} />;
    case "flutter":
      return <SiFlutter size={"50px"} />;
    case "postgres":
      return <SiPostgresql size={"50px"} />;
    case "mysql":
      return <SiMysql size={"50px"} />;
    case "mongodb":
      return <SiMongodb size={"50px"} />;
    case "aws":
      return <SiAmazonaws size={"50px"} />;
    case "google cloud":
      return <SiGooglecloud size={"50px"} />;
    case "azure":
      return <SiAzuredevops size={"50px"} />;
    case "docker":
      return <SiDocker size={"50px"} />;
    case "jenkins":
      return <SiJenkins size={"50px"} />;
    case "terraform":
      return <SiTerraform size={"50px"} />;
    case "kubernetes":
      return <SiKubernetes size={"50px"} />;
    default:
      break;
  }
};

export default Pricing;
