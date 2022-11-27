interface ErrorMessage {
  code: string | number;
  message: string;
}

export const errors: ErrorMessage[] = [
  {
    code: 'P2002',
    message: 'BAD_USER_INPUT'
  },
  {
    code: 401,
    message: 'NOT_USER_FOUND'
  },
]