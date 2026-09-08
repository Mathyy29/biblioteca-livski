/* =========================
   MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const menuLateral =
    document.getElementById("menuLateral");


if(menuBtn && menuLateral){

    menuBtn.addEventListener(
        "click",
        function(){

            menuLateral.classList.toggle("aberto");

        }
    );


    document.addEventListener(
        "click",
        function(event){

            if(
                !menuLateral.contains(event.target) &&
                !menuBtn.contains(event.target)
            ){

                menuLateral.classList.remove("aberto");

            }

        }
    );

}


/* =========================
   CARRINHO
========================= */

let carrinho = JSON.parse(
    localStorage.getItem("carrinhoLivski")
) || [];


/* =========================
   CONTADOR
========================= */

function atualizarContador(){

    const contador =
        document.getElementById(
            "contadorCarrinho"
        );


    if(!contador){

        return;

    }


    let total = 0;


    carrinho.forEach(function(livro){

        total += livro.quantidade;

    });


    contador.textContent = total;

}


/* =========================
   COMPRAR
========================= */

document
    .querySelectorAll(".comprar")
    .forEach(function(botao){

        botao.addEventListener(
            "click",
            function(){

                const nome =
                    botao.dataset.nome;

                const autor =
                    botao.dataset.autor;

                const preco =
                    parseFloat(
                        botao.dataset.preco
                    );

                const imagem =
                    botao.dataset.imagem;


                const livroExistente =
                    carrinho.find(
                        livro =>
                        livro.nome === nome
                    );


                if(livroExistente){

                    livroExistente.quantidade++;

                }

                else{

                    carrinho.push({

                        nome:nome,

                        autor:autor,

                        preco:preco,

                        imagem:imagem,

                        quantidade:1

                    });

                }


                localStorage.setItem(
                    "carrinhoLivski",
                    JSON.stringify(carrinho)
                );


                atualizarContador();


                /* Pequena confirmação */

                const textoOriginal =
                    botao.textContent;


                botao.textContent =
                    "Adicionado ✓";


                botao.style.background =
                    "#2d7a32";


                setTimeout(
                    function(){

                        botao.textContent =
                            textoOriginal;

                        botao.style.background =
                            "#c59b5f";

                    },
                    1200
                );

            }
        );

    });


/* =========================
   FAQ
========================= */

document
    .querySelectorAll(".faq-question")
    .forEach(function(pergunta){

        pergunta.addEventListener(
            "click",
            function(){

                const resposta =
                    pergunta.nextElementSibling;


                resposta.classList.toggle(
                    "ativo"
                );

            }
        );

    });


/* =========================
   SAC
========================= */

const formSAC =
    document.getElementById(
        "formSAC"
    );


if(formSAC){

    formSAC.addEventListener(
        "submit",
        function(event){

            event.preventDefault();


            alert(
                "Mensagem enviada com sucesso! Obrigado por entrar em contato com a Biblioteca Livski."
            );


            this.reset();

        }
    );

}


/* =========================
   CONTADOR INICIAL
========================= */

atualizarContador();
