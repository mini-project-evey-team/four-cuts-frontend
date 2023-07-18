import { FC } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import styled from "styled-components";

type ILoginFormContainerProps = {};

export const LoginFormContainer: FC<ILoginFormContainerProps> = ({}) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <StyledContainer>
      <StyledForm
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <div>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
            <div>{/* <Button type="primary">Go to Sign up</Button> */}</div>
          </Form.Item>
        </div>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e1f6ff;
`;

const StyledForm = styled(Form)`
  padding: 50px;
  max-width: 600px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;

  .ant-btn-primary {
    background-color: #4589be; // Button의 배경색을 변경합니다.
    border-color: #4589be; // Button의 테두리 색을 변경합니다.
  }

  .ant-btn-primary:hover,
  .ant-btn-primary:focus {
    background-color: #4589be; // Button의 hover와 focus 상태의 배경색을 변경합니다.
    border-color: #4589be; // Button의 hover와 focus 상태의 테두리 색을 변경합니다.
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #e1f6ff;
  }
`;
