export class FilterTable {
    value: number;
    label: string;
    constructor(value?: number, label?: string) {
        this.value = value == undefined ? 0 : value;
        this.label = label == undefined ? "" : label;
    }
}