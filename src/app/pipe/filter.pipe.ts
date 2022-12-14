import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "myFilter" })
export class FilterPipe implements PipeTransform {

    /**
     * Generic Filter Pipe to filter by @param filterBy field and @param filterText
     * 
     * @param records overall records
     * @param filterBy by which field filter needs to be done
     * @param filterText filter content
     * @returns 
     */
    transform<T>(records: T[], filterBy: string, filterText: string) {
        if (!records || !filterText) return records;
        return records.filter(r => {

            for (const key in r) {
                if (key === filterBy && Object.prototype.hasOwnProperty.call(r, key)) {
                    const element = String(r[key]);
                    return element.toLowerCase().includes(filterText.toLowerCase());
                }
            }
            return false;
        });
        // return records.filter(r => r[filterBy].toLowerCase().includes(filterText.toLowerCase()));
    }



}