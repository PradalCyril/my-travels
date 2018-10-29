import React from "react";
import Travel from "./Travel";

const travels = [
    {
        distance:
            "840km",
        pays: "France",
        destination: "Sète",
        image:
            "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    },
    {
        distance:
            "800km",
        pays: "France",
        destination: "Montellier",
        image:
            "http://www.cm-immobilier-balaruc.fr/wp-content/uploads/2011/02/2521979711.jpg"
    },
    {
        distance:
            "820km",
        pays: "France",
        destination: "Poussan",
        image:
            "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    },
    {
        distance:
            "600km",
        pays: "Lozère",
        destination: "La canourgue",
        image:
            "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    },
    {
        distance:
            "1200km",
        pays: "Espagne",
        destination: "Barcelone",
        image:
            "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    }
];
const Travels = () => (
    <div>
        {travels.map((quote, index) => (
            <div key={index}>
                <Travel
                    destination={quote.destination}
                    image={quote.image}
                    pays={quote.pays}
                    distance={quote.distance}
                />
            </div>
        ))}
    </div>
);
export default Travels;

/*avec key 
import React from 'react';

import Travel from './Travel';

const listTravels = [
    {
        destination: 'Helsinki',
        country: 'Finland',
        photo: 'http://nordictravel.com.au/image/type:galleryFullImage/deviceType:desktop/id:6919/filename:c.+shutterstock_Aurora+Borealis+Finnish+Lapland+4.jpg',
        distance: '3000',
    },
    {
        destination: 'Lyon',
        country: 'France',
        photo: 'https://static.lexpress.fr/medias_11552/w_1888,h_1056,c_crop,x_154,y_157/w_640,h_360,c_fill,g_north/v1499872733/vue-de-lyon-depuis-la-saone-au-crepuscule_5914924.jpg',
        distance: '550',
    },
    {
        destination: 'Montreal',
        country: 'Canada',
        photo: 'https://images.radio-canada.ca/q_auto,w_1250/v1/ici-premiere/16x9/eclr-rue-sainte-catherine-montreal.jpg',
        distance: '5550',
    },
    {
        destination: 'Berlin',
        country: 'Germany',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Berlin_Skyline_Fernsehturm_02.jpg/1200px-Berlin_Skyline_Fernsehturm_02.jpg',
        distance: '1600',
    },
    {
        destination: 'Saïgon',
        country: 'Vietnam',
        photo: 'https://www.airfrance.fr/FR/common/common/img/tbaf/news/SGN/au-sud-ouest-de-saigon-la-fete-d-ooc-om-bok/SGN-au-sud-ouest-de-saigon-la-fete-d-ooc-om-bok-2_1-1024x512.jpg',
        distance: '10470',
    },
];

const Travels = (props) => {
    return (
        <section>
            {listTravels.map((travel, index) => (
                <li key={index}>
                    <Travel
                        destination={travel.destination}
                        country={travel.country}
                        photo={travel.photo}
                        distance={travel.distance}
                    />
                </li>
            ))}
        </section>
    );
}

export default Travels; */