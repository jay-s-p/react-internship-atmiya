import React, { useState } from 'react'
import ProfileContainer from './pages/ProfileContainer'
import ProfileCardsPage from './pages/ProfileCardsPage'
import { AutoComplete } from 'antd'

/* 
-> DATA SHOULD BE IN GIVEN FORMAT :-
    [
      {
        "name": "NAME",
        "designation": "DESIGNATION",
        "qualification": "QUALIFICATION",
        "experience": "YEARS OF EXPERIENCE",
        "homeCity": "HOME CITY",
        "jobCity": "JOB CITY",
        "platforms": {
          "instagram": "https://instagram.com/username",
          "facebook": "https://facebook.com/username",
          "twitter": "https://twitter.com/username",
          "linkedin": "https://linkedin.com/username",
          "github": "https://github.com/username",
          "website": "https://website.com"
        }
      }
    ]
*/

const index = ({data}) => {

  const [filteredData, setFilteredData] = useState(data)

  return (
    <>
      <ProfileContainer>
        <AutoComplete
          style={{minWidth:"0", width: "100%", padding:"1em 2em" }}
          size='large'
          placeholder="Search here"
          onChange={(value) => {
            const newData = data.filter((item) => {
              return item.name.toLowerCase().includes(value.toLowerCase()) ||
                item.designation.toLowerCase().includes(value.toLowerCase()) ||
                item.qualification.toLowerCase().includes(value.toLowerCase()) ||
                item.jobCity.toLowerCase().includes(value.toLowerCase())
              // add more filters here
            })
            setFilteredData(newData)
          }}
        />
        <ProfileCardsPage data={filteredData} />
      </ProfileContainer>
    </>
  )
}

export default index