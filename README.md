<!-- PROJECT SHIELDS -->
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h3 align="center">Happy API</h3>
</p>



<!-- TABLE OF CONTENTS -->
## Tabela de conteúdo

* [Sobre o projeto](#sobre-o-projeto)
  * [Tecnologias usadas](#tecnologias-usadas)
* [Primeiros passos](#primeiros-passos)
  * [Pré-requisitos](#pré-requisitos)
  * [Instalação](#instalação)
* [Uso](#uso)
* [Contato](#contato)

<!-- ABOUT THE PROJECT -->
## Sobre o projeto

Happy é um projeto criado para ajudar pessoas a encontrarem orfanatos para visitação em suas regiões. O projeto possui suas versões em [web](https://github.com/leonardonegrao/happy-web) e [mobile](https://github.com/leonardonegrao/happy-mobile), feitas em ReactJS e React Native, respectivamente.

A API segue a arquitetura REST para permitir a comunicação com as duas plataformas, e foi criada usando NodeJS e TypeScript. Já o banco de dados é SQLite, e para a comunicação entre API e banco de dados é utilizado o TypeORM.

Orfanatos possuem dados descritivos, além de imagens, e suas localizações (latitude e longitude).

### Tecnologias usadas

* [NodeJS](https://nodejs.org/en/)
* [TypeSCript](https://www.typescriptlang.org/)
* [TypeORM](https://typeorm.io/#/)
* [Multer](https://www.npmjs.com/package/multer)
* [SQLite 3](https://www.npmjs.com/package/sqlite3)

<!-- GETTING STARTED -->
## Primeiros passos

Para rodar a aplicação, siga os passos a seguir.

### Pré-requisitos

É necessário ter o NodeJS e o NPM (ou Yarn) instalados na máquina para rodar a aplicação. Para instalar essas dependências, siga as instruções de seus sites:

* [NodeJS and NPM](https://nodejs.org/en/download/)
* [Yarn (Opcional)](https://yarnpkg.com/)

### Instalação

1. Clone o repositório
```sh
git clone https://github.com/leonardonegrao/happy-api.git
```
2. Instale as dependências do projeto

* Com NPM:
```sh
npm install
```

* Com Yarn:
```sh
yarn
```



<!-- USAGE EXAMPLES -->
## Uso

O projeto pode ser usado em conjunto com a versão [web](https://github.com/leonardonegrao/happy-web) ou a versão [mobile](https://github.com/leonardonegrao/happy-mobile) para uma experiência mais genuína. Porém também pode ser testado usando aplicações como [Postman](https://www.postman.com/) e [Insomnia](https://insomnia.rest/).

As rotas da API são as seguintes:

* Listagem de orfanatos:
```
GET http://localhost:3333/orphanages
```

* Recuperação de um orfanato por ID:
```
GET http://localhost:3333/orphanages/:id
```

* Criação de um orfanato:
```
POST http://localhost:3333/orphanages

--form 'name=Nome do orfanato' \
--form 'latitude=-23.330642' \
--form 'longitude=-51.1899153' \
--form 'about=Sobre o orfanato' \
--form 'instructions=Instruções de visita' \
--form 'opening_hours=Horário de funcionamento' \
--form 'open_on_weekends=Se o orfanato abre aos fins de semana' \
--form 'images=Imagens do orfanato (arquivos)'
```

<!-- CONTACT -->
## Contato

Leonardo Negrão - [leonardolnegrao@gmail.com](mailto:leonardolnegrao@gmail.com)

Link do projeto: [https://github.com/leonardonegrao/happy-api](https://github.com/leonardonegrao/happy-api)

<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/leonardonegrão
