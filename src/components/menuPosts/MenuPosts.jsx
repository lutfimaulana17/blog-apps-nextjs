import React from 'react'
import styles from './menuPosts.module.css'
import Link from 'next/link'
import Image from 'next/image'

const MenuPosts = ({withImage, data}) => {
    return (
        <div className={styles.items}>
            { data?.map((item) => (
                <Link href={`/posts/${item.slug}`} className={styles.item} key={item._id}>
                    {
                        withImage && item.img && <div className={styles.imageContainer}>
                                                    <Image src={item.img} alt="" fill="fill" className={styles.image}/>
                                                </div>
                    }
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>{item.catSlug}</span>
                        <h3 className={styles.postTitle}>{item.title}</h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>{item.user.name}</span>
                            <span className={styles.date}>
                                - {item.createdAt.substring(0, 10)}</span>
                        </div>
                    </div>
                </Link>
            ))}
            
        </div>
    )
}

export default MenuPosts