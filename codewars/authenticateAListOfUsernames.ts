export function authList(usernames: string[]): boolean {
  for (let username of usernames) {
    if (!/(?=.*[a-z])(?=.*\d)[a-z\d]{6,10}/.test(username)) return false;
  }
  return true;
}
