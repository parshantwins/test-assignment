import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'

@Pipe({
    name: 'datediff'
})
export class DatediffPipe implements PipeTransform {

    transform(date1: any, date2?: any): any {
        debugger;
        const daydiff = moment(date1).diff(moment(date2), "days");
        return Math.abs(daydiff);
    }
}