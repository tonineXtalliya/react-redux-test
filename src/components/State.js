import React, { Component } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from '../actions/fetchProducts';
import { getProductsError, getProducts, getProductsPending } from '../actions/reducer';


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



class State extends Component {
  state = {
    states: [
      {
        name: "Delhi",

      },
      {
        name: "gurgaon",

      },
      {
        name: "chandigarh",

      },

    ]
  };

  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }


  render() {
    return (
      <Wrapper>
        <div>
          <input type="text" placeholder="add state" />
          <input type="button" value="add" />

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




const mapStateToProps = state => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State);
