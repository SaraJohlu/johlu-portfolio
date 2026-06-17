export default function ProfileCard() {
    return(
        <article className="relative flex justify-center">
            <img 
            src="/src/assets/ingenbakgrund.png" alt="Profilbild"
            className='w-40 rounded-4xl rotate-4'
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