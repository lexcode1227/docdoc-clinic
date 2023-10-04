import "./globals.css";
import { poppins } from "./font";
import Bar from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Doc Doc',
  description: 'Get Better Care For Your Health.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <main className="h-full">
          <div className='flex flex-col justify-center'>
            <Bar/>
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </main>
        
      </body>
    </html>
  )
}
