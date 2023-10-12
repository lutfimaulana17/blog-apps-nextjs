const getBaseUrl = () => {
    if (process.env.NEXT_PUBLIC_HOST_API) {
      return process.env.NEXT_PUBLIC_HOST_API
    }
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
}

export default getBaseUrl