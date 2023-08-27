import React from "react";
import ToDoForm from "./ToDoForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/app/store";
import { Checkbox, Col, Row } from "antd";
import Style from "../../styles/task.module.css";
import { editTask, handleTaskInput } from "../../redux/features/taskSlice";
import { CheckboxChangeEvent } from "antd/es/checkbox";
function ToDoList() {
  const { task } = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();
  const handleChange = (e: CheckboxChangeEvent, id: number) => {
    const value = e.target.checked;

    dispatch(editTask({ id, value }));
  };
  return (
    <div className={Style?.taskContainer}>
      <ToDoForm />
      {task?.map((item) => {
        return (
          <div key={item?.id}>
            <Row gutter={16}>
              <Col>
                <Checkbox onChange={(e) => handleChange(e, item?.id)}>
                  <span>{item?.id}</span>
                  <span>{item?.project}</span>
                  <span>{item?.title}</span>
                </Checkbox>
              </Col>
            </Row>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;
