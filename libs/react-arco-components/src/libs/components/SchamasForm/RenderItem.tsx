import { Input, Select } from "@arco-design/web-react";
import type { IcomponentConfig } from ".";

const { Option } = Select;

const InputItem = ({
  typeExProps = {},
  onChange,
}: IcomponentConfig & { onChange?: (e: any) => void }) => {
  return <Input {...typeExProps} onChange={onChange} />;
};

const SelectItem = ({
  options = [],
  typeExProps = {},
  onChange,
}: IcomponentConfig & { onChange?: (e: any) => void }) => {
  return (
    <Select {...typeExProps} onChange={onChange}>
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
