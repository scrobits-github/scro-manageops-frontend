import { SyntheticEvent, useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";

const { Header, Sider, Content } = Layout;
import {
  LoggedInRouteConfig,
  LoggedOutRouteConfig,
} from "../../routes/RouteConfig";
import Styles from "../../styles/layout/layout.module.css";
import { useNavigate } from "react-router-dom";

function LayoutComponent() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleRedirect = (redirectURI: string) => {
    console.log("Event: ", redirectURI);
    navigate(`/${redirectURI}`);
  };

  return (
    <div>
      <Layout className={Styles.dashboardLayout}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Dashboard",
                onClick: () => {
                  handleRedirect("dashboard");
                },
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Clients",
                onClick: () => {
                  handleRedirect("clients");
                },
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Team",
                onClick: () => {
                  handleRedirect("team");
                },
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Tasks",
                onClick: () => {
                  handleRedirect("team");
                },
              },
              {
                key: "5",
                icon: <UploadOutlined />,
                label: "Projects",
                onClick: () => {
                  handleRedirect("project");
                },
              },
              {
                key: "6",
                icon: <LogoutOutlined />,
                label: "Logout",
                onClick: () => {
                  handleLogout();
                },
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            {/* LoggedInRoute */}
            <LoggedInRouteConfig />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default LayoutComponent;
