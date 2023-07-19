import { FC } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

type ISignInContainerProps = {};

export const SignInContainer: FC<ISignInContainerProps> = ({}) => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eefde7",
      }}
    >
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
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <StyledButton
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </StyledButton>
          Or <a href="">register now!</a>
        </Form.Item>
      </SignInForm>
    </div>
  );
};

const SignInForm = styled(Form)`
  background-color: red;
  // #d2f3fd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
`;
