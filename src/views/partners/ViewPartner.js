import React from 'react'
import {Avatar ,Row,Col, Modal, Image, Divider, Typography} from "antd"
import { DoubleRightOutlined } from '@ant-design/icons';

function ViewPartner({data}) {
    const {name, profile, shortDescription, longDescription} = data
    const [visible, setVisible] = React.useState(false)
    const {Title} = Typography

    return (
        <>
        <DoubleRightOutlined onClick={() => setVisible(true)} />
        {/* // View More Modal*/}
        <Modal title="Detailed View" visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} width={400} style={{top:20}}>
            <Row justify="center" gutter={16}>
                <Col span={24} ><Image src={profile} /></Col>
            </Row>
            <Row justify="center" gutter={16}>
                <Col span={24} ><Title>{name}</Title> </Col>
            </Row>
            
            <Row justify="center" gutter={16}>
                <Col span={24} ><p style={{textAlign:"justify"}}>{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}{longDescription}</p></Col>
            </Row>
        </Modal>
        </>
    )
}

export default ViewPartner
