import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getCandies } from "../reducers";

class AllCandies extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.renderData = this.renderData.bind(this);
  }

  componentDidMount(){
    this.renderData()
  }

  renderData(){
    const { getCandies } = this.props;
    getCandies();
  }

  render () {
    const { candyList } = this.props;
    return (
      <div>
        <ul>
          {candyList.map((candy, index) => {
            return (
              <li key={index}>
                <img src={candy.imageUrl} alt="candy image" />
                <h3>{candy.name}</h3>
                <p>{candy.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    candyList: state.candyList
  }
}

export default connect(mapStateToProps, { getCandies })(AllCandies);
