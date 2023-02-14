import React from 'react'
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

  import { EditIcon, DeleteIcon } from '@chakra-ui/icons'


function HabitCard(props) {
    

  return (
    <>
        <Card key={props.habit.id}>
          <CardHeader>
            <Heading size="md" display="flex" justifyContent='space-between'
            alignItems='center'
            >{props.habit.name} 
            <div className="iconsContainer">
                <EditIcon className="headerIcon"/>
                <DeleteIcon className="headerIcon"/>
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
        </Card>
    </>
  )
}

export default HabitCard