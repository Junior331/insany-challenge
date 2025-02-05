"use client";

import { useFormik } from "formik";
import { useContext, useState } from "react";

import * as S from "./HeroStyled";
import { schema } from "./schema";
import { postLeads } from "./services";
import { getIcons } from "@/assets/icons";
import { maskCnpj, maskPhone } from "@/utils/utils";
import { bigNumbers, initialValues } from "./utils";
import { SnackbarContext } from "@/contexts/snackbar";
import { Header, NumberTicker } from "@/components/modules";
import { Input, Radio, Text, Title } from "@/components/elements";

export const Hero = () => {
  const [loading, setLoading] = useState(false);
  const { setSnackbar } = useContext(SnackbarContext);

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values, { resetForm }) => {
      await postLeads({
        values,
        resetForm,
        setLoading,
        setSnackbar,
      });
    },
    validationSchema: schema,
  });

  // const handleGetLeads = async () => {
  //   const list = await getLeads();
  //   console.log("leads ::", list.leads);
  // };

  const { values, errors, touched, handleSubmit, handleChange } = formik;
  return (
    <S.Section id="Hero">
      <Header />

      <S.Container>
        <S.Content>
          <S.Tag>
            <S.Icon src={getIcons("star").src} alt="Icon star" />
            <S.Text>Tecnologia disruptiva</S.Text>
          </S.Tag>

          <S.ContentHero>
            <S.Title size={5.6}>
              Conta digital que não é só uma conta digital.{" "}
            </S.Title>
            <S.Text>
              Pellentesque rutrum turpis non est turpis pretium morbi urna.
            </S.Text>

            <S.Divider />

            <S.ContainerBigNumbers>
              {bigNumbers.map((item) => (
                <S.BigNumber key={item.id}>
                  <NumberTicker targetNumber={item.value} duration={2} />
                  <S.Text>{item.label}</S.Text>
                </S.BigNumber>
              ))}
            </S.ContainerBigNumbers>
          </S.ContentHero>
          {/* <S.SubmitButton onClick={handleGetLeads} size="100%">
            Get leads
          </S.SubmitButton> */}
        </S.Content>

        <S.ContainerForm>
          <Text>Faça parte da revolução digital!</Text>
          <Title>Cadastre-se e faça parte do lançamento oficial</Title>

          <form onSubmit={handleSubmit}>
            <S.RadioGroup>
              <Radio
                type="radio"
                name="type"
                label="Para você"
                checked={values.formType === "personal"}
                onChange={() => formik.setFieldValue("formType", "personal")}
              />
              <Radio
                type="radio"
                name="type"
                label="Para empresa"
                checked={values.formType === "business"}
                onChange={() => formik.setFieldValue("formType", "business")}
              />
            </S.RadioGroup>

            {values.formType === "business" ? (
              <Input
                type="text"
                name="cnpj"
                maxLength={14}
                placeholder="CNPJ"
                onChange={handleChange}
                helperText={errors.cnpj}
                value={maskCnpj(values.cnpj)}
                error={touched.cnpj && Boolean(errors.cnpj)}
              />
            ) : (
              <Input
                type="text"
                name="name"
                placeholder="Nome"
                value={values.name}
                onChange={handleChange}
                helperText={errors.name}
                error={touched.name && Boolean(errors.name)}
              />
            )}

            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
              helperText={errors.email}
              error={touched.email && Boolean(errors.email)}
            />

            <Input
              type="tel"
              name="phone"
              maxLength={15}
              placeholder="Celular"
              onChange={handleChange}
              helperText={errors.phone}
              value={maskPhone(values.phone)}
              error={touched.phone && Boolean(errors.phone)}
            />

            <S.SubmitButton
              size="100%"
              type="submit"
              loading={loading}
              disabled={loading}
            >
              Quero ser cliente
            </S.SubmitButton>

            <S.PrivacyText>
              Ao enviar seus dados, você autoriza que o SmartMoney entre em
              contato e declara estar ciente da <a>Política de Privacidade</a>
            </S.PrivacyText>

            <S.Divider className="divider" />

            <S.SecurityIndicator>
              <S.Icon src={getIcons("safe").src} alt="Icon safe" />
              Seus dados estão seguros
            </S.SecurityIndicator>
          </form>
        </S.ContainerForm>
      </S.Container>
    </S.Section>
  );
};
