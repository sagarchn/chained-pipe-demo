import { Pipe, PipeTransform } from "@angular/core";
@Pipe({ name: 'myPagination' })
export class PaginationPipe implements PipeTransform {
    /**
     * Generic Pagination Pipe transform
     * 
     * @param records total records
     * @param pageSize current page size (records to display per page)
     * @param page current active page
     */
    transform<T>(records: T[], pageSize: number, page: number) {
        let pointer = (page-1) * pageSize;
        return records.slice(pointer, pointer + pageSize);
    }
}

