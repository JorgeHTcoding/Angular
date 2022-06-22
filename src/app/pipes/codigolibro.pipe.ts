import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigolibro'
})
export class CodigolibroPipe implements PipeTransform {

  transform(bookID:number): string {

    let result:string;
    result = "Ref-" + bookID


    return result;
  }

}
