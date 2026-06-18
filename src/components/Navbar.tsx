import Button from "./Button";
interface navbarProps {
    children: React.ReactNode;
    direction?: 'vertical' | 'horizontal';
}

const directionClasses = {
    vertical: 'flex flex-col justify-between items-start p-5',
    horizontal: 'flex flex-row justify-between items-start p-5',
}
export default function Navbar({children, direction='horizontal'}: navbarProps) {

    return(
        <nav className={`${directionClasses[direction]}`}>
            <div className="flex gap-3">
                {children}
            </div>

            <Button variant="attention" size="base">
                Kontakta mig
            </Button>
        </nav>
    )
};
