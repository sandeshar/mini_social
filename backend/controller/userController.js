import { prisma } from "../lib/prisma.ts"
import bcrypt from 'bcryptjs'
import { signJwt } from "../lib/jwt.js";

export const getUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        if (users.length > 0) {
            return res.status(200).json(users)
        }
        return res.status(404).json({ error: "No users found" })
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}

export const getCurrentUser = async (req, res) => {
    return res.status(200).json(req.user)
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" })
        }
        const signedToken = signJwt({ id: user.id, name: user.name, email: user.email })
        res.cookie("token", signedToken, {
            httpOnly: true,
            signed: true,
            secure: process.env.NODE_ENV === "production",
        });
        return res.status(200).json({ message: "Login successful" })
    } catch (e) {
        return res.status(400).json({ error: e.message })
    }
}

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })
        return res.status(201).json(user)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}