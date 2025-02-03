import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().required("Email é um campo obrigatório.").email("Endereço de e-mail inválido."),
  cnpj: yup
    .string()
    .transform((value) => value.replace(/[^\d]/g, ""))
    .matches(/^\d{14}$/, "O CNPJ deve ter 14 dígitos.")
    .when("formType", {
      is: "business",
      then: (schema) => schema.required("CNPJ é obrigatório."),
      otherwise: (schema) => schema.notRequired(),
    }),

  name: yup.string().when("formType", {
    is: "personal",
    then: (schema) => schema.required("Nome é um campo obrigatório."),
    otherwise: (schema) => schema.notRequired(),
  }),
  phone: yup
    .string()
    .required("Telefone é um campo obrigatório.")
    .transform((value) => value.replace(/[^\d]/g, ""))
    .matches(/^\d{11}$/, "O telefone deve ser um número válido de 11 dígitos."),
  formType: yup.string().required(), // Adicione o formType ao schema
});