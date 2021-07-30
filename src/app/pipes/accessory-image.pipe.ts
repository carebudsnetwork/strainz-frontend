import { Pipe, PipeTransform } from '@angular/core';
import { AccessoryType } from '../models/accessory.model';

@Pipe({
  name: 'accessoryImage'
})
export class AccessoryImagePipe implements PipeTransform {

  transform(value: AccessoryType, ...args: unknown[]): string {
    switch (value) {
      case AccessoryType.Sunglasses:
        return 'assets/sunglasses.png';
      case AccessoryType.Joint:
        return 'assets/joint.png';

      case AccessoryType.Earring:
        return 'assets/earring.png';

    }
  }

}
