import "./globals.css";

export const metadata = {
  title: "Pondok Pesantren Huffadh Nur Khoiri",
  description:
    "Website Resmi Pondok Pesantren Huffadh Nur Khoiri",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}