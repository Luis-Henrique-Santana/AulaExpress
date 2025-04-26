import Link from "next/link"

export type ListButtonProps = {
    content: any,
    href: string
}

export default function ListButton({content, href}: ListButtonProps){
    return(
        <Link href={href} className="relative group">
            {content}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-[100%]"></span>
        </Link>
    )
}