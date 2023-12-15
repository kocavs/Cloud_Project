import './OrderDetails.css'
import DeliveryMap from './DeliverMap'

function OrderDetails({ order }) {
  return (
    <div className="order-details-container">
      {order.status !== 'Delivered' && (
        <DeliveryMap
          // deliveryLocation={order.delivery_person_location} 
          // restaurantLocation={order.restaurant_location} 
          deliveryLocation={NaN}
          restaurantLocation={{ lat: 32.677171058659184, lng: -97.03755799641237 }}
          orderStatus={order.status}
        />
      )}
      <h2>Order Details</h2>
      <div className="order-info">
        <p><strong>Order ID:</strong> {order.order_id}</p>
        <p><strong>Customer Email:</strong> {order.customer_email}</p>
        <p><strong>Restaurant Name:</strong> {order.restaurant_name}</p>
        <p><strong>Order Date:</strong> {order.order_date}</p>
        <p><strong>Delivery Address:</strong> {order.delivery_address}</p>
        <p><strong>Total Amount:</strong> ${order.total_amount}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Delivery Person:</strong> {order.delivery_person_email}</p>
        {order.delivery_start_time && <p><strong>Delivery Start Time:</strong> {order.delivery_start_time}</p>}
        {order.delivery_end_time && <p><strong>Delivery End Time:</strong> {order.delivery_end_time}</p>}
      </div>
      
      <h3 className="order-items-heading">Order Items:</h3>
      <ul className="order-items-list">
        {order.order_items && order.order_items.map((item, index) => (
          <li key={index} className="order-item">
            <p><strong>Item Name:</strong> {item.menu_item_name}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Cost:</strong> ${item.cost}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderDetails;
