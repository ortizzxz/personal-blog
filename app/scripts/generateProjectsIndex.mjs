// app/scripts/generateIndex.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Pass folder name as argument: "projects" or "project-entries"
const folderName = process.argv[2] || "projects"; 
const folderPath = path.join(__dirname, "../", folderName);

// Accept .ts and .tsx, ignore index files
const files = fs
  .readdirSync(folderPath)
  .filter(
    (f) =>
      (f.endsWith(".ts") || f.endsWith(".tsx")) &&
      f !== "index.ts" &&
      f !== "index.tsx"
  );

// Map to import statements
const imports = files
  .map((f, i) => {
    const fileNameWithoutExt = f.replace(/\.(ts|tsx)$/, "");
    return `import p${i} from './${fileNameWithoutExt}';`; // <-- relative import within same folder
  })
  .join("\n");

// Generate exports array
const exports = `export const ${folderName.replace("-", "_")} = [${files
  .map((_, i) => `p${i}`)
  .join(", ")}];\n`;

// Write index.ts in the same folder
fs.writeFileSync(path.join(folderPath, "index.ts"), imports + "\n\n" + exports);

console.log(`${folderName}/index.ts generated!`);