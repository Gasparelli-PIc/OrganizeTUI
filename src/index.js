import { main } from "./cli/main.js";

try {
  main();
} catch (error) {
  console.error("Error:", error);
}
