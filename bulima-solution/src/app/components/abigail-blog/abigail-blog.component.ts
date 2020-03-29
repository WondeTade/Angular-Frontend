import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EthioCelebritiesService } from 'src/app/shared/services/ethio-celebrities.service';

@Component({
  templateUrl: './abigail-blog.component.html',
  styleUrls: ['./abigail-blog.component.css']
})
export class AbigailBlogComponent implements OnInit {

  date : Date = new Date();
  socialMedias: string[] = [
    'Facebook',
    'Instagram',
    'Youtube',
    'Telegram',
    'Twitter'
  ];
  ethioCelebform: FormGroup;
  validMessage: string = "";

  constructor(private ethioCelebritiesService: EthioCelebritiesService) { }

  ngOnInit(): void {
    this.ethioCelebform = new FormGroup({
      fullName: new FormControl('', Validators.required),
      maritalStatus: new FormControl('', Validators.required),
      prsonAge: new FormControl('', Validators.required),
      numberOfChild: new FormControl('', Validators.required),
      facebookUrl: new FormControl('', Validators.required),
      instagramUrl: new FormControl('', Validators.required),
      youtubeUrl: new FormControl('', Validators.required),
      telegramUrl: new FormControl('', Validators.required),
      twitterUrl: new FormControl('', Validators.required)
    });
  }

  submitRegistration(){
    if (this.ethioCelebform.valid){
      this.validMessage = "Your registration has been submitted. Thank you!";
      this.ethioCelebritiesService.createPersonInfo(this.ethioCelebform.value)
      .subscribe(data => {
        this.ethioCelebform.reset();
        return true;
      },
      error => {
        return Observable.throw(error);
      }
      )
    }
    else {
      this.validMessage = "Please fill out the form before submitting!";
    }
  }

}
