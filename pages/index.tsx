import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Nextjs Test Starter project
        </h1>

        <p className={styles.description}>
            Lets Get Started Quickly with Nextjs!
        </p>


      

      </main>


    </div>
  )
}
