import React, { Component } from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
 
`;

const Subwrap = styled.div`
width: 100%;
flex-direction: row;
display: flex;
flex-wrap: wrap;
`;

const Card = styled.div`
margin: 20px 14px 5px 68px;
background-color: #fafafa;
border-radius: 3%;
max-height: 283px;
`;

const Cardstate = styled.div`
width: 20%;
  border-radius: 3%;

  height: 283px;
  width: 209px;
 
`;

const Name = styled.h3`
 
`;
export default class District extends Component {
    state = {
        states: [
          {
            name: "Mau",
            
          },
          {
            name: "Varanasi",
           
          },
          {
            name: "chandigarh",
           
          },
       
        ]
      };
      render() {
        return (
          <Wrapper>
              <div>
              <select>
  <option value="punjab">punjab</option>
  <option value="haryana">haryana</option>
  <option value="rajasthan">rajasthan</option>
</select>
                  <input type="text" placeholder="add district"/>
                  <input type="button" value="add"/>

              </div>
            <Subwrap>
              {this.state.states.map((it, index) => {
                return (
                  <Card>
                    <Cardstate>
                     
                      <Name>{it.name}</Name>
                   
                    </Cardstate>
                  </Card>
                );
              })}
            </Subwrap>
          </Wrapper>
        );
      }
    }
