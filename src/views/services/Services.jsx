import React from 'react'
import {Row, Col,Typography, Divider, Button} from "antd"
import { PlusOutlined } from '@ant-design/icons'
import PackageCard from '../../components/packages/Card'
import Data from "../../api/packages"
import AddService from './AddService'

function Services() {
    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)

    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Services</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Service</Button>
            </Col>
            <AddService visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
        
        <Row gutter={16} wrap justify="start">
           
                {Data.map(item => {
                    const { title, description} = item
                    return(
                        <PackageCard title={title}  description={description}/>
                    )
                })}
        
                {Data.map(item => {
                    const { title, description} = item
                    return(
                        <PackageCard title={title}  description={description}/>
                    )
                })}
                {Data.map(item => {
                    const { title, description} = item
                    return(
                        <PackageCard title={title}  description={description}/>
                    )
                })}
        </Row>
        </>
    )
}

export default Services
