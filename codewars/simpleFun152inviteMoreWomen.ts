export function inviteMoreWomen(list: number[]): boolean {
  return list.reduce((sum, gender) => sum + gender, 0) > 0;
}
