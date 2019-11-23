import React, { Component } from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const Nav = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const List = styled.li`
float:right;
display: block;
color: white;
text-align: center;
padding: 14px 16px;
text-decoration: none
border-right:1px solid #bbb;
`;

const Logo = styled.img`
border-radius: 60%;
border: 2px solid green;
width: 2%;
margin-top: 7px;
margin-left: 1%;
float: left;
`;

export default class Navbar extends Component {
    render() {
        return (
            <Wrapper>
            <Nav>
             
                <Logo src="https://via.placeholder.com/150x150" />
              
              <List>
                <a href="#news">logout</a>
              </List>
              <List>
                <a href="#contact">child</a>
              </List>
              <List>
                <a href="#about">District</a>
              </List>
              <List>
                <a href="state">State</a>
              </List>
              <List>
                <a href="#about">Home</a>
              </List>
            </Nav>
            </Wrapper>
        )
    }
}
