import bcrypt from 'bcrypt'

const SALT = 10;

export async function hashPassword(password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);

  return hashedPassword
}

export function comparePassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword, (err, result) => result);
}