import NavLinks from "@/components/NavLinks";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavLinks />
      {children}
    </div>
  );
}
