<script setup lang="ts">
import {ref, inject} from "vue";
import ProgressBar from "@/components/ProgressBar.vue";

const theme = inject('theme', ref('light'));
const paginaAberta = ref<boolean>(false);

const abrirFecharPagina = (): void => {
  paginaAberta.value = !paginaAberta.value;
};

</script>

<template>
  <main>
    <section class="section-header">
      <h1>Portfolio</h1>
      <p>Marcos Lopes | Desenvolvedor Full-Stack</p>
      <button @click="abrirFecharPagina">{{paginaAberta ? "Fechar" : "Abrir"}}</button>
    </section>
    <section class="section-content">
      <article class="dark-bg about">
        <div class="image-box">
          <img :src="theme === 'light' ? '/pilgrim.ciano.webp' : '/pilgrim.magenta.webp'" alt="Profile" loading="lazy" />
        </div>
        <div class="text-box">
          <h1>quem sou <span class="highlight">EU</span>?</h1>
          <p>
            Sou um desenvolvedor full-stack, designer gráfico e escritor que está sempre disposto a encarar desafios.
          </p>
        </div>
      </article>
      <article class="light-bg">
        <div class="text-box">
          <h1>Contatos</h1>
          <div class="inverted-box contacts">
            <div class="contact-item">
              <i class="bi bi-envelope-paper"></i>
              <a href="mailto:marcos.a.lopes7701@gmail.com" target="_blank" rel="noopener noreferrer">marcos.a.lopes7701@gmail.com</a>
            </div>
            <div class="contact-item">
              <i class="bi bi-instagram"></i>
              <a href="https://www.instagram.com/marcos.pilgrim" target="_blank" rel="noopener noreferrer">@marcos.pilgrim</a>
            </div>
            <div class="contact-item">
              <i class="bi bi-whatsapp"></i>
              <a href="https://wa.me/5511949273886" target="_blank" rel="noopener noreferrer">+55 (11) 94927-3886</a>
            </div>
          </div>
          <h1>Idiomas</h1>
          <div class="inverted-box languages">
            <p>Português</p>
            <ProgressBar :progress="8" />
            <p class="description">Meu idioma natal, nenhuma dificuldade</p>
            <p>Inglês</p>
            <ProgressBar :progress="5" />
            <p class="description">Eu entendo bem, mas minha conversação ainda pode melhorar</p>
          </div>
        </div>
        <div class="text-box">
          <h1>Educação / Experiência</h1>
          <div class="inverted-box education">
            <ul>
              <li><span>2022 - 2023</span> Técnico em Informática para Internet</li>
              <li><span>2024 - 2026</span> Tecnólogo em Desenvolvimento de Software Multiplataforma</li>
              <li><span>2024 - ....</span> Fazendo freelances e criando projetos pessoais e acadêmicos</li>
            </ul>
          </div>
          <h1>Habilidades</h1>
          <div class="inverted-box skills">
            {[
            { icon: <FaHtml5 />, name: 'HTML5' },
            { icon: <FaCss3Alt />, name: 'CSS3' },
            { icon: <FaJs />, name: 'JavaScript' },
            { icon: <FaReact />, name: 'React' },
            { icon: <FaNodeJs />, name: 'Node.js' },
            { icon: <FaPhp />, name: 'PHP' },
            { icon: <FaJava />, name: 'Java' },
            { icon: <SiC />, name: 'C' },
            { icon: <FaPython />, name: 'Python' },
            { icon: <SiSass />, name: 'Sass' },
            { icon: <SiBootstrap />, name: 'Bootstrap' },
            { icon: <FaGitAlt />, name: 'Git' },
            { icon: <BiLogoVisualStudio />, name: 'VSCode' },
            { icon: <SiAdobephotoshop />, name: 'Photoshop' },
            { icon: <SiAdobeillustrator />, name: 'Illustrator' },
            { icon: <SiFigma />, name: 'Figma' },
            { icon: <SiVuedotjs />, name: 'Vue.js' },
            { icon: <SiVite />, name: 'Vite' },
            ].map((skill, index) => (
            <div class="skill" key={index}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  </main>
</template>

<style scoped>

main {
  padding: 8rem 0 0 0;
  width: 100%;
  font-family: 'Poppins', sans-serif;
}

.section-header {
  height: calc(100vh - 8rem);
  background: linear-gradient(90deg, var(--color-grid) 2px, transparent 2px),
  linear-gradient(var(--color-grid) 2px, transparent 2px) fixed;
  background-size: 100px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: -8rem;
    font-size: 11rem;
    font-weight: 300;
    margin-bottom: 0;
    cursor: pointer;
    font-family: "Gavency", serif;
    transition: color 0.2s ease-in-out, font-size 0.1s ease-in-out;
    @supports (background-clip: text) or (-webkit-background-clip: text) {
      background-image: var(--header-title-animation);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      animation: backgroundAnimation 10s ease infinite;
    }

    &:hover {
      @supports (background-clip: text) or (-webkit-background-clip: text) {
        background-position: center;
        color: transparent;
      }
    }
    &:active {
      font-size: 10rem;
    }
  }
  p {
    padding-bottom: 2rem;
    font-size: 1.3rem;
    margin-top: -3.9rem;
    font-weight: 600;
    letter-spacing: 0.61rem;
  }
  button {
    background-color: var(--color-text);
    color: var(--color-background);
    border: none;
    padding: 0.5rem 7rem;
    font-size: 1.15rem;
    cursor: pointer;
    margin-top: 2rem;
    border-radius: var(--common-border-radius);
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;

    &:hover {
      background-color: var(--color-highlight);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: 950px) {
    background-size: 70px 70px;
    --common-font-size: 3.78vw;
    h1 {
      font-size: 17vw;
      &:active {
        font-size: 13vw;
      }
    }
    p {
      letter-spacing: 0;
      margin-top: -5vw;
      font-size: var(--common-font-size);
      padding-bottom: 5vw;
    }
    button {
      margin-top: 0;
      font-size: var(--common-font-size);
      padding: 0.5rem 22vw;
    }
  }
}

.section-content {
  article {
    display: flex;
    gap: 4rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 7rem 2rem;
    box-sizing: border-box;

    .text-box {
      box-sizing: border-box;

      h1 {
        font-size: 3rem;
        margin: 0;
        font-weight: 600;
      }

      p,
      h1 {
        text-align: justify;
      }

    }

    .inverted-box {
      background-color: var(--color-text);
      color: var(--color-background);
      padding: 1.5rem;
      margin-bottom: 3rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 1rem;
      border-radius: var(--common-border-radius);

      &.contacts {
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;

          a {
            color: var(--color-background);
            text-decoration: none;
            font-weight: 600;
            word-break: break-word;
            overflow-wrap: break-word;
            text-align: start;

            &:hover {
              text-decoration: underline;
            }

            &:active {
              transform: scale(0.9);
            }
          }

          .bi {
            font-size: 1.5rem;
            color: var(--color-background);
          }
        }
      }

      &.languages {
        p {
          margin: 0;
          font-weight: 600;
        }

        .description {
          margin-bottom: 1rem;
          font-weight: normal;
          text-align: start;

          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      &.education {
        text-align: start;

        ul {
          list-style-type: none;
          padding: 0;
        }

        li::before {
          content: "";
          background-color: var(--color-highlight);
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          margin-right: 0.6rem;
          border-radius: calc(var(--common-border-radius) / 3);
        }

        li {
          margin-bottom: 3rem;
          display: flex;
          align-items: center;
          justify-content: start;
          font-weight: 600;

          &:last-child {
            margin-bottom: 0;
          }
        }

        li span {
          margin-right: 1rem;
          width: 6rem;
        }
      }

      &.skills {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
        flex-direction: row;

        .skill {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 0.9rem;
          width: 3.8rem;

          svg {
            cursor: pointer;
            color: var(--color-highlight);
            width: 50px;
            height: 50px;

            &:active {
              transform: scale(0.75);
            }
          }

          span {
            margin-top: 0.5rem;
            font-weight: 600;
            color: var(--color-background);
          }

          @media (max-width: 1050px) {
            width: 3rem;
            font-size: 0.7rem;
          }
        }

        @media (max-width: 1050px) {
          gap: 1rem;
        }
      }

      &.languages, &.contacts {
        width: 22rem;
      }

      &.education,
      &.skills {
        box-sizing: border-box;
        max-width: 50rem;
      }
    }

    &.dark-bg {
      background-color: var(--color-section-background);
      color: #f2d6bd;

      &.about {
        .image-box {
          height: 16rem;
          max-width: 21rem;
          width: 100%;
          background-color: var(--color-second-background-secondary);
          display: flex;
          align-items: flex-end;
          border-radius: var(--common-border-radius) var(--common-border-radius) 0 var(--common-border-radius);

          img {
            width: 100%;
            height: auto;
            transform-origin: bottom;
            cursor: pointer;
            transition: transform 0.1s ease-in-out;

            &:active {
              transform: scale(0.9);
            }
          }
        }

        .text-box p {
          max-width: 30rem;
        }

        .text-box h1 {
          .highlight {
            font-weight: bolder;
          }
        }

        @media (max-width: 950px) {
          flex-direction: column;
          padding: 6rem 2rem 4rem 2rem;
          .text-box {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .text-box p {
            margin-bottom: 0;
            text-align: justify;
          }
        }
      }
    }
  }
}

@keyframes backgroundAnimation {
  0% { background-position: 0 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
}
</style>