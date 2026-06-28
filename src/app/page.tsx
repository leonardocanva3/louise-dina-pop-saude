import Image from "next/image";
import {
  ArrowRight, BadgeCheck, Brain, Building2, Check, ChevronRight, CircleUserRound,
  Compass, Heart, HeartHandshake, HeartPulse, LockKeyhole, MapPin, MessageCircleHeart,
  MonitorSmartphone, Plus, Quote, ShieldCheck, Sparkles, Sprout, SunMedium, Target, Waves,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

const differentials = [
  [Heart, "Atendimento humanizado", "Uma escuta sensível, respeitosa e conectada à sua história."],
  [LockKeyhole, "Sigilo e ética profissional", "Confidencialidade e responsabilidade em cada etapa do processo."],
  [MonitorSmartphone, "Atendimento online", "Cuidado psicológico com praticidade, segurança e acolhimento."],
  [Building2, "Atendimento presencial", "Consultório em Salvador preparado para receber você com conforto."],
  [MessageCircleHeart, "Escuta qualificada", "Atenção clínica para compreender além do que é dito em palavras."],
  [ShieldCheck, "Ambiente seguro", "Um espaço sem julgamentos para sentir, refletir e se fortalecer."],
] as const;

const therapyHelps = [
  [Waves, "Ansiedade"], [HeartPulse, "Depressão"], [Sparkles, "Autoestima"],
  [BadgeCheck, "Autoconfiança"], [Brain, "Controle emocional"], [HeartHandshake, "Relacionamentos"],
  [Target, "Compulsões"], [SunMedium, "Estresse"], [Compass, "Autoconhecimento"],
  [Sprout, "Bem-estar emocional"],
] as const;

const faqs = [
  ["Como funciona a primeira sessão?", "A primeira sessão é um encontro de acolhimento e compreensão. Louise escuta sua história, suas necessidades e o que motivou a busca pela terapia. Também é o momento para esclarecer dúvidas, alinhar expectativas e pensar nos primeiros objetivos do processo."],
  ["Quanto tempo dura uma sessão de psicoterapia?", "Em geral, cada sessão dura cerca de 50 minutos. A frequência costuma ser semanal, mas pode ser ajustada conforme as necessidades clínicas e os objetivos construídos com cada paciente."],
  ["A terapia online funciona?", "Sim. A psicoterapia online oferece um espaço de cuidado ético, sigiloso e efetivo. É importante estar em um local reservado, com conexão estável e privacidade durante o encontro."],
  ["Louise atende adolescentes?", "Sim. Louise possui experiência no cuidado de adolescentes e conduz o processo considerando a fase de desenvolvimento, o contexto familiar e a singularidade de cada jovem."],
  ["Há atendimento para casais e famílias?", "Sim. Louise tem experiência clínica com adultos, casais e famílias. A disponibilidade e a modalidade mais adequada podem ser conversadas diretamente pelo WhatsApp."],
  ["Qual abordagem terapêutica é utilizada?", "Louise trabalha com a Terapia Cognitivo-Comportamental, abordagem que ajuda a compreender a relação entre pensamentos, emoções e comportamentos e a desenvolver respostas mais saudáveis para os desafios cotidianos."],
  ["Como agendar uma consulta?", "Clique em qualquer botão de WhatsApp desta página ou fale pelo número " + site.phoneDisplay + ". Você poderá consultar horários, modalidade de atendimento e orientações para a primeira sessão."],
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness", "Psychologist"],
      "@id": site.url + "/#business",
      name: "Louise Diná Psicóloga",
      url: site.url,
      image: site.url + "/images/louise-sobre.webp",
      logo: site.url + "/images/logo-louise-dina-optimized.png",
      telephone: site.phone,
      priceRange: "$$",
      address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: "Salvador", addressRegion: "BA", addressCountry: "BR" },
      areaServed: { "@type": "City", name: "Salvador" },
      employee: { "@id": site.url + "/#person" },
    },
    {
      "@type": "Person", "@id": site.url + "/#person", name: "Louise Diná",
      jobTitle: "Psicóloga Clínica",
      description: "Psicóloga em Salvador com cerca de 15 anos de experiência em clínica e saúde pública, com atuação em Terapia Cognitivo-Comportamental.",
      identifier: site.crp, image: site.url + "/images/louise-sobre.webp", telephone: site.phone,
      worksFor: { "@id": site.url + "/#business" },
    },
    {
      "@type": "FAQPage", "@id": site.url + "/#faq",
      mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Início", item: site.url + "/" }],
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Header />
      <main>
        <section id="inicio" className="hero-bg relative flex min-h-[780px] items-center overflow-hidden pt-28 sm:pt-32 lg:min-h-[850px]">
          <div className="dot-pattern absolute inset-y-0 left-0 w-1/3 opacity-50" />
          <div className="absolute -left-24 top-52 size-72 rounded-full bg-white/60 blur-3xl" />
          <div className="absolute -right-36 top-16 size-[34rem] rounded-full bg-rose/15 blur-3xl" />
          <div className="container-shell relative z-10 grid items-center gap-12 py-12 lg:grid-cols-[1.04fr_.96fr] lg:gap-12 lg:py-20">
            <Reveal>
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-wine uppercase shadow-sm backdrop-blur">
                  <HeartPulse size={15} className="text-rose" /> Psicóloga em Salvador
                </span>
                <span className="rounded-full bg-wine px-4 py-2 text-xs font-extrabold tracking-[0.12em] text-white uppercase">{site.crp}</span>
              </div>
              <h1 className="max-w-[720px] font-serif text-[clamp(3.1rem,6.5vw,6.1rem)] leading-[.94] font-semibold tracking-[-0.055em] text-wine">
                Um espaço para você se ouvir, se compreender e se <span className="text-rose">transformar.</span>
              </h1>
              <p className="mt-7 max-w-[650px] text-base leading-8 font-medium text-wine/72 sm:text-lg">
                Psicoterapia com acolhimento, ética e base na Terapia Cognitivo-Comportamental para adolescentes, adultos, casais e famílias.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="button-primary group">
                  <FaWhatsapp className="text-xl" /> Agendar pelo WhatsApp <ArrowRight size={17} className="transition group-hover:translate-x-1" />
                </a>
                <a href="#sobre" className="button-secondary">Conheça meu trabalho <ChevronRight size={18} /></a>
              </div>
              <div className="mt-10 grid max-w-[640px] grid-cols-3 gap-2 border-t border-wine/12 pt-7 sm:gap-5">
                {["15 anos de experiência", "Online e presencial", "TCC"].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-[0.66rem] font-extrabold text-wine/70 sm:text-xs">
                    <Check size={16} className="mt-0.5 shrink-0 text-rose" strokeWidth={3} /> {item}
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.12} className="relative mx-auto w-full max-w-[540px]">
              <div className="absolute inset-x-8 bottom-0 top-16 rounded-[46%_46%_2.8rem_2.8rem] bg-gradient-to-b from-[#ddaaa8] to-[#8d3e49] shadow-[0_40px_90px_rgba(91,40,48,.22)]" />
              <div className="absolute inset-x-3 bottom-4 top-10 rounded-[48%_48%_3.2rem_3.2rem] border border-white/60" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/louise-hero.webp"
                  alt="Louise Diná, psicóloga em Salvador"
                  fill
                  preload
                  quality={80}
                  sizes="(max-width: 640px) calc(100vw - 1.25rem), 540px"
                  className="object-contain object-bottom"
                />
              </div>
              <div className="glass absolute -bottom-5 left-0 flex max-w-[270px] items-center gap-3 rounded-2xl p-3.5 sm:-left-6 sm:p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-blush text-rose"><ShieldCheck size={22} /></span>
                <span className="text-xs leading-5 font-bold text-wine">Acolhimento, ética e sigilo em cada encontro.</span>
              </div>
              <div className="absolute -right-1 top-16 rounded-2xl bg-wine px-4 py-3 text-white shadow-xl sm:-right-5">
                <span className="block text-[0.58rem] font-bold tracking-[0.16em] text-white/60 uppercase">Abordagem</span><strong className="text-sm">TCC</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="sobre" className="section-space bg-white">
          <div className="container-shell grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
            <Reveal className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.7rem] bg-blush shadow-[0_30px_80px_rgba(91,40,48,.14)]">
                <Image
                  src="/images/louise-sobre.webp"
                  alt="Retrato profissional da psicóloga Louise Diná"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) calc(100vw - 1.25rem), (max-width: 1023px) calc(100vw - 2rem), 500px"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-7 -right-1 max-w-[290px] rounded-3xl bg-wine p-5 text-white shadow-2xl sm:-right-8 sm:p-6">
                <Quote size={27} className="mb-3 text-rose-light" />
                <p className="text-sm leading-6 font-semibold">Cuidar da mente abre caminhos para uma vida mais autêntica e mais sua.</p>
              </div>
              <div className="absolute -left-5 -top-5 -z-10 size-52 rounded-full bg-blush" />
            </Reveal>
            <Reveal className="order-1 lg:order-2">
              <span className="eyebrow">Sobre Louise</span>
              <h2 className="section-title">Experiência clínica com presença verdadeiramente humana.</h2>
              <p className="mt-7 text-base leading-8 text-wine/70 sm:text-lg">
                Formada em Psicologia em 2011, Louise Diná construiu uma trajetória de aproximadamente 15 anos entre a clínica e a saúde pública. Essa experiência ampliou seu olhar para a diversidade das histórias humanas e para as muitas formas de cuidar da saúde emocional.
              </p>
              <p className="mt-4 text-base leading-8 text-wine/70 sm:text-lg">
                Seu trabalho acolhe adolescentes, adultos, casais e famílias em um espaço ético e cuidadoso. A proposta é ajudar cada pessoa a compreender seus padrões, ressignificar dores e desenvolver mais autoconhecimento, autonomia e liberdade emocional.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Formada em 2011", "Clínica e saúde pública", "Adolescentes e adultos", "Casais e famílias"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-sand p-4 text-sm font-bold text-wine">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blush text-rose"><Check size={16} strokeWidth={3} /></span>{item}
                  </div>
                ))}
              </div>
              <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-rose hover:text-wine">Agende uma conversa <ChevronRight size={18} /></a>
            </Reveal>
          </div>
        </section>

        <section id="diferenciais" className="section-space relative overflow-hidden bg-sand">
          <div className="absolute -right-20 top-0 size-96 rounded-full bg-blush/70 blur-3xl" />
          <div className="container-shell relative">
            <Reveal className="mx-auto max-w-3xl text-center">
              <span className="eyebrow justify-center">O cuidado em cada detalhe</span>
              <h2 className="section-title mx-auto">Um processo construído com respeito, segurança e acolhimento.</h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {differentials.map(([Icon, title, text], index) => (
                <Reveal key={title} delay={index * 0.05} className="soft-card group rounded-[2rem] p-6 sm:p-7">
                  <div className="mb-7 flex items-start justify-between">
                    <span className="flex size-13 items-center justify-center rounded-2xl bg-blush text-rose transition group-hover:bg-wine group-hover:text-white"><Icon size={24} /></span>
                    <span className="text-xs font-extrabold text-wine/22">0{index + 1}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-semibold tracking-[-0.025em] text-wine">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-wine/62">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="abordagem" className="section-space relative overflow-hidden bg-wine text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(210,142,145,.25),transparent_36%)]" />
          <div className="container-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <Reveal>
              <span className="eyebrow !text-rose-light">Abordagem terapêutica</span>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(2.8rem,5.4vw,5rem)] leading-[.98] font-semibold tracking-[-0.05em] text-white">Terapia Cognitivo-Comportamental</h2>
              <p className="mt-7 text-base leading-8 text-white/72 sm:text-lg">
                A TCC é uma abordagem prática e colaborativa que ajuda a perceber como pensamentos, emoções e comportamentos se influenciam. A partir dessa compreensão, torna-se possível questionar padrões que geram sofrimento e construir respostas mais flexíveis e saudáveis.
              </p>
              <div className="mt-8 rounded-3xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur sm:p-7">
                <div className="flex gap-4"><Target className="mt-1 shrink-0 text-rose-light" size={25} />
                  <div><h3 className="font-extrabold text-white">Mudanças que fazem sentido na vida real</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">O processo une reflexão e estratégias aplicáveis ao cotidiano para fortalecer autonomia, regulação emocional e novas possibilidades de escolha.</p>
                  </div>
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                {["Compreender", "Ressignificar", "Experimentar", "Transformar"].map((item) => <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/75">{item}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[2.8rem] border border-white/15 bg-white/5">
                <Image
                  src="/images/louise-tcc.webp"
                  alt="Louise Diná com livro sobre Terapia Cognitiva"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) calc(100vw - 1.25rem), (max-width: 1023px) calc(100vw - 2rem), 500px"
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-5 -left-3 rounded-2xl bg-rose-light p-5 text-wine shadow-2xl sm:-left-8"><Brain size={28} /><strong className="mt-2 block text-sm">Pensamentos · Emoções · Ações</strong></div>
            </Reveal>
          </div>
        </section>

        <section id="terapia" className="section-space bg-white">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Como a terapia pode ajudar</span>
              <h2 className="section-title">Mais recursos internos para lidar com o que hoje pesa.</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-wine/68 sm:text-lg">Cada processo é único. A psicoterapia pode apoiar você na compreensão de diferentes desafios emocionais e na construção de uma vida com mais equilíbrio.</p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {therapyHelps.map(([Icon, title], index) => (
                <Reveal key={title} delay={(index % 5) * 0.045} className="benefit-card group">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blush text-rose transition group-hover:bg-wine group-hover:text-white"><Icon size={23} /></span>
                  <h3 className="mt-5 text-sm leading-5 font-extrabold text-wine sm:text-base">{title}</h3>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-sand py-7 sm:py-10" aria-label="Espaços de cuidado e retratos de Louise Diná">
          <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/images/louise-poltrona.webp", "Louise Diná sentada em poltrona no consultório"],
              ["/images/louise-consultorio.webp", "Louise Diná no ambiente de atendimento"],
              ["/images/louise-retrato.webp", "Retrato profissional de Louise Diná"],
              ["/images/louise-cta.webp", "Louise Diná sorrindo"],
            ].map(([src, alt], index) => (
              <Reveal key={alt} delay={index * 0.05} className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-blush">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  loading="lazy"
                  quality={70}
                  sizes="(max-width: 640px) calc(100vw - 1.25rem), (max-width: 1023px) calc((100vw - 3rem) / 2), 283px"
                  className="object-cover object-top transition duration-700 hover:scale-[1.03]"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="faq" className="section-space bg-white">
          <div className="container-shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <Reveal>
              <span className="eyebrow">Dúvidas frequentes</span>
              <h2 className="section-title">Antes de começar, é natural querer saber mais.</h2>
              <p className="mt-6 text-base leading-8 text-wine/66">Encontre respostas para as principais dúvidas sobre psicoterapia e atendimento.</p>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-rose hover:text-wine">Ainda tem uma dúvida? Fale comigo <ChevronRight size={18} /></a>
            </Reveal>
            <Reveal className="space-y-3">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group soft-card rounded-2xl open:border-rose/35">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-extrabold text-wine sm:px-6">
                    <span>{question}</span><span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-blush text-rose transition group-open:rotate-45"><Plus size={17} /></span>
                  </summary>
                  <p className="px-5 pb-6 text-sm leading-7 text-wine/65 sm:px-6">{answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="relative overflow-hidden bg-wine py-7 sm:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(221,164,166,.23),transparent_36%)]" />
          <div className="container-shell relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-white/[0.045]">
            <div className="grid items-stretch lg:grid-cols-[1.12fr_.88fr]">
              <Reveal className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">
                <span className="text-xs font-extrabold tracking-[0.16em] text-rose-light uppercase">Seu cuidado pode começar hoje</span>
                <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.8rem,5.2vw,5.2rem)] leading-[.97] font-semibold tracking-[-0.05em] text-white">Você não precisa atravessar tudo sozinha.</h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/68">A psicoterapia pode ser o início de uma relação mais gentil com a sua história, suas emoções e suas escolhas.</p>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-rose-light px-7 py-4 text-sm font-extrabold text-wine transition hover:-translate-y-1 hover:bg-white"><FaWhatsapp className="text-xl" /> Agendar pelo WhatsApp <ArrowRight size={17} /></a>
              </Reveal>
              <Reveal delay={0.08} className="relative min-h-[500px] lg:min-h-[650px]">
                <Image
                  src="/images/louise-poltrona.webp"
                  alt="Louise Diná em seu espaço de atendimento"
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) calc(100vw - 1.25rem), (max-width: 1023px) calc(100vw - 2rem), 480px"
                  className="object-contain object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine/35 via-transparent to-transparent lg:bg-gradient-to-r lg:from-wine/25 lg:to-transparent" />
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contato" className="section-space bg-white">
          <div className="container-shell">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Localização e contato</span><h2 className="section-title">Vamos conversar?</h2>
              <p className="mt-5 text-base leading-8 text-wine/65">Consulte horários e modalidades de atendimento ou encontre o consultório em Salvador.</p>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
              <Reveal className="rounded-[2.3rem] bg-wine p-7 text-white sm:p-9">
                <div className="space-y-7">
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-light"><FaWhatsapp className="text-xl" /></span>
                    <span><small className="block text-[0.68rem] font-bold tracking-[0.14em] text-white/45 uppercase">WhatsApp</small><strong className="mt-1 block text-sm group-hover:text-rose-light">{site.phoneDisplay}</strong></span>
                  </a>
                  <a href={site.maps} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-light"><MapPin size={20} /></span>
                    <span><small className="block text-[0.68rem] font-bold tracking-[0.14em] text-white/45 uppercase">Consultório</small><strong className="mt-1 block text-sm leading-6 group-hover:text-rose-light">{site.address}<br />{site.city}</strong></span>
                  </a>
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-rose-light"><CircleUserRound size={20} /></span>
                    <span><small className="block text-[0.68rem] font-bold tracking-[0.14em] text-white/45 uppercase">Atendimento</small><strong className="mt-1 block text-sm leading-6">Online e presencial<br />Sob agendamento</strong></span>
                  </div>
                </div>
                <div className="mt-10 grid gap-3">
                  <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-rose-light px-5 py-3.5 text-sm font-extrabold text-wine"><FaWhatsapp className="text-lg" /> Chamar no WhatsApp</a>
                  <a href={site.maps} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-bold hover:bg-white/10"><MapPin size={16} /> Abrir rota no Google Maps</a>
                </div>
              </Reveal>
              <Reveal delay={0.08} className="min-h-[520px] overflow-hidden rounded-[2.3rem] border border-wine/10 bg-sand shadow-[0_20px_60px_rgba(91,40,48,.1)]">
                <iframe src={site.mapEmbed} width="100%" height="100%" className="min-h-[520px] border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa do consultório de Louise Diná em Salvador" allowFullScreen />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-wine/10 bg-sand py-12">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.3fr_.7fr_.8fr]">
          <div>
            <Image
              src="/images/logo-louise-dina-optimized.png"
              alt="Louise Diná Psicóloga"
              width={400}
              height={234}
              sizes="165px"
              loading="lazy"
              className="h-24 w-auto"
            />
            <p className="mt-3 max-w-sm text-sm leading-7 text-wine/60">Psicoterapia com acolhimento e base na Terapia Cognitivo-Comportamental em Salvador.</p>
            <strong className="mt-3 block text-sm text-wine">{site.crp}</strong>
          </div>
          <div>
            <h2 className="text-xs font-extrabold tracking-[0.16em] text-rose uppercase">Navegação</h2>
            <nav className="mt-5 grid gap-3 text-sm font-semibold text-wine/66" aria-label="Navegação do rodapé">
              <a href="#sobre" className="hover:text-rose">Sobre</a><a href="#abordagem" className="hover:text-rose">Abordagem</a>
              <a href="#terapia" className="hover:text-rose">Como posso ajudar</a><a href="#faq" className="hover:text-rose">Dúvidas frequentes</a><a href="#contato" className="hover:text-rose">Contato</a>
            </nav>
          </div>
          <div>
            <h2 className="text-xs font-extrabold tracking-[0.16em] text-rose uppercase">Contato</h2>
            <div className="mt-5 space-y-3 text-sm leading-6 text-wine/66">
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="block font-bold text-wine hover:text-rose">{site.phoneDisplay}</a>
              <p>{site.address}<br />{site.city}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 pt-2 text-xs font-bold">
                <a href="/politica-de-privacidade" className="hover:text-rose">Política de Privacidade</a><a href="/termos-de-uso" className="hover:text-rose">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-shell mt-10 border-t border-wine/10 pt-6 text-xs leading-5 text-wine/45">© {new Date().getFullYear()} Louise Diná Psicóloga. Todos os direitos reservados.</div>
      </footer>
      <WhatsAppFloat />
    </>
  );
}
