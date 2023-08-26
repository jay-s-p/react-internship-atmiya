import { useSearchParams } from 'react-router-dom'

const Service = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const pages = {
    "active": "Active services ...",
    "inactive": "Inactive services ...",
    "": "All services ...",
  }

  return (
    <>
      <h1>Service</h1>
      <button onClick={() => setSearchParams({ filter: "active" })}>Active services</button>
      <button onClick={() => setSearchParams({ filter: "inactive" })}>Inactive services</button>
      <button onClick={() => setSearchParams({})}>Clear filter</button>
      <br />
      <h3 style={{margin:"3em"}}>
        {pages[searchParams.get("filter")]}
      </h3>
    </>
  )
}

export default Service