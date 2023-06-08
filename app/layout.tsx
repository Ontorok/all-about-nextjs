import "./globals.css";

export const metadata = {
  title: "Nasir's Blog!!!",
  description: "Created by Nasir",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-800">{children}</body>
    </html>
  );
}
