import { useState } from 'react'
import './App.css'

// Endereço da API Flask. O proxy do Vite (vite.config.js) encaminha
// /api/livros para http://127.0.0.1:5000/livros, evitando bloqueio de CORS.
const URL_API = '/api/livros'

function App() {
  // Estado do componente: livros recebidos, carregamento e erro.
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  // Executada somente quando o botão "Buscar Livros" é clicado.
  async function buscarLivros() {
    setCarregando(true)
    setErro('')
    setLivros([])

    try {
      const response = await fetch(URL_API, { method: 'GET' })

      if (!response.ok) {
        throw new Error(`Erro HTTP ${response.status}`)
      }

      const dados = await response.json()
      setLivros(dados.livros)
    } catch {
      setErro('Não foi possível buscar os livros. Verifique se a API Flask está em execução.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <main className="catalogo">
      <h1>Catálogo de Livros</h1>

      <button type="button" onClick={buscarLivros} disabled={carregando}>
        Buscar Livros
      </button>

      {/* Área de mensagens de carregamento ou erro */}
      <div className="mensagens" aria-live="polite">
        {carregando && <p className="carregando">Carregando livros...</p>}
        {erro && <p className="erro">{erro}</p>}
      </div>

      {/* Área de exibição dos livros */}
      <section className="livros">
        {livros.map((livro) => (
          <article key={livro.id} className="livro">
            <p><strong>ID:</strong> {livro.id}</p>
            <p><strong>Título:</strong> {livro.titulo}</p>
            <p><strong>Autor:</strong> {livro.autor}</p>
            <p><strong>Ano:</strong> {livro.ano}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
