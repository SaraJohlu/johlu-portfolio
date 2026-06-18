import Button from "./Button";
interface navbarProps {
    children: React.ReactNode;
    direction?: 'vertical' | 'horizontal';
}

const directionClasses = {
    vertical: 'flex flex-col justify-around items-start p-5',
    horizontal: 'flex flex-row justify-around items-start p-4',
}
export default function Navbar({children, direction='horizontal'}: navbarProps) {

    return(
        <nav className={`${directionClasses[direction]}`}>
            <div className="flex gap-2">
                {children}
            </div>

            <Button variant="attention">
                Contact
            </Button>
        </nav>
    )
};
