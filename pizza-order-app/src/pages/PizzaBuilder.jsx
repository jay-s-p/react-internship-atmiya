import { useState } from 'react'
import Header from '../components/Header'
import PizzaBuilderLeftSection from './PizzaBuilderLeftSection'
import PizzaBuilderRightSection from './PizzaBuilderRightSection'

const PizzaBuilder = () => {
    const [toppings, setToppings] = useState({ Cheese:false, Basil: false, Mushroom: false, Olive: false, Pineapple: false, Tomato: false })
    return (
        <>
            <div Container className='w-screen h-screen flex flex-col'>
                <Header />
                <div className="flex-1  flex flex-col md:flex-row overflow-x-hidden">
                    <PizzaBuilderLeftSection toppings={toppings} />
                    <PizzaBuilderRightSection toppings={toppings} setToppings={setToppings} />
                </div>
            </div>
        </>
    )
}

export default PizzaBuilder