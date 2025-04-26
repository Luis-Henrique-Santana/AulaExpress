import BottomSection from "./bottom_section";
import MiddleSection from "./middle_section";
import UpperSection from "./upper_section";

export default function Footer(){
    return(
        <footer className="w-full h-90 flex flex-col">
            <UpperSection/>
            <MiddleSection/>
            <BottomSection/>
        </footer>
    )
}