import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/app/store";
import { Button, Col, Form, Input, Row } from "antd";
import { addTask, handleTaskInput } from "../../redux/features/taskSlice";
import { PlusOutlined } from "@ant-design/icons";

function ToDoForm() {
  const { assignedBy, currentTask } = useSelector(
    (state: RootState) => state?.task
  );
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("assignedby: ", assignedBy);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    dispatch(
      handleTaskInput({
        [name]: value,
      })
    );
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    dispatch(addTask(currentTask));
  };
  return (
    <div>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Row>
          <Col>
            <Input
              name="project"
              onChange={handleChange}
              placeholder="project"
            />
          </Col>
          <Col>
            <Input
              name="assignedBy"
              onChange={handleChange}
              placeholder="assignedBy"
            />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Input name="title" onChange={handleChange} placeholder="title" />
          </Col>
        </Row>
        <Row>
          <Input
            name="estimatedTime"
            onChange={handleChange}
            placeholder="Estimated Time"
          />
        </Row>
        <Row>
          <Col>
            <Button icon={<PlusOutlined />} type="primary" htmlType="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ToDoForm;
