import car1 from '../assets/car-1.jpg'
import car2 from '../assets/car-2.jpg'
import car3 from '../assets/car-3.jpg'
import about1 from '../assets/ab1.png'
import about2 from '../assets/about-2.png'
import service1 from '../assets/service-1.jpg'
import service2 from '../assets/service-2.jpg'
import service3 from '../assets/service-3.jpg'
import airLogo from '../assets/aeroplane_logo.svg'
import roadLogo from '../assets/ambulance_logo.svg'
import railLogo from '../assets/train_logo.svg'
import deliver1 from '../assets/deliver1.svg'
import deliver2 from '../assets/deliver2.svg'
import deliver3 from '../assets/deliver3.svg'
import deliver4 from '../assets/deliver4.svg'
import image1 from '../assets/Image-1.png'

export const navPages = [
    {
        id: 1, 
        pageName: 'Home', 
        subPages: [
            {id: 11, pageName: '01', subPages: [], link: "/", hasChild: false}, 
            {id: 12, pageName: '02', subPages: [], link: "/", hasChild: false},
            {id: 13, pageName: '03', subPages: [], link: "/", hasChild: false}
        ], 
        link: '/', 
        hasChild: true
    },
    {
        id: 2, 
        pageName: 'About us',
        subPages: [],
        link: '/', 
        hasChild: false
    },
    {
        id: 3, 
        pageName: 'Services',
        subPages: [
            {id: 31, pageName: 'Services', subPages: [], link: "/", hasChild: false},
            {id: 32, pageName: 'Single Service', subPages: [], link: "/", hasChild: false}
        ],
        link: '/', 
        hasChild: true
    },
    {
        id: 4, 
        pageName: 'Blog',
        subPages: [
            {id: 41, pageName: 'Blog-Grid', subPages: [], link: "/", hasChild: false},
            {id: 42, pageName: 'Blog-Classic', subPages: [], link: "/", hasChild: false},
            {id: 43, pageName: 'Single-Blog', subPages: [], link: "/", hasChild: false},
        ],
        link: '/', 
        hasChild: true
    },
    {
        id: 5, 
        pageName: 'Pages',
        subPages: [
            {id: 51, pageName: 'Tracking', subPages: [], link: "/", hasChild: false}, 
            {id: 52, pageName: 'Projects', 
            subPages: [
                {id: 521, pageName: 'Projects Grid', subPages: [], link: "/", hasChild: false}, 
                {id: 522, pageName: 'Projects Masonry', subPages: [], link: "/", hasChild: false},
                {id: 523, pageName: 'Projects Single', subPages: [], link: "/", hasChild: false}
            ], 
            link: "/", hasChild: true},
            {id: 53, pageName: 'Team', 
            subPages: [
                {id: 531, pageName: 'Team', subPages: [], link: "/", hasChild: false}, 
                {id: 532, pageName: 'Team Single', subPages: [], link: "/", hasChild: false},
            ], 
            link: "/", hasChild: true},
            {id: 54, pageName: 'Faq Page', subPages: [], link: "/", hasChild: false}, 
            {id: 55, pageName: '404', subPages: [], link: "/", hasChild: false}
        ],
        link: '/', 
        hasChild: true
    },
    {
        id: 6, pageName: 'Contact',
        subPages: [],
        link: '/', 
        hasChild: false
    }
]

export const homeHeroContents = [
    {
        id: 1,
        bgImg: car1,
        headline: 'Fastest & Secured Logistics Solution & services1',
        subHeadline: 'INTERNATIONAL LOGISTICS 1',
        body: 'Body 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sequi ad debitis recusandae maxime vero? Quis aliquid facere sapiente beatae veritatis fugiat nemo nam alias dolor illo quae, ipsum aliquam molestias'
    },
    {
        id: 2,
        bgImg: car2,
        headline: 'Fastest & Secured Logistics Solution & services2',
        subHeadline: 'INTERNATIONAL LOGISTICS 2',
        body: 'Body 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sequi ad debitis recusandae maxime vero? Quis aliquid facere sapiente beatae veritatis fugiat nemo nam alias dolor illo quae, ipsum aliquam molestias'
    },
    {
        id: 3,
        bgImg: car3,
        headline: 'Fastest & Secured Logistics Solution & services3',
        subHeadline: 'INTERNATIONAL LOGISTICS 3',
        body: 'Body 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, repellat Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, sequi ad debitis recusandae maxime vero? Quis aliquid facere sapiente beatae veritatis fugiat nemo nam alias dolor illo quae, ipsum aliquam molestias'
    }
]

export const homeAboutContents = {
    subHeadline: 'WE SPECIALISE IN THE TRANSPORTATION',
    headline: 'Manage your Complex Logistics as can Focus',
    boyPara: 'Transmax is the world’s driving worldwide coordinations supplier we uphold industry and exchange the worldwide trade of about dummy merchandise through land transport.',
    services : ['Aerospace & Defense','Automotive','Cloud Computing','Fashion & Retail','Aerospace & Defense','Automotive','Cloud Computing','Fashion & Retail'],
    images: [about1, about2]
}

export const homeServicesContents = {
    subHeadline: 'SHIPPING SERVICES',
    headline: 'Specialist Logistics Services',
    carousalCards: 
    [
        { service_img: service1, logo_img: airLogo , headline: 'Air Transportation', body: 'Air freight is the fastest way to any transport can any deliver works.', url: 'https://facebook.com'}, 
        { service_img: service2, logo_img: roadLogo , headline: 'Road Transportation', body: 'Air freight is the fastest way to any transport can any deliver works.', url: 'https://instagram.com'}, 
        { service_img: service3, logo_img: railLogo , headline: 'Rail Transportation', body: 'Air freight is the fastest way to any transport can any deliver works.', url: 'https://pinterest.com'}
    ]         
}

export const homeDeliverContents = {
    subHeadline: 'HOW IT WORKS',
    headline: 'How We Deliver Your Parcel',
    timeRoutes:
    [
        { logo_img: deliver1 , headline: 'Parcel Register', body: 'Lorem ipsum amet consectetur any more tellus suspendisse.'}, 
        { logo_img: deliver2 , headline: 'Parcel Loading', body: 'Lorem ipsum amet consectetur any more tellus suspendisse.'}, 
        { logo_img: deliver3 , headline: 'Parcel In-transit', body: 'Lorem ipsum amet consectetur any more tellus suspendisse.'},
        { logo_img: deliver4 , headline: 'Parcel Delivery', body: 'Lorem ipsum amet consectetur any more tellus suspendisse.'}
    ]         
}

export const homeCompetenceContents = {
    sectionImage: image1,
    headline: 'Our Industry-Explicit Competence',
    boyPara: 'Lorem ipsum dolor sit amet consectetur. tellus suspendisse nulla aliquam. Risus rutrum as tellus eget ultrices pretium nisi amet facilisis. Augue eu vulputate tortor egestas cursus any is vivamus. Commodo dictum iaculis eget massa phasellus ultrices nunc dignissim.',
    services : ['Aerospace & Defense','Automotive','Cloud Computing','Fashion & Retail','Aerospace & Defense','Automotive','Cloud Computing','Fashion & Retail','Aerospace & Defense','Automotive', 'Cloud Computing','Fashion & Retail'],      
}