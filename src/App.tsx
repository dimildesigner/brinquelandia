import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Star, 
  Heart, 
  Truck, 
  ShieldCheck, 
  Smile,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight
} from "lucide-react";

const PRODUCTS = [
  {
    id: 1,
    name: "Blocos Criativos",
    price: "R$ 89,90",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-blue-100"
  },
  {
    id: 2,
    name: "Ursinho Sonolento",
    price: "R$ 124,50",
    image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?q=80&w=600&auto=format&fit=crop",
    color: "bg-rose-100"
  },
  {
    id: 3,
    name: "Carro de Corrida Retro",
    price: "R$ 159,00",
    image: "https://images.unsplash.com/photo-1609708536965-6e5b915b195b?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-orange-100"
  },
  {
    id: 4,
    name: "Kit Fazendinha",
    price: "R$ 210,00",
    image: "https://images.unsplash.com/photo-1760329291526-beb7a0ddae17?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-green-100"
  }
];

const SHOPEE_LINK = "https://kimania.com.br/"; // 👈 SUBSTITUA PELO SEU LINK AQUI

const ShopeeButton = ({ className = "" }: { className?: string }) => (
  <a 
    href={SHOPEE_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-3 px-10 py-5 bg-toy-orange text-white text-xl font-black rounded-2xl shadow-[0_10px_0_0_#C2410C] hover:translate-y-1 hover:shadow-[0_6px_0_0_#C2410C] transition-all active:scale-95 ${className}`}
  >
    <ShoppingBag size={24} />
    COMPRAR NA SHOPEE
  </a>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-toy-slate/5 px-6 py-6 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 2 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-toy-orange rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
            </div>
            <span className="text-2xl font-black tracking-tight text-toy-orange">
              BRINQUE<span className="text-toy-blue">LÂNDIA</span>
            </span>
          </motion.div>
          
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-toy-slate-light">
            <a href="#produtos" className="hover:text-toy-orange transition-colors">Coleções</a>
            <a href="#sobre" className="hover:text-toy-orange transition-colors">Novidades</a>
            <a href="#depoimentos" className="hover:text-toy-orange transition-colors">Sobre Nós</a>
          </div>

          <a 
            href={SHOPEE_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-toy-orange text-white px-6 py-2 rounded-xl flex items-center gap-2 font-bold shadow-[0_4px_0_0_#C2410C] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#C2410C] transition-all"
          >
            <ShoppingBag size={18} />
            <span className="hidden md:inline uppercase text-xs tracking-wider">Shopee</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background shapes */}
        <div className="absolute top-20 -right-20 w-80 h-80 bg-toy-blue rounded-full mix-blend-multiply opacity-20 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-64 h-64 bg-toy-gold rounded-full mix-blend-multiply opacity-30 blur-3xl" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-block px-4 py-1 bg-toy-gold text-toy-gold-text rounded-full text-xs font-bold uppercase tracking-wider mb-8"
            >
              🎉 Brinquedos que Encantam!
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-toy-slate mb-8 tracking-tighter">
              Onde a <span className="text-toy-blue">Diversão</span> <br />
              não tem <span className="text-toy-rose">Fim!</span>
            </h1>
            <p className="text-xl text-toy-slate-light mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Descubra um universo de brinquedos educativos, criativos e super divertidos para todas as idades, com a confiança de comprar na Shopee.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <ShopeeButton />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1537655780520-1e392ead81f2?q=80&w=1200&auto=format&fit=crop" 
                alt="Brinquedos Diversos" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-6 -right-6 z-20 w-24 h-24 bg-toy-pink rounded-full flex items-center justify-center text-white shadow-xl"
            >
              <Heart fill="white" size={40} />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 z-0 w-48 h-48 bg-toy-yellow rounded-3xl rotate-12" />
          </motion.div>
        </div>
      </section>

      {/* Icons Section */}
      <section className="bg-white py-16 border-y border-toy-slate/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { icon: <Truck size={32} />, label: "Envio Rápido", sub: "Todo o Brasil", color: "bg-blue-50 text-toy-blue" },
            { icon: <ShieldCheck size={32} />, label: "Compra Segura", sub: "Via Shopee", color: "bg-rose-50 text-toy-rose" },
            { icon: <Star size={32} />, label: "Qualidade", sub: "Premium", color: "bg-orange-50 text-toy-orange" },
            { icon: <Smile size={32} />, label: "Alegria", sub: "Garantida", color: "bg-yellow-50 text-toy-gold-text" },
          ].map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-sm`}>
                {item.icon}
              </div>
              <div className="text-left">
                <p className="font-black text-toy-slate uppercase text-sm leading-none mb-1">{item.label}</p>
                <p className="text-xs font-bold text-toy-slate-light uppercase tracking-wider">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section id="produtos" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-toy-slate">Favoritos do Mês</h2>
            <p className="text-toy-slate-light text-xl max-w-2xl mx-auto">
              Curadoria especial de brinquedos que são sucesso absoluto de vendas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[40px] p-8 shadow-xl border-2 border-toy-slate/5 transition-all group"
              >
                <div className={`rounded-[32px] overflow-hidden mb-8 aspect-square ${product.color} flex items-center justify-center p-4`}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500 shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-black mb-2 text-toy-slate">{product.name}</h3>
                <p className="text-toy-slate-light text-sm mb-4 uppercase font-bold tracking-widest">Qualidade Premium</p>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-3xl font-black text-toy-blue">{product.price}</span>
                  <div className="flex gap-0.5 text-toy-gold-text">
                    {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={14} />)}
                  </div>
                </div>
                <a 
                  href={SHOPEE_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-toy-orange text-white py-4 rounded-2xl font-black shadow-[0_6px_0_0_#C2410C] hover:translate-y-1 hover:shadow-[0_2px_0_0_#C2410C] transition-all uppercase tracking-wider"
                >
                  <ShoppingBag size={20} />
                  COMPRAR
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="bg-toy-blue h-48 rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1657624001311-237c2c0352a3?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=400" className="w-full h-full object-cover" />
                </div>
                <div className="bg-toy-pink h-64 rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=400" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-toy-yellow h-64 rounded-3xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1596068587619-e4b11c7a3488?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=400" className="w-full h-full object-cover" />
                </div>
                <div className="bg-toy-peach h-48 rounded-3xl overflow-hidden shadow-lg">
                   <img src="https://images.unsplash.com/photo-1619768470847-f7db55f5d72e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=400" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-toy-pink font-bold text-lg mb-4 block">Nossa História</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Feito por Pais, <br />
              Para a <span className="text-toy-yellow">Felicidade</span> dos Filhos
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              A BrincaMundo nasceu do desejo de transformar o momento do brincar em algo extraordinário. Acreditamos que um brinquedo não é apenas um objeto, mas sim um passaporte para novas descobertas.
              <br /><br />
              Cada item em nossa loja no Shopee é criteriosamente selecionado para garantir máxima segurança e altíssimo valor pedagógico, sem nunca esquecer o principal: a pura diversão!
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Material 100% Atóxico e Seguro",
                "Foco em Desenvolvimento Cognitivo",
                "Entrega para todo o Brasil via Shopee",
                "Suporte humanizado e amoroso"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-slate-700">
                  <div className="w-6 h-6 bg-toy-blue rounded-full flex items-center justify-center text-white">
                    <Smile size={16} />
                  </div>
                  {text}
                </li>
              ))}
            </ul>
            <ShopeeButton />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">O que as Mamães dizem</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "Mariana Silva", 
                text: "Os brinquedos são lindos e chegaram super rápido pela Shopee! Meu filho não solta mais os blocos montáveis.", 
                color: "border-toy-blue" 
              },
              { 
                name: "Carla Oliveira", 
                text: "Qualidade impecável. Dá pra sentir o carinho na escolha de cada item. Recomendo muito a loja BrincaMundo!", 
                color: "border-toy-pink" 
              },
              { 
                name: "Renata Costa", 
                text: "O atendimento foi maravilhoso. O brinquedo é educativo e muito resistente. Com certeza comprarei mais!", 
                color: "border-toy-yellow" 
              }
            ].map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`bg-toy-pink-light/30 p-8 rounded-[2rem] border-l-8 ${t.color} relative`}
              >
                <div className="absolute -top-4 -left-4 text-toy-pink opacity-20">
                  <Smile size={64} />
                </div>
                <div className="flex gap-1 text-toy-yellow mb-4">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.text}"</p>
                <span className="font-bold text-slate-900">— {t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-24 px-6 relative overflow-hidden bg-toy-blue">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 animate-bounce"><Smile size={100} /></div>
          <div className="absolute bottom-10 right-10 animate-pulse"><Star size={120} /></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Pronto para ver um <br /> <span className="text-toy-yellow underline">grande sorriso?</span>
          </h2>
          <p className="text-xl text-blue-50 mb-12 opacity-90">
            Aproveite nossos preços especiais de lançamento na Shopee e garanta o presente perfeito hoje mesmo!
          </p>
          <ShopeeButton className="!bg-white !text-[#EE4D2D] hover:!bg-toy-yellow hover:!text-slate-900 border-4 border-toy-yellow" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-12 py-12 flex flex-col md:row justify-between items-center border-t border-toy-slate/5">
        <div className="flex items-center gap-4 mb-8 md:mb-0">
          <div className="w-10 h-10 bg-toy-orange rounded-full flex items-center justify-center text-white">
             <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-black tracking-tight text-toy-orange">BRINQUE<span className="text-toy-blue">LÂNDIA</span></span>
        </div>
        
        <p className="text-toy-slate-light italic font-medium mb-8 md:mb-0">Feito com ❤️ para pequenos exploradores</p>
        
        <div className="flex gap-8">
           <a href="#" className="text-toy-slate-light hover:text-toy-orange transition-all"><Instagram size={24} /></a>
           <a href="#" className="text-toy-slate-light hover:text-toy-orange transition-all"><Facebook size={24} /></a>
           <a href="#" className="text-toy-slate-light hover:text-toy-orange transition-all"><Twitter size={24} /></a>
        </div>
      </footer>
    </div>
  );
}
