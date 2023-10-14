import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'
import getBaseUrl from '@/helper/getBaseUrl'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

const getData = async () => {
  const hostApi = getBaseUrl();
  const res = await fetch(`${hostApi}/api/posts/popular?mostpopular=true`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed Request")
  }

  return res.json()
}

const Featured = async () => {
  const data = await getData()
  const detail = data.length && data[0]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hey, lutfi dev here!</b> Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        { detail?.img &&
          <div className={styles.imgContainer}>
            <Image src={detail.img} className={styles.image} alt="" fill/>
          </div>
         }
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{detail.title}</h1>
          <p className={styles.postDesc}>
            {detail.desc.substring(0, 205)}
          </p>
          <button className={styles.button}>
            <Link href={`/posts/${detail.slug}`}>
              Read More
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured