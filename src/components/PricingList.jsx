import { check } from '../assets';
import { pricing } from '../constants';
import Button from './Button';

const PricingList = () => {
    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
                <div
                    key={item.id}
                    className={`w-19rem max-lg:w-full h-full px-6 bg-neutral-almostBlack border border-neutral-gray500 rounded-[2rem] 
                        lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-accent-sunnyYellow
                        [&>h4]:even:text-accent-vibrantPurple [&>h4]:last:text-accent-boldRed 
                        `}
                >
                    <h4 className="h4 mb-4">{item.title}</h4>

                    <p className="body-font-2 min-h-[4rem] mb-3 text-neutral-white/50">
                        {item.description}
                    </p>

                    <div className="flex items-center h-[5.5rem] mb-6">
                        {item.price && (
                            <>
                                <div className="h3">{item.currency}</div>
                                <div className="text-[5.5rem] leading-none font-bold">
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        className="w-full mb-6"
                        href={
                            item.price
                                ? '/pricing'
                                : 'mailto:contact@jsmastery.pro'
                        }
                        white={!!item.price}
                    >
                        {item.price ? 'Get started' : 'Contact us'}
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-center py-5 border-t border-neutral-gray500"
                            >
                                <img
                                    src={check}
                                    alt="Check"
                                    width={24}
                                    height={24}
                                />
                                <p className="body-font-2 ml-4">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PricingList;
