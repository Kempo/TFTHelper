// @flow
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import routes from '../constants/routes';
import styles from './Home.css';
import data from '../items';
import Item from './Item';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      d: data
    };
  }

  componentDidMount() {
    const { d } = this.state;
    console.log(d);
  }

  render() {
    const { d } = this.state;

    return (
      <div className={styles.container} data-tid="container">
        <h2>TFTHelper</h2>
        {Object.values(d).map(name => (
          <Item
            key={name.name}
            title={name.name}
            build={d[name.key].buildsInto}
          />
        ))}
      </div>
    );
  }
}
