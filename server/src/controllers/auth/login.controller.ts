import { loginOnDb } from "../../models/auth/login.model";

interface Params {
  password: string;
  email: string;
}

async function loginController(data: Params) {
  const { code, message } = await loginOnDb(data.email, data.password);

  return { code, message }
}

export default loginController;