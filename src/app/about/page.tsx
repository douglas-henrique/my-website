import Timeline from "@/components/Timeline";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: 'About Douglas Yoshi',
  description: `High skills of collaboration, proactivity, self-learning, creation, managing and team oriented.
I have solid project management skills and strong software architecture abilities. I support the team by constantly align the business requirements with strategy and also by guaranteeing the constant process improvement.
In 4 years acting as tech lead I had opportunity to work with many types of people and technologies, building great mobile and web softwares with high traffic every time.
I have 8 years of experience with WEB development with a high knowledges in Javascript using Node JS and libs like VueJS and ReactJS for front end applications.
5 years of experience with mobile development using Java/Kotlin and React Native for multiplatform development.`,
};

export default function About() {
  return <Timeline />
}