"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${basePath}${path}`;

const audiences = [
  {
    number: "01",
    title: "Atleta",
    label: "Mostre seu jogo",
    text: "Transforme trajetória, vídeos e dados em um perfil que trabalha pela sua próxima oportunidade.",
  },
  {
    number: "02",
    title: "Clube",
    label: "Descubra talentos",
    text: "Encontre atletas com filtros que tornam a captação mais rápida, organizada e objetiva.",
  },
  {
    number: "03",
    title: "Empresário",
    label: "Amplie sua rede",
    text: "Acompanhe talentos, centralize contatos e abra novas possibilidades de negociação.",
  },
  {
    number: "04",
    title: "Profissional",
    label: "Faça parte do jogo",
    text: "Mostre sua experiência e conecte-se a atletas, clubes e projetos dentro do futebol.",
  },
];

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    text: "Escolha seu perfil e entre em uma rede feita para quem vive o futebol.",
  },
  {
    number: "02",
    title: "Conte sua trajetória",
    text: "Adicione dados, histórico, vídeos e tudo o que ajuda a mostrar seu potencial.",
  },
  {
    number: "03",
    title: "Entre no radar",
    text: "Apareça em buscas, descubra peneiras e encontre perfis que fazem sentido.",
  },
  {
    number: "04",
    title: "Crie conexões",
    text: "Converse diretamente e transforme visibilidade em oportunidade real.",
  },
];

const faqs = [
  {
    question: "O que é a Scoutfy?",
    answer:
      "A Scoutfy é uma plataforma de conexão esportiva. Ela ajuda atletas a ganharem visibilidade e facilita o trabalho de clubes, empresários, olheiros e outros profissionais do futebol.",
  },
  {
    question: "Quem pode criar uma conta?",
    answer:
      "Atletas, clubes, empresários, técnicos, scouts e outros profissionais do futebol podem se cadastrar e acessar recursos específicos para a sua jornada.",
  },
  {
    question: "Um atleta da base pode usar a plataforma?",
    answer:
      "Sim. A Scoutfy foi pensada especialmente para dar mais contexto e visibilidade a atletas em formação. Menores de idade devem realizar o cadastro com acompanhamento de um responsável.",
  },
  {
    question: "Como clubes e profissionais encontram atletas?",
    answer:
      "A busca inteligente permite filtrar perfis por posição, idade, localização, histórico e outros critérios, com acesso rápido a vídeos e informações relevantes.",
  },
  {
    question: "A Scoutfy também divulga peneiras?",
    answer:
      "Sim. A plataforma reúne eventos e peneiras para aproximar atletas de ambientes de avaliação e facilitar a descoberta de novas oportunidades.",
  },
  {
    question: "É possível conversar diretamente pela plataforma?",
    answer:
      "Sim. O contato centralizado aproxima os diferentes perfis da rede e ajuda cada conversa a avançar com mais clareza e agilidade.",
  },
];

const professionalPersonas = [
  {
    label: "Clubes",
    benefits: [
      ["⌕", "Scouting com foco", "Use filtros objetivos para reduzir ruído e chegar a perfis relevantes."],
      ["◎", "Perfis com contexto", "Avalie trajetória, vídeos e informações importantes antes do primeiro contato."],
      ["↗", "Captação mais ágil", "Organize sua descoberta e avance nas oportunidades com mais clareza."],
    ],
  },
  {
    label: "Empresários",
    benefits: [
      ["◎", "Rede organizada", "Acompanhe talentos e centralize contatos em um só ambiente."],
      ["⌕", "Novos perfis", "Descubra atletas alinhados ao seu trabalho e à sua estratégia."],
      ["↗", "Negociações que avançam", "Crie conexões com mais agilidade, contexto e proximidade."],
    ],
  },
  {
    label: "Profissionais",
    benefits: [
      ["⌕", "Visão de campo", "Encontre perfis e oportunidades que combinam com sua experiência."],
      ["◎", "Conexões qualificadas", "Aproxime-se de atletas, clubes e projetos dentro do futebol."],
      ["↗", "Sua trajetória em movimento", "Mostre seu trabalho e abra espaço para a próxima oportunidade."],
    ],
  },
];

function PersonaTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePersona = professionalPersonas[activeIndex];

  return (
    <>
      <div className="persona-tabs" aria-label="Públicos profissionais" role="tablist">
        {professionalPersonas.map((persona, index) => (
          <button
            type="button"
            key={persona.label}
            className={index === activeIndex ? "is-active" : ""}
            role="tab"
            aria-selected={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            {persona.label}
          </button>
        ))}
      </div>
      <div className="pro-benefits">
        {activePersona.benefits.map(([icon, title, text]) => (
          <article key={title}>
            <span aria-hidden="true">{icon}</span>
            <div><b>{title}</b><p>{text}</p></div>
          </article>
        ))}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Scoutfy — início">
            <img className="brand-logo" src={asset("/logo-scoutfy.svg")} alt="Scoutfy" />
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#publicos">Para quem é</a>
            <a href="#recursos">Recursos</a>
            <a href="#peneiras">Peneiras</a>
            <a href="#como-funciona">Como funciona</a>
          </nav>

          <div className="header-actions">
            <a className="login-link" href="https://scoutfy.com.br/Account/Login">
              Entrar
            </a>
            <a className="button button-primary button-small" href="https://scoutfy.com.br/Account/Register">
              Criar conta <span aria-hidden="true">↗</span>
            </a>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Abrir menu"><span /><span /></summary>
            <nav aria-label="Navegação móvel">
              <a href="#publicos">Para quem é</a>
              <a href="#recursos">Recursos</a>
              <a href="#peneiras">Peneiras</a>
              <a href="#como-funciona">Como funciona</a>
              <a href="https://scoutfy.com.br/Account/Login">Entrar</a>
              <a className="button button-primary" href="https://scoutfy.com.br/Account/Register">Criar conta</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-card">
          <img
            className="hero-image"
            src={asset("/images/scoutfy-hero.png")}
            alt="Jovem atleta em um campo de futebol simples após o treino"
          />
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-radar" aria-hidden="true">
            <span className="radar-ring radar-ring-one" />
            <span className="radar-ring radar-ring-two" />
            <span className="radar-dot" />
          </div>

          <div className="hero-content">
            <p className="eyebrow"><span /> O futebol começa onde você joga</p>
            <h1>Seu talento merece ser <em>visto.</em></h1>
            <p className="hero-copy">
              Crie seu perfil, conte sua trajetória e conecte seu futebol a quem pode abrir o próximo caminho.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="https://scoutfy.com.br/Account/Register">
                Criar meu perfil <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#recursos">
                Conhecer a plataforma
              </a>
            </div>
            <p className="hero-note">
              <span className="pulse-dot" /> Perfil · vídeos · peneiras · conexões
            </p>
          </div>

          <div className="hero-profile-card">
            <div className="avatar-token">12</div>
            <div>
              <small>Seu perfil em campo</small>
              <strong>História, jogo e objetivos</strong>
            </div>
            <div className="profile-progress"><span /></div>
            <p><span>Perfil em construção</span><b>Pronto para evoluir</b></p>
          </div>

          <div className="hero-index" aria-hidden="true">SCOUTFY / 001</div>
        </div>
      </section>

      <section className="audiences shell section" id="publicos">
        <div className="section-intro section-intro-row">
          <div>
            <p className="eyebrow"><span /> Um campo. Quatro jornadas.</p>
            <h2>Encontre seu lugar na <em>Scoutfy.</em></h2>
          </div>
          <p>
            Uma rede para quem quer ser descoberto e para quem trabalha todos os dias descobrindo, desenvolvendo e conectando talentos.
          </p>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <div className="audience-top">
                <span>{audience.number}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
              <small>{audience.label}</small>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
              <span className="card-line" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="features section" id="recursos">
        <div className="shell">
          <div className="section-intro section-intro-row">
            <div>
              <p className="eyebrow"><span /> Recursos + benefícios</p>
              <h2>Uma plataforma.<br /><em>Todo o campo.</em></h2>
            </div>
            <p>
              Tudo o que move sua jornada, reunido em um fluxo simples: apresentação, descoberta, conversa e oportunidade.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card feature-main">
              <div className="feature-copy">
                <p className="card-kicker">01 / Identidade</p>
                <h3>Um perfil que joga por você.</h3>
                <p>
                  Reúna trajetória, posição, dados físicos, vídeos e melhores momentos em uma apresentação profissional, pronta para ser encontrada.
                </p>
                <div className="chip-row"><span>Histórico</span><span>Vídeos</span><span>Posição</span></div>
              </div>
              <div className="profile-mockup" aria-label="Exemplo abstrato de perfil de atleta">
                <div className="mockup-head"><span className="mockup-avatar">A</span><span><b>Seu nome em campo</b><small>Atleta · Base</small></span><i>●</i></div>
                <div className="mockup-photo"><span>PLAY</span></div>
                <div className="mockup-data"><span><small>POSIÇÃO</small><b>Seu jogo</b></span><span><small>HISTÓRICO</small><b>Sua história</b></span></div>
              </div>
            </article>

            <article className="feature-card search-card">
              <p className="card-kicker">02 / Descoberta</p>
              <h3>Busca inteligente</h3>
              <p>Filtros por idade, posição, localização e contexto esportivo para chegar a perfis que fazem sentido.</p>
              <div className="search-visual" aria-hidden="true">
                <span>Buscar por posição</span><b>⌕</b>
              </div>
            </article>

            <article className="feature-card contact-card">
              <p className="card-kicker">03 / Conexão</p>
              <h3>Contato direto</h3>
              <p>Conversas centralizadas entre atletas, clubes e profissionais para cada oportunidade avançar.</p>
              <div className="message-visual" aria-hidden="true"><span>Uma nova conexão</span><i>↗</i></div>
            </article>

            <article className="feature-card trial-card">
              <p className="card-kicker">04 / Oportunidade</p>
              <h3>Peneiras no radar</h3>
              <p>Descubra avaliações, entenda os detalhes e encontre caminhos reais para dar o próximo passo.</p>
              <div className="mini-radar" aria-hidden="true"><span /><i /></div>
            </article>

            <article className="feature-card network-card">
              <p className="card-kicker">05 / Rede</p>
              <h3>O futebol mais perto.</h3>
              <p>Atletas, clubes, empresários e profissionais em um ecossistema que valoriza contexto e aproxima objetivos.</p>
              <div className="network-visual" aria-hidden="true"><span>A</span><span>C</span><span>E</span><span>P</span></div>
            </article>
          </div>
        </div>
      </section>

      <section className="spotlight section shell athletes-spotlight">
        <div className="spotlight-media portrait-media">
          <img src={asset("/images/scoutfy-athletes.png")} alt="Pai ajudando o filho com a chuteira após o treino" />
          <span className="image-label">Base · trajetória · futuro</span>
        </div>
        <div className="spotlight-content">
          <p className="eyebrow"><span /> Para atletas e famílias</p>
          <h2>Seu caminho não começa no estádio. Começa sendo <em>visto.</em></h2>
          <p className="lead">
            A Scoutfy ajuda você a apresentar quem é, onde joga e aonde quer chegar — com mais contexto para quem avalia e mais clareza para quem acompanha sua jornada.
          </p>
          <ul className="benefit-list">
            <li><span>01</span><div><b>Mostre mais do que um lance</b><p>Construa um perfil com história, dados e vídeos que revelam sua evolução.</p></div></li>
            <li><span>02</span><div><b>Apareça nas buscas certas</b><p>Seja encontrado por posição, idade, local e outros critérios objetivos.</p></div></li>
            <li><span>03</span><div><b>Descubra o próximo passo</b><p>Acompanhe peneiras e conecte-se a pessoas que vivem o futebol.</p></div></li>
          </ul>
          <a className="text-link" href="https://scoutfy.com.br/Account/Register">Criar meu perfil de atleta <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="pro-section section">
        <div className="shell pro-layout">
          <div className="spotlight-content">
            <p className="eyebrow"><span /> Para quem constrói o jogo</p>
            <h2><em>Decisões</em> mais rápidas. Contexto mais completo.</h2>
            <p className="lead">
              Scoutfy organiza a descoberta de talentos e aproxima quem observa, orienta, negocia e desenvolve o futebol.
            </p>
            <PersonaTabs />
            <a className="text-link" href="https://scoutfy.com.br/Account/Register">Criar perfil profissional <span aria-hidden="true">↗</span></a>
          </div>
          <div className="spotlight-media landscape-media">
            <img src={asset("/images/scoutfy-professionals.png")} alt="Profissionais analisando atletas em um campo de treinamento" />
            <div className="scout-overlay">
              <span className="pulse-dot" />
              <div><small>Visão de campo</small><b>Talento com contexto</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trials section shell" id="peneiras">
        <div className="trials-card">
          <img src={asset("/images/scoutfy-trials.png")} alt="Jovens atletas participando de uma avaliação em campo simples" />
          <div className="trials-grid" aria-hidden="true" />
          <div className="trials-content">
            <p className="eyebrow"><span /> Peneiras Scoutfy</p>
            <h2>Uma peneira pode ser o próximo <em>capítulo.</em></h2>
            <p>
              Encontre avaliações, veja informações importantes e prepare-se para oportunidades que combinam com seu momento no futebol.
            </p>
            <div className="trial-points">
              <span>Oportunidades em um só lugar</span>
              <span>Informações para decidir melhor</span>
              <span>Seu perfil pronto para ser avaliado</span>
            </div>
            <div className="button-row">
              <a className="button button-primary" href="https://scoutfy.com.br/peneiras">Encontrar peneiras <span aria-hidden="true">↗</span></a>
              <a className="button button-glass" href="https://scoutfy.com.br/Account/Register">Cadastrar atleta</a>
            </div>
          </div>
          <span className="trials-index" aria-hidden="true">OPORTUNIDADES / 360º</span>
        </div>
      </section>

      <section className="journey section" id="como-funciona">
        <div className="shell">
          <div className="section-intro centered-intro">
            <p className="eyebrow"><span /> Como funciona</p>
            <h2>Do primeiro cadastro à próxima <em>conexão.</em></h2>
            <p>Uma jornada simples para colocar seu talento, sua busca ou sua experiência em movimento.</p>
          </div>
          <ol className="journey-list">
            {steps.map((step) => (
              <li key={step.number}>
                <div className="step-marker"><span>{step.number}</span></div>
                <small>Passo {step.number}</small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta-section section shell">
        <div className="cta-card">
          <div className="cta-media">
            <img src={asset("/images/imagem-cta.png")} alt="Jovem atleta em um campo de futebol" />
          </div>
          <div className="cta-content">
            <p className="eyebrow"><span /> Entre em campo</p>
            <h2>Seu próximo passo começa com um <em>perfil.</em></h2>
            <p>Faça parte da rede que conecta talento, experiência e oportunidade dentro do futebol.</p>
            <a className="button button-dark" href="https://scoutfy.com.br/Account/Register">Criar minha conta agora <span aria-hidden="true">↗</span></a>
            <span className="cta-caption">ATLETAS · CLUBES · EMPRESÁRIOS · PROFISSIONAIS</span>
          </div>
        </div>
      </section>

      <section className="faq section shell" id="faq">
        <div className="faq-intro">
          <p className="eyebrow"><span /> FAQ</p>
          <h2>Dúvidas sobre a <em>Scoutfy.</em></h2>
          <p>Respostas diretas para começar com confiança.</p>
          <a className="text-link" href="mailto:contato@scoutfy.com.br">Ainda tem dúvidas? Fale com a gente <span aria-hidden="true">↗</span></a>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true">+</i></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-main">
          <div className="footer-brand">
            <a className="brand" href="#top"><img className="brand-logo" src={asset("/logo-scoutfy.svg")} alt="Scoutfy" /></a>
            <p>Onde o talento encontra contexto, conexão e oportunidade real.</p>
          </div>
          <div className="footer-links">
            <div><h3>Plataforma</h3><a href="https://scoutfy.com.br/atletas">Encontrar atletas</a><a href="https://scoutfy.com.br/clubes">Encontrar clubes</a><a href="https://scoutfy.com.br/peneiras">Encontrar peneiras</a></div>
            <div><h3>Scoutfy</h3><a href="https://scoutfy.com.br/baixar-aplicativo">Baixar aplicativo</a><a href="https://scoutfy.com.br/parcerias">Parcerias</a><a href="mailto:contato@scoutfy.com.br">Contato</a></div>
            <div><h3>Legal</h3><a href="https://scoutfy.com.br/termos-condicoes">Termos e condições</a><a href="https://scoutfy.com.br/politica-privacidade">Política de privacidade</a></div>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 Scoutfy. Todos os direitos reservados.</span><span>Feito para quem vive o jogo.</span></div>
      </footer>
    </main>
  );
}
