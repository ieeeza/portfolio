"use client";

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div>
          <p>Portfolio</p>
        </div>
        <div className={styles.headerButtons}>
          <button title="topo" type="button">
            INICIO
          </button>
          <button title="about-me" type="button">
            SOBRE MIM
          </button>
          <button title="more-info" type="button">
            SKILLS
          </button>
          <button title="contato" type="button">
            CONTATO
          </button>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.introduction}>
            <h1 className={styles.title}>César Pereira dos Santos Filho</h1>
            <p className={styles.description}>
              Formado em Análise e Desenvolvimento de Sistemas, com experiência
              em desenvolvimento web, especialmente com JavaScript, TypeScript,
              React e Next.js. Estou sempre buscando aprender novas tecnologias
              e aprimorar minhas habilidades.
            </p>
          </div>
          <div className={styles.skills}>
            <h2>Stacks</h2>
            <div>
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                alt="Typescript"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                alt="react"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"
                alt="Angular"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                alt="Next.js"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
                alt="node.js"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
                alt="csharp"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                alt="c"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                alt="java"
                width={50}
                height={50}
                className={styles.icon}
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg"
                alt="docker"
                width={50}
                height={50}
                className={styles.icon}
              />
            </div>
          </div>
          <div className={styles.projects}>
            <p className={styles.projectsTitle}>Meus Projetos:</p>
            <div>
              <p>Calculadora simples</p>
              <p>
                Esse foi um dos meus primeiros projetos como estudante nas
                linguagens de frontend. Usando JavaScript, HTML e CSS, essa
                calculadora simples permite realizar operações básicas como
                adição, subtração, multiplicação e divisão.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.open("https://github.com/ieeeza/javascript-calculator")
                }
              >
                Ir para repositório
              </button>
            </div>
            <div>
              <p>Micro progrmas em C</p>
              <p>
                Um repositório com diversos micro programas desenvolvidos em C,
                abrangendo desde conceitos básicos até estruturas de dados e
                algoritmos mais complexos. Esses programas foram criados para
                praticar e demonstrar o uso da linguagem C em diferentes
                contextos.
              </p>
              <button
                type="button"
                onClick={() => window.open("https://github.com/ieeeza/C")}
              >
                Ir para repositório
              </button>
            </div>
            <div>
              <p>API básica em java</p>
              <p>
                Uma API simples desenvolvida em Java, utilizando Spring Boot,
                que permite realizar operações CRUD (Create, Read, Update,
                Delete) em um banco de dados. Este projeto foi criado para
                praticar o desenvolvimento de APIs RESTful e a integração com
                bancos de dados.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.open("https://github.com/ieeeza/springboot-api")
                }
              >
                Ir para repositório
              </button>
            </div>
            <div>
              <p>Repositório de linguagens</p>
              <p>
                Repositório que contém diversos projetos desenvolvidos em
                diferentes linguagens de programação, como JavaScript,
                TypeScript, Java, C# e Python. Cada projeto é um exemplo prático
                de como utilizar essas linguagens em diferentes contextos e com
                diferentes tecnologias.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://github.com/ieeeza/Tutorials-Learning-Programming-Languages"
                  )
                }
              >
                Ir para repositório
              </button>
            </div>
            <div>
              <p>WebChat</p>
              <p>
                Um projeto de chat web desenvolvido com React e Node.js,
                permitindo comunicação em tempo real entre os usuários. Este
                projeto foi criado para praticar o uso de WebSockets e a
                construção de aplicações em tempo real.
              </p>
              <button
                type="button"
                onClick={() => window.open("https://github.com/ieeeza/WebChat")}
              >
                Ir para repositório
              </button>
            </div>
            <div>
              <p>Loja Online - Teste junior da Zoppy</p>
              <p>
                Um projeto de loja online desenvolvido como parte de um teste
                para a Zoppy. Este projeto utiliza Angular, Nest.js e postgre ,
                e implementa funcionalidades básicas de uma loja online, como
                listagem de produtos, carrinho de compras e checkout.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://github.com/ieeeza/Zoppy-fullstack-jr-test"
                  )
                }
              >
                Ir para repositório
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          Desenvolvido por César Pereira dos Santos Filho - 2025. Todos os
          direitos reservados.
        </p>
      </footer>
    </div>
  );
}
