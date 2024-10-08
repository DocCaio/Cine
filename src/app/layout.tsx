import type {Metadata} from "next";
import "./globals.css";
import style from './layout.module.css';
import Navbar from "../components/template/navBar";



export const metadata: Metadata = {
  title: "Cine Dev",
  description: "Cine system ,buy tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={style.body}>
        <header>          
          <nav className={style.barContent} >   
           <Navbar/>   
          </nav>
        </header>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
