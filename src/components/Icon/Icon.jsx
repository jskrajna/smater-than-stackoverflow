const Icon = ({ component: IconComponent, className, ...props }) => {
    return (
        <IconComponent className={`icon-default  ${className} `} {...props} />
    );
};

export default Icon;