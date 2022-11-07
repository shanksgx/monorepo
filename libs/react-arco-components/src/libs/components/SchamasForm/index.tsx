import React, { useMemo } from "react";
import {
  Form,
  type FormProps,
  type FormItemProps,
  FormInstance,
  Grid,
} from "@arco-design/web-react";
import Component from "./CustomerComponents";

type componentType = "input" | "select" | "customer";

export type objType = {
  [key: string]: any;
};

export type Options = objType & {
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
  schamas: FormSchema[];
}

const FormItem = Form.Item;
const Row = Grid.Row;
const Col = Grid.Col;

const SchamasForm: React.FC<Ischamas> = (props) => {
  const { schamas, form, rowSpacing, ...otherProps } = props;

  return (
    <Form form={form} {...otherProps}>
      <Row gutter={rowSpacing}>
        {schamas &&
          schamas.length > 0 &&
          schamas.map((schamas) => (
            <Col span={schamas.colSpan} offset={schamas.offset}>
              <FormItem {...schamas.schemasItem}>
                {useMemo(
                  () => (
                    <Component
                      component={schamas.component}
                      componentConfig={schamas.componentConfig}
                    />
                  ),
                  [schamas.component]
                )}
              </FormItem>
            </Col>
          ))}
      </Row>
    </Form>
  );
};

export default SchamasForm;
