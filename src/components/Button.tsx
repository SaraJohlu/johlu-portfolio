import './../style/button.css'
import './../style/styleThemes.css'
interface buttonProps {
    children: React.ReactNode;
    size?: 'small'|'base'|'large';
    variant?: 'default' | 'disable' | 'warning' | 'approve' | 'attention';
};

const baseClass = 'cursor-pointer hover:scale-110 hover:duration-150 hover:ease-in'

const sizeClasses = {
    small: 'p-1 text-sm',
    base: 'p-1 text-base',
    large: 'p-1 text-lg',
};

const variantClasses = {
    default:
    'text-white bg-[var(--primary-bg-color)] rounded-md border-1 border-[var(--button-primary-border-color)] shadow-md shadow-pink-800',
    disable: '',
    warning: '',
    approve: '',
    attention:
    'text-white bg-gradient-to-br from-black via-pink-700 to-rose-800 border-1 border-[var(--button-primary-border-color)] rounded-md shadow-sm shadow-pink-800',
};

export default function Button({ children, size='small', variant='default' }: buttonProps) {

    return(
        <button className={`${sizeClasses[size]} ${variantClasses[variant]} ${baseClass}`}>
            {children}
        </button>
    )
};
