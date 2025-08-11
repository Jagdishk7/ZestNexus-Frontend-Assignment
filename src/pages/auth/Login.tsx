import { useState } from "react";
import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

const MOCK_USER = { email: "admin@demo.com", password: "1234" };

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFinish = (values: { email: string; password: string }) => {
    if (
      values.email === MOCK_USER.email &&
      values.password === MOCK_USER.password
    ) {
      localStorage.setItem("pm-auth", "yes");
      navigate("/");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <Card className="max-w-md w-full shadow-lg" title="Project Manager Login">
        <Form layout="vertical" onFinish={onFinish} autoComplete="off">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          {error && <div className="text-red-600 mb-2">{error}</div>}
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              Login
            </Button>
          </Form.Item>
          <div className="text-xs text-gray-500 text-center">
            Demo credentials: <br />
            <b>Email:</b> admin@demo.com <br />
            <b>Password:</b> 1234
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
