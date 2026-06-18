import './../index.css'
import Navbar from './Navbar'
import Logo from "./Logo"
import Button from './Button'

export default function HeaderContainer() {
    
    return(
        <header className="
            grid grid-cols-[2fr_3fr] gap-4 
            w-full h-auto
        ">
            <Logo />

            <Navbar>
                    <Button size='base'>Projects</Button>
                    <Button size='base'>About me</Button>
            </Navbar>
        </header>
    )
};

 