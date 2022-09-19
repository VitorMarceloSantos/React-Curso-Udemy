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

  IMAGENS NO REACT
    - As imagens podem ficar na pasta public, e chamadas diretamente pela tag /nome.jpg(<img src="/nome.jpg" alt="Paisagem">). Pois a pasta public fica linkada diretamente com o src das imagens.
    - Colocando as imagens dentro do src(criando uma pasta chamada assets), precisamos importar as imagens(import nomeImagem from "./endereço.jpg"), e o src da imagem é dinâmico com o nome da importação.(<img src={nomeImagem} alt="Paisagem">).

  HOOKS
    -Recursos do React que tem diversas funções, como guardar e alterar o estado de algum dado na nossa aplicação. Todos os hooks começam com use, por exemplo useState. Podemos criar nosso hook, chamando de hookCustom.
    - Os hooks precisam ser importados.
*/