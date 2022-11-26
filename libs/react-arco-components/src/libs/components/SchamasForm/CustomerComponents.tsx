import type { IcomponentConfig, componentType } from ".";
import { InputItem, SelectItem } from "./RenderItem";

export const CustomerComponents = (props: {
  component: componentType;
  componentConfig: IcomponentConfig;
  onChange?: (e: any) => void;
}): JSX.Element => {
  const { component, componentConfig, onChange } = props;
  switch (component) {
    case "input":
      return InputItem({ onChange, ...componentConfig });
    case "select":
      return SelectItem({ onChange, ...componentConfig });
    default:
      return <></>;
  }
};
