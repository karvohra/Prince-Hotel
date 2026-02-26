import Header from "./_components/Header";

export default function Rootlayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
