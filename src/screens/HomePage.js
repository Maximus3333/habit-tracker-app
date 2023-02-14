import React from "react";

import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  SimpleGrid,

} from "@chakra-ui/react";
import HabitCardList from "../components/HabitCardList";

import '../css/HomePage.css'

function HomePage() {

  return (
    <ChakraProvider>
    <div className="homePageContainer">
    <div className="homePageBodyContainer">
            <HabitCardList/>

        </div>
    </div>
    </ChakraProvider>
  );
}

export default HomePage;
