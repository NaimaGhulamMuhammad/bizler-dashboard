import React from 'react'
import { Table,Popconfirm,Row, Avatar,Col,Typography, Divider, Button, Image } from 'antd';
import { CloseCircleTwoTone, PlusOutlined,DoubleRightOutlined } from "@ant-design/icons";
import { Link ,useHistory} from "react-router-dom";
import Data from "../../api/Job"
import AddJob from "./AddJob";
import img2 from "../../img/profile-5.png"

function Jobs() {

    const {Title} = Typography
    const history = useHistory()
    const [visible, setVisible] = React.useState(false)

    // record.profile.indexOf(value) === 0
    const handleDelete = (key) => {
        // deleteTeamMember(key)
          Data = Data.filter((item) => item.id !== key);
        };
        const columns = [
            {
                title:"Name",
                dataIndex: 'name',
                key:'name',
            },
            {
              title: 'image',
              dataIndex: 'image',
              key: 'image',
              responsive:['lg','md',],
              align:'center'
            },
            {
              title: 'Description',
              dataIndex: 'shortDescription',
              key: 'shortDescription',
              responsive:['lg','md',],
              align:'center',
              width:200
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
            // {
            //     title: 'View More',
            //     dataIndex:'view more',
            //     width:'50',
            //     responsive:['lg','md',],
            //     render: (_, record) =>
            //       Data.length >= 1 && (  )     
            // },
           
          ];
    return (
        <>
        <Row gutter={16} justify="space-between" align="center">
            <Col >
            <Title level={2}> Jobs/Career</Title>
            </Col>
            <Col >
            <Button type="primary" size="large" onClick={()=> setVisible(true)} icon={<PlusOutlined />}>Add Job</Button>
            </Col>
            <AddJob visible={visible} onClose={() => setVisible(false)}/>
            <Divider />
        </Row>
        <div>
            <Table columns={columns} dataSource={Data} loading="false"/>
        </div>
        
        </>
    )
}

export default Jobs
