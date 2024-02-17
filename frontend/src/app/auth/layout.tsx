export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen grid grid-cols-2'>
      <div className="col-span-1">
        first half
      </div>

      <div className="col-span-full md:col-span-1">
        {children}
      </div>
    </div>
  )
}
