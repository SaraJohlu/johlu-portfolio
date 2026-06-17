
interface buttonProps {
    children: React.ReactNode;
    size?: 'small'|'base'|'large';
    variant?: 'default' | 'disable' | 'warning' | 'approve'

}

const sizeClasses = {
    small: 'p-1 text-sm',
    base: 'p-1 text-base',
    large: 'p-1 text-lg',
}

const variantType = {
    default: '',
    disable: '',
    warning: '',
    approve: '',
}


export default function Button({ children, size='base', variant='default' }: buttonProps) {

    return(
        <button className={`${sizeClasses[size]} ${variantType[variant]}`}>
            {children}
        </button>
    )
};
