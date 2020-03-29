import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = "About";

  constructor(private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit(): void {
      }

}
