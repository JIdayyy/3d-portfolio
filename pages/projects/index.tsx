import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import FadeInOut from "../../src/components/animations/FadeInOut";
import ProjectCard from "../../src/components/cards/ProjectCard";

export const projects = [
  {
    id: 1,
    date: "2022",
    title: "Wildify",
    picture: "/wizic.png",
    description:
      "Wildify is a music streaming platform that allows you to discover new music and artists. Build on top of NextJs, React Native and NodeJs it provide a great user experience and tons of features. I build the API in order to give an experience to my student and I decided to create a mobile app and a dashboard to manage the platform in order to try the API myself. The REST API is build with NodeJs and ExpressJs and the database is a PostgreSQL SGBD. The mobile app is build with React Native and Expo. The dashboard is build with NextJs and Chakra UI.",
  },
  {
    id: 2,
    date: "2021",
    title: "Tech Watcher",
    picture: "/tech-watchers.png",
    description:
      "Tech Watcher is a website that allows you to follow the latest news about technology. It is build with NextJs, Chakra UI and with a NodeJS GraphQL API. It is a project that I made to centralize informations about tech and development.",
  },
  {
    id: 3,
    date: "2022",
    title: "Y-Task",
    picture: "/wizic.png",
    description:
      "Y-Task is a task manager that allows you to manage your Tasks and Projects. Is is build with React and Chakra UI. It is a project that I made to learn more about React, Chakra UI and NodeJs during my work'n study course at Wild Code School.",
  },
  {
    id: 4,
    date: "2022",
    title: "My Bookmarks",
    picture: "/wizic.png",
    description:
      "My Bookmarks is a website that allows you to save your bookmarks. It is build with NextJs and Chakra UI. I made this project in order to learn more about drag'n drop and list ordering with PostgreSQL.",
  },
];

export default function Projects() {
  return (
    <Flex alignItems="end" direction="column" p={5} w="full" h="full">
      <FadeInOut>
        <Flex
          h="full"
          w="full"
          overflowY="scroll"
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
