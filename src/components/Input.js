import React from 'react'
import {Input, Col, Form,InputNumber} from "antd"

function FormInput({textarea,name,label,placeholder,icon, formatter,handleChange,half,type, message,required}) {
    return (
        <Col span={half? 12 : 24}>
 <Form.Item name={name} type={type} label={label} rules={[{required:required,message:message}]}>
       
{type==="number" && <InputNumber style={{ width: '100%' }}
                formatter={value => `${formatter? formatter: ''} ${value}`}
                onChange={handleChange} size="large"
             />
}
{
    type==='text' &&  <Input size="large" placeholder={placeholder} onChange={handeChange} />
}
     {textarea&&
            <Input.TextArea rows={4} placeholder={placeholder} onChange={handeChange}/>
}
</Form.Item>
        </Col>
    )
}
export default FormInput
