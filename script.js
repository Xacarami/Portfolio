const themeButton = document.getElementById("themeButton");
const linkCss = document.getElementById("linkCss");
const tituloHabilidade = document.getElementById("tituloHabilidade");
const descricaoHabilidadeEscrito = document.getElementById(
    "descricaoHabilidadeEscrito"
);

const botaoHtml = document.getElementById("html");
const botaocss = document.getElementById("css");
const botaojavascript = document.getElementById("javascript");
const botaoreact = document.getElementById("react");
const botaonodejs = document.getElementById("nodejs");
const botaopostgresql = document.getElementById("postgresql");
const botaosql = document.getElementById("sql");

const montanha1 = document.getElementById("montanha1");
const montanha2 = document.getElementById("montanha2");

if (themeButton) {
    themeButton.addEventListener("click", () => {
        if (linkCss.attributes[1].value == "style/dark.css") {
            linkCss.attributes[1].value = "style/light.css";
            themeButton.innerHTML = "Light Mode";
        } else {
            linkCss.attributes[1].value = "style/dark.css";
            themeButton.innerHTML = "Dark Mode";
        }
    });
}

window.addEventListener("scroll", () => {
    montanha1.style.left = -window.pageYOffset / 9 - 350 + "vh";
});

window.addEventListener("scroll", () => {
    montanha2.style.right = -window.pageYOffset / 9 + 50 + "vh";
});

tituloHabilidade.innerHTML = "Tecnologias";
descricaoHabilidadeEscrito.innerHTML =
    "Clique em um dos ícones ao lado para que possa ver mais detalhes sobre ela!";

if (botaoHtml) {
    botaoHtml.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "HTML";
        descricaoHabilidadeEscrito.innerHTML =
            "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.";
    });
}

if (botaocss) {
    botaocss.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "CSS";
        descricaoHabilidadeEscrito.innerHTML =
            "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.";
    });
}

if (botaojavascript) {
    botaojavascript.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "JavaScript";
        descricaoHabilidadeEscrito.innerHTML =
            "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.";
    });
}
if (botaoreact) {
    botaoreact.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "React";
        descricaoHabilidadeEscrito.innerHTML =
            "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.";
    });
}
if (botaonodejs) {
    botaonodejs.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "NodeJs";
        descricaoHabilidadeEscrito.innerHTML =
            "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.";
    });
}

if (botaopostgresql) {
    botaopostgresql.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "PostgreSQL";
        descricaoHabilidadeEscrito.innerHTML =
            "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.";
    });
}

if (botaosql) {
    botaosql.addEventListener("click", () => {
        tituloHabilidade.innerHTML = "SQL";
        descricaoHabilidadeEscrito.innerHTML =
            "Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional.";
    });
}

function perguntaDez(x, y) {
    z = x * y + 5;
    console.log("Z = " + z);
    if (z <= 0) {
        console.log("Resposta A");
    } else if (z <= 100) {
        console.log("Resposta B");
    } else {
        console.log("Resposta C");
    }
}

perguntaDez(3, 2);
perguntaDez(150, 3);
perguntaDez(7, -1);
perguntaDez(-2, 5);
perguntaDez(50, 3);
