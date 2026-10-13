const incomingOrder = {
  id: "AC-9942",
  customer: {
    fullName: "Петров Алексей",
    contacts: {
      email: "alex@mail.ru",
      phone: "+79991112233",
    },
  },
  meta: {
    ip: "192.168.1.1",
    device: "Desktop",
  },
  items: [
    { name: "Ноутбук", price: 75000 },
    { name: "Мышь", price: 2500 },
  ],
  delivery: "Курьер",
};

function processOrder(order) {
  const {
    customer: { fullName },
    meta: { ip },
    ...cleanOrder
  } = order;

  const processedOrder = {
    ...cleanOrder,
    processedBy: "Server_2026",
    clientName: fullName,
    userIp: ip,
  };

  return processedOrder;
}

console.log(processOrder(incomingOrder));
