export interface ProjectImage {
  src: string;
}

export type ProjectType = 'educational' | 'commercial' | 'social';

export interface MainPageProject {
  name: string;
  smallDescription: string;
  images: ProjectImage[];
  site: string;
  code: string;
  type: ProjectType;
}

const projects: MainPageProject[] = [
  {
    name: "MidNight",
    smallDescription: 'message.midnightSmallDescription',
    images: [
      { src: './midnight/image_1.png' },
      { src: './midnight/image_2.png' },
      { src: './midnight/image_3.png' },
      { src: './midnight/image_4.png' },
      { src: './midnight/image_5.png' },
      { src: './midnight/image_6.png' },
      { src: './midnight/image_7.png' },
      { src: './midnight/image_8.png' },
      { src: './midnight/image_9.png' },
    ],
    site: "https://tmwcse.vercel.app/",
    code: "https://github.com/MarcosAlves90/projetoRPG_TMW_Ficha/tree/develop",
    type: "educational"
  },
  {
    name: "Bunchin",
    smallDescription: 'message.bunchinSmallDescription',
    images: [
      { src: './bunchin/image_1.png' },
      { src: './bunchin/image_2.png' },
    ],
    site: "https://bunchin-project.onrender.com",
    code: "https://github.com/MarcosAlves90/bunchin",
    type: "educational"
  },
  {
    name: "Diário de Mariupol",
    smallDescription: 'message.diarioDeMariupolSmallDescription',
    images: [
      { src: 'https://res.cloudinary.com/dflvo098t/image/upload/imagem-1-diario-de-mariupol_g7fd9g.png' },
    ],
    site: "https://diario-de-mariupol.vercel.app/",
    code: "",
    type: "educational"
  },
  {
    name: "Além do Olhar",
    smallDescription: 'message.alemDoOlharSmallDescription',
    images: [
      { src: './alem_do_olhar/image_1.png' },
    ],
    site: "https://alem-do-olhar.vercel.app/",
    code: "https://github.com/MarcosAlves90/alem_do_olhar",
    type: "social"
  },
  {
    name: "Coconut Links",
    smallDescription: "message.coconutLinksSmallDescription",
    images: [
      { src: './coconut_links/image_1.png' },
    ],
    site: "https://marcosalves90.github.io/coconut_links/",
    code: "https://github.com/MarcosAlves90/coconut_links",
    type: "educational"
  },
  {
    name: "Antônia Fernandes",
    smallDescription: 'message.antoniaFernandesSmallDescription',
    images: [
      { src: './antonia_fernandes_store/imagem_1.png' },
      { src: './antonia_fernandes_store/imagem_2.png' },
    ],
    site: "https://www.antoniafernandestore.com.br/",
    code: "",
    type: "commercial"
  },
  {
    name: "Which Dog Are You?",
    smallDescription: 'message.whichDogAreYouSmallDescription',
    images: [
      { src: './which_dog_are_you/image_1.png' },
      { src: './which_dog_are_you/image_2.png' },
    ],
    site: "https://which-dog-are-you.vercel.app/",
    code: "https://github.com/MarcosAlves90/personality_quiz",
    type: "educational"
  },
  {
    name: "Mediari Consultoria",
    smallDescription: 'message.mediariConsultoriaSmallDescription',
    images: [
      { src: './mediari_consultoria/image_1.png' },
      { src: './mediari_consultoria/image_2.png' },
    ],
    site: "https://www.mediariconsultoria.com.br/",
    code: "https://github.com/MarcosAlves90/mediari-consultoria",
    type: "commercial"
  }
];

export default projects;