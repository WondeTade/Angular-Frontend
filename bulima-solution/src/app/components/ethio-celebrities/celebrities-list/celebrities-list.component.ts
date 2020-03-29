import { Component, OnInit } from '@angular/core';
import { EthioCelebritiesService } from 'src/app/shared/services/ethio-celebrities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EthioCelebritiyBasicInfo } from 'src/app/shared/const-ethio-celebrities/celebrities-basic-information';



@Component({
    templateUrl: '../../../shared/component/articles-template.component.html',
    styleUrls: ['../../../shared/component/articles-template.component.css']
})
export class EthioCelebritieListComponent implements OnInit {

  profileImageUrl: string = '../../../assets/images/abigail_photo.jpg';
    
  filterd: string;
  imageSrc: string = '../../../assets/images/bubu_3.jpg';

  get searchByName(): string {
    return this.filterd;
  }
  
  set searchByName(value: string) {
    this.filterd = value;
    this.filteredContent = this.filterd ? this.performFilter(this.searchByName) : this.contents;
  }


    pageTitle: string = 'Ethiopian Celebrities'

    errorMessage: string;
    
    filteredContent: EthioCelebritiyBasicInfo[];

    contents: EthioCelebritiyBasicInfo[] = [];

    constructor(private ethioCelebritiesService: EthioCelebritiesService,
                private route: ActivatedRoute,
                private router: Router){}

    ngOnInit() {
         this.ethioCelebritiesService.getCelebrities()
         .subscribe(
             {
                next: res => { this.contents = res, 
                                this.filteredContent = res},
               error: err => this.errorMessage = err 
             }
         );
    }

    performFilter(filterBy: string): EthioCelebritiyBasicInfo[] {
        filterBy = filterBy.toLowerCase();
        return this.contents.filter((celebrity : EthioCelebritiyBasicInfo) => 
            celebrity.fullName.toLowerCase().indexOf(filterBy) !== -1);
      }


}