import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import {NextResponse} from "next/server"

export const GET = async (req) => {
    const { searchParams } = new URL(req.url)
    const isMostPopular = searchParams.get('mostpopular')

    const query = {
        take: isMostPopular ? 1 : 4,
        orderBy: {
            views: 'desc',
        },
        include: { user: true }
    }

    try {
        const posts = await prisma.post.findMany(query)
        return new NextResponse(JSON.stringify(posts, { status: 200 }))
    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({
            message: "Something went wrong!"
        }, { status: 500 }))
    }
}