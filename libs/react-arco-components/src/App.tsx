import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { ScrollBar, CustomButton, Watermark } from "./libs/main";
import { Typography, Divider, Button } from "@arco-design/web-react";
import { IconSync } from "@arco-design/web-react/icon";
import styled from "styled-components";
import { SchamasForm } from "./libs/main";
import { Form } from "@arco-design/web-react";
import { schemas } from "./schamas";
import "./App.less";

const { Title } = Typography;

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>();
  const [form] = Form.useForm();
  const name = Form.useWatch("username", form);

  const testIcon = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Watermark
      watermarkObj={{
        // text: "文本水印",
        url: reactLogo,
        isGray: true,
      }}
      y={120}
      x={80}
    >
      <div className="App">
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <CustomButton
          type="primary"
          size={"large"}
          customloading={loading ? 1 : 0}
          customIcon={<IconSync spin />}
          text={"Hello, CustomButton"}
          onClick={testIcon}
        />
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: "dotted",
          }}
        />
        <ScrollBar
          autoHide={true}
          barStyle={barStyle}
          content={
            <ScrollBox>
              <Title type="primary" underline heading={6}>
                This is ScrollBar components...
              </Title>
            </ScrollBox>
          }
        />
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: "dotted",
          }}
        />
        <SchamasForm
          form={form}
          rowSpacing={16}
          schemas={schemas}
          labelAlign="left"
          layout={"vertical"}
          style={{ textAlign: "left" }}
        />
        <Button
          type={"outline"}
          onClick={async () => {
            const data = await form.validate();
            console.log(data);
            setFormData(data);
          }}
        >
          获取数据
        </Button>
        <Divider
          style={{
            borderBottomWidth: 2,
            borderBottomStyle: "dotted",
          }}
        />
        username: {name ? `❤️` : null} | {formData?.username}, adr:{" "}
        {formData?.address?.label}
      </div>
    </Watermark>
  );
}

const ScrollBox = styled.span`
  width: 510px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const barStyle = {
  width: 500,
  height: 300,
  border: "1px solid #181818",
};

export default App;
