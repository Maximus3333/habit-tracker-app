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

import "../css/HomePage.css";
import DailyScheduleDashboard from "../components/DailyScheduleDashboard";
import Sidebar from "../components/Sidebar";

function HomePage() {
  return (
    <ChakraProvider>
      <div className="homePageContainer">
        <Sidebar/>
        <div className="homePageBodyContainer">
          <HabitCardList />
        </div>
        <DailyScheduleDashboard />
      </div>
    </ChakraProvider>
  );
}

export default HomePage;
