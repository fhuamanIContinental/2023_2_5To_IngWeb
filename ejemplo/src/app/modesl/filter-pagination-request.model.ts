import { ItemFilter } from "./generic-filter-request.model";

export class FilterPaginationRequest {
    pagina: number = 1;
    cantidad: number = 2;
    filtros: ItemFilter[] = [];
}