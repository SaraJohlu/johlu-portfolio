import './../index.css'
import Logo from "./Logo"
import ProfileCard from './ProfileCard'

export default function HeaderContainer() {
    
    return(
        <>
        <header className="
            grid grid-cols-2 gap-4
            bg-[url('/src/assets/purple-black.png')] bg-cover bg-center 
            w-full h-auto p-5
        ">
            <div className='flex'>
                <Logo />
            </div>  

            <div className='flex flex-col'>
                <ProfileCard />
            </div>
            
        </header>
        </>
    )
};

 