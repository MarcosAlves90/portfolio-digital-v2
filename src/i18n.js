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
            midnightSmallDescription: 'Tabletop RPG character sheet platform.',
            // projetos - Bunchin
            bunchinSmallDescription: 'Digital time clock and business management platform.',
            // projetos - Dicenders
            dicendersSmallDescription: "Virtual tabletop and social network focused on RPG.",
            // projetos - Além do Olhar
            alemDoOlharSmallDescription: 'Platform for the dissemination of creative works.',
            // projetos - CoconutLinks
            coconutLinksSmallDescription: 'Linktree-style personal links page.',
            // projetos - Antônia Fernandes
            antoniaFernandesSmallDescription: "Online store for women's fashion and accessories.",
            // projetos - Which Dog Are You?
            whichDogAreYouSmallDescription: 'Quiz to find out what breed of dog you are.',
            // projetos - Mediari Consultoria
            mediariConsultoriaSmallDescription: 'Mediari Consultoria landing page developed with Nuxt.',
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
            dicendersSmallDescription: "Tabletop virtual e rede social voltada à RPG.",
            // projetos - Além do Olhar
            alemDoOlharSmallDescription: 'Plataforma de divulgação de trabalhos criativos.',
            // projetos - CoconutLinks
            coconutLinksSmallDescription: 'Página de links pessoais estilo Linktree.',
            // projetos - Antônia Fernandes
            antoniaFernandesSmallDescription: 'Loja online de moda feminina e acessórios.',
            // projetos - Which Dog Are You?
            whichDogAreYouSmallDescription: 'Quiz que indica qual seria sua raça de cachorro.',
            // projetos - Mediari Consultoria
            mediariConsultoriaSmallDescription: 'Landing page da Mediari Consultoria desenvolvida com Nuxt.',
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