import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Card from '../card/Card'
import getBaseUrl from '@/helper/getBaseUrl'

const getData = async (page, cat) => {
  const hostApi = getBaseUrl();
  const res = await fetch(`${hostApi}/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed Request")
  }

  return res.json()
}

const CardList = async ({page, cat}) => {
  const {posts, count} = await getData(page, cat)
  const POST_PER_PAGE = 2
  const hasPrev = POST_PER_PAGE * (page-1) > 0
  const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList