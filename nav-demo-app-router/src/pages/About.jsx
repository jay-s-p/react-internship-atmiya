

const About = () => {
  return (
    <>
      <div className="relative top-20">
        <section className=" py-8">
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                title here
              </h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed mt-4 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                bibendum, lectus vitae pharetra molestie, dui est bibendum augue,
                eget consectetur velit sapien vel nulla. Nam non leo euismod,
                scelerisque nunc ac, sollicitudin lectus. Aenean a metus vel dui
                imperdiet bibendum at vitae nisi.
              </p>
              <p className="text-gray-600 text-lg font-light leading-relaxed mt-0 mb-4">
                Etiam eleifend nibh ac velit dictum, non consequat lacus finibus.
                Praesent quis ullamcorper mauris. Sed eu est malesuada, condimentum
                metus vel, dictum eros. Suspendisse at risus in massa auctor
                aliquet quis sit amet urna.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <img
                alt="this is alt text okay"
                src="https://via.placeholder.com/640x480.png?text=this+is+Image+okay"
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About