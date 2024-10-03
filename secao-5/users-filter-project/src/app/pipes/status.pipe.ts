import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean): string {
    const INVALID_STATUS = !status;

    if(INVALID_STATUS) {
      return 'Status inválido';
    }

    return status ? 'Sim' : 'Não';
  }
}
