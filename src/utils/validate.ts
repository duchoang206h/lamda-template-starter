import { SchemaOf } from "yup";

export const validate = (schema: SchemaOf<any, any>, body: any) => {
  return schema.validate(body, { abortEarly: false });
};
