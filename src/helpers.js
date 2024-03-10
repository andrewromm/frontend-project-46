import fs from "fs";
import path from "path";

export function readFile(file) {
  const dir = process.cwd(file);
  const fullPath = path.resolve(dir, file);
  return fs.readFileSync(fullPath, "utf-8");
}

export const detectFileType = (file) => {
  const extension = path.extname(file);
  return extension.slice(1);
};
