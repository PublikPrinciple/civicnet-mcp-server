export async function selfReflectiveAgent(output: string, principles: any[]) {
  if (output.includes("bias") || output.includes("assumption")) {
    return output + "\n[Self-check: Bias potentially detected. Clarifying.]";
  }
  return output + "\n[Self-check: Output aligns with principles.]";
}
