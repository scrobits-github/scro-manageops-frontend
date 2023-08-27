import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
  project: string;
  assignedBy: string;
  estimatedTime: string;
};
type assignedByState = string;

type InitialState = {
  loading: boolean;
  task: Task[];
  error: string;
  assignedBy: assignedByState[];
  currentTask: Task;
};

const initialState: InitialState = {
  loading: false,
  task: [],
  error: "",
  assignedBy: ["self", "manager"],
  currentTask: {
    id: 0,
    title: "",
    isCompleted: false,
    createdAt: "",
    project: "",
    assignedBy: "",
    estimatedTime: "",
  },
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    handleTaskInput: (state, action: PayloadAction<object>) => {
      // type of the action payload should be object
      state.currentTask = {
        ...state.currentTask,
        ...action.payload,
      };
      return state;
    },

    addTask: (state, action: PayloadAction<Task>) => {
      console.log("in add", action);
      var data = action.payload;
      if (state.task.length > 0) {
        data = {
          ...data,
          id: state.task.length,
        };
      } else {
        data = {
          ...data,
          id: 0,
        };
      }
      state.task.push(data);
    },
    editTask: (
      state,
      action: PayloadAction<{ id: number; value: boolean }>
    ) => {
      state.task.map((item, index) => {
        if (item?.id === action.payload?.id) {
          state.task[index] = {
            ...state.task[index],
            isCompleted: action.payload.value,
          };
        }
      });
    },
    deleteTask: (state, action: PayloadAction<number>) => {},
    toggleCompleted: (state, action: PayloadAction<number>) => {},
  },
});
export const {
  addTask,
  editTask,
  deleteTask,
  toggleCompleted,
  handleTaskInput,
} = taskSlice.actions;
export default taskSlice.reducer;
