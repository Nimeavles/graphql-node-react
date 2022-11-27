import { PrismaClient } from "@prisma/client";
import { compare } from 'bcrypt'

export async function loginOnDb(email: string, password: string) {
  try {
    const prisma = new PrismaClient();

    const User = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (!User) return { code: 401, message: 'User not found' }

    const passwordDeshashed = await compare(password, User.password);

    if (passwordDeshashed) return { code: 200, message: 'User logged in successfully', data: { username: User.username, id: User.id } }

    return { code: 401, message: 'User not found' }

  } catch (error: any) {
    return { code: error.code || 500, message: error.message || 'Internal Server Error' }
  }
}