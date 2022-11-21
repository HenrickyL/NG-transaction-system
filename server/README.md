<style> 

  r { color: Red } b { color: Blue } gr { color: Green }  g { color: Gray } 

</style>




# Backend
## Entities

* User
* Account
* Transactions

## Use Cases:

- **Qualquer pessoa deverá poder fazer parte da NG. Para isso, basta realizar o** <r>**cadastro**</r> **informando *username* e *password*.**
- 
  -[x] <g>Deve-se garantir que cada *username* seja **único** e composto por, pelo menos, 3 caracteres.</g>
  -[x] <g>Deve-se garantir que a *password* seja composta por pelo menos 8 caracteres, um número e uma letra maiúscula. Lembre-se que ela deverá ser ***hashada*** ao ser armazenada no banco.</g>
  -[x] <g>Durante o processo de cadastro de um novo usuário, sua respectiva **conta** deverá ser **criada** automaticamente na tabela **Accounts** com um *balance* de **R$ 100,00**. É importante ressaltar que caso ocorra algum problema e o usuário não seja criado,  a tabela **Accounts** não deverá ser afetada.</g>
  
- **Todo usuário deverá conseguir** <r>**logar**</r> **na aplicação informando *username* e *password.* Caso o login seja bem-sucedido, um token JWT (com 24h de validade) deverá ser fornecido.**


- **Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de** <r>**visualizar**</r> **seu próprio *balance* atual. **
  -[ ] Um usuário A não pode visualizar o *balance* de um usuário B, por exemplo.

- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de realizar um *cash-out* informando o *username* do usuário que sofrerá o *cash-in*), caso apresente *balance* suficiente para isso. Atente-se ao fato de que um usuário não deverá ter a possibilidade de realizar uma transferência para si mesmo.
- Toda nova transação bem-sucedida deverá ser registrada na tabela **Transactions**. Em casos de falhas transacionais, a tabela **Transactions** não deverá ser afetada.
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de visualizar as transações financeiras (*cash-out* e *cash-in*) que participou. Caso o usuário não tenha participado de uma determinada transação, ele nunca poderá ter acesso à ela.
- Todo usuário logado (ou seja, que apresente um token válido) deverá ser capaz de filtrar as transações financeiras que participou por:
    - Data de realização da transação e/ou
        - Transações de *cash-out;*
        - Transações de *cash-in.*