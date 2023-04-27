import { Navbar } from "@/Components/Navbar"
export const metadata = {
  title: 'streaming app',
  description: 'Watch movies or series',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
        <Navbar/>
        {children}
        </main>
        </body>
    </html>
  )
}
