import Header from '../components/Header'
import PizzaBuilderLeftSection from './PizzaBuilderLeftSection'
import PizzaBuilderRightSection from './PizzaBuilderRightSection'

const PizzaBuilder = () => {
    return (
        <>
            <div Container className='w-screen h-screen flex flex-col'>
                <Header />
                <div className="flex-1  flex flex-col md:flex-row overflow-x-hidden">
                    <PizzaBuilderLeftSection/>
                    <PizzaBuilderRightSection/>
                </div>
            </div>
        </>
    )
}

export default PizzaBuilder