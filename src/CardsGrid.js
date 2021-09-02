import React from "react"
import { Card, List} from 'antd';



const cards = [
  {
    title: "Monday",
    cards: [{
      subtitle: 'Task 1',
    },
    {
      subtitle: 'Task 2',
    },
    {
      subtitle: 'Task 3',
    },
    {
      subtitle: 'Task 4',
    },
    ]
  },
  {
    title: "Tuesday",
    cards: [{
      subtitle: 'Task 1',
    },
    {
      subtitle: 'Task 2',
    },
    {
      subtitle: 'Task 3',
    },
    {
      subtitle: 'Task 4',
    }
    ]
  }
]



export const CardsList = ({ props }) => {
  return (
    <div className="CardsList">
      <p> {props.title} </p>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={props.cards}
        renderItem={item => (
          <List.Item>
            <Card title={item.subtitle}>Card content</Card>
          </List.Item>
        )
        }
      />
    </div>
  )
}




export const CardsGrid = () => {
  return (
    <List
      grid={{ gutter: 16, column: 5 }}
      dataSource={cards}
      renderItem={item => (
        <CardsList props={{ title: item.title, cards: item.cards }} />
      )
      }
    />
  )
}


