import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import Styles from "../../styles/dashboard.module.css";
import ToDoList from "../../components/todo/ToDoList";
function Dashboard() {
  const navigate = useNavigate();
  const handleClick = (link: string) => {
    navigate(`/${link}`);
  };
  return (
    <div>
      <div className={Styles.dashboardTaskContainer}>
        <div className={Styles.dashboardYesterdaysTask}>hi</div>
        <div className={Styles.dashboardTodaysTask}>
          <ToDoList />
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            handleClick("project");
          }}
        >
          Projects
        </div>
        <div
          onClick={() => {
            handleClick("team");
          }}
        >
          Team
        </div>
      </div>
      <Table
        /*  columns={column_}
        dataSource={locationWine}
        loading={locationWineLoader} */
        rowKey={`_id`}
      />
    </div>
  );
}

export default Dashboard;
