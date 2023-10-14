import React from 'react'
import styles from './menuCategories.module.css'
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

const MenuCategories = async () => {
  const data = await getData()
  return (
    <div className={styles.categoryList}>
      {data?.map(item => (
        <Link href={`/blog?cat=${item.slug}`} key={item._id} className={`${styles.categoryItem} ${styles[item.slug]}`}>{item.title}</Link>
      ))}
    </div>
  )
}

export default MenuCategories