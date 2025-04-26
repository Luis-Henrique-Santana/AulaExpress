import Header from "@/components/admin/header";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header user={{id: '1',name: 'Luis Henrique'}}/>
        {children}
    </>
  );
}
