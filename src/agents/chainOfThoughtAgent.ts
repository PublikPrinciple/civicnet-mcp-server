export async function chainOfThoughtAgent(query: string, context: any) {
  const thoughts = [
    `Let's first understand the core issue in: ${query}`,
    "What data is most relevant here?",
    "How would a planner approach this? A resident?",
    "What decision paths follow logically?"
  ];
  return thoughts.join("\n");
}
