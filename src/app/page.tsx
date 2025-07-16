"use client";

import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  function handleClickWhatsapp() {
    const mensagem = encodeURIComponent(
      "Olá, vim pelo seu portfólio! Podemos conversar?"
    );
    const url = `https://wa.me/5531988189294?text=${mensagem}`;
    window.open(url, "_blank");
  }

  function handleClickEmail() {
    const email = "cesardermer1@gmail.com";
    const subject = "Contato pelo portfólio";
    const body = "Olá, vim pelo seu portfólio! Podemos conversar?";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  function handleClickLinkedin() {
    const url = "https://www.linkedin.com/in/cesarpereira01/";
    window.open(url, "_blank");
  }

  function handleClickScroll(id: string) {
    const elementId = document.getElementById(id);
    if (elementId) {
      elementId.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div>
          <p>César Pereira dos Santos Filho</p>
        </div>
        <div className={styles.headerButtons}>
          <button
            title="topo"
            type="button"
            onClick={() => handleClickScroll("topo")}
          >
            INICIO
          </button>
          <button
            title="projetos"
            type="button"
            onClick={() => handleClickScroll("projetos")}
          >
            PROJETOS
          </button>
          <button
            title="contato"
            type="button"
            onClick={() => handleClickScroll("contato")}
          >
            CONTATO
          </button>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.landing} id="topo">
          <div className={styles.introduction}>
            <Image
              src="/foto.jpeg"
              alt="César Pereira dos Santos Filho"
              width={400}
              height={200}
              className={styles.profileImage}
            ></Image>
            <p className={styles.description}>
              Desenvolvedor Web com formação em Análise e Desenvolvimento de
              Sistemas, atuando principalmente no ecossistema JavaScript. Tenho
              experiência no desenvolvimento de aplicações modernas utilizando
              tecnologias como TypeScript, React e Next.js. Sou movido por
              desafios e estou constantemente em busca de aprimoramento,
              aprendendo novas ferramentas, práticas e arquiteturas para criar
              soluções eficientes, escaláveis e com ótima experiência para o
              usuário.
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
        </div>
        <div className={styles.projects} id="projetos">
          <p className={styles.projectsTitle}>Meus Projetos:</p>
          <div className={styles.projects_cards}>
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
        <div className={styles.contato} id="contato">
          <h2>Contato</h2>
          <p>
            Se você deseja entrar em contato comigo, sinta-se à vontade para me
            enviar um e-mail ou uma mensagem direta nas redes sociais.
          </p>
          <div className={styles.contactLinksContainer}>
            <div className={styles.contactLinks}>
              <Image
                src={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                }
                width={30}
                height={30}
                alt="LinkedIn"
                className={styles.icon2}
              ></Image>
              <button type="button" onClick={handleClickLinkedin}>
                LINKEDIN
              </button>
            </div>
            <div className={styles.contactLinks}>
              <Image
                src={"/whatsapp.png"}
                width={30}
                height={30}
                alt="Whatsapp"
                className={styles.icon2}
              ></Image>
              <button type="button" onClick={handleClickWhatsapp}>
                WHATSAPP
              </button>
            </div>
            <div className={styles.contactLinks}>
              <Image
                src={"/mail.png"}
                width={30}
                height={30}
                alt="Email"
                className={styles.icon2}
              ></Image>
              <button type="button" onClick={handleClickEmail}>
                EMAIL
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>:)</p>
      </footer>
    </div>
  );
}
