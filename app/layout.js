import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {


  let header = (
    <header>
      <Link href="/">
      <h1>Brighton Summary - October 2024</h1>
      </Link>
    </header>
  )

  let footer = (
    <footer>
      <p>Made with ❤️</p>
    </footer>
  )

  return (
    <html lang="en">
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
