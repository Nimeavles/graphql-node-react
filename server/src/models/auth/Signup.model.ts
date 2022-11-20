import { PrismaClient } from '@prisma/client'
import { v4 as uuid } from 'uuid'

export async function SignUpUserOnDB(name: string, password: string, email: string, username: string, profileImage?: string) {
  try {
    const prisma = new PrismaClient();

    const query = await prisma.user.create({
      data: {
        email,
        password,
        name,
        username,
        profile_image: profileImage,
        id: Number(uuid())
      }
    });

    return { code: 200, message: 'User created succesfully' };

  } catch (error: any) {
    return { code: error.code || 500, message: error.message || 'Internal Server Error' }
  }
}