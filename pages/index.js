
import config from "../config.json";
import styled from "styled-components";

function HomePage() {
    
    var estiloDaHome = {backgroundColor : "red"};

    return(
        <div style={estiloDaHome}>
          <Menu></Menu>
          <Header></Header>
          <Timeline></Timeline>
        </div>
  )
};
  
export default HomePage

function Menu() {
    
  return(
    <div>
    Menu
    </div>
  )
};

const StyledHeader = styled.div`    
img{
  width : 80px;
  height: 80px;
  border-radius: 50%;
}
.user-info{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 16px 32px;
  }
  `;

function Header() {
    
  return(
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}/>
        <p>{config.name}</p>
        <p>{config.job}</p>
        <p>Oi</p>
      </section>
    Header
    </StyledHeader>
  )
}

function Timeline() {
    
  return(
    <div>
    Timeline
    </div>
  )
}