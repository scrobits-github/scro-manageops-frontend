import { Table } from "antd";
import projectListData from "../../data/projectData.json";

type columnTypeItem = {
  title: string;
  dataIndex: string;
  key: string;
};
type columnTypeList = columnTypeItem[];
function ProjectList() {
  const dataSource = projectListData?.projectList;
  const columns: columnTypeList = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      key: "endDate",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default ProjectList;
