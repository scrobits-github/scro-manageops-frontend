import React, { useState } from "react";
import {
  Button,
  Col,
  DatePicker,
  Drawer,
  Form,
  Input,
  Row,
  Select,
  Space,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Option } from "antd/es/mentions";
import ClientList from "../../components/client/ClientList";

type clientData = {
  fullName: string;
  url: string;
  owner: string;
  type: string;
  approver: string;
  startTime: string;
  description: string;
};
// Declare a new type for clientDetails state
type ClientDetailsState = {
  currentClient: clientData;
};
function Clients() {
  const [open, setOpen] = useState<boolean>(false);
  const [clientDetails, setClientDetails] = useState<ClientDetailsState>({
    currentClient: {
      fullName: "",
      url: "",
      owner: "",
      type: "",
      approver: "",
      startTime: "",
      description: "",
    },
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientDetails((prev) => ({
      currentClient: {
        ...prev.currentClient,
        [name]: value,
      },
    }));
    
  };
  return (
    <div>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add Client
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter user name" }]}
              >
                <Input
                  placeholder="Please enter user name"
                  name="fullName"
                  value={clientDetails?.currentClient?.fullName}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="url"
                label="Url"
                rules={[{ required: true, message: "Please enter url" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                  name="url"
                  value={clientDetails?.currentClient?.url}
                  onChange={handleChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="owner"
                label="Owner"
                rules={[{ required: true, message: "Please select an owner" }]}
              >
                <Select
                  placeholder="Please select an owner"
                  onChange={handleChange}
                >
                  <Option value="xiao">Xiaoxiao Fu</Option>
                  <Option value="mao">Maomao Zhou</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Type"
                rules={[{ required: true, message: "Please choose the type" }]}
              >
                <Select
                  placeholder="Please choose the type"
                  onChange={handleChange}
                >
                  <Option value="private">Private</Option>
                  <Option value="public">Public</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="approver"
                label="Approver"
                rules={[
                  { required: true, message: "Please choose the approver" },
                ]}
              >
                <Select placeholder="Please choose the approver">
                  <Option value="jack">Jack Ma</Option>
                  <Option value="tom">Tom Liu</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="dateTime"
                label="DateTime"
                rules={[
                  { required: true, message: "Please choose the dateTime" },
                ]}
              >
                <DatePicker.RangePicker
                  style={{ width: "100%" }}
                  getPopupContainer={(trigger) => trigger.parentElement!}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="description"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: "please enter url description",
                  },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="please enter url description"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
      <ClientList />
    </div>
  );
}

export default Clients;
