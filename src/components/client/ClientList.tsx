import { Table } from "antd";
import clientListData from "../../data/clientData.json";

type columnTypeItem = {
  title: string;
  dataIndex: string;
  key: string;
};
type columnTypeList = columnTypeItem[];
function ClientList() {
  const dataSource = clientListData?.clientList;
  const columns: columnTypeList = [
    {
      title: "Title",
      dataIndex: "fullName",
      key: "title",
    },
    {
      title: "Link",
      dataIndex: "url",
      key: "url",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Approver",
      dataIndex: "approver",
      key: "approver",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default ClientList;
