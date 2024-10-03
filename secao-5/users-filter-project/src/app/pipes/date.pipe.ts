import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(date: string): string {
    const INVALID_DATE = !date;

    if(INVALID_DATE) {
      return 'Data inválida';
    }

    return new Date(date).toDateString();
  }

}
