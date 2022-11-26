import React, { useMemo } from "react";
import {
  Form,
  type FormProps,
  type FormItemProps,
  FormInstance,
  Grid,
} from "@arco-design/web-react";
import { CustomerComponents as Component } from "./CustomerComponents";

export type componentType = "input" | "select" | "customer";

export type objType = {
  [key: string]: any;
};

type Options = objType & {
  label: string;
  value: string | number;
  disabled?: boolean;
  children?: Array<Options>;
};

export interface IcomponentConfig {
  options?: Array<Options>;
  typeExProps?: objType;
  componentsExProps?: objType;
}

export interface FormSchema {
  component: componentType;
  componentConfig: IcomponentConfig;
  colSpan?: number;
  offset?: number;
  schemasItem?: FormItemProps;
}

interface Ischamas extends FormProps {
  form: FormInstance<any, any, string | number | symbol>;
  rowSpacing: number;
  schemas: FormSchema[];
}

const FormItem = Form.Item;
const Row = Grid.Row;
const Col = Grid.Col;

const SchamasForm: React.FC<Ischamas> = (props) => {
  const { schemas, form, rowSpacing, ...otherProps } = props;

  return (
    <Form form={form} autoComplete="off" {...otherProps}>
      <Row gutter={rowSpacing}>
        {schemas &&
          schemas.length > 0 &&
          schemas.map((schemas) => (
            <Col
              span={schemas.colSpan}
              offset={schemas.offset}
              key={schemas?.schemasItem?.field as string}
            >
              <FormItem {...schemas.schemasItem}>
                {useMemo(
                  () => (
                    <Component
                      component={schemas.component}
                      componentConfig={schemas.componentConfig}
                    />
                  ),
                  [schemas.component]
                )}
              </FormItem>
            </Col>
          ))}
      </Row>
    </Form>
  );
};

export default SchamasForm;
