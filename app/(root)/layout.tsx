import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" style={{scrollBehavior:'smooth'}}>
      <body className="text-white bg-black overflow-hidden !scroll-smooth">
        {children}
      </body>
    </html>
  );
}
