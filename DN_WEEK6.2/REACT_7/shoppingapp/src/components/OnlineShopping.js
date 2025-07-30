import React, { Component } from 'react';
import Cart from '../Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        new Cart('Laptop', 70000),
        new Cart('Smartphone', 25000),
        new Cart('Headphones', 2000),
        new Cart('Smartwatch', 5000),
        new Cart('Camera', 30000)
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Online Shopping Cart</h2>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td>{item.itemname}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default OnlineShopping;