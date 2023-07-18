import { MainSec } from "@components/main-section";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";
import { authProvider } from "src/authProvider";

export default function Home() {
  return <MainSec />;
}

Home.noLayout = true;


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
