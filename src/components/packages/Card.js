import React from 'react'
import {Card, Avatar ,Row,Col, Modal, Typography, Divider} from "antd"
import {DeleteOutlined, DoubleRightOutlined, EditOutlined } from '@ant-design/icons';

function PackageCard({price,title,description}) {
    const {Meta} = Card
    const {Title} = Typography

    return (
        <>
        <Col xs={{span:12}} lg={{span:6}} md={{span:8}}>
        <Card
            style={{marginBottom:20}}
            
        >
        <Meta title={title} />
        <Row justify="space-around">
            <Col>
            <Divider orienatation="left"/>
            </Col>
            <Col>
            <Title level={4}>{price}</Title>
            </Col>
        </Row>
        <Row >
            <Col>
            <p >{description}</p>
            </Col>
        </Row>
        </Card>
        </Col>
        {/* // View More Modal*/}
        {/* <Modal title={title} visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} width={700} style={{top:20}}>
           <Row justify="space-around" align="top">
                <Col span={12} ><h1>{title}</h1></Col>
            </Row>
            <Row justify="center" gutter={16} style={{height:"30vh"}}>
                <Col span={24} ><img src={img} width="100%" height="50%"/></Col>
            </Row>
            <Row justify="center" gutter={16}>
                <Col span={24} ><p style={{textAlign:"justify"}}>{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}{shortDescription}</p></Col>
            </Row>
            <Divider />
            <Row justify="center" gutter={16}>
                <Col span={24} ><p style={{textAlign:"justify"}}>{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}</p></Col>
            </Row>
        </Modal> */}
        </>
    )
}

export default PackageCard
