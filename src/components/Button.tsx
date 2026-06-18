
interface buttonProps {
    children: React.ReactNode;
    size?: 'small'|'base'|'large';
    variant?: 'default' | 'disable' | 'warning' | 'approve' | 'attention';

}

const sizeClasses = {
    small: 'p-1 text-sm',
    base: 'p-2 text-base',
    large: 'p-1 text-lg',
}

const variantClasses = {
    default: 'bg-white border-2 border-purple-500 rounded-md shadow-sm shadow-fuchsia-500',
    disable: '',
    warning: '',
    approve: '',
    attention: 'bg-gradient-to-br from-purple-500 to-purple-100 border-2 border-purple-500 rounded-md shadow-sm shadow-fuchsia-500',
}


export default function Button({ children, size='base', variant='default' }: buttonProps) {

    return(
        <button className={`${sizeClasses[size]} ${variantClasses[variant]}`}>
            {children}
        </button>
    )
};
