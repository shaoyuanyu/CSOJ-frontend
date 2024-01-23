export const judgeStatusInfo: {
  [key: number]: { color: string; description: string }
} = {
  1: { color: 'green', description: 'AC' },
  2: { color: 'red', description: 'WA' },
  3: { color: 'orange', description: 'CE' },
  4: { color: 'orangered', description: 'RE' },
  5: { color: 'purple', description: 'TLE' },
  6: { color: 'magenta', description: 'MLE' },
  7: { color: 'arcoblue', description: 'OLE' },
  [-1]: { color: 'gray', description: 'UKE' }
}
