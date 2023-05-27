import ProfileCards from './features/ProfileCards/'
import DevelopersData from './api/DevelopersData.json'

function App() {

  return (
    <>
      {/* Write code that has AutoComplate from antd that filter the data of 'DevelopersData' state and set with 'setData' funtion */}
      
      <ProfileCards data={DevelopersData} />
      <div style={{height:"3em"}}></div>
    </>
  )
}

export default App
