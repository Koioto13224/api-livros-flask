# Frontend — Catálogo de Livros (React + Vite)

Lista de Exercícios 2 — Programação (Web Coding).

Interface em React que consulta a API Flask da Lista 1 (`GET /livros`). Ao clicar em **Buscar Livros**,
a página faz a requisição com `fetch()`, converte a resposta com `response.json()`, guarda os livros no
estado do componente e os exibe com `map()` (ID, título, autor e ano). Há mensagem de carregamento e
mensagem de erro caso a API não esteja disponível.

## Como executar

Os dois servidores precisam estar rodando.

1. API Flask (na pasta `api-livros-flask`, com o venv ativado):

   ```
   python app.py
   ```

2. Frontend (nesta pasta):

   ```
   npm install
   npm run dev
   ```

3. Abra o endereço mostrado pelo Vite (normalmente http://localhost:5173) e clique em **Buscar Livros**.

## Integração com o Flask

O `vite.config.js` usa o proxy do Vite: o React chama `/api/livros` e o Vite encaminha para
`http://127.0.0.1:5000/livros`, evitando bloqueio de CORS no navegador.
