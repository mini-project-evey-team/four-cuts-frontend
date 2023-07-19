import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const SignUpFormView: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/signin");
  };

  return (
    <PageContainer>
      <StyledForm
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail😡",
            },
          ]}
        >
          <StyledInput />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password😡",
            },
          ]}
          hasFeedback
        >
          <StyledPasswordInput />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password😡",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Not match the password😡"));
              },
            }),
          ]}
        >
          <StyledPasswordInput />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname😡",
              whitespace: true,
            },
          ]}
        >
          <StyledInput />
        </Form.Item>

        <Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Register
          </StyledButton>
        </Form.Item>
      </StyledForm>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a2c0ee;
  height: 100vh;
`;

const StyledForm = styled(Form)`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
  transition: transform 1s;
  gap: 15px;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledInput = styled(Input)`
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 100%;
`;

const StyledPasswordInput = styled(Input.Password)`
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  border-radius: 10px;
  margin-top: 10px;
`;
