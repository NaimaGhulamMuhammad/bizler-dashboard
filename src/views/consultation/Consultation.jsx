import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined,DoubleRightOutlined } from "@ant-design/icons";
import { Link ,useHistory} from "react-router-dom";
import Data from "../../api/consultation"
import img2 from "../../img/profile-5.png"

function OurTeam() {

    const {Title} = Typography
    const history = useHistory()
    const handleViewMore = (e) => history.push(`/viewConsulation/${e.record.id}`)

    // record.profile.indexOf(value) === 0
    const handleDelete = (key) => {
        // deleteTeamMember(key)
          Data = Data.filter((item) => item.id !== key);
        };
        const columns = [
            {
              title: 'Id',
              dataIndex: 'id',
              key: 'id',
              responsive:['lg','md',],
            },
            {
                title:"Name",
                dataIndex: 'name',
                key:'name',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
              responsive:['lg','md',],
              align:'center'
            },
            {
              title: 'Services',
              dataIndex: 'service',
              key: 'service',
              filters:[
                {
                  text:'web development',
                  value:'web development'
                },
                {
                  text:'designing',
                  value:'designing'
                }
              ],
              // filterMultiple: false,
              onFilter: (value, record) => record.service.indexOf(value) === 0,
            },
            {
              title: 'Message',
              dataIndex: 'contact',
              key: 'contact',
              responsive:['lg','md',],
              align:'center',
              width:200
            },
           {
                  title: 'Actions',
                  dataIndex:'actions',
                  width:'50',
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
                  Data.length >= 1 && (<DoubleRightOutlined key="view more" style={{fontSize:20}} onClick={() => history.push(`/viewConsulation/${record.id}`)} />  )
                
              

          },
           
          ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Consulations</Title>
            </Col>
            <Divider />
        </Row>
        <div>
            <Table columns={columns} className="table " dataSource={Data} loading="false"/>
        </div>
        {/* // View More Modal*/}
        
        </>
    )
}

export default OurTeam
