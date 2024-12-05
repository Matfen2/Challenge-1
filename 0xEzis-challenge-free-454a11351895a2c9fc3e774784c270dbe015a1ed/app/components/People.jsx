import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils"; 
import Marquee from "@/components/magicui/marquee";

const people = [
  {
    "icon": "/picts/people/Shoguntoto.png",
    "name": "Shoguntoto",
    "email": "@thomasdev59",
    "review": "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles."
  },
  {
    "icon": "/picts/people/Shoguntoto (2).png",
    "name": "Shoguntoto",
    "email": "@thomasdev59",
    "review": "Ezis répond à toutes les questions afin de nous aider le plus possible dans notre objectif."
  },
  {
    "icon": "/picts/people/Hocine.png",
    "name": "Hocine",
    "email": "@hocine",
    "review": "J'aime bien le concept d'avoir une communauté, Ezis est très à l'écoute et n'hésite pas à répondre aux questions."
  },
  {
    "icon": "/picts/people/Youtmax654.png",
    "name": "Youtmax654",
    "email": "@youtmax654",
    "review": "Je me suis grandement améliorer sur les technologies que j'utilise et sur ma façon de traviller sur un projet."
  },
  {
    "icon": "/picts/people/Baptiste.png",
    "name": "Baptiste",
    "email": "@baptiste_lechat",
    "review": "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser."
  },
  {
    "icon": "/picts/people/Le D.png",
    "name": "Le D",
    "email": "@sport_devweb",
    "review": "Le fait d'avoir accès à un discord et une communauté fait vraiment la différence."
  },
  {
    "icon": "/picts/people/Shoguntoto (3).png",
    "name": "Shoguntoto",
    "email": "@thomasdev59",
    "review": "Des projets de qualité avec toutes les ressources dont on aurait besoin pour les réaliser."
  },
  {
    "icon": "/picts/people/Lois.png",
    "name": "Lois",
    "email": "@loisglld",
    "review": "Je suis surpris de la qualité des ressources et de la pertinence du contenu pour lequel je me suis abonné !"
  },
  {
    "icon": "/picts/people/Youtmax654 (2).png",
    "name": "Youtmax654",
    "email": "@youtmax654",
    "review": "Cette idée de challenges est de loin la meilleure que j'ai pu trouver sur internet parmi mes recherches."
  },
  {
    "icon": "/picts/people/LucasQust.png",
    "name": "LucasQust",
    "email": "@LucasQust",
    "review": "C’est vraiment lourd, les challenges sont cool, l’environnement qu’Ezis à mit en place est top !"
  },
  {
    "icon": "/picts/people/Jojok63.png",
    "name": "Jojok63",
    "email": "@jojok_63",
    "review": "Une communauté très réactive, toujours prête à vous aider quelque soit le sujet."
  },
  {
    "icon": "/picts/people/Eihposenna.png",
    "name": "Eihposenna",
    "email": "@eihposenna",
    "review": "Ça me fait découvrir pas mal de choses sur Tailwind et les différentes possibilités qui sont offertes."
  },
  {
    "icon": "/picts/people/Shoguntoto (4).png",
    "name": "Shoguntoto",
    "email": "@thomasdev59",
    "review": "C'est une belle plateforme, les explications sont clairs, les maquettes professionnelles."
  }
];

const ReviewCard = ({ pict, name, email, review }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={pict}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{email}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{review}</blockquote>
    </figure>
  );
};

const People = () => {
  const firstRow = people.slice(0, Math.ceil(people.length / 2));
  const secondRow = people.slice(Math.ceil(people.length / 2));

  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((person, index) => (
          <ReviewCard
            key={`review-${index}`} 
            pict={person.icon}
            name={person.name}
            email={person.email}
            review={person.review}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((person, index) => (
          <ReviewCard
            key={`review-${index + firstRow.length}`} 
            pict={person.icon}
            name={person.name}
            email={person.email}
            review={person.review}
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};

export default People;
