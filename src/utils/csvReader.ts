import fs from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export function readCsvData(filename: string) {
    const filePath = path.resolve(__dirname, "../test-data", filename);
    console.log(filePath);

    const content = fs.readFileSync(filePath, "utf-8");

    return parse(content, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });
}