import List from "./list";

export default function MiddleSection(){
    return(
        <section className="w-full h-[70%] bg-quaternary text-black flex justify-around items-center">
            <List title="Aula Express" content="Aula Express é uma plataforma web desenvolvida para facilitar a criação e organização de planos de aula." />
            <List
            title="Entre em contato"
            content={[
                {
                    content: "lhs3000t@gmail.com",
                    href: "#"
                },
                {
                    content: '(13) 98155-6145',
                    href: '#'
                },
            ]} 
            />
            <List
            title="Links Uteis"
            content={[
                {
                    content: "Nosso Objetivo",
                    href: "#"
                },
                {
                    content: 'Como usar o Aula Express',
                    href: '#'
                },
                {
                    content: 'Artigo TCC',
                    href: "#"
                }
            ]} 
            />
        </section>
    )
}
