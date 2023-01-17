import { Component, Input } from '@angular/core';
import { roomsList } from '../roomsInterfaces';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent {
  @Input() rooms: roomsList[] = []
  originalOrder: any = (a: any, b: any): number => {
    return 0;
  }
}
