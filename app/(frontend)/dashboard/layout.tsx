export default function DashboardLayout({
  children,
  notifications,
}: Readonly<{
  children: React.ReactNode;
  notifications: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      <div className="border" style={{ width: "300px", height: "200px" }}>
        {notifications}
      </div>
    </div>
  );
}
