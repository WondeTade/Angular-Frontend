import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
export class BodyContentService {

    getArticles(){
        return ARTICLES;
    }
}


const ARTICLES = [
    {
        id: 1,
        routing: 'ethio-attractions',
        heading: 'Ethiopian Attractions',
        paragraph_1: 'Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Cras convallis eros sollicitudin efficitur   elementum. Donec quis facilisis urna, sit amet.',
        paragraph_2: 'Sed luctus dignissim justo, eu condimentum ante euismod eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
        paragraph_3: '',
        imageUrl: '../../assets/images/deep_ocean.jpg',
        source: 'Photo by Jonatan Pie on Unsplash'
    },

    {
        id: 2,
        routing: 'ethio-cities',
        heading: 'Ethiopian Cities',
        paragraph_1: 'Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Cras convallis eros sollicitudin efficitur   elementum. Donec quis facilisis urna, sit amet.',
        paragraph_2: 'Sed luctus dignissim justo, eu condimentum ante euismod eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
        paragraph_3: '',
        imageUrl: '../../assets/images/computer_open.jpg',
        source: 'Photo by Kyle Sung on Unsplash'
    },

    {
        id: 3,
        routing: 'ethio-celebrities',
        heading: 'Ethiopian Celebrities',
        paragraph_1: 'Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Cras convallis eros sollicitudin efficitur   elementum. Donec quis facilisis urna, sit amet.',
        paragraph_2: 'Sed luctus dignissim justo, eu condimentum ante euismod eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
        paragraph_3: '',
        imageUrl: '../../assets/images/do_what_is_great.jpg',
        source: 'Photo by Martin Shreder on Unsplash'
    },

    {
        id: 4,
        routing: 'about',
        heading: 'About BuLiMa',
        paragraph_1: 'Lorem ipsum dolor sit amet, consectetur   adipiscing elit. Cras convallis eros sollicitudin efficitur   elementum. Donec quis facilisis urna, sit amet.',
        paragraph_2: '',
        paragraph_3: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
        imageUrl: '../../assets/images/love_codding.jpg',
        source: 'Photo by Alexander Sinn on Unsplash'
    }
]