import React from 'react';
import InputBox from './InputBox';

const validators = [
  /^[0-1\b]*$/,
  /^[0-2\b]*$/,
  /^[0-3\b]*$/,
  /^[0-4\b]*$/,
  /^[0-5\b]*$/,
  /^[0-6\b]*$/,
  /^[0-7\b]*$/,
  /^[0-8\b]*$/,
  /^[0-9\b]*$/,
  /^[0-9aA\b]*$/,
  /^[0-9a-bA-B\b]*$/,
  /^[0-9a-cA-C\b]*$/,
  /^[0-9a-dA-D\b]*$/,
  /^[0-9a-eA-E\b]*$/,
  /^[0-9a-fA-F\b]*$/,
];

class BaseConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { decimalEquivalent: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(decimalEquivalent) {
    this.setState({ decimalEquivalent });
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
          validator={validators[base - 2]}
        />
      );
    }
    return <div>{inputBoxes}</div>;
  }
}

export default BaseConvertor;
