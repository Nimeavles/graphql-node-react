import { loginOnDb } from "../../models/auth/login.model";
import { signToken } from "../../utils/jwt";

interface Params {
  password: string;
  email: string;
}

async function loginController(data: Params) {
  const { code, message, data: dbInfo } = await loginOnDb(data.email, data.password);

  if (code === 200) {
    const jwt = signToken(dbInfo?.username, dbInfo?.id)
    return { code, message, jwt }
  }

  return { code, message }
}

export default loginController;