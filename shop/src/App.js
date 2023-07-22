import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул серый',
          img: 'chair.jpg',
          desc: 'Loremru ipsum dolor sit amet, consecteur adipisicing',
          category: 'chairs',
          price: '49.99',
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.jpg',
          desc: 'Loremru ipsum dolor sit amet, consecteur adipisicing',
          category: 'chairs',
          price: '79.99',
        },
        {
          id: 3,
          title: 'Тумбочка',
          img: 'pedestal.jpg',
          desc: 'Loremru ipsum dolor sit amet, consecteur adipisicing',
          category: 'chairs',
          price: '89.99',
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.jpg',
          desc: 'Loremru ipsum dolor sit amet, consecteur adipisicing',
          category: 'chairs',
          price: '29.99',
        },
        {
          id: 5,
          title: 'Кресло',
          img: 'armchair.jpg',
          desc: 'Loremru ipsum dolor sit amet, consecteur adipisicing',
          category: 'chairs',
          price: '99.99',
        },
        {
          id: 6,
          title: 'Диван',
          img: 'sofa.jpeg',
          desc: 'Loremru ipsum dolor sit amet, consecteur adipisicing',
          category: 'chairs',
          price: '159.99',
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }
  render() {
    return (
      <div>
        <div className='wrapper'>
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories />
          <Items items={this.state.items} onAdd={this.addToOrder} />
          <Footer />
        </div>
      </div>
    );
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
