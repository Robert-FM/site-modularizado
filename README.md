# 🌐 Página de Vendas Modular

Site institucional estático criado para demonstrar como uma página de vendas pode ser organizada em componentes reutilizáveis. O projeto apresenta um catálogo de produtos, páginas individuais e uma estrutura simples baseada em HTML, CSS e JavaScript.

## 🎯 Objetivo

Demonstrar, de forma prática, a separação de responsabilidades em um projeto web:

- componentes compartilhados, como header e footer;
- estilos centralizados em um único arquivo CSS;
- carregamento de componentes com JavaScript;
- páginas individuais para cada produto;
- organização de imagens e demais recursos em pastas próprias.

## ✨ Funcionalidades

- Landing page com hero, benefícios, catálogo e chamada para ação.
- Header e footer reutilizáveis em todas as páginas.
- Catálogo com três produtos de exemplo.
- Páginas individuais para os produtos 1, 2 e 3.
- Layout responsivo para telas menores.
- Imagens vetoriais em formato SVG.
- Carregamento assíncrono de componentes por meio do atributo `data-include`.
- Links para URLs externas de produtos, configuráveis em cada página individual.

## 🛠️ Tecnologias utilizadas

- HTML5 para a estrutura das páginas.
- CSS3 para layout, responsividade, tipografia, cores e interações visuais.
- JavaScript no navegador para carregar os componentes compartilhados.
- SVG para as imagens ilustrativas dos produtos.
- Google Fonts, referenciado no CSS para as famílias `DM Sans` e `Space Grotesk`.
- Python `http.server`, opcionalmente, para executar um servidor local.

## 🏗️ Organização do projeto

A aplicação utiliza uma organização simples por responsabilidade. As páginas HTML definem o conteúdo, `components/` concentra trechos reutilizáveis, `css/` concentra os estilos e `js/` realiza a inclusão dos componentes via `fetch()`.

O carregamento dos componentes depende de um servidor HTTP local, pois navegadores podem bloquear requisições `fetch()` quando os arquivos são abertos diretamente pelo protocolo `file://`.

## 📁 Estrutura do projeto

```text
site-institucional-modular/
├── index.html
├── components/
│   ├── header.html
│   └── footer.html
├── produtos/
│   ├── produto-1.html
│   ├── produto-2.html
│   └── produto-3.html
├── css/
│   └── style.css
├── js/
│   └── include.js
├── assets/
│   └── img/
│       ├── produto-1.svg
│       ├── produto-2.svg
│       └── produto-3.svg
└── README.md
```

### Principais arquivos

- `index.html`: página inicial e catálogo de produtos.
- `components/header.html`: cabeçalho compartilhado.
- `components/footer.html`: rodapé compartilhado.
- `js/include.js`: localiza elementos com `data-include` e insere o conteúdo dos componentes.
- `css/style.css`: estilos globais, layout, responsividade e componentes visuais.
- `produtos/produto-*.html`: páginas individuais dos produtos.
- `assets/img/`: imagens SVG utilizadas no catálogo e nas páginas de produto.

## 📋 Pré-requisitos

Não há dependências de projeto nem processo de compilação. Para visualizar corretamente a inclusão dos componentes, é necessário utilizar um servidor HTTP local.

Uma das opções abaixo é suficiente:

- Visual Studio Code com a extensão Live Server; ou
- Python instalado para utilizar o módulo `http.server`.

## ▶️ Como executar

### Opção 1 — VS Code + Live Server

1. Abra a pasta do projeto no Visual Studio Code.
2. Instale a extensão **Live Server**, caso ainda não esteja instalada.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

### Opção 2 — Servidor local com Python

No terminal, dentro da pasta do projeto, execute:

```bash
python -m http.server 8000
```

Depois, abra no navegador:

```text
http://localhost:8000
```

O projeto não possui um script de build, comando de produção ou gerenciador de dependências configurado.

## 💻 Como utilizar e personalizar

### Alterar header ou footer

Edite os arquivos:

```text
components/header.html
components/footer.html
```

As páginas que utilizam `data-include` carregarão o conteúdo atualizado quando forem abertas pelo servidor local.

### Alterar um produto

Para atualizar um card na página inicial, edite em `index.html`:

- nome do produto;
- descrição;
- imagem SVG;
- link para a página individual.

Para alterar uma página individual, edite o arquivo correspondente em `produtos/` e atualize o título, a descrição, a imagem e o link do botão do produto.

### Adicionar um novo produto

1. Duplique uma página existente dentro de `produtos/`.
2. Renomeie o arquivo.
3. Adicione ou crie a imagem correspondente em `assets/img/`.
4. Crie um novo card em `index.html` apontando para a página criada.

## 🎨 Identidade visual

O layout atual utiliza uma identidade visual baseada em azul, branco, azul-marinho e tons claros de apoio. Os estilos estão centralizados em `css/style.css`, que também contém as regras de responsividade para telas menores.

As fontes `DM Sans` e `Space Grotesk` são carregadas pelo Google Fonts. Caso não estejam disponíveis, o CSS utiliza fontes alternativas do sistema.

## 🧪 Testes

Não existem testes automatizados configurados no projeto. A verificação atual deve ser feita manualmente no navegador, conferindo:

- carregamento do header e footer;
- navegação entre a página inicial e os produtos;
- funcionamento dos links de ação;
- comportamento responsivo;
- carregamento das imagens SVG.

## ⚠️ Limitações conhecidas

- Os produtos e suas URLs são exemplos e precisam ser substituídos por dados reais.
- Os links absolutos do header e footer pressupõem publicação na raiz do domínio. Para publicar em uma subpasta, os caminhos devem ser ajustados para relativos.
- O carregamento dos componentes depende de um servidor HTTP local ou de hospedagem web.
- Não há backend, banco de dados, autenticação, formulário de contato ou integração de pagamentos implementados.

## 🚀 Próximos passos possíveis

Com base na estrutura atual, futuras evoluções podem incluir:

- substituir os dados de exemplo por informações reais;
- adicionar novos produtos seguindo o mesmo padrão;
- criar formulário de contato;
- integrar analytics ou uma solução de conversão;
- adicionar testes de navegação e validação HTML;
- ajustar os caminhos para suportar publicação em subpastas.

## 👨‍💻 Autor

**Robert Melo**

🔗 LinkedIn: [linkedin.com/in/robertdemelo](https://www.linkedin.com/in/robertdemelo/)

🌐 HTML | CSS | JavaScript | Desenvolvimento Web | Arquitetura modular de páginas
