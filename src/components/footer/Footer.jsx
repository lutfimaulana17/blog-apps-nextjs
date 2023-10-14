import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import getBaseUrl from '@/helper/getBaseUrl'

export const dynamic = 'force-dynamic'

const getData = async () => {
  const hostApi = getBaseUrl();
  const res = await fetch(`${hostApi}/api/categories`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed Request")
  }

  return res.json()
}

const Footer = async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="lutfiblog" width={50} height={50} />
          <h1 className={styles.logoText}>lutfiblog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Culpa iure, commodi rem omnis ullam natus, 
          saepe quibusdam veniam fugiat aut fuga tempore beatae! 
          Aliquid velit ipsam, animi ut cum sint.
        </p>
        <div className={styles.icons}>
            <Image src="/facebook.png" alt="" width={18} height={18} />
            <Image src="/instagram.png" alt="" width={18} height={18} />
            <Image src="/tiktok.png" alt="" width={18} height={18} />
            <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          {data?.map(item => (
              <Link href={`/blog?cat=${item.slug}`} key={item._id} style={{ textTransform: 'capitalize' }}>{item.title}</Link>
          ))}
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer