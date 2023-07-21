let about = document.querySelector('#about')
let areaProfile = document.querySelector('#area')


// Função Assincrona = vai esperar que um determinado recurso termine para continuar.
// usa-se a palavra async para definir que uma função é assincrona, 
// e a palavra await = espere.
async function getApiGithub() {
    try {
        const dataProfile = await fetch('https://api.github.com/users/RitaAlmeidah') // acessa os dados, e fica aqui parado até os dados retornarem.
        const profile = await dataProfile.json() //guarda os dados acessados da URL usando o json.
        // dataProfile.json() = toda a estrutura do back end aparecerá aqui quando acessar o inspensionar/console na página web.
        
        //aqui vamos contatenar, juntar o texto com uma variável sem precisar usar o + usamos só craze ``
        let content = `
            <img src="${profile.avatar_url}" alt="Foto do Perfil do Github - ${profile.name}">
            <article class="section_content">
                <h1>Quem sou eu?</h1>
                <p>
                Graduada em Pedagogia com pós graduação em Alfabetização e Letramento.
                Minha experiência profissional consiste em geral no atendimento ao cliente, 
                atualmente estou em transição decarreira para a área da tecnologia. 
                </p>
                <p>
                Sou do signo de libra, amo gatos, ouvir música, assistir filmes e séries, 
                 tenho como hobbie em minhas horas vagas, me reunir com minha família em volta de uma mesa,
                 comer um bolo, tomar um café, conversar, dar risadas, fortalecer os meus laços familiares,
                 esses momentos nos proporcionam muita alegria, é algo que valorizo muito.
                </p>

                <div class="section_github flex">
                    <a class="btn" href="${profile.html_url}" target="blank" >Github</a>
                    <p>${profile.followers} Seguidores</p>
                    <p>${profile.public_repos} Repositórios</p>
                </div>
            </article>
        `
        about.innerHTML = content

    } catch (error) {
        console.log(error)
    }
}

function changeTheme() {
    document.body.classList.toggle('dark-theme')
}

getApiGithub()