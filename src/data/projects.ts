import { Project } from './types';

const projectsBrute: Project[] = [
    {
        title: 'Mediari Consultoria',
        description: 'Landing page da Mediari Consultoria desenvolvida com Nuxt.',
        link: 'https://mediariconsultoria.com.br',
        imageSrc: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1755994599/mediari_zlzf1n.png',
        imageAlt: 'Screenshot da landing page da Mediari Consultoria',
        skills: ['Nuxt', 'Tailwindcss', 'TypeScript'],
        year: 2025,
        company: 'Mediari Consultoria'
    },
    {
        title: 'MidNight',
        description: 'Plataforma de fichas de RPG de mesa.',
        link: 'https://tmwcse.vercel.app',
        imageSrc: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1755998111/midnight_mbwhbj.png',
        imageAlt: 'Screenshot da plataforma de fichas de RPG de mesa.',
        skills: ['React', 'Styled Components', 'JavaScript', 'Firebase'],
        year: 2024,
    },
    {
        title: 'Diário de Mariupol',
        description: 'Landing page para o livro \"Diário de Mariupol\"',
        link: 'https://diario-de-mariupol.vercel.app',
        imageSrc: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1755998702/diario-de-mariupol_jal1g7.png',
        imageAlt: 'Screenshot da landing page para o livro \'Diário de Mariupol\'',
        skills: ['React', 'Tailwindcss', 'TypeScript'],
        year: 2025,
    },
    {
        title: 'Antônia Fernandes',
        description: 'Loja online de moda feminina e acessórios.',
        link: 'https://www.antoniafernandestore.com.br',
        imageSrc: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1756361385/antonia_fernandes_joykyh.png',
        imageAlt: 'Screenshot da loja online de moda feminina e acessórios Antônia Fernandes',
        skills: ['HTML', 'CSS', 'Bagy'],
        year: 2024,
        company: 'Antônia Fernandes Store',
    },
    {
        title: 'Coconut Links',
        description: 'Página de links pessoais estilo Linktree.',
        link: 'https://marcosalves90.github.io/coconut_links',
        imageSrc: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1756407127/coconut_links_jpd4u7.png',
        imageAlt: 'Screenshot da página de links pessoais estilo Linktree.',
        skills: ['React', 'CSS', 'JavaScript'],
        year: 2024,
    },
    {
        title: 'Bunchin',
        description: 'Plataforma de ponto digital e gestão empresarial.',
        link: 'https://bunchin-project.onrender.com',
        imageSrc: 'https://res.cloudinary.com/dgsywmzb2/image/upload/v1756407486/bunchin_tskqeo.png',
        imageAlt: 'Screenshot da plataforma de ponto digital e gestão empresarial Bunchin.',
        skills: ['React', 'Tailwindcss', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Docker'],
        year: 2024,
    }
];

export const projectsSorted = [...projectsBrute].sort((a, b) => a.year - b.year);
export const projectsReverseSorted = [...projectsBrute].sort((a, b) => b.year - a.year);
export const projectsMainPage = [...projectsReverseSorted].filter(project => ['Mediari Consultoria', 'Diário de Mariupol', 'Antônia Fernandes', 'MidNight'].includes(project.title));