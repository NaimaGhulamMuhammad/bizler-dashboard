import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Data from "../../api/partners"
import ViewPartner from './ViewPartner';
import img2 from "../../img/profile-5.png"
import AddPartner from './AddPartner';

function Partners() {

    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)
    const handleDelete = (key) => {
        // deleteTeamMember(key)
          Data = Data.filter((item) => item.id !== key);
        };

              const columns = [
              {
                  title:"Profile",
                  dataIndex: 'profile',
                  key:'profile',
                  render: (value,record) => <Avatar src={value} />
              },
              {
                title: 'Description',
                dataIndex: 'shortDescription',
                key: 'description',
                responsive:['lg','md',],
                align:'center',
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
                    Data.length >= 1 && ( <ViewPartner data={record}/>) ,    
            },
            
            ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Our Team</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Business Partner</Button>
            </Col>
            <AddPartner visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
        <div>
            <Table columns={columns} className="table " dataSource={Data} loading="false"/>
        </div>
        {/* // View More Modal*/}
        
        </>
    )
}

export default Partners
