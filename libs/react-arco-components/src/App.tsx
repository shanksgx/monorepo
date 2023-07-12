import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { ScrollBar, CustomButton } from "./libs/main";
import { Typography, Divider, Button } from "@arco-design/web-react";
import { IconSync } from "@arco-design/web-react/icon";
import styled from "styled-components";
import { SchamasForm } from "./libs/main";
import { Form } from "@arco-design/web-react";
import { schemas } from "./schamas";
import "./App.less";

const { Title } = Typography;

function App() {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>();
  const [form] = Form.useForm();
  const name = Form.useWatch("username", form);
  //todo 可以做值联动
  useEffect(() => {
    console.log(name);
  }, [name]);

  const testIcon = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
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
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
