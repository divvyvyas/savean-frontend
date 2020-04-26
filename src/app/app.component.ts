import { Component, OnInit } from '@angular/core';

declare var device;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'safe-animal';

  ngOnInit() {
    document.addEventListener("deviceready", function () {
      alert(device.platform);
    }, false);
  }
}
