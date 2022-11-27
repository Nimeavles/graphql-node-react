import { SignUpUserOnDB } from "../../models/auth/signup.model";
import { hashPassword } from "../../utils/bcrypt";
import { signToken } from "../../utils/jwt";

interface Params {
  name: string;
  password: string;
  email: string;
  username: string;
  profileImage?: string;
}

async function signUpController(data: Params) {
  const hashedPassword: any = await hashPassword(data.password)

  const { code, message, data: dbInfo } = await SignUpUserOnDB(data.name, hashedPassword, data.email, data.username, data.profileImage);

  if (code === 200) {
    const jwt = signToken(dbInfo?.username, dbInfo?.id)
    return { code, message, jwt }
  }

  return { code, message }
}

export default signUpController;