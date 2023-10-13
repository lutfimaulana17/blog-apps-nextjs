import { getAuthSession } from "@/utils/auth"
import prisma from "@/utils/connect"
import {NextResponse} from "next/server"

export const GET = async (req) => {
    const query = {
        where: {
            featured: true,
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