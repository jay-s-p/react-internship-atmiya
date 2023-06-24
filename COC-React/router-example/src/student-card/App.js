import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ProfileCard } from './ProfileCard';
import Student from './Student'

const students = [
  new Student("Jay Parmar", "2002-11-11", "Male", "14089147", "B.Tech", "6th", [".Net", "Python", "MCI"], [29, 29, 29]),
  new Student("Harshad Sorathiya", "2003-04-11", "Male", "24089148", "B.Tech", "6th", [".Net", "Python", "MCI"], [77, 77, 77]),
  new Student("Dhruv Chauhan", "2002-02-27", "Male", "34089149", "B.Tech", "6th", [".Net", "Python", "MCI"], [98, 98, 98]),
  new Student("Om Ratneshwar", "2002-11-18", "Male", "44089150", "B.Tech", "6th", [".Net", "Python", "MCI"], [86, 86, 86]),
  new Student("Mohit Parmar", "2002-05-21", "Male", "54089151", "B.Tech", "6th", [".Net", "Python", "MCI"], [98, 98, 98]),
  new Student("Tathya Shukla", "2000-12-30", "Male", "64089152", "B.Tech", "6th", [".Net", "Python", "MCI"], [63, 63, 63]),
]

console.log(students);

function App() {
  return (
    <div style={{height:"100vh", width:"100vw", background:"linear-gradient(limegreen, transparent), linear-gradient(90deg, skyblue, transparent), linear-gradient(-90deg, coral, transparent)", backgroundBlendMode:"screen", backgroundColor:"initial !important"}}>
      <div style={{ background: "#00000000", width: "100%", height: "100%", minHeight: "100vh" }}>
        <Container>
          <div style={{ height: "5em", width: "100%" }}></div>
          <Row>
            {
              students.map((student) => {
                return (
                  <Col xxl="3" lg="4" md="6">
                    <ProfileCard student={student} />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
