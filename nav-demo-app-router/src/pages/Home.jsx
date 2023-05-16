

const Home = () => {
  return (
    <>
    <div className="relative top-20 ">
      <div className="flex flex-col md:flex-row md:space-x-8 p-10">
        <div className="relative flex-1">
          <img src="https://picsum.photos/500/300" className="w-full h-full object-cover rounded-md shadow-md" alt="Placeholder" />
        </div>
        <div className="flex-1 mt-4 md:mt-0">
          <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit amet</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut enim euismod, vulputate sapien ac, tincidunt massa. Fusce efficitur euismod varius. Vestibulum id metus quis orci ultricies malesuada. Nunc maximus auctor est, ut faucibus magna hendrerit ac. Sed rutrum quis dolor vitae luctus. Etiam scelerisque, neque eget ultricies sodales, odio nunc faucibus urna, ac dignissim enim nibh sit amet justo.</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Posted on June 1, 2023</p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700">Read More</button>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home