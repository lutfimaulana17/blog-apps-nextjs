"use client"

import React, { useEffect } from 'react'
import styles from './pagination.module.css'
import { useRouter, useSearchParams } from 'next/navigation'

const Pagination = ({page, hasPrev, hasNext}) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const nextPage = page + 1;
    const prevPage = page - 1;

    const handlePrevButtonClick = () => {
        const cat = searchParams.get('cat')
        if (cat) {
            router.push(`?cat=${cat}&page=${prevPage}`)
        } else {
            router.push(`?page=${prevPage}`)
        }
    };

    const handleNextButtonClick = () => {
        const cat = searchParams.get('cat')
        if (cat) {
            router.push(`?cat=${cat}&page=${nextPage}`)
        } else {
            router.push(`?page=${nextPage}`)
        }
    };

    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                disabled={!hasPrev}
                onClick={() => handlePrevButtonClick()}>Previous</button>
            <button
                className={styles.button}
                disabled={!hasNext}
                onClick={() => handleNextButtonClick()}>Next</button>
        </div>
    )
}

export default Pagination