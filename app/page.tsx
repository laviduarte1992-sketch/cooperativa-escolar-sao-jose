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
  const [activeTab, setActiveTab] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [studentId, setStudentId] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Mock de dados de alunos para consulta de notas
  const mockStudents: { [key: string]: any } = {
    "12345": {
      name: "Mariana Duarte",
      class: "6º Ano - Turma A",
      status: "Matriculado",
      grades: [
        { subject: "Língua Portuguesa", grade: 16, status: "Bom" },
        { subject: "Matemática", grade: 15, status: "Bom" },
        { subject: "Estudo do Meio / Ciências", grade: 17, status: "Muito Bom" },
        { subject: "Educação Física", grade: 18, status: "Excelente" }
      ]
    },
    "67890": {
      name: "Tidjane Baldé",
      class: "8º Ano - Turma B",
      status: "Matriculado",
      grades: [
        { subject: "Língua Portuguesa", grade: 14, status.ToString?: "Suficiente" },
        { subject: "Matemática", grade: 16, status: "Bom" },
        { subject: "Física e Química", grade: 15, status: "Bom" },
        { subject: "História", grade: 17, status: "Muito Bom" }
      ]
    }
  };

  const handleSearchGrades = (e: React.FormEvent) => {
    e.preventDefault();
    if (mockStudents[studentId]) {
      setSearchResult(mockStudents[studentId]);
    } else {
      setSearchResult({ notFound: true });
    }
  };

  const books = [
    { id: 1, title: "Manual de Matemática - 6º Ano", price: 3500, stock: "Disponível" },
    { id: 2, title: "Língua Portuguesa - 6º Ano", price: 3500, stock: "Disponível" },
    { id: 3, title: "Ciências da Natureza - 7º Ano", price: 4000, stock: "Disponível" },
    { id: 4, title: "Caderno de Atividades de Francês", price: 2000, stock: "Disponível" }
  ];

  const addToCart = (book: any) => {
    setCart([...cart, book]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Banner / Slogan */}
      <div className="bg-blue-900 text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
        Cooperativa Escolar São José (CESJ) | Lema: <span className="italic font-bold">"Falar Menos e Trabalhar Mais"</span> — Guiné-Bissau
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-800 text-white p-2 rounded-lg font-bold text-xl">CESJ</div>
              <div>
                <span className="font-bold text-lg text-blue-900 block leading-tight">São José</span>
                <span className="text-xs text-slate-500">Guiné-Bissau</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-medium">
              <button onClick={() => setActiveTab("inicio")} className={`hover:text-blue-600 transition ${activeTab === "inicio" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"}`}>Início</button>
              <button onClick={() => setActiveTab("notas")} className={`hover:text-blue-600 transition ${activeTab === "notas" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"}`}>Portal dos Pais (Notas)</button>
              <button onClick={() => setActiveTab("inscricoes")} className={`hover:text-blue-600 transition ${activeTab === "inscricoes" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"}`}>Inscrições</button>
              <button onClick={() => setActiveTab("loja")} className={`hover:text-blue-600 transition relative ${activeTab === "loja" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"}`}>
                Loja de Livros
                {cart.length > 0 && <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">{cart.length}</span>}
              </button>
              <button onClick={() => setActiveTab("contacto")} className={`hover:text-blue-600 transition ${activeTab === "contacto" ? "text-blue-700 border-b-2 border-blue-700 pb-1" : "text-slate-600"}`}>Contacto</button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-slate-700 hover:text-blue-900 focus:outline-none">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
            <button onClick={() => { setActiveTab("inicio"); setMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700 font-medium">Início</button>
            <button onClick={() => { setActiveTab("notas"); setMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700 font-medium">Portal dos Pais (Notas)</button>
            <button onClick={() => { setActiveTab("inscricoes"); setMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700 font-medium">Inscrições</button>
            <button onClick={() => { setActiveTab("loja"); setMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700 font-medium">Loja de Livros</button>
            <button onClick={() => { setActiveTab("contacto"); setMenuOpen(false); }} className="block w-full text-left py-2 text-slate-700 font-medium">Contacto</button>
          </div>
        )}
      </nav>

      {/* Main Content Areas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* INICIO */}
        {activeTab === "inicio" && (
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between">
              <div className="space-y-4 max-w-2xl">
                <span className="bg-blue-800 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">Ensino de Excelência</span>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Cooperativa Escolar São José</h1>
                <p className="text-blue-100 text-base sm:text-lg">Plataforma digital moderna para acompanhamento académico, inscrições online e aquisição de manuais escolares na Guiné-Bissau.</p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <button onClick={() => setActiveTab("notas")} className="bg-white text-blue-900 font-bold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition">Consultar Notas</button>
                  <button onClick={() => setActiveTab("inscricoes")} className="bg-blue-600 border border-blue-400 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-500 transition">Fazer Inscrição</button>
                </div>
              </div>
              <div className="mt-8 md:mt-0 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 text-center max-w-xs">
                <Shield className="w-12 h-12 mx-auto text-blue-200 mb-2" />
                <h3 className="font-bold text-lg">Portal Seguro</h3>
                <p className="text-xs text-blue-100 mt-1">Aceda às informações dos seus educandos de forma rápida e transparente.</p>
              </div>
            </div>

            {/* Quick Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div onClick={() => setActiveTab("notas")} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 mb-4 group-hover:bg-blue-800 group-hover:text-white transition">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Portal dos Pais & Notas</h3>
                <p className="text-slate-600 text-sm mt-2">Consulte os boletins de notas, aproveitamento escolar e faltas introduzindo o número de matrícula do aluno.</p>
              </div>

              <div onClick={() => setActiveTab("inscricoes")} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 mb-4 group-hover:bg-blue-800 group-hover:text-white transition">
                  <UserCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inscrições Online</h3>
                <p className="text-slate-600 text-sm mt-2">Submeta o formulário de pré-inscrição para novos alunos de forma simples e digital para o ano letivo.</p>
              </div>

              <div onClick={() => setActiveTab("loja")} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition cursor-pointer group">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 mb-4 group-hover:bg-blue-800 group-hover:text-white transition">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Loja de Manuais</h3>
                <p className="text-slate-600 text-sm mt-2">Adquira os livros e manuais escolares recomendados para cada ano de escolaridade.</p>
              </div>
            </div>
          </div>
        )}

        {/* PORTAL DE NOTAS */}
        {activeTab === "notas" && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Portal dos Pais: Consulta de Notas</h2>
              <p className="text-sm text-slate-600 mt-1">Insira o número de identificação do aluno (ex: teste com <span className="font-mono font-bold text-blue-700">12345</span> ou <span className="font-mono font-bold text-blue-700">67890</span>)</p>
            </div>

            <form onSubmit={handleSearchGrades} className="flex gap-3">
              <input 
                type="text" 
                placeholder="Nº de Matrícula (ex: 12345)" 
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-800"
                required
              />
              <button type="submit" className="bg-blue-900 text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-800 transition flex items-center gap-2">
                <Search size={18} /> Consultar
              </button>
            </form>

            {searchResult && searchResult.notFound && (
              <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl text-sm">
                Nenhum aluno encontrado com este número de matrícula. Tente novamente (ex: 12345).
              </div>
            )}

            {searchResult && !searchResult.notFound && (
              <div className="space-y-6 pt-4 border-t border-slate-100">
                <div className="bg-blue-50 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-blue-900 text-lg">{searchResult.name}</h3>
                    <p className="text-sm text-blue-700">{searchResult.class}</p>
                  </div>
                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full font-medium">{searchResult.status}</span>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700 text-xs uppercase tracking-wider">
                        <th className="p-3">Disciplina</th>
                        <th className="p-3">Nota (0-20)</th>
                        <th className="p-3">Avaliação</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-sm">
                      {searchResult.grades.map((g: any, index: number) => (
                        <tr key={index}>
                          <td className="p-3 font-medium text-slate-800">{g.subject}</td>
                          <td className="p-3 font-bold text-blue-900">{g.grade} valores</td>
                          <td className="p-3"><span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{g.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* INSCRIÇÕES */}
        {activeTab === "inscricoes" && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Formulário de Inscrição / Pré-Matrícula</h2>
              <p className="text-sm text-slate-600 mt-1">Preencha os dados do aluno para o ano letivo na Cooperativa Escolar São José.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Inscrição submetida com sucesso! A secretaria entrará em contacto."); }} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome Completo do Aluno</label>
                <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-800" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Classe a Frequentar</label>
                  <select className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-800">
                    <option>5º Ano</option>
                    <option>6º Ano</option>
                    <option>7º Ano</option>
                    <option>8º Ano</option>
                    <option>9º Ano</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Ano Letivo</label>
                  <input type="text" defaultValue="2026/2027" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 bg-slate-100 text-slate-600" readOnly />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Encarregado de Educação</label>
                <input type="text" className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-800" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contacto Telefónico (Guiné-Bissau)</label>
                <input type="tel" placeholder="+245 ..." className="w-full border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-800" required />
              </div>

              <button type="submit" className="w-full bg-blue-900 text-white py-3 rounded-xl font-bold hover:bg-blue-800 transition">
                Submeter Inscrição Online
              </button>
            </form>
          </div>
        )}

        {/* LOJA DE LIVROS */}
        {activeTab === "loja" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-blue-900">Loja de Manuais Escolares</h2>
                <p className="text-sm text-slate-600">Adquira os livros e material aprovados pela CESJ.</p>
              </div>
              <div className="bg-blue-100 text-blue-900 px-4 py-2 rounded-xl font-bold flex items-center gap-2">
                <ShoppingCart size={18} /> Carrinho: {cart.length} itens
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {books.map((book) => (
                <div key={book.id} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition">
                  <div className="space-y-2">
                    <div className="w-full h-32 bg-blue-50 rounded-xl flex items-center justify-center text-blue-800 font-bold">
                      <BookOpen size={36} />
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">{book.title}</h3>
                    <p className="text-xs text-green-600 font-medium">{book.stock}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-bold text-blue-900">{book.price} XOF</span>
                    <button onClick={() => addToCart(book)} className="bg-blue-900 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                      Adicionar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {cart.length > 0 && (
              <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4 max-w-xl mx-auto mt-8">
                <h3 className="font-bold text-lg text-blue-900">Resumo da Encomenda</h3>
                <ul className="divide-y divide-slate-100 text-sm">
                  {cart.map((item, i) => (
                    <li key={i} className="py-2 flex justify-between">
                      <span>{item.title}</span>
                      <span className="font-bold">{item.price} XOF</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-200 flex justify-between font-bold text-base">
                  <span>Total:</span>
                  <span className="text-blue-900">{cart.reduce((acc, curr) => acc + curr.price, 0)} XOF</span>
                </div>
                <button onClick={() => { setOrderSuccess(true); setCart([]); }} className="w-full bg-green-600 text-white py-3 rounded-xl font-bold hover:bg-green-700 transition">
                  Finalizar Encomenda (Levantamento na Escola)
                </button>
                {orderSuccess && (
                  <p className="text-green-600 text-center text-sm font-medium">Encomenda registada! Pode efetuar o pagamento e levantamento na secretaria da escola.</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* CONTACTO */}
        {activeTab === "contacto" && (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6 text-center">
            <h2 className="text-2xl font-bold text-blue-900">Contacte a Secretaria</h2>
            <p className="text-sm text-slate-600">Estamos ao dispor para esclarecer qualquer dúvida sobre matrículas ou propinas.</p>
            <div className="space-y-3 text-left bg-blue-50 p-6 rounded-xl border border-blue-100">
              <p className="text-sm"><strong>Localização:</strong> Bissau, Guiné-Bissau</p>
              <p className="text-sm"><strong>Telefone:</strong> +245 ...</p>
              <p className="text-sm"><strong>Email:</strong> geral@cooperativasaosejose.gw</p>
              <p className="text-sm"><strong>Lema:</strong> "Falar Menos e Trabalhar Mais"</p>
            </div>
          </div>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16 py-6 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Cooperativa Escolar São José (CESJ) — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
