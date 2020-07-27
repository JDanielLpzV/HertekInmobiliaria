import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const resultPost = [];
    console.log(args.toString());

    for (const post of value) {
      if (
        post.metodo.toLowerCase().indexOf(args[0].toLowerCase()) > -1
        && post.lugar.toLowerCase().indexOf(args[1].toLowerCase()) > -1
        && post.cuartos >= args[2]
        && post.banos >= args[3]
        && post.autos >= args[4]
        && post.precio <= args[5]
      ) {
        resultPost.push(post);
      };
    };
    return resultPost;
  }
}
