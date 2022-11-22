import { Center, Text } from "@chakra-ui/react";
import FadeInOut from "../src/components/animations/FadeInOut";

export default function Home() {
  return (
    <FadeInOut>
      <Center
        bg="transparent"
        justifyContent="flex-end"
        alignItems="flex-end"
        w="full"
        h="full"
      >
        <Text w="300px">
          Born in 1991 in Biarritz, France. <br />I believe web development can
          be more diverse and inspiring. I am building web applications and
          websites with passion and I am allways trying to express myself with
          my code.
        </Text>
      </Center>
    </FadeInOut>
  );
}
