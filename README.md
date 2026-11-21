# API de Livros com Python e Flask

Lista de Exercícios 1 — Programação (Web Coding).

## Objetivo da API

API mínima em Python e Flask para uma pequena livraria disponibilizar seu catálogo a outros sistemas.
A rota `GET /livros` retorna, em uma única resposta JSON, três livros definidos diretamente no código,
cada um com `id`, `titulo`, `autor` e `ano`.

Não há banco de dados, autenticação nem operações de cadastro, alteração ou exclusão.

## Estrutura

```
api-livros-flask/
├── app.py
├── requirements.txt
└── README.md
```

## Instalação das dependências

1. Crie o ambiente virtual:

   ```
   python -m venv venv
   ```

2. Ative o ambiente virtual:

   - Linux/macOS: `source venv/bin/activate`
   - Windows: `venv\Scripts\activate`

3. Instale as dependências:

   ```
   pip install -r requirements.txt
   ```

### Reconstrução do ambiente

Caso seja necessário reconstruir o `venv`: apague o diretório `venv`, recrie-o com
`python -m venv venv`, ative-o e rode `pip install -r requirements.txt`.

## Execução da aplicação

Com o ambiente virtual ativado:

```
python app.py
```

## Rota disponibilizada

| Método | Endereço                          | Descrição                         |
|--------|-----------------------------------|-----------------------------------|
| GET    | http://127.0.0.1:5000/livros      | Retorna os três livros em JSON    |

Exemplo de resposta:

```json
{
  "livros": [
    {"id": 1, "titulo": "Dom Casmurro", "autor": "Machado de Assis", "ano": 1899},
    {"id": 2, "titulo": "O Cortiço", "autor": "Aluísio Azevedo", "ano": 1890},
    {"id": 3, "titulo": "A Hora da Estrela", "autor": "Clarice Lispector", "ano": 1977}
  ]
}