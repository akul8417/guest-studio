const createOrder = async () => {
  const res = await fetch("http://localhost:5000/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 500, currency: "INR" }),
  });

  const data = await res.json();
  if (data.success) {
    const options = {
      key: "YOUR_RAZORPAY_KEY_ID",
      amount: data.order.amount,
      currency: data.order.currency,
      order_id: data.order.id,
      name: "My Hotel Booking",
      description: "Room Payment",
      handler: async (response) => {
        await fetch("http://localhost:5000/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(response),
        });
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }
};
