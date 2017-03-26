import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filterPipe'})
export class FilterPipe implements PipeTransform{
    transform(value: any[], args: any[]) :any[]{
        let filter: string = args ? args[0].toLocaleLowerCase() : null;
        //console.log(args,filter,value);
        //console.log(value.filter((item:any) => item.title.toLocaleLowerCase().indexOf(filter)));
        //return value;
        return filter ? value.filter(item =>
        item.title.toLocaleLowerCase().indexOf(args) > -1) : value;
    }
}

@Pipe({
  name: "orderby"
})
export class OrderByPipe implements PipeTransform{
  transform(array, args) {
      //console.log(array, args);
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    //console.log(array);
    return array;
  }
}