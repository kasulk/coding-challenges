export function well(ideas: string[]): string {
  const numGoodIdeas = ideas.filter((idea) => idea === "good").length;

  if (!numGoodIdeas) return "Fail!";
  if (numGoodIdeas > 2) return "I smell a series!";
  else return "Publish!";
}
