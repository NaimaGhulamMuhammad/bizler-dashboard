import React from 'react'
import {Row, Col,Typography, Divider, Button} from "antd"
import { PlusOutlined } from '@ant-design/icons'
import PackageCard from '../../components/packages/Card'
import Data from "../../api/packages"
import AddPackage from './AddPackage'

function Packages() {
    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)

    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Packages</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Package</Button>
            </Col>
            <AddPackage visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
        
        <Row gutter={16} wrap justify="start">
           
                {Data.map(item => {
                    const { title, price, description} = item
                    return(
                        <PackageCard title={title} price={price} description={description}/>
                    )
                })}
        
                {Data.map(item => {
                    const { title, price, description} = item
                    return(
                        <PackageCard title={title} price={price} description={description}/>
                    )
                })}
                {Data.map(item => {
                    const { title, price, description} = item
                    return(
                        <PackageCard title={title} price={price} description={description}/>
                    )
                })}
        </Row>
        </>
    )
}

export default Packages
