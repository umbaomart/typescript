//--------------------
// CSV Writer Project
//--------------------

import { log } from 'console';
import { appendFileSync } from 'fs';

export class CSVWriter<T> {
    constructor(private columns: (keyof T)[]) {
        this.csv = this.columns.join(',') + '\n'
    }

    private csv: string

    save(filename: string): void {
        appendFileSync(filename, this.csv)

        this.csv = '\n'

        console.log(`File saved to ${filename}`)
    }

    addRows(values: T[]): void {
        let rows = values.map((val) => this.formatRow(val))

        this.csv += rows.join('\n')

        console.log(this.csv);
    }

    private formatRow(value: T): string {
        return this.columns.map((col) => value[col]).join(',')
    }
}