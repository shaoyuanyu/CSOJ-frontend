export const submissionStatusInfo: {
  [key: number]: { color: string; description: string }
} = {
  0: { color: 'purple', description: 'Pending' },
  1: { color: 'blue', description: 'Running' },
  2: { color: 'green', description: 'Accepted' },
  3: { color: 'red', description: 'Unaccepted' },
  4: { color: 'orange', description: 'Compile Error' },
  [-1]: { color: 'gray', description: 'Unknown Error' }
}
