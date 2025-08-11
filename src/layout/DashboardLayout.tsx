import { Layout, Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const DashboardLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("pm-auth");
    navigate("/login");
  };

  return (
    <Layout className="min-h-screen">
      <Header className="flex justify-between items-center bg-white shadow px-6">
        <h1
          className="text-2xl font-bold text-blue-700 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Mini Project Manager
        </h1>
        <Button type="primary" danger onClick={logout}>
          Logout
        </Button>
      </Header>
      <Content className="p-8 bg-gray-50 min-h-screen">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
