

const Contact = () => {
  return (
    <>
      <div className="relative top-20">
        <section className="  py-20">
          <div className="container mx-auto">
            <div className="max-w-xl mx-auto">
              <div className="gradient w-64 mx-auto my-4"></div>
              <p className="text-gray-700 text-center text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                fermentum, sem in pharetra pellentesque, nisl velit efficitur quam,
                vel consequat sapien lacus quis risus.
              </p>
              <form className="mx-auto mt-12 max-w-md">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-gray-700 text-xl font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-gray-700 text-xl font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-gray-700 text-xl font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Your message"
                    className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact