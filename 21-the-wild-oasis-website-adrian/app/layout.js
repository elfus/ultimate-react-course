import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = { title: "The Wild Oasis" };

export default function RootLayout({ children }) {
  return (
    <html lang="eng">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by the The Wild Oasis</footer>
      </body>
    </html>
  );
}
