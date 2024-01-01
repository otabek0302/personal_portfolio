import { lazy } from "react";

const fakeDelay = (promise) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

const Navbar = lazy(() => fakeDelay(import("./Navbar")));
const Footer = lazy(() => fakeDelay(import("./Footer")));
const Hero = lazy(() => fakeDelay(import("./Hero")));
const Yotube = lazy(() => fakeDelay(import("./YotubeContent")));
const Posts = lazy(() => fakeDelay(import("./Posts")));
const Project = lazy(() => fakeDelay(import("./Project")));
const Features = lazy(() => fakeDelay(import("./Features")));
const Clients = lazy(() => fakeDelay(import("./Clients")));
const NotFound = lazy(() => fakeDelay(import("./NotFound")));
const Contact = lazy(() => fakeDelay(import("./Contact")));
const Loader = lazy(() => fakeDelay(import("./Loader")));

export { Loader, Navbar, Footer, Hero, Yotube, Posts, Project, Features, Clients, NotFound, Contact };
