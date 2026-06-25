import Button from "./Button";
interface navbarProps {
    children: React.ReactNode;
    direction?: 'col' | 'row';
}

const directionClasses = {
    col:
    'sm:flex sm:flex-col sm:justify-around sm:items-start sm:p-5 ',
    row: 'flex flex-row justify-around items-start p-4',
}
export default function Navbar({children, direction='horizontal'}: navbarProps) {

    return(
        <nav className={`${directionClasses[direction]}`}>
            <div className="flex gap-2">
                {children}
            </div>

            <Button variant="attention">
                Contact me
            </Button>
        </nav>
    )
};
