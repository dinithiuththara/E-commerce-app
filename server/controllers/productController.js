const getProducts = async (req, res) => {
  try {
    const products = [
      {
        _id: "1",
        name: "Wireless Headphones",
        price: 12000,
        description: "High quality wireless headphones with noise cancellation",
        image: "https://via.placeholder.com/300",
        category: "Electronics",
        brand: "Sony",
        countInStock: 10,
      },
      {
        _id: "2",
        name: "Smart Watch",
        price: 18500,
        description: "Modern smartwatch with fitness tracking features",
        image: "https://via.placeholder.com/300",
        category: "Wearables",
        brand: "Apple",
        countInStock: 7,
      },
      {
        _id: "3",
        name: "Running Shoes",
        price: 9500,
        description: "Comfortable running shoes for daily sports use",
        image: "https://via.placeholder.com/300",
        category: "Fashion",
        brand: "Nike",
        countInStock: 15,
      },
      {
        _id: "4",
        name: "Laptop Backpack",
        price: 6500,
        description: "Durable backpack suitable for office and university use",
        image: "https://via.placeholder.com/300",
        category: "Accessories",
        brand: "HP",
        countInStock: 20,
      },
    ];

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProducts };