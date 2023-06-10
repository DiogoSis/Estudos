import '../style/estilosGlobais.scss'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Galeria Space',
  description: 'Projeto de galeria de imagens',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
