import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "./project-img1.png";
import projImg2 from "./project-img2.png";
import projImg3 from "./project-img3.png";
import colorSharp2 from "./color-sharp2.png";
import './Projects.css'
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "User website",
      description: "Developed a website for office users",
      imgUrl: projImg1,
    },
    {
      title: "Deep Learning",
      description: "Human eye Retinopathy Detection using deep learning model",
      imgUrl: projImg2,
    },
    {
      title: "Movie suggestion Algorithm",
      description: "using machiene learning techinuques",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Fire alarm System",
      description: "using python-pycharm",
      imgUrl: projImg2,
    },
    {
      title: "License Plate Detection System",
      description: "Using Matlab software",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
     
      <Container>
      <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
        <Row>
        <Col>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Hover on the images  to see the Magicc!!!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills"  defaultActiveKey={"/home"}>
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab oneee</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab two</Nav.Link>
                    </Nav.Item> */}
                     {/*<Nav.Item>
                      <Nav.Link eventKey="third">Tab threee</Nav.Link>
                    </Nav.Item> */}
                  {/* </Nav> */}
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Learning and growing, one project at a time.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Making my mark on the world.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  )
}
export default Projects;