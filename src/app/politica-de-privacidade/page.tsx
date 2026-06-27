import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do site de Louise Diná Psicóloga.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Privacidade" title="Política de Privacidade">
      <section><h2>1. Compromisso com a privacidade</h2><p>Este site respeita a sua privacidade e trata dados pessoais de acordo com a Lei Geral de Proteção de Dados (LGPD). As informações fornecidas por você são utilizadas apenas para viabilizar contato, agendamento e melhoria da experiência de navegação.</p></section>
      <section><h2>2. Dados coletados</h2><p>O site não possui formulários próprios. Ao escolher falar pelo WhatsApp, o contato ocorre na plataforma externa e segue também os termos e políticas desse serviço. Dados técnicos de navegação, como páginas acessadas, dispositivo e origem da visita, podem ser coletados de forma agregada caso ferramentas de análise sejam ativadas.</p></section>
      <section><h2>3. Cookies e métricas</h2><p>Cookies de medição poderão ser utilizados para compreender o desempenho do site e a efetividade de campanhas. Você pode controlar cookies nas configurações do seu navegador. Nenhuma ferramenta de análise substitui ou integra o prontuário psicológico.</p></section>
      <section><h2>4. Compartilhamento e segurança</h2><p>Dados pessoais não são vendidos. Poderão ser processados por fornecedores essenciais de hospedagem, comunicação e métricas, observados seus respectivos padrões de segurança e privacidade.</p></section>
      <section><h2>5. Seus direitos</h2><p>Você pode solicitar informações, correção ou exclusão de dados aplicáveis entrando em contato pelo telefone {site.phoneDisplay}. Solicitações serão analisadas nos termos da legislação vigente.</p></section>
    </LegalPage>
  );
}

