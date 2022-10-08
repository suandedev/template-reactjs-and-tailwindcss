const Badge = ({rounded, color, border, bg, size, text}) => {
    return(
        <>
            <p className={rounded + " " + color + " " + border  + " "+ bg + " " +size}>
                {text}
            </p>
        </>
    );
};

export default Badge;