import React from 'react'
import styles from './categoryList.module.css'
import Pagination from "@/components/pagination/Pagination";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <Pagination />
    </div>
  )
}

export default CategoryList