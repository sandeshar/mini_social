import { prisma } from "../lib/prisma"

export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            }
        })
        return res.status(200).json(post)
    } catch (e) {
        return res.status(401).json({ error: e.message })
    }
}

export const getAllPost = async (req, res) => {
    try {
        const posts = await prisma.post.findMany({})
        return res.status(200).json(posts)
    } catch (e) {
        return res.status(401).json({ error: e.message })
    }
}

export const createPost = async (req, res) => {
    const { narrative, imageURL, isPublic, feeling } = req.body;
    const author = req.user;
    try {
        const post = await prisma.post.create({
            data: {
                narrative: narrative,
                imageURL: imageURL,
                isPublic: isPublic,
                feeling: feeling,
                authorId: author.id
            },
        })
        return res.status(200).json(post)
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}