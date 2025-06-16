import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modifyText',
  standalone: true,
})
export class ModifyTextPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    console.log('pipe args: ', args);

    return value + ' - modified';
  }
}
