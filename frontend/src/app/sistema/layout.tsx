import { Header } from '@/components/Header'

export default function SistemaLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen max-w-5xl m-auto'>
      <Header />
      {children}
    </div>
  )
}
