export default function ProfileCard() {
    return(
        <article className="relative flex justify-center w-76 ">
            <img 
            src="/src/assets/ingenbakgrund.png" alt="Profilbild"
            className='w-70 rounded-4xl rotate-4 bg-black rounded-[43%_50%_30%_50%/60%_25%_40%_25%] shadow-3xl'
            
            />
            <div className="
            absolute top-42 w-45 text-center backdrop-blur-sm
            ">
                <p className="text-white text-base leading-none">Sara Johnson Lundén: </p>
                <p className="text-white text-sm leading-none">Junior Frontend developer and assisted nurse</p>
            </div>
        </article>
    )
};