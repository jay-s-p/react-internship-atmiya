import { Card } from 'antd';
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined, GithubOutlined, GlobalOutlined } from '@ant-design/icons'
const { Meta } = Card;
import '../assets/Card.css'

const CardComponent = ({ data }) => {
  const iconSize = "1.3em";

  return (
    <>
      <Card
        className='card'
        bodyStyle={{ padding: "0.5em" }} /* override default body padding */
        cover={
          <div className='card-image-container'>
            <img alt={data.name} className='card-image' src={data.image || "https://picsum.photos/500/500"} />
          </div>
        }
        hoverable /* hover animation */
      >
        <Meta title={<><h2>{data.name}</h2></>} description={
          <div className='card-body-container'>
            <div>{data.designation}</div>
            <div>{data.qualification}</div>
            <div>{data.experience}</div>
            <div>{data.jobCity}</div>
            <div className='card-body-social-container'>
              {data.platforms.instagram && <div><a href={data.platforms.instagram} target="_blank" rel="noopener noreferrer"><InstagramOutlined style={{ fontSize: iconSize, color: "#fd4666" }} /></a></div>}
              {data.platforms.facebook && <div><a href={data.platforms.facebook} target="_blank" rel="noopener noreferrer"><FacebookOutlined style={{ fontSize: iconSize, color: "#1077f0" }} /></a></div>}
              {data.platforms.website && <div><a href={data.platforms.website} target="_blank" rel="noopener noreferrer"><GlobalOutlined style={{ fontSize: iconSize, color: "#00f" }} /></a></div>}
              {data.platforms.twitter && <div><a href={data.platforms.twitter} target="_blank" rel="noopener noreferrer"><TwitterOutlined style={{ fontSize: iconSize, color: "#229af0" }} /></a></div>}
              {data.platforms.linkedin && <div><a href={data.platforms.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinOutlined style={{ fontSize: iconSize, color: "#0961b8" }} /></a></div>}
              {data.platforms.github && <div><a href={data.platforms.github} target="_blank" rel="noopener noreferrer"><GithubOutlined style={{ fontSize: iconSize, color: "#682a7e" }} /></a></div>}
            </div>
          </div>
        } />
      </Card>
    </>
  )
}

export default CardComponent