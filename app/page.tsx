"use client";

import React, { useState } from "react";
import { 
  BookOpen, 
  GraduationCap, 
  ShoppingCart, 
  UserCheck, 
  CheckCircle, 
  Search, 
  Download, 
  Shield, 
  Phone, 
  Menu, 
  X 
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Estado da Loja
  const [cart, setCart] = useState<{ id: number; title: string; price: number; grade: string }[]>([]);
  const [selectedGradeFilter, setSelectedGradeFilter] = useState("todos");

  // Estado do Boletim (Pesquisa)
  const [studentId, setStudentId] = useState("2026-0842");

  // Dados Mockados dos Alunos
  const studentsData: Record<string, any> = {
    "2026-0842": {
      name: "Mamadú Baldé",
      class: "10º Ano - Turma A",
      enrollment: "2026-0842",
      guardian: "Ibraima Baldé",
      status: "Matriculado",
      attendance: "96%",
      grades: [
        { subject: "Língua Portuguesa", t1: 14, t2: 15, exam: 16, final: 15 },
        { subject: "Matemática", t1: 12, t2: 14, exam: 13, final: 13 },
        { subject: "Física", t1: 11, t2: 13, exam: 12, final: 12 },
        { subject: "Química", t1: 15, t2: 16, exam: 15, final: 15 },
        { subject: "História de Guiné-Bissau", t1: 17, t2: 18, exam: 17, final: 17 },
        { subject: "Inglês", t1: 16, t2: 15, exam: 16, final: 16 }
      ]
    }
  };

  const books = [
    { id: 1, title: "Língua Portuguesa 10º Ano", grade: "10º", price: 6500 },
    { id: 2, title: "Matemática A - 10º Ano", grade: "10º", price: 7000 },
    { id: 3, title: "Física e Química 10º Ano", grade: "10º", price: 7500 },
    { id: 4, title: "História da Guiné-Bissau 11º Ano", grade: "11º", price: 6000 },
    { id: 5, title: "Biologia e Geologia 11º Ano", grade: "11º", price: 7200 },
    { id: 6, title: "Uniforme Oficial CESJ (Polo + Calça)", grade: "Geral", price: 12000 }
  ];

  const addToCart = (book: any) => {
    setCart([...cart, book]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price, 0);

  const currentStudent = studentsData[studentId] || null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* NAVEGAÇÃO PRINCIPAL */}
      <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab("home")}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-extrabold text-xl border-2 border-yellow-400">
              CESJ
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Cooperativa Escolar São José</h1>
              <p className="text-xs text-yellow-300 font-medium tracking-wide">"Falar Menos e Trabalhar Mais"</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 font-medium text-sm">
            <button onClick={() => setActiveTab("home")} className={`hover:text-yellow-300 transition ${activeTab === "home" ? "text-yellow-300 underline underline-offset-4" : ""}`}>Início</button>
            <button onClick={() => setActiveTab("boletim")} className={`hover:text-yellow-300 transition ${activeTab === "boletim" ? "text-yellow-300 underline underline-offset-4" : ""}`}>Portal do Encarregado</button>
            <button onClick={() => setActiveTab("inscricao")} className={`hover:text-yellow-300 transition ${activeTab === "inscricao" ? "text-yellow-300 underline underline-offset-4" : ""}`}>Inscrições Online</button>
            <button onClick={() => setActiveTab("loja")} className={`hover:text-yellow-300 transition flex items-center gap-1 ${activeTab === "loja" ? "text-yellow-300 underline underline-offset-4" : ""}`}>
              Loja de Livros
              {cart.length > 0 && <span className="bg-yellow-400 text-blue-900 text-xs px-2 py-0.5 rounded-full font-bold">{cart.length}</span>}
            </button>
          </nav>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-950 px-4 pt-2 pb-4 flex flex-col gap-3 text-sm font-medium border-t border-blue-800">
            <button onClick={() => { setActiveTab("home"); setMobileMenuOpen(false); }} className="text-left py-1">Início</button>
            <button onClick={() => { setActiveTab("boletim"); setMobileMenuOpen(false); }} className="text-left py-1">Portal do Encarregado</button>
            <button onClick={() => { setActiveTab("inscricao"); setMobileMenuOpen(false); }} className="text-left py-1">Inscrições Online</button>
            <button onClick={() => { setActiveTab("loja"); setMobileMenuOpen(false); }} className="text-left py-1">Loja de Livros ({cart.length})</button>
          </div>
        )}
      </header>

      {/* BANNER PRINCIPAL */}
      {activeTab === "home" && (
        <main>
          <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Bem-vindo à Cooperativa Escolar São José</h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Facilitamos o acesso aos serviços escolares para encarregados de educação em Bissau e em todas as regiões da Guiné-Bissau.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => setActiveTab("boletim")} className="bg-yellow-400 text-blue-950 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition">
                  Consultar Notas do Filho
                </button>
                <button onClick={() => setActiveTab("inscricao")} className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-slate-100 transition">
                  Fazer Inscrição Online
                </button>
              </div>
            </div>
          </section>

          {/* SERVIÇOS EM DESTAQUE */}
          <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <UserCheck className="text-blue-600 mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">Acompanhamento Académico</h3>
                <p className="text-slate-600 text-sm mb-4">Consulte as pautas de exames, faltas e o nível de desempenho dos alunos sem precisar ir à direção.</p>
                <button onClick={() => setActiveTab("boletim")} className="text-blue-600 font-bold text-sm hover:underline">Aceder ao Portal &rarr;</button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <GraduationCap className="text-blue-600 mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">Matrículas e Inscrições</h3>
                <p className="text-slate-600 text-sm mb-4">Inscreva novos alunos ou confirme a renovação para o ano letivo de forma simples e rápida.</p>
                <button onClick={() => setActiveTab("inscricao")} className="text-blue-600 font-bold text-sm hover:underline">Iniciar Inscrição &rarr;</button>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <BookOpen className="text-blue-600 mb-4" size={40} />
                <h3 className="font-bold text-xl mb-2">Compra de Manuais Escolares</h3>
                <p className="text-slate-600 text-sm mb-4">Reserve os livros escolares e materiais oficiais com pagamento por Orange Money ou MTN Mobile Money.</p>
                <button onClick={() => setActiveTab("loja")} className="text-blue-600 font-bold text-sm hover:underline">Ver Catálogo &rarr;</button>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* PORTAL DO ENCARREGADO (NOTAS) */}
      {activeTab === "boletim" && (
        <section className="max-w-5xl mx-auto px-4 py-10">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Portal do Encarregado de Educação</h2>
            <p className="text-slate-600 text-sm mb-6">Insira o código de matrícula do aluno para visualizar o boletim de notas.</p>
            
            <div className="flex gap-3 max-w-md">
              <input 
                type="text" 
                value={studentId} 
                onChange={(e) => setStudentId(e.target.value)} 
                placeholder="Ex: 2026-0842" 
                className="flex-1 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none"
              />
              <button className="bg-blue-900 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2">
                <Search size={18} /> Pesquisar
              </button>
            </div>
          </div>

          {currentStudent ? (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-blue-900 text-white p-6 flex justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold">{currentStudent.name}</h3>
                  <p className="text-blue-200 text-sm">{currentStudent.class} | Matrícula: {currentStudent.enrollment}</p>
                </div>
                <div>
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold">{currentStudent.status}</span>
                  <p className="text-blue-200 text-xs mt-1">Assiduidade: {currentStudent.attendance}</p>
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase bg-slate-50">
                      <th className="p-3">Disciplina</th>
                      <th className="p-3 text-center">1º Trimestre</th>
                      <th className="p-3 text-center">2º Trimestre</th>
                      <th className="p-3 text-center">Exame</th>
                      <th className="p-3 text-center font-bold">Média Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentStudent.grades.map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-800">{item.subject}</td>
                        <td className="p-3 text-center">{item.t1}</td>
                        <td className="p-3 text-center">{item.t2}</td>
                        <td className="p-3 text-center">{item.exam}</td>
                        <td className="p-3 text-center font-bold text-blue-900">{item.final}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-6 flex justify-end">
                  <button className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-700">
                    <Download size={16} /> Baixar Boletim em PDF
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-yellow-50 text-yellow-800 p-6 rounded-xl border border-yellow-200 text-center">
              Aluno não encontrado com a matrícula inserida. Por favor, confirme o número junto da secretaria.
            </div>
          )}
        </section>
      )}

      {/* LOJA DE LIVROS */}
      {activeTab === "loja" && (
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Loja de Manuais e Uniformes Escolares</h2>
              <p className="text-slate-600 text-sm">Compre os livros oficiais da CESJ sem filas.</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
              <ShoppingCart className="text-blue-900" size={24} />
              <div>
                <p className="text-xs text-slate-500 font-bold">Carrinho</p>
                <p className="text-sm font-extrabold text-blue-900">{cartTotal.toLocaleString()} XOF ({cart.length} itens)</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {books.map((book) => (
              <div key={book.id} className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="bg-blue-100 text-blue-900 text-xs px-2.5 py-1 rounded-full font-bold">{book.grade}</span>
                  <h3 className="font-bold text-lg text-slate-800 mt-3 mb-1">{book.title}</h3>
                  <p className="text-slate-500 text-xs mb-4">Manual oficial aprovado pelo programa curricular.</p>
                </div>
                <div className="flex items-center justify-between border-t pt-4">
                  <span className="font-extrabold text-slate-900 text-lg">{book.price.toLocaleString()} XOF</span>
                  <button 
                    onClick={() => addToCart(book)}
                    className="bg-blue-900 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-blue-800 transition"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 mt-20 border-t border-slate-800 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="text-white font-bold mb-1">Cooperativa Escolar São José (CESJ)</p>
          <p className="text-xs mb-4">Bissau, República da Guiné-Bissau</p>
          <p className="text-xs text-slate-500">© 2026 CESJ. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
