import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined,DoubleRightOutlined } from "@ant-design/icons";
import { Link,useHistory } from "react-router-dom";
import Data from "../../api/portfolio"
import AddPortfolio from './AddPortfolio';
import img2 from "../../img/profile-5.png"
import ViewPortfolio from './ViewPortfolio';

function Portfolios() {

    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)
    const history = useHistory()
    // record.profile.indexOf(value) === 0
    const handleDelete = (key) => {
        // deleteTeamMember(key)
          Data = Data.filter((item) => item.id !== key);
        };
        const columns = [
            {
                title:"Title",
                dataIndex: 'title',
                key:'title',
            },
            {
              title: 'Image',
              dataIndex: 'img',
              key: 'img',
              responsive:['lg','md',],
              align:'center',
              render: value => <img src={value} height="100px" width="100px" />
            },
            {
              title: 'Description',
              dataIndex: 'description',
              key: 'description',
              align:'center'
            },
           {
                  title: 'Actions',
                  dataIndex:'actions',
                  render: (_, record) =>
                    Data.length >= 1 ? (
                      <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.id)}>
                       <CloseCircleTwoTone style={{fontSize:20}} /> 
                      </Popconfirm>
                    ) : null,
                
            },
            {
                title: 'View More',
                dataIndex:'view more',
                responsive:['lg','md',],
                render: (_, record) =>
                  Data.length >= 1 && (<DoubleRightOutlined key="view more" style={{fontSize:20}} onClick={() => history.push(`/viewPortfolio/${record.id}`)} />  )
                
              
          },
           
          ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Portfolios</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Portfolio Item</Button>
            </Col>
            <AddPortfolio visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
        <div>
            <Table columns={columns} className="table " dataSource={Data} loading="false"/>
        </div>
        
        </>
    )
}

export default Portfolios
