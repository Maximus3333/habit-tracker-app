import React from 'react'
import {
    SimpleGrid,
  
  } from "@chakra-ui/react";

import HabitCard from './HabitCard';

  function HabitCardList() {

    const habits = [
        {
        "id": 1,
        "name": "Exercise",
        "description": "Doing 30 minutes of physical activity every day",
        "streak": 12,
        "goal": 30,
        "createdAt": "2022-01-01T12:00:00.000Z",
        "updatedAt": "2022-01-15T12:00:00.000Z",
        "daysMissed": 2,
        "endDate": "2023-05-20",
        "notes": "I need to start waking up earlier to go for a run before work."
        },
        {
        "id": 2,
        "name": "Meditation",
        "description": "Meditating for 15 minutes every day",
        "streak": 10,
        "goal": 15,
        "createdAt": "2022-01-02T12:00:00.000Z",
        "updatedAt": "2022-01-15T12:00:00.000Z",
        "daysMissed": 0,
        "endDate": "2023-06-15",
        "notes": "I feel more focused and relaxed after meditating every day."
        },
        {
        "id": 3,
        "name": "Reading",
        "description": "Reading for 30 minutes every day",
        "streak": 8,
        "goal": 30,
        "createdAt": "2022-01-03T12:00:00.000Z",
        "updatedAt": "2022-01-15T12:00:00.000Z",
        "daysMissed": 1,
        "endDate": "2023-07-10",
        "notes": "I need to remember to bring my water bottle with me to work."
        }
        ]
  return (
    <div className="listContainer" style={{overflowY: 'scroll', height: '80vh', width: 'fit-content'}}>
    <SimpleGrid
            spacing={4}
            // templateRows="repeat(3, 200px);"
            width='300px'
            
        >
        {habits.map((habit) => (
            <HabitCard habit={habit}/>
        ))}
        
        </SimpleGrid>
    </div>
    
  )
}

export default HabitCardList