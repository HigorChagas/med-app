# IDE, plugins e navegadores

*Integrated Development Environment*
Ambiente de Desenvolvimento Integrado
 - É um software para criar aplicações que combina ferramentas comuns de desenvolvedores em uma única interface de usuário gráfica.

## Alguns plugins
 - Beautify
 - Live Server
 - Auto Import
 - Bookmarks

### Plugins para utilizar
 - Code Runner
 - SonarLint
 - GitLens

## NPM
Node Package Manager
É um gerenciador de pacotes utilizado para administrar bibliotecas e frameworks utilizados em uma aplicação.

## Export/Import
 - module.exports: É um objeto especial que está incluído em toda aplicação Node.js por **padrão**, o module é uma variável que apresenta o módulo atual, e o exports é um objeto que será exposto como um módulo.
 - import: É uma declaração **estática** usada para vincular módulos qu eforam exportados e são chamados de 'ligação ao vivo' porque são atualizadas pelo módulo que exporta aquela ligação.

 ## Módulos internos e Externos
No Node.js **módulos** são blocos de código encapsulados que se comunicam com um aplicativo externo com base em sua funcionalidade relacionada.
 - Todo arquivo que contenha código JS é considerado um módulo no Node.js, contendo variáveis e funções que podem ser exportadas ou não.

 ### Módulos Próprios
  - Módulos **nativos**
  - Módulos **públicos**
  - Módulos **criados pela aplicação**

### Módulos para interação
São utilizados para interagir com arquivos de diversos formatos e também arquivos do sistema.
 - fs, path e inquirer são exemplos de módulos de interação.

### Módulos para requisições
Sâo módulos internos que auxiliam o sistema na interação com outras plataformas externas.
 - Alguns módulos são o http e o url, eles ajudam na comunicação de uma API com outras APIs ou URLs externas.

------------------------------------------------------------------------------

# Apresentação de NoSQL
É um termo genérico que representa os bancos de dados não relacionais, uma classe definida de banco de dados que fornece mecanismos para armazenamento e recuperação de dados que são modelados de forma diferente das convencionais feitas nos bancos relacionais.

A modelagem dos bancos NoSQL se dão através de documentos JSON, isso faz com que seja mais flexível e rápida.

Exemplos de bancos NoSQL:
 - MongoDB
 - Redis
 - Cassandra
 - Amazon DynamoDB

# Definição de Arquitetura de uma aplicação
Arquiteturas de aplicação são técnicas e padrões usados para projetar e desenvolver uma aplicação. Ela fornece um *roadmap* e práticas recomendadas a serem seguidas durante o desenvolvimento para ter uma aplicação bem estruturada e de fácil manutenabilidade.

## Características de uma boa arquitetura.
 - Interoperabilidade.
 - Compatibilidade.
 - Performance.
 - Desempenho.
 - Escalabilidade.

# Diferença entre arquitetura e design pattern
A maioria das arquiteturas são inspiradas em sistemas que resolvem problemas parecidos aos que estão sendo solucionados por ela. O design pattern geralmente está relacionado a soluções porntas e pontuais no nível de código.

A arquitetura de software é responsável pelo esqueleto e pela infraestrutura de alto nível de um software.
O design pattern é responsável pela estrutura no nível de código, como cada módulo executa uma função, o escopo das classes e também os objetivos das funções.
[Exemplo no Draw.IO](https://app.diagrams.net/)

# Exemplos de arquitetura de aplicações
**Arquitetura serverless**: refere-se à solução de aplicativo que depende de serviços de terceiros para gerenciar a complexidade dos servidores e o gerenciamento do backend 
**Arquitetura orientada a eventos**: tem como base principal o desacoplamento das partes do sistema e como cada parte será acionada quando um evento interessante de outra parte foi acionado.
**Arquitetura de microserviços**: é um uso muito popular nos últimos anos, ele depende de serviços modulares pequenos e independentes, em que cada serviço resolve um problema específico ou executa uma tarefa exclusiva, eles se comunicam através de uma API bem definida.
------------------------------------------------------------------------------
# Detalhando o MVC
**MVC** é um padrão de design utilizado para desacoplar a interface de usuário, dados e a lógica do aplicativo, a sigla significa Model, View, Controller.

Cada uma das partes é responsável por uma parte importante do sistema.
 - Model: Tem a responsabilidade dos modelos, que é a representação do negócio, também é responsável por acessar e manipular os dados da aplicação
 - View: é responsável pela interface que será apresentada, mostrando as informações do **Model** para o usuário, ela auxilia na interação do usuário com o sistema de forma direta.
 - Controller: é a camada de controle, responsável por ligar o Model e a View, fazendo com que os modelos possam ser repassados para as visualizações e vice-versa.

 -----------------------------------------------------------------------------
 
 # Exemplos de aplicações Middleware
  - Aplicação de Mensageria
  - Business Intelligente
  - Autenticação
  - Balanceamento de carga

O middleware é um facilitador da comunicação e integração de diferentes sistemas e API são regras e protocolos que conectam diferentes parte do software.

## Saiba mais
Em geral, o middleware engloba tudo e existem várias possibilidades
 - Servidores WEB
 - Outras aplicações
 - Sensores e periféricos
 - APIs
 - Automações
 - Mensageria

 -----------------------------------------------------------------------------

 # Conceito dos Tipos de Autenticação
Existem vários tipos de autenticação e todos tem como objetivo: proteger os sistemas, aplicativos e serviços contra invasões e violações de segurança.
 - Tokens, senhas e PINs
 - Autenticação de chaves públicas e privadas.
 - AUtenticação baseada em SMS
 - Autenticação biométrica e identidade digital.
 
## Definição de JWT e quando usar.
JWT ou JSON Web Token
É um padrão da internet para criação de dados como assinatura opcional ou criptografia cujo **payload** contém o JSON que afirma algum número de declarações
 - Os tokens são assinados usando um segredo privado ou chave pública/privada.
 

![jwt debugger](https://cdn.auth0.com/website/jwt/introduction/debugger.png)

**Header**: Cabeçalho, algoritmo utilizado e tipo de token

**Payload**: Dado de identificação do usuário.

**Verify Signature**: Garantir que o cabeçalho e os dados são confiáveis.

### Entendendo um Middleware de Autenticação
Um middleware de autenticação serve justamente para que seja possível se autenticar via uma aplicação terceira e intermediária
 - Autenticar e proteger aplicações de possíveis invasões ou violações de segurança