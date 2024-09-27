import  ButtonSvg  from '../assets/svg/ButtonSvg';

const Button = ({ className, href, onClick, children, px, white }) => {
    const buttonStyle = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-accent-vibrantPurple
    ${px || 'px-7'}
    ${white ?  'text-neutral-almostBlack': 'text-neutral-white'}
    ${className || ''}
    `;

    const spanStyle = 'relative z-10';

    const renderButton = () => (
        <button className={buttonStyle} onClick={onClick}>
            <span className={spanStyle}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <a className={buttonStyle} href={href}>
            <span className={spanStyle}>{children}</span>
            {ButtonSvg(white)}
        </a>
    );
    return href ? renderLink() : renderButton();
};

export default Button;
