import { parse } from "csv-parse/sync";
import fs from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";


export class csvHelper {

    static readCsv(filepath: string): Record<string, string>[] {
        const resolvedFilepath = resolve(fileURLToPath(new URL("../..", import.meta.url)), filepath);
        return parse(fs.readFileSync(resolvedFilepath, "utf-8"),

            {
                columns: true,
                skip_empty_lines: true,
                trim: true
            }

        ) as Record<string, string>[];
    }






}
