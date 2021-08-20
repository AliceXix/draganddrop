import React from "react";
import { Row, Col } from 'antd';


const CardsGrid = () => {
    return (< Row >
        <Col xs={24} xl={8}>
            One of three columns
        </Col>
        <Col xs={24} xl={8}>
            One of three columns
        </Col>
        <Col xs={24} xl={8}>
            One of three columns
        </Col>
    </Row >
    )
}

export default CardsGrid;