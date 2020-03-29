import { Component, OnInit, Output } from '@angular/core';
import { EthioCelebritiesService } from 'src/app/shared/services/ethio-celebrities.service';
import { EthioCelebritiyBasicInfo } from 'src/app/shared/const-ethio-celebrities/celebrities-basic-information';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NumberValidator } from 'src/app/shared/validators/number.validator';
import { EventEmitter } from 'events';


@Component({
    templateUrl: './celebrities-details.component.html',
    styleUrls: ['./celebrities-detail.component.css',
                 '../../welcome/welcome.component.css']
})
export class EthioCelebrityDetailsComponent implements OnInit {

    pageTitle: string = "Detail Infomation";
    celebrity: EthioCelebritiyBasicInfo;
    errorMessage: string; 
    celebrityForm: FormGroup;
    imageSrc: string = '../../../assets/images/bubu_3.jpg';

    @Output() notifyDelete: EventEmitter = new EventEmitter();

    constructor(private fb: FormBuilder,
                private celebritiesService: EthioCelebritiesService,
                private route: ActivatedRoute,
                private router: Router) {}

    //Read celebrity full name from the route parameter
    
    ngOnInit(): void {
        
        this.celebrityForm = this.fb.group ({
            fullName: ['', [Validators.required]],
            maritalStatus: '', 
            personAge: ['', [NumberValidator.range(13, 99)]],
            numberOfChild: ['', [NumberValidator.range(0, 5)]],
            facebookUrl: '',
            instagramUrl: '',
            youtubeUrl: '',
            telegramUrl: '',
            twitterUrl: '',
            personPhoto: '',
            gender: ['', Validators.required]
        });

        this.route.paramMap.subscribe(params => {
            const personId = +params.get('id');
            if (personId) {
                this.getCelebrity(personId);
            } 
            else {
                this.celebrity = {
                    personId: null,
                    fullName: '',
                    maritalStatus: '',
                    personAge: null,
                    numberOfChild: null,
                    facebookUrl: '',
                    instagramUrl: '',
                    youtubeUrl: '',
                    telegramUrl: '',
                    twitterUrl: '',
                    personPhoto: '' 
                };
            }
        });

        this.route.paramMap.subscribe(params => {
            const celebFullName = params.get('fullName');
            if (celebFullName) {
                this.getCelebrityByName(celebFullName);
            }
        });


    }
    

    getCelebrity (id: number) {
        this.celebritiesService.getCelebrityById(id)
        .subscribe((celebrity: EthioCelebritiyBasicInfo) => { this.editCelebrity(celebrity);
            this.celebrity = celebrity; },
            
        (err: any) => console.log(err)
        
        );

    }

    getCelebrityByName (fullName: string) {
        this.celebritiesService.getCelebrityByName(fullName)
        .subscribe((celebrity: EthioCelebritiyBasicInfo) => {
            (this.celebrity = celebrity);
            this.celebrity = celebrity;
            },
            
            (err: any) => console.log(err)
        );
    }

    editCelebrity(celebrity: EthioCelebritiyBasicInfo) {
        this.celebrityForm.patchValue({
            fullName: celebrity.fullName,
            maritalStatus: celebrity.maritalStatus,
            personAge: celebrity.personAge,
            numberOfChild: celebrity.numberOfChild,
            facebookUrl: celebrity.facebookUrl,
            instagramUrl: celebrity.instagramUrl,
            youtubeUrl: celebrity.youtubeUrl,
            twitterUrl: celebrity.twitterUrl,
            personPhoto: celebrity.personPhoto
        });
    }

    onDelete(id: number){
        this.celebritiesService.deleteCelebrity(id)
        .subscribe(() => {
            this.celebrity;
        });
    }

    deleteCelebrity() {
        this.celebritiesService.deleteCelebrity(this.celebrity.personId)
        .subscribe(() => console.log(`Celebrity with id = ${this.celebrity.personId} dleted`),
        (err) => console.log(err)
        );
    }

}