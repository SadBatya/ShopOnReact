import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }
  render() {
    return (
      <div>
        <div className='wrapper'>
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories сhooseCategory={this.chooseCategory} />
          <Items
            onShowItem={this.onShowItem}
            items={this.state.currentItems}
            onAdd={this.addToOrder}
          />
          {this.state.showFullItem && (
            <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder}/>
          )}
          <Footer />
        </div>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
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
