import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";

import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

function HabitCard(props) {
  return (
    <>
      <Card
        key={props.habit.id}
        colorScheme="#f5f4f4"
        background="#c8f7dc"
        height={props.height+'px'}
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="270px"
      >
        <div className="cardBorder">
          <CardHeader>
            <Heading
              size="md"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {props.habit.name}
              <div className="iconsContainer">
                <EditIcon className="headerIcon" />
                <DeleteIcon className="headerIcon" />
              </div>
            </Heading>
            <Divider />
          </CardHeader>
          <CardBody>
            <Text>{props.habit.notes}</Text>
          </CardBody>
          <CardFooter>
            <Text>End Date: {props.habit.endDate}</Text>
            <Text>Days Missed: {props.habit.daysMissed}</Text>
            <Button>View details</Button>
          </CardFooter>
        </div>
      </Card>
    </>
  );
}

export default HabitCard;
