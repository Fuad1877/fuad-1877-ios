import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site app hacked!" />
        <p className="description">
          F1.team <testing>bam zwana</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
