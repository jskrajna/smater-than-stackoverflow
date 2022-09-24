const Button = ({ text, children, className, ...props }) => {
    return (
        <button {...props} className={`ease-in duration-200 text-md font-bold rounded-full bg-indigo-500 hover:bg-violet-500  text-indigo-900 inline-flex items-center px-4 py-1 ${className}`}> {text} {children}</button >
    );
};

export default Button;