import * as yup from "yup";

const validations = yup.object({
  firstName: yup.string().required("Zorunlu Alan"),
  lastName: yup.string().required("Zorunlu Alan"),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(6, "En az 6 karakter olmalı!")
    .max(12, "En fazla 12 karakter olmalı!")
    .required("Zorunlu Alan"),
  repassword: yup
    .string()
    .min(6, "En az 6 karakter olmalı!")
    .max(12, "En fazla 12 karakter olmalı!")
    .required("Zorunlu Alan")
    .oneOf([yup.ref("password")], "Şifreler uyuşmuyor!"),
});

export default validations;
