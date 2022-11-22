import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import FadeInOut from "../../src/components/animations/FadeInOut";
import ProjectCard from "../../src/components/cards/ProjectCard";

export const projects = [
  {
    id: 1,
    date: "2021",
    title: "Wizic",
    picture: "/wizic.png",
  },
  {
    id: 2,
    date: "2021",
    title: "Tech Watcher",
    picture: "/tech-watchers.png",
  },
  {
    id: 3,
    date: "2022",
    title: "Y-Task",
    picture: "/wizic.png",
  },
  {
    id: 4,
    date: "2022",
    title: "My Bookmarks",
    picture: "/wizic.png",
  },
];

export default function Projects() {
  return (
    <Flex alignItems="end" direction="column" p={5} w="full" h="full">
      <FadeInOut>
        <Flex
          h="full"
          w="full"
          overflowY="auto"
          overflowX="hidden"
          position="absolute"
          direction="column"
          alignItems="end"
        >
          {projects.map((item) => (
            <Link key={item.id} href={`/projects/${item.id}`}>
              <ProjectCard project={item} />
            </Link>
          ))}
        </Flex>
      </FadeInOut>
    </Flex>
  );
}
