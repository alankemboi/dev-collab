import { AuthPage, ThemedTitleV2 } from "@refinedev/mui";
import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { authProvider } from "src/authProvider";

import { AppIcon } from "src/components/app-icon";
export default function Login() {
  return (
    <AuthPage
      type="login"
      formProps={{
        defaultValues: {
          email: "bk.b@kemboi.app",
          password: "no-reply-kemboi",
        },
      }}
      title={
        <ThemedTitleV2 collapsed={false} text="DevCollab" icon={<AppIcon />} />
      }
      wrapperProps={{
        style: {
          background: "rgb(248 250 252/1)",
        },
      }}
    />
  );
}

Login.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated } = await authProvider.check(context);

  const translateProps = await serverSideTranslations(context.locale ?? "en", [
    "common",
  ]);

  if (authenticated) {
    return {
      props: {},
      redirect: {
        destination: `/document`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...translateProps,
    },
  };
};
