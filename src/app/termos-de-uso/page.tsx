import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso do site de Louise Diná Psicóloga.",
  alternates: { canonical: "/termos-de-uso" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Termos" title="Termos de Uso">
      <section><h2>1. Finalidade do site</h2><p>Este site apresenta informações institucionais sobre o trabalho de Louise Diná e facilita o contato para consulta de horários e agendamentos. O conteúdo tem caráter informativo e não constitui diagnóstico, orientação emergencial ou substituição de atendimento psicológico.</p></section>
      <section><h2>2. Atendimento e agendamento</h2><p>O envio de uma mensagem não garante reserva de horário. O agendamento é confirmado diretamente pelo WhatsApp, após alinhamento de disponibilidade, modalidade e demais orientações profissionais.</p></section>
      <section><h2>3. Situações de urgência</h2><p>Este site e o WhatsApp de agendamento não são canais de emergência. Em situação de risco imediato, procure um serviço de urgência da sua região. Para apoio emocional, o CVV atende gratuitamente pelo número 188.</p></section>
      <section><h2>4. Propriedade intelectual</h2><p>Textos, identidade visual, marca e imagens deste site são protegidos por direitos autorais e não podem ser reproduzidos ou utilizados comercialmente sem autorização.</p></section>
      <section><h2>5. Links externos</h2><p>Links para WhatsApp e Google Maps levam a serviços de terceiros, sujeitos aos próprios termos e políticas. Louise Diná não controla a disponibilidade ou as práticas dessas plataformas.</p></section>
      <section><h2>6. Contato</h2><p>Dúvidas sobre estes termos podem ser encaminhadas pelo número {site.phoneDisplay}.</p></section>
    </LegalPage>
  );
}

