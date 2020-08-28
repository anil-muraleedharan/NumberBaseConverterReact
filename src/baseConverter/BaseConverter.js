import React from 'react';
import InputBox from './InputBox';

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decimalEquivalent: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(input, base) {
    this.setState({ decimalEquivalent: parseInt(input, base) });
  }

  render() {
    const inputBoxes = [];
    for (let base = 2; base <= 16; base++) {
      const { decimalEquivalent } = this.state;
      const value = decimalEquivalent ? decimalEquivalent.toString(base) : '';
      inputBoxes.push(
        <InputBox
          base={base}
          onChange={this.handleChange}
          key={base}
          value={value}
        />
      );
    }
    return <div>{inputBoxes}</div>;
  }
}

export default BaseConvertor;
