

import Background from '../assets/images/background.jpg'
import PizzaBase from '../assets/images/PizzaBase.png'
import Cheese from '../assets/images/BaseCheese.png'
import Basil from '../assets/images/toppings/Basil-main.png'
import Mushroom from '../assets/images/toppings/Mushroom-main.png'
import Olive from '../assets/images/toppings/Olive-main.png'
import Pineapple from '../assets/images/toppings/Pineapple-main.png'
import Tomato from '../assets/images/toppings/Tomato-main.png'

const PizzaBuilderLeftSection = ({ toppings }) => {
    const topping_images = {
        'Cheese': Cheese,
        'Basil': Basil,
        'Mushroom': Mushroom,
        'Olive': Olive,
        'Pineapple': Pineapple,
        'Tomato': Tomato
    };
    return (
        <>
            <div className="background-pattern-1  min-h-[50vh] md:min-h-0 md:flex-grow-[5] basis-0" style={{ backgroundImage: `url(${Background})` }}>
                <div className='w-full h-full bg-[#dcdcdccc] '>
                    <div className='w-full h-full flex justify-center items-center p-5'>
                        {/* <div className="w-96 h-96 bg-black">lol</div> */}
                        <div className="relative w-full h-auto   sm:w-auto sm:h-full md:w-full md:h-auto lg:w-auto lg:h-full aspect-square">
                            <img src={PizzaBase} className="absolute " alt="" />
                            {
                                Object.entries(topping_images).map((i ) => (
                                    // console.log(i[0])
                                    // console.log(image);
                                    <img src={i[1]} className={`absolute  transition-all ${toppings[i[0]]?"block animate-scale":"hidden"}`} alt={i[0]} />
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaBuilderLeftSection