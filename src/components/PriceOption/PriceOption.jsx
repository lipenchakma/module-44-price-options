import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ priceOption }) => {
    const { name, price, features } = priceOption;
    return (
        <div className='bg-lime-300 rounded-lg p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl'>{price}</span>
                <span className='text-2xl'>/Month</span>
            </h2>
            <h4 className='text-4xl text-center my-4'>{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }

            </div>
            <button className='mt-12 bg-yellow-400 py-4 w-full rounded-lg hover:bg-lime-400 font-bold'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    priceOption: PropTypes.object
}
export default PriceOption;