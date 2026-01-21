const flattenOrders = (orders) => {
  return orders.map(order => {
    const totalAmount = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return {
      orderId: order.orderId,
      customerName: order.customer.name,
      city: order.customer.location.city,
      totalAmount
    };
  });
};
