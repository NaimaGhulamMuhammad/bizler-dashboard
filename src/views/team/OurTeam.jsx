import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Data from "../../api/OurTeam"
import AddMember from './AddMember';
import img2 from "../../img/profile-5.png"
import ViewMember from './ViewMember';

function OurTeam() {

    const {Title} = Typography
    const [visible, setVisible] = React.useState(false)
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
              render: id => <a href="">#{id.slice(0,6)}</a>,
            },
            {
                title:"Profile",
                dataIndex: 'profile',
                key:'profile',
                width:'50',
                render: (value,record) => <Avatar src={value} />
            },
            {
              title: 'Description',
              dataIndex: 'description',
              key: 'description',
              responsive:['lg','md',],
              align:'center'
            },
            {
              title: 'Designation',
              dataIndex: 'designation',
              key: 'designation',
              filters:[
                {
                  text:'web developer',
                  value:'web developer'
                },
                {
                  text:'data science expert',
                  value:'data science expert'
                }
              ],
              filterMultiple: false,
              onFilter: (value, record) => record.designation.indexOf(value) === 0,
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
                  Data.length >= 1 && ( <ViewMember data={record}/>) ,
                
              
          },
           
          ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Our Team</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Team Member</Button>
            </Col>
            <AddMember visible={visible} onClose={() => setVisible(false)}/>
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
