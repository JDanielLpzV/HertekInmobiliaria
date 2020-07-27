import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const resultPost = [];
    for (const post of value) {
      if (post.lugar.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPost.push(post);
      };
    };
    return resultPost;
  }
}
