import Tagline from './Tagline';

const Heading = ({ className = '', title, text, tag }) => {
    return (
        <div
            className={`max-w-[50rem] mx-auto mb-12 md:text-center lg:mb-20 ${className}`}
        >
            {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
            {title && <h2 className="h2">{title}</h2>}
            {text && <p className="body-font-2">{text}</p>}
        </div>
    );
};

export default Heading;
