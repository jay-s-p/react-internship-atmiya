

import Background from '../assets/images/background.jpg'
import PizzaBase from '../assets/images/background.jpg'


const PizzaBuilderLeftSection = () => {
    return (
        <>
            <div className="background-pattern-1  min-h-[50vh] md:min-h-0 md:flex-grow-[5] basis-0" style={{backgroundImage:`url(${Background})`}}>
                <div className='w-full h-full bg-[#dcdcdccc] '>
                    <div className='w-full h-full flex justify-center items-center p-5'>
                        {/* <div className="w-96 h-96 bg-black">lol</div> */}
                        <div className=" h-full aspect-square bg-black"></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default PizzaBuilderLeftSection