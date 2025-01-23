import ContactUs from "./components/ContactUs";
import Members from "./components/Members";
import WhoAreUs from "./components/WhoAreUs";

export default function About(){
    return(
        <div>
            <WhoAreUs/>
            <Members/>
            <ContactUs/>
        </div>
    )
}