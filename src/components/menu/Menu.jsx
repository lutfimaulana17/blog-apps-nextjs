import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
import getBaseUrl from '@/helper/getBaseUrl'

export const dynamic = 'force-dynamic'

const getDataPopular = async () => {
  const hostApi = getBaseUrl();
  const res = await fetch(`${hostApi}/api/posts/popular`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed Request")
  }

  return res.json()
}

const getDataFeatured = async () => {
  const hostApi = getBaseUrl();
  const res = await fetch(`${hostApi}/api/posts/featured`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed Request")
  }

  return res.json()
}

const Menu = async () => {
  const dataPopular = await getDataPopular()
  const dataFeatured = await getDataFeatured()
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts data={dataPopular} withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts data={dataFeatured} withImage={true} />
    </div>
  )
}

export default Menu