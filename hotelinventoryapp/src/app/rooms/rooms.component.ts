import { KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { room, roomsList } from './roomsInterfaces';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  pi: number = 3.14159265359;
  constructor() { }
  hotelName: string = 'Taj Hotel'
  numberOfRooms: number = 10
  hideRooms: boolean = true
  hotelRoomList: roomsList[] = []
  toggle() {
    this.hideRooms = !this.hideRooms
  }
  insertText() {
    let longText: string = `this is amazing and Iam loving it`
    longText.toUpperCase()
  }

  originalOrder = (a: any, b: any): number => {
    return 0;
  }
  ngOnInit(): void {
    this.hotelRoomList = [
      {
        roomNumber: 1,
        price: 1000,
        roomType: 'deluxe',
        amenities: 'Ac, WiFi',
        checkInTime: new Date(),
        checkOutTime: new Date()
      },
      {
        roomNumber: 2,
        price: 2000,
        roomType: 'deluxe private',
        amenities: 'AC, WiFi, Pool',
        checkInTime: new Date(),
        checkOutTime: new Date()
      }
    ]
  }
}
