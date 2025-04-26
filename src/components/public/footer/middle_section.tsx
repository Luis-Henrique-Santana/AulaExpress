import List from "./list";

export default function MiddleSection(){
    return(
        <section className="w-full h-[70%] bg-quaternary text-black flex justify-around items-center">
            <List title="Aula Express" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, natus corrupti quia saepe ipsum officia. Iure quaerat molestiae corrupti adipisci." />
            <List
            title="Entre em contato"
            content={[
                {
                    content: "contato@aulaexpress.com",
                    href: "#"
                },
                {
                    content: '(11) 99999-9999',
                    href: '#'
                },
                {
                    content: 'Av. Aula Express, São paulo',
                    href: "#"
                }
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