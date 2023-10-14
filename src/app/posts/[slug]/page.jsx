import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
import getBaseUrl from '@/helper/getBaseUrl'

export const dynamic = 'force-dynamic'

const getData = async (slug) => {
  const hostApi = getBaseUrl();
  const res = await fetch(`${hostApi}/api/posts/${slug}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed Request")
  }

  return res.json()
}

const SinglePage = async ({params}) => {
  const { slug } = params
  const data = await getData(slug)
 
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            { data?.user?.image &&
              <div className={styles.userImageContainer}>
                <Image src={data.user.image} alt="" className={styles.avatar} fill />
              </div>
            }
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>17.05.2027</span>
            </div>
          </div>
        </div>
        { data?.img &&
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" className={styles.image} fill />
          </div>
        }
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{__html: data?.desc}} />
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage