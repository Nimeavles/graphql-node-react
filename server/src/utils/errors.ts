interface ErrorMessage {
  code: string;
  message: string;
}

export const errors: ErrorMessage[] = [
  {
    code: 'P2002',
    message: 'BAD_USER_INPUT'
  },
]