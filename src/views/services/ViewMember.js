import React from 'react'
import {Avatar ,Row,Col, Modal, Image, Divider} from "antd"
import { DoubleRightOutlined } from '@ant-design/icons';

function ViewMember({data}) {
    const {name, profile, designation, description} = data
    const [visible, setVisible] = React.useState(false)

    return (
        <>
        <DoubleRightOutlined onClick={() => setVisible(true)} />
        {/* // View More Modal*/}
        <Modal title="Detailed View" visible={visible} onOk={() => setVisible(false)} onCancel={() => setVisible(false)} width={400} style={{top:20}}>
            <Row justify="center" gutter={16}>
                <Col span={12} ><Image src={profile} /></Col>
                <Col span={12} >
                    <ul>
                        <li>{name}</li>
                        <li>{designation}</li>
                    </ul>
                </Col>
            </Row>
            
            <Divider orientation="left" />
            <Row justify="center" gutter={16}>
                <Col span={24} ><p style={{textAlign:"justify"}}>{description}{description}{description}{description}{description}{description}{description}</p></Col>
            </Row>
        </Modal>
        </>
    )
}

export default ViewMember
