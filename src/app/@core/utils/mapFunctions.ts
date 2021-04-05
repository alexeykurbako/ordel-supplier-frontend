import {Order, OrderItemView, StatusEnum} from '../interfaces/orders';
import {Client} from '../interfaces/common/clients';
import {OrderProductView, Product} from '../interfaces/products';


export function mapOrderToOrderView(orders: Order[], clients: Client[], products: Product[]) {
  return orders.map((order: Order) => {
    const orderItems: OrderItemView[] = order.orderItems.map(orderItem => {
      const product = products.find(item => item.id === orderItem.productId);
      const clientProduct =
        product.clientProducts.find(item => item.clientId === order.supplierId);
      return {
        orderId: order.id,
        clientId: clientProduct.clientId,
        product: {
          id: product.id,
          name: product.name,
          brand: product.brand,
          details: product.details,
          uom: product.uom,
        },
        count: orderItem.count,
        price: clientProduct.price,
      };
    });
    const totalPrice = orderItems.reduce((a, b) => a + (b.price * b.count), 0);
    return {
      id: order.id,
      customer: clients.find(item => item.id === order.customerId),
      supplier: clients.find(item => item.id === order.supplierId),
      date: order.date,
      status: order.status,
      totalPrice: totalPrice,
      orderItems: orderItems,
    };
  });
}

export function mapOrderProductViewsToOrders(products: OrderProductView[], customerId: string) {
  const orders: Order[] = [];
  products.forEach(product => {
    const existingOrder = orders.find(item => item.supplierId === product.clientId);
    if (existingOrder) {
      const existingProduct = existingOrder.orderItems.find(item => item.productId === product.productId);
      if (existingProduct) {
        existingProduct.count += product.count;
      } else {
        existingOrder.orderItems.push({
          productId: product.productId,
          count: product.count,
        });
      }
    } else {
      const newOrder: Order = {
        customerId: customerId,
        supplierId: product.clientId,
        date: new Date(),
        status: StatusEnum.new,
        orderItems: [{
          productId: product.productId,
          count: product.count,
        }],
      };
      orders.push(newOrder);
    }
  });

  return orders;
}
