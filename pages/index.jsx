import React, { Component } from 'react';
import Link from 'next/link';
import axios from 'axios';
import mainTemplate from '../components/templates/main';

class Index extends Component {
  static async getInitialProps(ctx) {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);

    return {
      res: res.data
    };
  }

  render() {
    return <div>{JSON.stringify(this.props.res)}</div>;
  }
}

export default mainTemplate(Index);
