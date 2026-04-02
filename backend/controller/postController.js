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
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                narrative: true,
                imageURL: true,
                isPublic: true,
                feeling: true,
                createdAt: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                    }
                }
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        const postWithOwnerShip = posts.map(post => {
            return {
                ...post,
                isOwner: req.user ? String(post.author.id) === String(req.user.id) : false
            }
        });
        return res.status(200).json(postWithOwnerShip);
    } catch (e) {
        return res.status(401).json({ error: e.message })
    }
}

export const createPost = async (req, res) => {
    const { narrative, isPublic, feeling } = req.body;
    const author = req.user;
    try {
        const post = await prisma.post.create({
            data: {
                narrative: narrative,
                imageURL: req.file ? `/uploads/${req.file.filename}` : null,
                isPublic: isPublic === 'true' || isPublic === true,
                feeling: feeling,
                authorId: author.id
            }
        });
        return res.status(200).json(post)
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}

export const canEditOrDelete = async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    const post = await prisma.post.findFirst({
        where: {
            id: id
        }
    });
    if (!post) {
        return res.status(404).json({ error: "Post not found" })
    }
    if (String(post.authorId) !== String(user.id)) {
        return res.status(403).json({ error: "Forbidden" })
    }
    return res.status(200).json({ allowed: true });
}

export const updatePost = async (req, res) => {
    const id = req.params.id;
    const { narrative, isPublic, feeling } = req.body;
    const user = req.user;
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            }
        });
        if (!post) {
            return res.status(404).json({ error: "Post not found" })
        }
        if (String(post.authorId) !== String(user.id)) {
            return res.status(403).json({ error: "Forbidden" })
        }
        const updatedPost = await prisma.post.update({
            where: {
                id: id
            },
            data: {
                narrative: narrative,
                isPublic: isPublic === 'true' || isPublic === true,
                feeling: feeling,
                imageURL: req.file ? `/uploads/${req.file.filename}` : post.imageURL
            }
        });
        return res.status(200).json(updatedPost);
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}


export const deletePost = async (req, res) => {
    const id = req.params.id;
    const user = req.user;
    try {
        const post = await prisma.post.findFirst({
            where: {
                id: id
            }
        });
        if (!post) {
            return res.status(404).json({ error: "Post not found" })
        }
        if (String(post.authorId) !== String(user.id)) {
            return res.status(403).json({ error: "Forbidden" })
        }
        await prisma.post.delete({
            where: {
                id: id
            }
        });
        return res.status(200).json({ message: "Post deleted successfully" });
    } catch (e) {
        return res.status(400).json({ error: e.message });
    }
}