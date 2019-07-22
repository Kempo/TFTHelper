import React, { Component } from 'react';

export default class Item extends Component<Props> {
  componentDidMount() {
    const { title, build } = this.props;

    console.log(title);
    console.log('pause');

    console.log(build ? 'yes' : 'no');
  }

  render() {
    const { title, build } = this.props;
    return (
      <div>
        <h1> {title} </h1>
        {build ? build.map(el => <p key={el}>{el}</p>) : <p>none</p>}
      </div>
    );
  }
}
