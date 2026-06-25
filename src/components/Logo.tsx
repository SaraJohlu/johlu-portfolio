import './../style/logo.css'
export default function Logo() {

    return(
        <>
            <div className='flex flex-col items-start justify-start leading-none bg-transparent p-2'>
                <p className='logo-main-fontstyle w-full leading-none'>Johlu</p>
                <p className='logo-creation-fontstyle w-2/3 text-center'>Creation</p>
            </div>
        </>
    )
};
