import './../style/button.css'
interface buttonProps {
    children: React.ReactNode;
    size?: 'small'|'base'|'large';
    variant?: 'default' | 'disable' | 'warning' | 'approve' | 'attention';
};

const baseClass = 'cursor-pointer hover:bg-fuchsia-200'

const sizeClasses = {
    small: 'p-1 text-sm',
    base: 'p-1 text-base',
    large: 'p-1 text-lg',
};

const variantClasses = {
    default: 'bg-white rounded-sm shadow-sm shadow-fuchsia-950',
    disable: '',
    warning: '',
    approve: '',
    attention: 'bg-gradient-to-br from-black via-fuchsia-950 to-fuchsia-800 border-1 border-purple-500 rounded-md shadow-sm shadow-fuchsia-500 text-white',
};

export default function Button({ children, size='small', variant='default' }: buttonProps) {

    return(
        <button className={`${sizeClasses[size]} ${variantClasses[variant]} ${baseClass}`}>
            {children}
        </button>
    )
};
