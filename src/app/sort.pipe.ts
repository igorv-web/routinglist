import { Pipe, PipeTransform } from '@angular/core';
import { INumber } from './works/phonemanager/phonemanager.component';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform( array: Array<INumber>, sortingColumn: string, isDesc: boolean ): Array<INumber> {
    array.sort( ( a: any, b: any ) => {
        let ae = a[ sortingColumn ];
        let be = b[ sortingColumn ];
        if ( ae == undefined && be == undefined ) return 0;
        if ( ae == undefined && be != undefined ) return isDesc ? 1 : -1;
        if ( ae != undefined && be == undefined ) return isDesc ? -1 : 1;
        if ( ae == be ) return 0;
        return isDesc ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    } );
    return array;
  }
}