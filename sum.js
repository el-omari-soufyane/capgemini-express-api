export function sum(a = 0, b = 0) {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Arguments must be of type number");
    }
    return a + b;
  } catch (error) {
    return error.message;
  }
}
