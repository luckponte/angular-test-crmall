# CRMall Test

## Visão Geral

A implementação da solução foi feita baseado no modelo básico do próprio Angular, estendendo onde necessário. No caso, é uma página simples que lista diversos quadrinhos (acessados via API) que levam a uma página com mais detalhes sobre o mesmo quadrinho. Lá, é possível adicionar o item a um carrinho de compras e de lá (ou através de um link no topo da navegação) acessar o pedido total e "realizar" a compra (que simplesmente limpa o carrinho e volta à lista inicial). 

O repositório do projeto pode ser acessado por [esse link](https://github.com/luckponte/angular-test-crmall).

## Instalação

Para instalar o projeto, basta clonar o projeto ou extrair seus arquivos, e executar os comandos:

    npm install
    ng serve
   
 ## Estrutura
 O projeto, como comentado, segue uma estrutura simples, baseado no modelo inicial do Angular. Na raiz do diretório `app` encontram-se o componente base, bom como o módulo de rotas (único) e dois serviços universais: o de APIe o de checkout. 

O serviço de API provê uma interface para as chamadas `http` feitas à API, lida com erros e provê parâmetros necessários à chamada (como a chave de autorização). Já o de checkout engloba o estado e as operações lógicas que gerenciam o "carrinho" de compras e é usado pelos componentes de carrinho e da tela de checkout principal.

O sistema possui um módulo principal para os quadrinhos (`comics`) que contém dois componentes: um para a lista e outro para os detalhes. Também contém um serviço simples (`ComicDataService`) para gerência dos estados e para transmitir dados da lista para o detalhe sem precisar passar pela navegação. O detalhe também importa o módulo de botão do carrinho de compras.

Há por fim o componente de checkout, onde se concentra a lógica principal para a operação de compra, além de permitir fazer a revisão dos detalhes do pedido.
