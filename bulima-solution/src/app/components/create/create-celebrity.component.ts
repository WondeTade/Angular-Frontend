import { OnInit, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EthioCelebritiyBasicInfo} from 'src/app/shared/const-ethio-celebrities/celebrities-basic-information';
import { EthioCelebritiesService } from 'src/app/shared/services/ethio-celebrities.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberValidator } from 'src/app/shared/validators/number.validator';


@Component({
    selector: 'create-celebrity',
    templateUrl: './create-celebrity.component.html', 
    styleUrls: ['./create-celebrity.component.css', 
                '../welcome/welcome.component.css']
})
export class CreateCelebrityComponent implements OnInit {

    pageTitle: string = 'Ethiopian Celebrities'

    celebrity: EthioCelebritiyBasicInfo;
    celebrityForm: FormGroup;

    constructor(private fb: FormBuilder, 
                private celebrityService: EthioCelebritiesService,
                private route: ActivatedRoute,
                private router: Router) {}

    getCelebrity (id: number) {
        this.celebrityService.getCelebrityById(id)
        .subscribe((celebrity: EthioCelebritiyBasicInfo) => { this.editCelebrity(celebrity);
            this.celebrity = celebrity; },
        (err: any) => console.log(err));
    }

    getCelebrityByName (fullName: string) {
        this.celebrityService.getCelebrityByName(fullName)
        .subscribe((celebrity: EthioCelebritiyBasicInfo) => this.editCelebrity(celebrity),
        (err: any) => console.log(err));
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

    ngOnInit() {
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
        })
        
    }
    
    onSubmit() {
        this.temporaryDataHolder();
        if (this.celebrity.personId) {
            this.celebrityService.updateCelebrityInfo(this.celebrity)
            .subscribe(
                () => this.router.navigate(['ethio-celebrities']),
                (err: any) => console.log(err)
            );
        }else {
            this.celebrityService.createPersonInfo(this.celebrity)
            .subscribe(
                () => this.router.navigate(['ethio-celebrities']),
                (err: any) => console.log(err)
            );
        }
    }

    temporaryDataHolder() {
        this.celebrity.fullName = this.celebrityForm.value.fullName;
        this.celebrity.maritalStatus = this.celebrityForm.value.maritalStatus;
        this.celebrity.personAge = this.celebrityForm.value.personAge;
        this.celebrity.numberOfChild = this.celebrityForm.value.numberOfChild;
        this.celebrity.facebookUrl = this.celebrityForm.value.facebookUrl;
        this.celebrity.instagramUrl = this.celebrityForm.value.instagramUrl;
        this.celebrity.youtubeUrl = this.celebrityForm.value.youtubeUrl;
        this.celebrity.telegramUrl = this.celebrityForm.value.telegramUrl;
        this.celebrity.twitterUrl = this.celebrityForm.value.twitterUrl;
        this.celebrity.personPhoto = this.celebrityForm.value.personPhoto;
    }

    onEdit() {
        this.celebrityForm.patchValue({
            fullName: '',
            maritalStatus: '',
            personAge: null,
            numberOfChild: null,
            facebookUrl: null,
            instagramUrl: null,
            youtubeUrl: null,
            telegramUrl: null,
            twitterUrl: null,
            personPhoto: null,
            gender: ''
        })
    }

}