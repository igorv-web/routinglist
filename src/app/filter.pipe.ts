import { Pipe, PipeTransform } from '@angular/core';
import { INumber } from './works/phonemanager/phonemanager.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<INumber>, filter: string): any {
    if (!values || !values.length) return [];
    if (!filter) return values;

    filter = filter.toUpperCase();

    if (filter && Array.isArray(values)) {
      const keys = Object.keys(values[0]);
      return values.filter(v => v && keys.some(k => v[k] && v[k].toString().toUpperCase().indexOf(filter) >= 0));
    }
  }
}