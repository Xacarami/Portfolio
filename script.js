const themeButton = document.getElementById("themeButton");
const iconeTema = document.getElementById("imagemIconeTema");
const linkCss = document.getElementById("linkCss");
const tituloHabilidade = document.getElementById("tituloHabilidade");
const descricaoHabilidadeEscrito = document.getElementById(
    "descricaoHabilidadeEscrito"
);

const botaoHtml = document.getElementById("html");
const botaocss = document.getElementById("css");
const botaojavascript = document.getElementById("javascript");
const botaoreact = document.getElementById("react");
const botaojava = document.getElementById("java");
const botaospringboot = document.getElementById("springboot");
const botaonodejs = document.getElementById("nodejs");
const botaophp = document.getElementById("php");
const botaophpunit = document.getElementById("phpunit");
const botaolaravel = document.getElementById("laravel");
const botaopostgresql = document.getElementById("postgresql");
const botaosql = document.getElementById("sql");
const botaomysql = document.getElementById("mysql");
const botaorestApi = document.getElementById("restApi");
const botaolinux = document.getElementById("linux");
const botaoapache = document.getElementById("apache");

const montanha1 = document.getElementById("montanha1");
const montanha2 = document.getElementById("montanha2");
const coqueiro1 = document.getElementById("coqueiro1");
const coqueiro2 = document.getElementById("coqueiro2");

const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");

let objetoQueMove =
    linkCss.attributes[1].value == "style/dark.css" ? "montanha" : "coqueiro";

if (prefersColorScheme.matches == false) {
    linkCss.attributes[1].value = "style/light.css";
    // themeButton.innerHTML = "Light Mode";
    iconeTema.scr("./assets/lua.svg");
    objetoQueMove = "coqueiro";
} else {
    linkCss.attributes[1].value = "style/dark.css";
    // themeButton.innerHTML = "Dark Mode";
    objetoQueMove = "montanha";
}

if (themeButton) {
    themeButton.addEventListener("click", () => {
        if (linkCss.attributes[1].value == "style/dark.css") {
            linkCss.attributes[1].value = "style/light.css";
            iconeTema.src = "./assets/sol.svg";
            objetoQueMove = "coqueiro";
        } else {
            linkCss.attributes[1].value = "style/dark.css";
            // themeButton.innerHTML = "Dark Mode";
            iconeTema.src = "./assets/lua.svg";

            objetoQueMove = "montanha";
        }
        moverObjetos();
    });
}

function moverObjetos() {
    if (objetoQueMove == "montanha") {
        montanha1.style.left = (-window.scrollY / 9) * 5 - 875 + "px";
        montanha2.style.right = (-window.scrollY / 9) * 5 + 320 + "px";
    } else {
        coqueiro1.style.left = (-window.scrollY / 9) * 5 - 265 + "px";
        coqueiro2.style.right = (-window.scrollY / 9) * 5 - 210 + "px";
    }
}

window.addEventListener("scroll", () => {
    moverObjetos();
});

tituloHabilidade.innerHTML = "Tecnologias";
descricaoHabilidadeEscrito.innerHTML =
    "Clique em um dos ícones ao lado para que possa ver mais detalhes sobre ela!";

const descricaoLinguagens = {
    html: "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.",
    css: "Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags.",
    javascript:
        "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web",
    react: "O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.",
    java: "Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 por uma equipe de programadores chefiada por James Gosling, na empresa Sun Microsystems, que em 2008 foi adquirido pela empresa Oracle Corporation.",
    "spring boot":
        "O Java Spring Boot (Spring Boot) é uma ferramenta que facilita e agiliza o desenvolvimento de aplicativos da web e de microsserviços com o Spring Framework por meio de três principais recursos: Autoconfiguração. Uma abordagem opinativa à configuração. A capacidade de criar aplicativos independentes.",
    nodejs: "Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.",
    php: "PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.",
    phpunit:
        "O PHPUnit é um framework de teste de unidade para a linguagem de programação PHP criado por Sebastian Bergmann. O framework faz parte da família XUnit, iniciada com o SUnit, e similar ao JUnit. O desenvolvimento do PHPUnit está hospedado no GitHub.",
    laravel:
        "Laravel é um framework PHP gratuito e de código aberto, utilizado no desenvolvimento de sistemas para web. Algumas de suas principais características são permitir a escrita de um código mais simples e legível, e suporte a recursos avançados que agilizam o processo de desenvolvimento.",
    postgresql:
        "PostgreSQL é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.",
    sql: "Structured Query Language, ou Linguagem de Consulta Estruturada ou SQL, é a linguagem de pesquisa declarativa padrão para banco de dados relacional. Muitas das características originais do SQL foram inspiradas na álgebra relacional.",
    mysql: "O MySQL é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.",
    "rest api":
        "API REST, também chamada de API RESTful, é uma interface de programação de aplicações (API ou API web) em conformidade com as restrições do estilo de arquitetura REST, permitindo a interação com serviços web RESTful. REST é a sigla em inglês para Representational State Transfer, que em português significa tansferência de estado representacional.",
    linux: "Linux é um Sistema Operacional, assim como o Windows e o Mac OS, que possibilita a execução de programas em um computador e outros dispositivos. Linux pode ser livremente modificado e distribuído.",
    apache2:
        "O Servidor HTTP Apache ou Servidor Apache ou HTTP Daemon Apache ou somente Apache, é o servidor web livre criado em 1995 por um grupo de desenvolvedores da NCSA, tendo como base o servidor web NCSA HTTPd criado por Rob McCool.",
};

function atualizarQuadroHabilidades(botao, descricao) {
    if (botao) {
        botao.addEventListener("click", () => {
            tituloHabilidade.innerHTML = descricao;
            descricaoHabilidadeEscrito.innerHTML =
                descricaoLinguagens[descricao.toLowerCase()];
        });
    }
}

atualizarQuadroHabilidades(botaoHtml, "HTML");
atualizarQuadroHabilidades(botaocss, "CSS");
atualizarQuadroHabilidades(botaojavascript, "JavaScript");
atualizarQuadroHabilidades(botaoreact, "React");
atualizarQuadroHabilidades(botaojava, "Java");
atualizarQuadroHabilidades(botaospringboot, "Spring Boot");
atualizarQuadroHabilidades(botaonodejs, "NodeJs");
atualizarQuadroHabilidades(botaophp, "PHP");
atualizarQuadroHabilidades(botaophpunit, "PHPUnit");
atualizarQuadroHabilidades(botaolaravel, "Laravel");
atualizarQuadroHabilidades(botaopostgresql, "PostgreSQL");
atualizarQuadroHabilidades(botaosql, "SQL");
atualizarQuadroHabilidades(botaomysql, "MySQL");
atualizarQuadroHabilidades(botaorestApi, "REST Api");
atualizarQuadroHabilidades(botaolinux, "Linux");
atualizarQuadroHabilidades(botaoapache, "Apache2");
