<script setup lang="ts">
import { ref, inject, onMounted } from "vue";
import ProgressBar from "@/components/atoms/ProgressBar.vue";
import ProjectCards from "@/components/molecules/ProjectCards.vue"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { skills } from '@/data/skills'

const theme = inject('theme', ref('light'));

const openSkillLink = (link: string) => {
  if (link) {
    window.open(link, '_blank', 'noopener noreferrer');
  }
};

onMounted(() => {
  AOS.init();
});

</script>

<template>
  <main class="p-0 w-full font-poppins">
    <section class="section-header h-60 flex justify-center items-center flex-col relative max-lg:h-45" id="home">
      <h1 class="mb-0 cursor-pointer font-gavency text-[10rem] font-light z-5 active:text-[9rem] max-lg:text-[17vw]">Portfolio</h1>
      <p class="mt-[-3.9rem] pb-2 text-[1.1rem] font-semibold tracking-[0.61rem] z-5 max-lg:text-[3.78vw] max-lg:tracking-normal max-lg:mt-[-5vw] max-lg:pb-[5vw]">Marcos Lopes | {{ $t('message.developer') }}</p>
    </section>
    <section class="section-content" id="about">
      <article class="dark-bg about section-content__article">
        <div class="image-box">
          <img :src="theme === 'light' ? '/pilgrim.ciano.webp' : '/pilgrim.magenta.webp'" alt="Profile"
            loading="lazy" />
        </div>
        <div class="text-box section-content__text-box" data-aos="fade-up">
          <h1>{{ $t('message.whoAm') }} <span class="highlight">{{ $t('message.i') }}</span>?</h1>
          <p>
            {{ $t('message.intro') }}
          </p>
        </div>
      </article>
      <article class="light-bg infos section-content__article" id="contact">
        <div class="text-box left section-content__text-box" data-aos="fade-up">
          <h1>{{ $t('message.contactsTitle') }}</h1>
          <div
            class="inverted-box contacts"
          >
            <div class="contact-item">
              <i class="bi bi-envelope-paper"></i>
              <a href="mailto:marcos.a.lopes7701@gmail.com" target="_blank"
                rel="noopener noreferrer">marcos.a.lopes7701@gmail.com</a>
            </div>
            <div class="contact-item">
              <i class="bi bi-instagram"></i>
              <a href="https://www.instagram.com/marcos.pilgrim" target="_blank"
                rel="noopener noreferrer">@marcos.pilgrim</a>
            </div>
            <div class="contact-item">
              <i class="bi bi-whatsapp"></i>
              <a href="https://wa.me/5511949273886" target="_blank" rel="noopener noreferrer">+55 (11) 94927-3886</a>
            </div>
            <div class="contact-item">
              <i class="bi bi-linkedin"></i>
              <a href="https://www.linkedin.com/in/marcosalveslopesjunior" target="_blank"
                rel="noopener noreferrer">Marcos Lopes</a>
            </div>
            <div class="contact-item">
              <i class="bi bi-github"></i>
              <a href="https://github.com/MarcosAlves90" target="_blank" rel="noopener noreferrer">MarcosAlves90</a>
            </div>
          </div>
          <h1>{{ $t('message.languagesTitle') }}</h1>
          <div
            class="inverted-box languages"
          >
            <p>{{ $t('message.portuguese') }}</p>
            <ProgressBar :progress="8" />
            <p class="description">{{ $t('message.portugueseText') }}</p>
            <p>{{ $t('message.english') }}</p>
            <ProgressBar :progress="6" />
            <p class="description">{{ $t('message.englishText') }}</p>
          </div>
        </div>
        <div class="text-box right" data-aos="fade-up">
          <h1>{{ $t('message.educationTitle') }}</h1>
          <div
            class="inverted-box education"
          >
            <ul>
              <li>
                <span>2022 - 2023</span>
                <p>{{ "{" + $t('message.educationFirstText') + "}" }}</p>
              </li>
              <li>
                <span>2024 - 2026</span>
                <p>{{ "{" + $t('message.educationSecondText') + "}" }}</p>
              </li>
              <li>
                <span>2024 - ....</span>
                <p>{{ "{" + $t('message.educationThirdText') + "}" }}</p>
              </li>
            </ul>
          </div>
          <h1>{{ $t('message.skillsTitle') }}</h1>
          <div
            class="inverted-box skills"
          >
            <div v-for="skill in skills" :key="skill.name" @click="openSkillLink(skill.link)" class="skill cursor-pointer active:scale-75 transition-transform">
              <i :class="skill.class" class=" text-[var(--color-highlight)] text-5xl"/>
              <span>{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </article>
      <article class="dark-bg projects section-content__article" id="projects">
        <p class="observation">{{ $t('message.tutorialOne') }}</p>
        <ProjectCards />
      </article>
    </section>
  </main>
</template>

<style scoped>
.section-header {
  background: linear-gradient(90deg, var(--color-grid) 2px, transparent 2px),
    linear-gradient(var(--color-grid) 2px, transparent 2px) fixed;
  background-size: 100px 100px;
  animation: moveGrid100px 3s linear infinite;

  h1 {
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
  }

  @media (max-width: 950px) {
    background-size: 70px 70px;
    animation: moveGrid70px 3s linear infinite;

    h1 {
      &:active {
        font-size: 13vw;
      }
    }

  }
}

.section-content {
  article {

    .text-box {

      h1 {
        font-size: 3rem;
        margin: 0;
        font-weight: 600;
      }

      p,
      h1 {
        text-align: justify;
      }

      @media (max-width: 950px) {
        h1 {
          font-size: 1.9rem;
        }
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
          width: 100%;
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
          flex-wrap: wrap;

          p {
            font-weight: 600;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        li span {
          margin-right: 1rem;
          width: 6rem;
        }

        @media (max-width: 1350px) {
          li {
            p {
              width: 100%;
            }
          }
        }

        @media (max-width: 950px) {
          li {
            margin-bottom: 2rem;
          }
        }
      }

      &.skills {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(65px, 2fr));
        justify-content: center;
        align-items: center;

        .skill {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          font-size: 0.9rem;
          width: 100%;

          span {
            font-size: 100%;
            margin-top: 0.5rem;
            font-weight: 600;
            color: var(--color-background);
          }
        }

        @media (max-width: 950px) {
          grid-template-columns: repeat(auto-fill, minmax(50px, 2fr));
          gap: 1rem;

          .skill {
            font-size: 0.75rem;
          }
        }
      }

      &.languages,
      &.contacts {
        width: 22rem;
      }

      &.education,
      &.skills {
        box-sizing: border-box;
        max-width: 50rem;

        @media (max-width: 1350px) {
          max-width: unset;
        }
      }
    }

    &.dark-bg {
      background-color: var(--color-section-background);
      color: #f2d6bd;
      transition: background-color 0.2s ease-in-out;

      &.about {
        .image-box {
          height: 16rem;
          max-width: 21rem;
          width: 100%;
          background-color: var(--color-second-background-secondary);
          display: flex;
          align-items: flex-end;
          border-radius: var(--common-border-radius) var(--common-border-radius) 0 var(--common-border-radius);
          transition: background-color 0.2s ease-in-out;

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
          gap: 2rem;

          h1 {
            text-align: center;
          }

          .text-box {
            gap: 1rem;
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

      &.projects {
        padding: 7rem 2rem;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        gap: 2rem;

        .text-box {
          &.viewer {
            display: flex;
            gap: 4rem;
            justify-content: center;
            align-items: start;
            width: 100%;
            flex-direction: row;
            max-width: 76rem;

            .first-slice {
              width: 100%;
              display: flex;
              flex-direction: column;

              p {
                margin-top: 1rem;
              }

              .buttons-box {
                margin-top: 2rem;
                gap: 1rem;
                display: flex;

                .click-button {
                  background-color: #f2d6bd;
                  outline: none;
                  color: var(--color-highlight);
                  border: none;
                  padding: 0.7rem 1rem;
                  font-size: 1rem;
                  cursor: pointer;
                  border-radius: var(--common-border-radius);
                  width: 100%;
                  font-family: "Poppins", serif;
                  font-weight: 600;

                  &.reversed {
                    background-color: var(--color-highlight);
                    color: #f2d6bd;
                  }

                  &:active {
                    transform: scale(0.9);
                  }
                }
              }
            }

            .mobile-title {
              display: none;
              width: 100%;
              text-align: center;
            }
          }
        }

        .observation {
          opacity: 0.4;
        }

        @media (max-width: 950px) {
          padding: 4rem 2rem;

          .text-box.viewer {
            flex-direction: column;
            gap: 1rem;

            .first-slice {
              order: 3;

            
              h1 {
                display: none;
              }



              p {
                margin: 0;
              }

              .buttons-box {
                margin-top: 1rem;
              }
            }

            .mobile-title {
              display: block;
              order: 1;
            }
          }
        }
      }
    }

    &.light-bg {
      &.infos {
        @media (max-width: 950px) {
          flex-direction: column;
          gap: unset;
          padding: 4rem 2rem;

          h1 {
            text-align: center;
          }

          .text-box {
            width: 100%;

            &.left {
              order: 2;

              h1:first-child {
                order: 1;
              }

              .inverted-box:first-of-type {
                order: 2;
                margin: 0;
              }
            }

            .inverted-box {
              width: 100%;
              max-width: unset;
            }
          }
        }
      }
    }
  }
}

@keyframes backgroundAnimation {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}

@keyframes moveGrid100px {
  0% {
    background-position: 0 0, 0 0;
  }

  100% {
    background-position: 0 100px, 0 100px;
  }
}

@keyframes moveGrid70px {
  0% {
    background-position: 0 0, 0 0;
  }

  100% {
    background-position: 0 70px, 0 70px;
  }
}
</style>