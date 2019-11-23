import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

const Subwrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  Margin-top:2%;
  border:2px solid grey;
 
`;

const Biohead = styled.p`
 font-weight:bold;
 margin-left:10%
`;

const Bio= styled.p`
float:left;
`;
const ImageWrap= styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
Margin-top:2%;
`;

const Image1= styled.img`
width:100%;
`;



export default class Home extends Component {
  render() {
    return (
      <Wrapper>
      
      <Subwrap>
          <Biohead>Name:</Biohead>
          <Bio>Ram Parkash</Bio>

          <Biohead>Organization:</Biohead>
          <Bio>Bal Vikas</Bio>

          <Biohead>Designation:</Biohead>
          <Bio>Cluster Cordination</Bio>
          </Subwrap>
          <ImageWrap>
              <Image1 src="https://via.placeholder.com/1500x550"/>
          </ImageWrap>
      </Wrapper>
    );
  }
}
