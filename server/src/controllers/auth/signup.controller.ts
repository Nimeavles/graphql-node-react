import { SignUpUserOnDB } from "../../models/auth/signup.model";
import { hashPassword } from "../../utils/bcrypt";

interface Params {
  name: string;
  password: string;
  email: string;
  username: string;
  profileImage?: string;
}

async function signUpController(data: Params) {
  const hashedPassword: any = await hashPassword(data.password)

  const { code, message } = await SignUpUserOnDB(data.name, hashedPassword, data.email, data.username, data.profileImage)

  return { code, message }
}

export default signUpController;