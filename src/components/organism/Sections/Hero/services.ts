import { postLeadsProps } from "./@types";

export const postLeads = async ({
  values,
  resetForm,
  setLoading,
  setSnackbar,
}: postLeadsProps) => {
  setLoading(true);

  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (response.ok) {
      setSnackbar({
        isOpen: true,
        vertical: "top",
        severity: "success",
        horizontal: "right",
        message: "Cadastro realizado com sucesso!",
      });
      resetForm();
    } else {
      setSnackbar({
        isOpen: true,
        vertical: "top",
        severity: "error",
        horizontal: "right",
        message: result.error,
      });
    }
  } catch (error) {
    console.error("Erro ao enviar lead:", error);
    setSnackbar({
      isOpen: true,
      vertical: "top",
      severity: "error",
      horizontal: "right",
      message: "Erro ao enviar os dados. Tente novamente.",
    });
  } finally {
    setLoading(false);
  }
};
// export const postLeads = async ({
//   data,
//   request,
//   resetForm,
//   setLoading,
//   setSnackbar,
// }: postLeadsProps) => {
//   setLoading(true);
//   const requestConfig: httpRequest = {
//     url: `api/leads`,
//     method: "post",
//     headers: { "Content-Type": "application/json" },
//     body: data,
//   };
//   try {
//     await request(requestConfig);

//     setSnackbar({
//       isOpen: true,
//       vertical: "top",
//       severity: "success",
//       horizontal: "right",
//       message: "Cadastro realizado com sucesso!",
//     });
//     resetForm();
//   } catch (error) {
//     const errorMessage =
//       error instanceof Error ? error.message : "Unknown error";
//     setSnackbar({
//       isOpen: true,
//       vertical: "top",
//       severity: "error",
//       horizontal: "right",
//       message: errorMessage,
//     });
//     throw new Error(errorMessage);
//   } finally {
//     setLoading(false);
//   }
// };
export const getLeads = async () => {
  try {
    const response = await fetch("/api/leads", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();

    if (response.ok) {
      console.log("response ::", response);
    } else {
      console.log("response ::", response);
    }
    return result;
  } catch (error) {
    console.error("Erro ao enviar lead:", error);
  }
};
