import { sign } from 'jsonwebtoken'
import dotenv from 'dotenv'

export const signToken = (username: any, id: any) => {

  dotenv.config()

  const secret = process.env.SECRET

  return sign({
    username,
    id
  }, secret, { expiresIn: '8h' });
}