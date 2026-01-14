  SAIBA + SAÚDE
  Backend — API e Serviços



  Visão Geral

Este repositório contém o BACKEND da plataforma Saiba + Saúde**, responsável por:

- Regras de negócio
- Persistência de dados
- Autenticação e controle de acesso
- Comunicação entre serviços

A arquitetura foi pensada para **escala, segurança e manutenção a longo prazo**.

  Stack Principal

  Node.js + Express

A API foi desenvolvida com **Node.js** e **Express**, garantindo:

- Performance
- Simplicidade
- Facilidade de integração com outras camadas do sistema

  Arquitetura

  Microsservices

O backend segue uma arquitetura baseada em **microservices**, permitindo:

- Separação clara de responsabilidades  
- Escalabilidade independente dos serviços  
- Facilidade de manutenção e evolução  


  Autenticação & Controle de Acesso

   Em desenvolvimento:

- Autenticação baseada em **JWT (JSON Web Token)**
- Uso de **Refresh Token** para maior segurança e controle de sessão
- Implementação de **RBAC (Role-Based Access Control)** para controle de permissões por tipo de usuário

Essa abordagem garante um fluxo seguro e flexível para diferentes perfis de acesso.


  Banco de Dados & ORM

  Sequelize

Utilizamos **Sequelize** como ORM para interação com o banco de dados.

Principais benefícios:

- Manipulação do banco usando **objetos JavaScript**
- Redução do uso de SQL puro
- Código mais limpo e manutenível

  Migrations

O projeto utiliza **migrations integradas**, permitindo:

- Controle de versões do banco de dados
- Alterações seguras na estrutura
- Padronização entre ambientes (dev, staging, produção)

Sem migrations, qualquer mudança no banco se torna um risco — aqui, isso é evitado.

---

  Segurança

- Proteção contra **SQL Injection**
- Uso de ORM para sanitização de queries
- Estrutura preparada para autenticação segura
- Deploy mais confiável e previsível


  Integração

O combo **Express + Sequelize** garante:

- Desenvolvimento ágil
- Estrutura sólida
- Facilidade de expansão da API

---

  Saiba + Saúde
Tecnologia que aproxima. Gestão que transforma.

