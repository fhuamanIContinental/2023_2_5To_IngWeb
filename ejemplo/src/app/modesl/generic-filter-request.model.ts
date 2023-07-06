// import { paggingConst } from "../../constants/generalConstants";

export class GenericFilterRequest {
    page: number;
    quantity: number;
    filters: ItemFilter[];
    constructor() {
        this.page = 1;
        // this.quantity = paggingConst.FILAS_PAGINADO;
        this.quantity = 3;
        this.filters = [];
    }
}

export class ItemFilter {
    name: string;
    value: string;
    constructor(name?: string, value?: string) {
        this.name = name == undefined ? "" : name;
        this.value = value == undefined ? "" : value
    }
}