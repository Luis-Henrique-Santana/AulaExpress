import { Facebook, GitHub, LinkedIn, Mail, Twitter, WhatsApp } from "@mui/icons-material";


export default function UpperSection(){
    return(
        <section className="w-full h-[20%] bg-secondary flex justify-between items-center px-3">
            <div className="flex">Entre em contato</div>
            <div className="flex gap-1">
                <Facebook href="#" />
                <Twitter href="#" />
                <WhatsApp href="#" />
                <LinkedIn href="#" />
                <Mail href="#" />
                <GitHub href="#" />
            </div>
        </section>
    )
}