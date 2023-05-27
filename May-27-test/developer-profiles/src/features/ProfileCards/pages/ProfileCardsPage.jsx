/* work to do:
- make developers profile in respective nature using antdesign grid system multiple device abilities xs, md, lg
- xs - 1 columns
- md - 2 columns
- lg - 4 columns

1. Developer Name
2. Designation
3. Qualification
4. Years of Experience 
5. Home City
6. Job City
7. Platforms / Technology Work
- search make filter based on working technology */

import { Row, Col } from 'antd'
import Card from '../components/Card'


const ProfileCardsPage = ({ data = [] }) => {
  const datax = { "name": "Rajesh Kumar", "designation": "Senior Software Developer", "qualification": "Master's Degree in Computer Science", "experience": "8 years of experience", "homeCity": "Mumbai", "jobCity": "Bengaluru", "platforms": { "instagram": "https://instagram.com/rajeshkumar", "facebook": "https://facebook.com/rajeshkumar", "twitter": "https://twitter.com/rajeshkumar", "linkedin": "https://linkedin.com/in/rajeshkumar", "github": "https://github.com/rajeshkumar", "website": "https://rajeshkumar.com" } }
  console.log(data);
  return (
    <>
      <Row justify={'space-evenly'} align={'middle'} gutter={[0, 5]} >
        {
          data.map((item, index) => {
            return (<>
              <Col xs="24" md="12" lg="4" key={index}>
                <Card data={{ ...item, image: `https://picsum.photos/${500 + index}/${500 + index}` }} />
              </Col>
            </>)
          })
        }
      </Row>
    </>
  )
}

export default ProfileCardsPage