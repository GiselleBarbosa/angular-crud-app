import { Component, OnInit } from '@angular/core';
import { IconService } from 'carbon-components-angular';
import Carbon20 from '@carbon/icons/es/carbon/20';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private iconService: IconService) { }

  ngOnInit(): void {
    this.iconService.registerAll([Carbon20])
  }

  goToCarbonHomePage(){
    window.location.href = 'https://carbondesignsystem.com';
  }

}
