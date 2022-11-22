import bcrypt from 'bcrypt'

const SALT = 10;

export function hashPassword(password: string) {
  return bcrypt.hash(password, SALT, (err, hash) => {
    if (err) return "Error hashing the password"

    return hash
  });
}

export function comparePassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword, (err, result) => result);
}