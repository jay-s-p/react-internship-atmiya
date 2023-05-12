

const Services = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://via.placeholder.com/200x100.png?text=Service+1"
                    alt="Service 1"
                    className="h-64 w-full rounded-t pb-6 object-cover"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Service 1
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec velit enim.
                  </p>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://via.placeholder.com/200x100.png?text=Service+2"
                    alt="Service 2"
                    className="h-64 w-full rounded-t pb-6 object-cover"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Lorem ipsum dolor sit amet.
                  </p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Service 2
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec velit enim.
                  </p>
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                  <img
                    src="https://via.placeholder.com/200x100.png?text=Service+3"
                    alt="Service 3"
                    className="h-64 w-full rounded-t pb-6 object-cover"
                  />
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                    Lorem ipsum</p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Service 3
                  </div>
                  <p className="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec velit enim.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services