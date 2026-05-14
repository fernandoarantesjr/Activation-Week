import { motion } from 'motion/react';
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, VolumeX } from 'lucide-react';

const SmartPandaVideo: React.FC<{ vid: string; className?: string }> = ({ vid, className }) => {
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <iframe 
        width="100%" 
        height="100%" 
        src={`https://player-vz-0b812141-de8.tv.pandavideo.com.br/embed/?v=${vid}&autoplay=true`} 
        title={`Video`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </div>
  );
}

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-white/5 border border-white/10 mb-4 rounded-md">
      <button
        className="w-full text-left p-5 font-bold flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span className="text-xl leading-none text-accent">{isOpen ? '-' : '+'}</span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden px-5 text-white/60"
      >
        <div className="pb-5">{answer}</div>
      </motion.div>
    </div>
  );
}

const TestimonialVideo: React.FC<{ vid: string; index: number }> = ({ vid, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="aspect-[9/16] w-full max-w-[320px] relative rounded-[12px] overflow-hidden border border-white/10 bg-black shadow-[0_10px_30px_rgba(0,0,0,0.5)] group transform hover:-translate-y-2 transition-transform duration-300"
    >
      <iframe 
        width="100%" 
        height="100%" 
        src={`https://www.youtube.com/embed/${vid}?controls=0&rel=0&playsinline=1&modestbranding=1&showinfo=0`} 
        title={`Testemunho ${index + 1}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full pointer-events-auto"
      ></iframe>
    </motion.div>
  );
};

export default function App() {
  const [showHeroCTA, setShowHeroCTA] = useState(false);

  React.useEffect(() => {
    // Show hero CTA after 30 seconds (30000ms)
    const timer = setTimeout(() => {
      setShowHeroCTA(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const testimonialVids = ['txEIYZ5Zy0I', 'vU0UGlswznI', 'MH0XSGV76f4'];

  const lessons = [
    { num: '01 e 02', speaker: 'Pra. Iza', title: 'Discípulos do Reino & O seu DNA celestial é o governo', desc: 'Aula 01: Onde o DNA de discípulo está instaurado, todo ministério é impactado.\nAula 02: Quando Deus criou o homem Deus o criou para o domínio e o governo da terra.', icon: '🕊️', image: 'https://i.postimg.cc/3JBvSZxd/foto-pastora-IZA.png', position: 'object-[center_20%]' },
    { num: '03', speaker: 'Apóstolo Pedro Medina', title: 'Exousía & Poder Sobrenatural', desc: 'Não é sobre força humana, é sobre a autoridade delegada.', icon: '⚡', image: 'https://i.postimg.cc/tC5xSz4G/Foto-Apostolo-pedro.png', position: 'object-[center_35%]' },
    { num: '04', speaker: 'Pr. Dan', title: 'Níveis do Sobrenatural', desc: 'Aprenda a discernir os níveis do sobrenatural e a se mover em diferentes dimensões espirituais.', icon: '🔑', image: 'https://i.postimg.cc/MT4ZvXLM/55215203427-f251fdea2e-o.jpg', position: 'object-[center_20%]' },
    { num: '05 e 06', speaker: 'Pr. Cabeto Jr.', title: 'Roteiro da Fidelidade & As Estações', desc: 'Aula 05: Como permanecer fiel no processo para herdar a promessa.\nAula 06: Discernimento espiritual para entender o tempo que você está vivendo.', icon: '🌱', image: 'https://i.postimg.cc/tC5xSz4p/foto-pr-cabeto.jpg', position: 'object-[center_60%]' },
  ];

  const faqs = [
    { q: 'Como vou receber o acesso?', a: 'Logo após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à plataforma de alunos.' },
    { q: 'Por quanto tempo posso assistir?', a: 'O acesso é vitalício. Você pode assistir as mensagens quantas vezes quiser e no seu próprio ritmo.' },
    { q: 'Quais as formas de pagamento?', a: 'Você pode pagar via PIX (acesso imediato) ou cartão de crédito.' },
  ];

  const marqueeText = ['PRA. IZA', 'APÓSTOLO PEDRO MEDINA', 'PR. DAN', 'PR. CABETO JR', 'PRA. IZA', 'APÓSTOLO PEDRO MEDINA', 'PR. DAN', 'PR. CABETO JR'];
  
  return (
    <div className="bg-dark text-white font-barlow min-h-screen selection:bg-primary-light/30">
      {/* Hero */}
      <header 
        className="relative flex flex-col items-center justify-start pt-[5vh] pb-[6vh] text-center px-0"
        style={{
          background: `radial-gradient(circle at center, transparent, #060810), url('https://images.unsplash.com/photo-1544621175-fb172cbf54a9?auto=format&fit=crop&q=80&w=2070') no-repeat center top / cover`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-20% to-dark to-95% z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] uppercase mb-6 text-center"
          >
            6 aulas que vão te ativar <span className="text-primary-light">espiritualmente!</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(1rem,1.8vw,1.25rem)] text-white/70 mb-10 max-w-[800px] mx-auto text-center font-medium"
          >
            Mais de 150 alunos foram ativados para viver o que Deus tem preparado para eles, e agora, disponibilizamos a Activation Week 2026 para você também ser ativado pelo poder de Deus
          </motion.p>
          
          {/* VSL Video Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full max-w-4xl mx-auto mb-12 rounded-[12px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-black aspect-video relative"
            style={{ 
              boxShadow: '0 0 40px rgba(139, 14, 18, 0.2)' 
            }}
          >
            <SmartPandaVideo vid="5ed41178-30f3-478e-9b36-34d9b96fb0a0" />
          </motion.div>
          
          {showHeroCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full flex justify-center flex-col items-center"
            >
              <a 
                href="#oferta"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block py-[22px] px-[50px] bg-green-600 text-white no-underline font-condensed font-black text-[1.3rem] uppercase tracking-[1px] rounded-[4px] border border-green-500 shadow-[0_10px_40px_rgba(22,163,74,0.4)] hover:-translate-y-1 hover:bg-green-500 hover:shadow-[0_15px_50px_rgba(34,197,94,0.5)] transition-all duration-300 w-full sm:w-auto mb-6 text-center"
              >
                 QUERO SER ATIVADO
              </a>

              <p className="text-[0.95rem] text-white/50 text-center max-w-[400px] mb-8">
                Cada dia que você continua adormecido é mais um dia distante do propósito que Deus te criou.
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-bebas text-[clamp(2rem,5vw,3.5rem)] leading-[0.85] uppercase text-white tracking-widest text-center mt-2">
              Activation <span className="text-[#ff1500]">Week</span>
            </h2>
          </motion.div>
        </div>
      </header>

      {/* Testemunhos */}
      <section className="pt-16 pb-12 px-6 relative z-10 bg-[#060810]/80 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] text-white leading-[1.1] mb-2 uppercase tracking-wide">Testemunhos de quem viveu a <span className="text-primary-light">Activation Week</span>.</h2>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mx-auto w-full max-w-[1000px]">
            {testimonialVids.map((vid, index) => (
              <TestimonialVideo key={index} vid={vid} index={index} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <a 
              href="#oferta"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block py-[22px] px-[50px] bg-green-600 text-white no-underline font-condensed font-black text-[1.3rem] uppercase tracking-[1px] rounded-[4px] border border-green-500 shadow-[0_10px_40px_rgba(22,163,74,0.4)] hover:-translate-y-1 hover:bg-green-500 hover:shadow-[0_15px_50px_rgba(34,197,94,0.5)] transition-all duration-300 w-full sm:w-auto text-center"
            >
              QUERO VIVER ESSE SOBRENATURAL
            </a>
          </motion.div>
        </div>
      </section>

      {/* Aulas */}
      <section id="aulas" className="pt-10 pb-10 px-6 relative z-10 bg-[#060810]/50 border-t border-white/5">
        <div className="max-w-[1100px] mx-auto">
          <span className="text-accent font-condensed uppercase tracking-[4px] text-[0.9rem] block mb-2.5">O que você vai receber</span>
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] mb-[40px] leading-[1.1]">6 aulas que vão te ativar espiritualmente</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lessons.map((lesson, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-[12px] border border-white/10 overflow-hidden group hover:border-primary-light transition-colors duration-400"
              >
                {/* Imagem de Fundo Grande */}
                <div className="w-full h-[400px] sm:h-[450px] relative">
                  <img 
                    src={lesson.image} 
                    alt={lesson.speaker} 
                    className={`absolute inset-0 w-full h-full object-cover ${lesson.position} transition-transform duration-700 group-hover:scale-105`} 
                  />
                  {/* Degradê cobrindo a metade para baixo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/80 to-transparent/10"></div>
                </div>

                {/* Conteúdo sobre a imagem */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="flex justify-between items-end mb-4">
                    <span className="font-bebas text-5xl text-primary-light/80 leading-none drop-shadow-lg">{lesson.num}</span>
                    <div style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5)) grayscale(100%) brightness(200%)' }} className="text-3xl opacity-80">
                      {lesson.icon}
                    </div>
                  </div>
                  <span className="text-accent font-bold uppercase text-[0.8rem] tracking-wider mb-2 block drop-shadow-md">{lesson.speaker}</span>
                  <h3 className="text-[1.6rem] md:text-[1.8rem] leading-tight font-bold mb-3 drop-shadow-md">{lesson.title}</h3>
                  <p className="text-white/80 text-[0.95rem] whitespace-pre-line leading-relaxed drop-shadow-md">{lesson.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="comprar" className="py-10 px-6 relative z-10">
        <div className="max-w-[1100px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-[400px] mb-16"
          >
            <h3 className="font-bebas text-3xl md:text-4xl text-center text-white mb-6 tracking-wide">Veja como foi um<br />dos nossos dias:</h3>
            <div className="aspect-[9/16] relative rounded-[12px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden bg-black">
              <iframe 
                src="https://www.youtube.com/embed/lVbNooHFUO4?controls=0&rel=0&playsinline=1&modestbranding=1&showinfo=0" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            id="oferta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-gradient-to-br from-[#0f121d] to-[#060810] border border-accent p-10 md:py-[60px] md:px-[40px] rounded-[15px] text-center max-w-[550px] mx-auto shadow-[0_30px_60px_rgba(0,0,0,0.5)] scroll-mt-[100px]"
          >
            <span className="text-accent font-condensed uppercase tracking-[4px] text-[0.9rem] block mb-2.5">Oferta Exclusiva</span>
            <p className="line-through text-white/40 text-[1.2rem] font-medium">De R$ 97,00</p>
            <h2 className="font-bebas text-[6rem] leading-none my-[10px] text-white">
              <span className="text-[2rem] align-top mr-1">R$</span>37<span className="text-[2rem] align-top">,90</span>
            </h2>
            <p className="mb-[30px] text-white/60 font-medium">Acesso Vitalício + Suporte via WhatsApp</p>
            
            <a 
              href="https://pay.cakto.com.br/34yrdr2_874181" target="_blank" rel="noopener noreferrer"
              className="flex justify-center text-center items-center w-full py-[22px] px-[50px] bg-green-600 text-white no-underline font-condensed font-black text-[1.3rem] uppercase tracking-[1px] rounded-[4px] border border-green-500 shadow-[0_10px_40px_rgba(22,163,74,0.4)] hover:-translate-y-1 hover:bg-green-500 hover:shadow-[0_15px_50px_rgba(34,197,94,0.5)] transition-all duration-300"
            >
              QUERO SER ATIVADO
            </a>
            
            <p className="mt-[20px] text-[0.85rem] font-medium tracking-wide text-white/50">
              Pagamento 100% seguro via PIX, Cartão ou Boleto
            </p>
          </motion.div>
        </div>
      </section>

      {/* Carta de Vendas / Copylore */}
      <section className="pt-24 pb-12 px-6 relative z-10 bg-[#060810] border-t border-white/5">
        <div className="max-w-3xl mx-auto text-lg md:text-[1.35rem] leading-[1.8] text-white/80 font-light text-center">
          {/* A VIRADA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <h3 className="font-bebas text-4xl md:text-5xl text-primary-light text-center mb-10 leading-[1.1]">O que aconteceu na Activation Week?</h3>
            <p className="mb-4">Não foi só mais uma semana de louvor bonito, motivação ou qualquer ensinamento.</p>
            <p className="mb-4">Foi uma semana que 5 líderes sentaram na frente dos nossos alunos e disseram o que eles precisavam ouvir</p>
            <p className="mb-4 text-white font-medium">Sobre propósito, processo, poder de Deus, estações e fidelidade.</p>
            <p className="mb-12 text-white font-medium">Ativando nossos alunos e você para esse tempo!</p>
            <p className="text-xl md:text-2xl font-condensed uppercase tracking-widest text-[#D4AF37] font-bold text-center">Um módulo completo de ativação</p>
          </motion.div>
        </div>
      </section>

      {/* Carta de Vendas / Copylore Parte 2 - URGÊNCIA */}
      <section className="pt-0 pb-20 px-6 relative z-10 bg-[#060810]">
        <div className="max-w-3xl mx-auto text-lg md:text-[1.35rem] leading-[1.8] text-white/80 font-light text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.7 }}>
            <p className="mb-4">Essa semana aconteceu uma vez.</p>
            <p className="mb-4">Presencialmente, com pessoas que pagaram pra estar lá.</p>
            <p className="mb-4 font-medium text-white">Agora você tem a oportunidade de acessar tudo isso no seu tempo, quantas vezes quiser, para sempre.</p>
            <p className="mb-12 text-primary-light font-bold text-center">A dor de saber que existe um propósito gigante pra você e continuar estagnado acaba hoje.<br/>O mundo espiritual está apenas esperando você assumir o seu lugar. Chegou a sua vez de despertar e viver o sobrenatural de Deus.</p>
            
            <div className="text-center w-full flex flex-col justify-center items-center">
              <a 
                href="#oferta"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-block py-[22px] px-[50px] bg-green-600 text-white no-underline font-condensed font-black text-[1.3rem] uppercase tracking-[1px] rounded-[4px] border border-green-500 shadow-[0_10px_40px_rgba(22,163,74,0.4)] hover:-translate-y-1 hover:bg-green-500 hover:shadow-[0_15px_50px_rgba(34,197,94,0.5)] transition-all duration-300 w-full sm:w-auto text-center"
              >
                QUERO SER ATIVADO
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pt-10 pb-20 px-6 relative z-10">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-bebas text-[clamp(2.5rem,5vw,4rem)] mb-[50px] text-center">Perguntas Frequentes</h2>
          <div>
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-[60px] px-6 text-center border-t border-white/10 text-[0.8rem] text-white/50 relative z-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="font-medium">Exousía School — Balneário Camboriú, SC</p>
          <p className="mt-2.5 mb-0">© 2026 Todos os direitos reservados. Este produto não é afiliado à Meta/Facebook.</p>
        </div>
      </footer>
    </div>
  );
}
