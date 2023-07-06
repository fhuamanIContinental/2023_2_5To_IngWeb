import { FilterTable } from "./filter-table.model";

export class FilterForm {
    type: number;
    label: string;
    name: string;
    data: FilterTable[];
    url: string;
    field: string;

    constructor(name?: string, label?: string, type?: number, data?: FilterTable[], url?: string, field?: string) {
        this.name = name == undefined ? "" : name;
        this.label = label == undefined ? "" : label;
        this.type = type == undefined ? 0 : type;
        this.data = data == undefined ? [] : data;
        this.url = url == undefined ? "" : url;
        this.field = field == undefined ? "" : field;
    }
}