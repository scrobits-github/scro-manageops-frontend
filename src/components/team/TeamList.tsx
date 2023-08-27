import { Table } from "antd";
import teamData from "../../data/teamData.json";
type columnTypeItem = {
  title: string;
  dataIndex: string;
  key: string;
};
type columnTypeList = columnTypeItem[];
function TeamList() {
  const dataSource = teamData?.teamData;
  const columns: columnTypeList = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Joining Date",
      dataIndex: "joiningDate",
      key: "joiningDate",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default TeamList;
