import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOST | لوحة التحكم</title>
      </Head>
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1 style={{ color: '#0070f3' }}>مرحبًا بك في لوحة تحكم HOST</h1>
        <p style={{ color: '#00b894' }}>سجل الدخول بحساب ديسكورد للمتابعة</p>
        <a href="/api/auth/login" style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none'
        }}>
          تسجيل الدخول
        </a>
      </main>
    </div>
  )
}
