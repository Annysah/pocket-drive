import './globals.css'

export const metadata = {
  title: 'Pocket Drive',
  description: 'A cloud file storage',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
