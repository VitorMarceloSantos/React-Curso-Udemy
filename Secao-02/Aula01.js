/*
  CRIANDO COMPONENTES:
    - Na maioria dos projetos os componentes ficam em uma pasta chamada componetes, que devemos criar.
    - Geralamente são nomeados com camelCase.
    - No arquivo criamos uma função, que contém o código deste componente, e precisamos exportar essa função para utiliza-lá.

  IMPORTANDO COMPONETES:
    - A importação é a maneira que temos de reutilizar o componete.
    - Utlizaremos a sintaxe: import X from './components/X' onde X é o nome do componete.
    - Para colocar o componente importado em outro componente, precisamos coloca-lo em fora de tag: <FirstComponent>
    - E então finalizamos o ciclo de importação, vamos importar o FirstComponets em App.

  JSX:
    - Jsx é o HTML do React, onde vamos declarar as tags de HTML que serão exibidas no nagegador.
    - Ficam no return do componente.
    - Temos algumas diferenças do HTML, por exemplo: class será className., isso se dá pelas instruções semelhantes de JS e HTML, pois o JSX é JavaScript, então algumas terão nomes diferentes.
    - o JSX pode ter apenas um elemento pai.

  COMENTÁRIOS NO COMPONENTE
    - Podemos inserir comentários de duas maneiras no componente;
    - Na parte da função onde é executada a lógica, a sintaxe é: //Algum comentário;
    // - E támbem no JSX: {/* Algum comentário /}
    - As chaves nos permitem executar sentenças em JavaScript, veremos isso mais adiante.
*/