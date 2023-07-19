import { FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

type ISignInFormViewProps = {};

// const move = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-20px); }
//   100% { transform: translateY(0); }
// `;

export const SignInFormView: FC<ISignInFormViewProps> = ({}) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <StyledContainer>
      <SignInForm
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <StyledInput
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <StyledInput
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <StyledButton
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </StyledButton>
            <Link to="/signup">Sign Up</Link>
          </div>
        </Form.Item>
      </SignInForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a2c0ee;
  height: 100vh;
`;

const SignInForm = styled(Form)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 1s;
  &:hover {
    transform: scale(1.05);
  }
  margin: 10px;
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  margin-top: 10px;
`;
