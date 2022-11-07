import { Input, Select } from "@arco-design/web-react";
import type { IcomponentConfig } from "../SchamasForm";

const { Option } = Select;

const InputItem = ({ typeExProps = {} }: IcomponentConfig) => {
  return <Input {...typeExProps} />;
};

const SelectItem = ({ options = [], typeExProps = {} }: IcomponentConfig) => {
  return (
    <Select {...typeExProps}>
      {options &&
        options.length > 0 &&
        options?.map((opts) => (
          <Option key={opts.value} value={opts.value}>
            {opts.label}
          </Option>
        ))}
    </Select>
  );
};

export { InputItem, SelectItem };
