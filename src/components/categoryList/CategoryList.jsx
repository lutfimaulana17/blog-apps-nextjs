import React from 'react'
import styles from './categoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import getBaseUrl from '@/helper/getBaseUrl'

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

const CategoryList = async () => {
  const data = await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map(item => (
          <Link href={`/blog?cat=${item.slug}`} key={item._id} className={`${styles.category} ${styles[item.slug]}`}>
            {item.img && <Image src={item.img} className={styles.image} alt='' width={32} height={32} />}
            {item.title}
          </Link> 
        ))}
      </div>
    </div>
  )
}

export default CategoryList