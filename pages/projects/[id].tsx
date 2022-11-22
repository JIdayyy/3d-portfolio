import { Center, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { projects } from ".";

export default function ProjectDetails() {
  const { query } = useRouter();
  const { id } = query;

  const getProjectById = (pId: string) => {
    return projects.find((project) => project.id === parseInt(pId as string));
  };

  return (
    <Center w="full" h="full">
      <Text>{getProjectById(id as string)?.title}</Text>
      <Image
        src={getProjectById(id as string)?.picture}
        width={500}
        height={500}
        alt="project"
      />
    </Center>
  );
}
