import type { FormSchema } from "./libs/main";

export const schemas: FormSchema[] = [
  {
    component: "input",
    colSpan: 12,
    schemasItem: {
      field: "username",
      label: "姓名",
      rules: [{ required: true }],
    },
    componentConfig: {
      typeExProps: {
        allowClear: true,
        placeholder: "请输入姓名",
      },
    },
  },
  {
    component: "select",
    colSpan: 12,
    schemasItem: {
      field: "address",
      label: "地址",
      rules: [{ required: true }],
      shouldUpdate: true,
    },
    componentConfig: {
      options: [
        {
          label: "重庆",
          value: 1,
        },
        {
          label: "北京",
          value: 2,
        },
      ],
      typeExProps: {
        allowClear: true,
        placeholder: "请选择",
        hasFeedback: true,
        labelInValue: true,
      },
    },
  },
];
