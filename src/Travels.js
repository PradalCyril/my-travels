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
        destination:"Poussan",
      image:
        "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    },
    {
        distance:
        "600km",
        pays: "Lozère",
        destination:"La canourgue",
      image:
        "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    },
    {
        distance:
        "1200km",
        pays: "Espagne",
        destination:"Barcelone",
      image:
        "https://media.routard.com/image/45/6/montpellier-place-comedie.1491456.jpg"
    }
];
const Travels = () => (
    <div>
      {travels.map(quote => (
    <Travel destination={quote.destination} image={quote.image} pays={quote.pays} distance={quote.distance} />
  ))}
    </div>
  );
export default Travels;