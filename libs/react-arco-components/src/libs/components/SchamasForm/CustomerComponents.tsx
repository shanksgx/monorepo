import type { FormSchema } from "../SchamasForm";
import { InputItem, SelectItem } from "./Item";

const CustomerComponents = (
  props: Pick<FormSchema, "component" | "componentConfig">
): JSX.Element => {
  const { component, componentConfig } = props;

  switch (component) {
    case "input":
      return InputItem(componentConfig);
    case "select":
      return SelectItem(componentConfig);
    default:
      return <></>;
  }
};

export default CustomerComponents;
