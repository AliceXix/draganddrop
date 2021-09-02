import React from "react";
import { List, Card } from 'antd';
import Grid from "antd/lib/card/Grid";
//import NestedList from "./nestedList";

const data = [
  {
    title: 'Tasks',
    tasks: [],
  },
  {
    title: 'Monday',
    tasks: ['Samurai killing', 'Order toilet paper'],
  },
  {
    title: 'Tuesday',
    tasks: [],
  },
  {
    title: 'Wednesday',
    tasks: [],
  },
  {
    title: 'Thursday',
    tasks: [],
  },
  {
    title: 'Friday',
    tasks: ['Reserve sushi'],
  },
  {
    title: 'Saturday',
    tasks: [],
  },
  {
    title: 'Sunday',
    tasks: [],
  },
];

const CardsGrid = () => {
  //const something = data.map(item => item + 1);

  //List.dataSource.renderItem(item => <div>item</div>);

    return(
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <Card title={item.title}
        tasks={item.tasks} >
        </Card>
      </List.Item>
    )}
  />

)
}


export default CardsGrid;