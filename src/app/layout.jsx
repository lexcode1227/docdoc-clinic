import "./globals.css"
import { poppins } from "./font"

export const metadata = {
  title: 'Doc Doc',
  description: 'Get Better Care For Your Health.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  )
}
