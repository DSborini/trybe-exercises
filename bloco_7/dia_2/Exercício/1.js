const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    info = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N ${order.address.number}, AP: ${order.address.apartment}`
    return info;
  }
  
//   console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    order.name = "Luiz Silva";
    order.order.pizza = {
        muzzarella: {
          amount: 1,
          price: 20,
        },
        calabresa: {
          amount: 1,
          price: 20,
        }
      }
    order.payment.total = 50;
    info = `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é de R$ ${order.payment.total}`
    return info;
  }
  
  console.log(orderModifier(order));

 