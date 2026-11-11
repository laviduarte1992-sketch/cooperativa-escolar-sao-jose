import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cooperativa Escolar São José",
  description: "Portal Oficial da CESJ - Guiné-Bissau",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
