

export const Button = ({label, children, className= ''}) => {
    return (
        <button
            className={`px-6 py-2 rounded-lg shadow font-semibold transition hover:brightness-110 cursor-pointer ${className}`}
        >
           {label} {children}
        </button>
    )
}

