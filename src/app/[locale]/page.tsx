import Program from "./program/page";


type HomeProps = {
  params: { locale: string };
}

export default async function Home({params}: HomeProps) {
  const { locale } = params;
  // const intl = await getIntl(locale);
  
  return (
    <div className="page">
      <Program params={{
        locale: locale
      }}></Program>
    </div>
  );
}
