import styled from "styled-components";

export const NavbarWrapper = styled.nav`


.menu_Nav{
  background:#F0572D ;
  width:100%;
  height 8rem;
  display:flex;
  justify-content: flex-end;
  align-items: end;
  z-index: 2;
}

h3{
  margin-right: 10px;
}

hr{
  border-bottom: solid 1px grey;
  width: 97%;
  height: 1px;
  background: black;
  margin-right: 4px;

}

.footerNav{
  background:#F0572D ;
  height 58px;
  display:flex;
  justify-content: flex-end;
 

}


display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: end;
  background: white;
  position: fixed;
  top: 0;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 70%;
  height: 100vh;
  transition: right 0.3s linear;

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: center;
    background: white;
  }

  @media only screen and (min-width: 624px) {
    display: none;
  }


  a {
    padding: 0.5rem 0.8rem;
    color: #31363F;
    text-decoration: none;
    left: 10px;
    font-weight: bold;
    
  }

 .abajo{
    flex: 1 1 auto
  }

`;