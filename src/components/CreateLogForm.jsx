import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const LogForm = () => {

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        //onValuesChange
        size="large"
        >

        <Form.Item label="Title">
          <Input />
        </Form.Item>
        <Form.Item label="Mission Name">
          <Select>
            <Select.Option value="demo">Current Option</Select.Option>
            <Select.Option value="demo">Artemis</Select.Option>
            <Select.Option value="demo">International Space Station</Select.Option>
            <Select.Option value="demo">Hubble Telescope</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Approve" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LogForm;
