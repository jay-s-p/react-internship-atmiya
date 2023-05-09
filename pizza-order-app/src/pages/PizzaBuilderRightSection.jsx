import Cheese from '../assets/images/BaseCheese.png'
import Basil from '../assets/images/toppings/Basil.png'
import Mushroom from '../assets/images/toppings/Mushroom.png'
import Olive from '../assets/images/toppings/Olive.png'
import Pineapple from '../assets/images/toppings/Pineapple.png'
import Tomato from '../assets/images/toppings/Tomato.png'
import ListItemImageTitle from '../components/ListItemImageTitle'

const PizzaBuilderRightSection = ({toppings,setToppings}) => {
    return (
        <>
            <div className="bg-blue-50   box-border flex flex-col md:flex-grow-[3] basis-0">
                <h1 className='text-2xl font-bold font-[cursive] mt-5 mx-5'>Pick Toppings to Suit Your Taste :-</h1>
                <ul className='mt-5 mx-6  flex overflow-auto gap-x-3 p-2 md:px-0 md:pt-0 pb-5 md:grid md:gap-y-4 md:gap-x-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-gradient-to-l from-[#00000033]  to-20% rounded-3xl  md:bg-none scrollbar-none' style={{backdropFilter:"opacity(0.5)"}}>
                    <ListItemImageTitle image={Cheese}  setToppings={setToppings} title="Cheese" color="#fff000ff" className='peer-checked:bg-yellow-100  peer-checked:border-yellow-500' />
                    <ListItemImageTitle image={Basil}  setToppings={setToppings} title="Basil" color="#00ff00ff" className='peer-checked:bg-green-100 peer-checked:border-green-500' />
                    <ListItemImageTitle image={Mushroom}  setToppings={setToppings} title="Mushroom" color="#00000077" className='peer-checked:bg-gray-100  peer-checked:border-gray-500 ' />
                    <ListItemImageTitle image={Pineapple}  setToppings={setToppings} title="Pineapple" color="#fff000ff" className='peer-checked:bg-yellow-100  peer-checked:border-yellow-500 ' />
                    <ListItemImageTitle image={Tomato} setToppings={setToppings} title="Tomato" color="#ff0000ff" className='peer-checked:bg-red-100  peer-checked:border-red-500 ' />
                    <ListItemImageTitle image={Olive}  setToppings={setToppings} title="Olive" color="#000000aa" className='peer-checked:bg-gray-100  peer-checked:border-gray-500 ' />
                </ul>
                <div className='mt-auto relative px-5 pb-5 text-2xl active:scale-95 transition-all'>
                    <button className="w-full inline-flex justify-center items-center mt-3 md:mt-10 px-8 py-3 group relative overflow-hidden rounded-lg shadow-lg ring-2  bg-gray-50 hover:ring-black hover:bg-gradient-to-r hover:from-blue-400 hover:from-50% " href="">
                        <span className="absolute -end-full transition-all group-hover:end-4 flex">→
                            <div className='inline-block' style={{ scale: "-1 1" }}>🛵</div> 
                        </span>
                        <span className="font-medium transition-all group-hover:me-4 text-xl" onClick={()=>{console.log(toppings)}}>
                            🍕 Place order 
                        </span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default PizzaBuilderRightSection