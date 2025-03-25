import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        message: {
            developer: 'Full-Stack Developer',
            whoAm: 'who am',
            i: 'I',
            intro: 'I\'m a full-stack developer, graphic designer, and writer who\'s always up for a challenge.',
            // Contatos
            contactsTitle: 'Contacts',
            // Idiomas
            languagesTitle: 'Languages',
            portuguese: 'Portuguese',
            english: 'English',
            portugueseText: 'My native language, no difficulty',
            englishText: 'I understand well, but my conversation can still improve',
            // Habilidades
            skillsTitle: 'Skills',
            // Educação e Experiência
            educationTitle: 'Education and Experience',
            educationFirstText: 'Computer Technician for Internet',
            educationSecondText: 'Multiplatform Software Development Technologist',
            educationThirdText: 'Freelancing and creating personal and academic projects',
            // projetos
            tutorialOne: 'Click on a project to learn more',
            verifyWebsite: 'Check Website',
            sourceCode: 'Source Code',
            // projetos - MidNight
            midnightDescription: 'An online character sheet project made for the virtual tabletop RPG game "The Mental World". The project uses technologies such as HTML, CSS, JavaScript, MUI, React, Vite, and Firebase for its functionality and styling. The idea is that the user can create and edit their sheet on the platform, which will be sent in real-time to the database.',
            midnightSmallDescription: 'Tabletop RPG character sheet platform.',
            midnightCaptions: [
                'Home page',
                'Individual page',
                'Characteristics page',
                'Status page',
                'Skills page',
                'Notes page',
                'Inventory page',
                'Settings page',
                'Login page'
            ],
            // projetos - Bunchin
            bunchinDescription: 'Imagine a platform where companies can manage employees, clock in and even correct any errors in their records. This is Bunchin, a digital timekeeping and business management website developed as part of an interdisciplinary project for the second semester of my undergraduate degree.',
            bunchinSmallDescription: 'Digital time clock and business management platform.',
            bunchinCaptions: [
                'Home page',
                'Login page'
            ],
            // projetos - Dicenders
            dicendersDescription: "The Dicenders project was my final project at Etec Professora Maria Cristina " +
                "Medeiros, where I studied Internet Computing. It consists of a platform that integrates tabletop resources" +
                "that is, a web application for playing RPG in a virtual format, with the functionalities of a social network. It was made using HTML, CSS, JavaScript and Fabric.js for the platform, in addition to MongoDB, Node.js, " +
                "Express.js, Moongose ​​and Socket.io for the database and connection.",
            dicendersSmallDescription: "Virtual tabletop and social network focused on RPG.",
            dicendersCaptions: [
                "Landing page",
                "Registration page",
                "Home page",
                "Social network page",
                "Messages page"
            ],
            // projetos - Além do Olhar
            alemDoOlharDescription: 'Official online platform that presents various creative works by women entrepreneurs involved in the “Além do Olhar” project. Built using HTML, CSS, JavaScript and React, as well as several libraries, such as Bootstrap, Bootstrap Icons and Reactjs-popup.',
            alemDoOlharSmallDescription: 'Platform for the dissemination of creative works.',
            alemDoOlharCaptions: [
                "Home page",
            ],
            // projetos - CoconutLinks
            coconutLinksDescription: 'Built with HTML, CSS, React and node\'s gh-pages module, Coconut Links brings together all my important links (LinkedIn, GitHub, X (Twitter) and e-mail) in a minimalist and pleasant design.',
            coconutLinksSmallDescription: 'Linktree-style personal links page.',
            coconutLinksCaptions: [
                'Home page',
            ],
            // projetos - Antônia Fernandes
            antoniaFernandesDescription: "Site for Antônia Fernandes Store, an online store for women's fashion and accessories, developed using the Bagy platform. In addition to the standard editor, I customized a large part of the sections with HTML and CSS, and created the logo and images in Photoshop and Illustrator, ensuring a unique design aligned with the brand's identity.",
            antoniaFernandesSmallDescription: "Online store for women's fashion and accessories.",
            antoniaFernandesCaptions: [
                "Home page",
                "Products page"
            ],
            // projetos - Which Dog Are You?
            whichDogAreYouDescription: 'Final project for the FRAMEWORK VALLEY: REACT course at Codédex. I developed a personality quiz in React that identifies which breed of dog you would be, based on personal preferences. I used React Router, Context API and sessionStorage for navigation and status, as well as an external API to display images of the breeds. The site is responsive, with a user-friendly design and smooth transitions.',
            whichDogAreYouSmallDescription: 'Quiz to find out what breed of dog you are.',
            whichDogAreYouCaptions: [
                'Home page',
                'About page',
            ],
            // footer
            footerIntro: 'Full-stack developer, graphic designer and writer, always willing to face challenges and create innovative solutions.',
            rights: 'All rights reserved.',
            contact: 'Contact',
            menu: [
                'Home',
                'About',
                'Contact',
                'Projects',
            ],

        },
    },
    pt: {
        message: {
            developer: 'Desenvolvedor Full-Stack',
            whoAm: 'quem sou',
            i: 'EU',
            intro: 'Sou um desenvolvedor full-stack, designer gráfico e escritor que está sempre disposto a encarar desafios.',
            // Contatos
            contactsTitle: 'Contatos',
            // Idiomas
            languagesTitle: 'Idiomas',
            portuguese: 'Português',
            english: 'Inglês',
            portugueseText: 'Meu idioma natal, nenhuma dificuldade',
            englishText: 'Eu entendo bem, mas minha conversação ainda pode melhorar',
            // Habilidades
            skillsTitle: 'Habilidades',
            // Educação e Experiência
            educationTitle: 'Educação e Experiência',
            educationFirstText: 'Técnico em Informática para Internet',
            educationSecondText: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
            educationThirdText: 'Fazendo freelances e criando projetos pessoais e acadêmicos',
            // projetos
            tutorialOne: 'Clique em um projeto para saber mais',
            verifyWebsite: 'Verificar Site',
            sourceCode: 'Código Fonte',
            // projetos - MidNight
            midnightDescription: 'Um projeto de ficha online feito para o jogo de RPG de mesa virtual "The Mental World". O projeto utiliza tecnologias como HTML, CSS, JavaScript, MUI, React, Vite e Firebase para seu funcionamento e estilização. A ideia é que o usuário seja capaz de montar e editar sua ficha na plataforma, que será enviada em tempo real para o banco de dados.',
            midnightSmallDescription: 'Plataforma de fichas de RPG de mesa.',
            midnightCaptions: [
                'Página inicial',
                'Página de individual',
                'Página de características',
                'Página de status',
                'Página de skills',
                'Página de anotações',
                'Página de inventário',
                'Página de configurações',
                'Página de login'
            ],
            // projetos - Bunchin
            bunchinDescription: 'Imagine uma plataforma onde as empresas podem gerenciar funcionários, bater ponto e até corrigir eventuais erros de registro. Esse é o Bunchin, um site de ponto digital e gestão empresarial desenvolvido como parte do projeto interdisciplinar do segundo semestre da minha graduação.',
            bunchinSmallDescription: 'Plataforma de ponto digital e gestão empresarial.',
            bunchinCaptions: [
                'Página inicial',
                'Página de login'
            ],
            // projetos - Dicenders
            dicendersDescription: "O projeto Dicenders foi meu Trabalho de Conclusão de Curso na Etec Professora Maria Cristina " +
                "Medeiros, onde cursei Informática para Internet. Ele consiste em uma plataforma que integra recursos " +
                "de tabletop, ou seja, um aplicativo web para jogar RPG em formato virtual, com funcionalidades de uma " +
                "rede social. Foi feito utilizando HTML, CSS, JavaScript e Fabric.js para a plataforma, além de MongoDB, Node.js, " +
                "Express.js, Moongose e Socket.io para o banco de dados e conexão.",
            dicendersSmallDescription: "Tabletop virtual e rede social voltada à RPG.",
            dicendersCaptions: [
                "Landing page",
                "Página de cadastro",
                "Página inicial",
                "Página da rede social",
                "Página de mensagens"
            ],
            // projetos - Além do Olhar
            alemDoOlharDescription: 'Plataforma online oficial que apresenta diversos trabalhos criativos de mulheres empreendedoras envolvidas no projeto “Além do Olhar”. Construída utilizando HTML, CSS, JavaScript e React, além de várias bibliotecas, como Bootstrap, Bootstrap Icons e Reactjs-popup.',
            alemDoOlharSmallDescription: 'Plataforma de divulgação de trabalhos criativos.',
            alemDoOlharCaptions: [
                "Página inicial",
            ],
            // projetos - CoconutLinks
            coconutLinksDescription: 'Construído com HTML, CSS, React e o módulo gh-pages do node, o Coconut Links reúne todos os meus links importantes (LinkedIn, GitHub, X (Twitter) e e-mail) com um design minimalista e agradável.',
            coconutLinksSmallDescription: 'Página de links pessoais estilo Linktree.',
            coconutLinksCaptions: [
                'Página inicial',
            ],
            // projetos - Antônia Fernandes
            antoniaFernandesDescription: "Site da Antônia Fernandes Store, uma loja online de moda feminina e acessórios, desenvolvido " +
                "utilizando a plataforma Bagy. Além do editor padrão, personalizei grande parte das seções com HTML e " +
                "CSS, e criei o logo e as imagens no Photoshop e Illustrator, garantindo um design único e alinhado " +
                "à identidade da marca.",
            antoniaFernandesSmallDescription: 'Loja online de moda feminina e acessórios.',
            antoniaFernandesCaptions: [
                "Página inicial",
                "Página de produtos"
            ],
            // projetos - Which Dog Are You?
            whichDogAreYouDescription: 'Projeto final do curso FRAMEWORK VALLEY: REACT do Codédex. Desenvolvi um quiz de personalidade em React que identifica qual raça de cachorro você seria, com base em preferências pessoais. Utilizei React Router, Context API e sessionStorage para navegação e estado, além de uma API externa para exibir imagens das raças. O site é responsivo, com design amigável e transições suaves.',
            whichDogAreYouSmallDescription: 'Quiz que indica qual seria sua raça de cachorro.',
            whichDogAreYouCaptions: [
                'Página inicial',
                'Página de sobre',
            ],
            // footer
            footerIntro: 'Desenvolvedor full-stack, designer gráfico e escritor, sempre disposto a encarar desafios e criar soluções inovadoras.',
            rights: 'Todos os direitos reservados.',
            contact: 'Contato',
            menu: [
                'Início',
                'Sobre',
                'Contato',
                'Projetos',
            ],

        },
    },
};

const i18n = createI18n({
    locale: navigator.language.startsWith('pt') ? 'pt' : 'en',
    fallbackLocale: 'en',
    messages,
});

export default i18n;