const electronicsData = [
    {
      id: 1,
      title: "Smart LED TV 50\"",
      price: 39999,
      oldPrice: 49999,
      discount: 20,
      rating: 4.6,
      reviews: 120,
      description: "50-inch 4K UHD Smart LED TV with HDR and Dolby Audio.",
      image: "https://www.cinegold.in/cdn/shop/files/50inch.jpg?v=1712918986"
    },
    {
      id: 2,
      title: "Bluetooth Headphones",
      price: 2999,
      oldPrice: 3999,
      discount: 25,
      rating: 4.4,
      reviews: 90,
      description: "Wireless Bluetooth headphones with noise cancellation and long battery life.",
      image: "https://m.media-amazon.com/images/I/61RahTQtAqL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 3,
      title: "Smartphone 128GB",
      price: 17999,
      oldPrice: 21999,
      discount: 18,
      rating: 4.5,
      reviews: 200,
      description: "Latest smartphone with 128GB storage, 6GB RAM, and AMOLED display.",
      image: "https://cdn.moglix.com/p/thmRaLI42L4Of-xxlarge.jpg"
    },
    {
      id: 4,
      title: "Wireless Mouse",
      price: 899,
      oldPrice: 1299,
      discount: 31,
      rating: 4.3,
      reviews: 60,
      description: "Ergonomic wireless mouse with adjustable DPI and long battery life.",
      image: "https://uniquec.com/wp-content/uploads/235.jpg"
    },
    {
      id: 5,
      title: "Gaming Laptop",
      price: 74999,
      oldPrice: 84999,
      discount: 12,
      rating: 4.7,
      reviews: 85,
      description: "High performance gaming laptop with Intel i7, 16GB RAM, GTX 1660Ti.",
      image: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/g/n/gn55308yc9c001orb1_1_1.jpg"
    },
    {
      id: 6,
      title: "Smartwatch",
      price: 3999,
      oldPrice: 4999,
      discount: 20,
      rating: 4.4,
      reviews: 110,
      description: "Fitness smartwatch with heart rate monitor and step tracking.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XDsy0F5uBjoNWO9HoxGWUNAYgR3xIFsMfw&s"
    },
    {
      id: 7,
      title: "Portable Speaker",
      price: 2499,
      oldPrice: 3499,
      discount: 29,
      rating: 4.5,
      reviews: 95,
      description: "Compact portable Bluetooth speaker with high-quality sound.",
      image: "https://www.boat-lifestyle.com/cdn/shop/files/Stone_SpinXPro_1_b3503890-50f6-4cd1-9138-0bd90874391e_1300x.png?v=1709717442"
    },
    {
      id: 8,
      title: "Digital Camera",
      price: 25999,
      oldPrice: 31999,
      discount: 19,
      rating: 4.6,
      reviews: 70,
      description: "DSLR digital camera with 24MP sensor and 4K video recording.",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 9,
      title: "Home Theater System",
      price: 14999,
      oldPrice: 19999,
      discount: 25,
      rating: 4.4,
      reviews: 55,
      description: "5.1 Channel home theater system with surround sound and subwoofer.",
      image: "https://i.insider.com/675b1c65cf8d1359a2df7dee?width=1200&format=jpeg"
    },
    {
      id: 10,
      title: "Air Purifier",
      price: 6999,
      oldPrice: 8999,
      discount: 22,
      rating: 4.5,
      reviews: 80,
      description: "HEPA filter air purifier for rooms up to 350 sq. ft.",
      image: "https://m.media-amazon.com/images/I/51VJcXz9V6S._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 11,
      title: "Wireless Charger",
      price: 1499,
      oldPrice: 1999,
      discount: 25,
      rating: 4.3,
      reviews: 40,
      description: "Fast wireless charger compatible with all Qi-enabled devices.",
      image: "https://vaku.in/cdn/shop/files/s23-grey_1024x1024.jpg?v=1742290998"
    },
    {
      id: 12,
      title: "VR Headset",
      price: 10999,
      oldPrice: 13999,
      discount: 21,
      rating: 4.5,
      reviews: 65,
      description: "Immersive VR headset for gaming and 3D experiences.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRobS9rWdGql_GP61PPz4aydYsCdZO29IZvGA&s"
    },
    {
      id: 13,
      title: "Electric Kettle",
      price: 1999,
      oldPrice: 2499,
      discount: 20,
      rating: 4.6,
      reviews: 50,
      description: "Stainless steel electric kettle with auto shut-off feature.",
      image: "https://www.wonderchef.com/cdn/shop/files/6799471.jpg?v=1757415194"
    },
    {
      id: 14,
      title: "Microwave Oven",
      price: 6999,
      oldPrice: 8999,
      discount: 22,
      rating: 4.4,
      reviews: 75,
      description: "20L microwave oven with convection and grill functions.",
      image: "https://www.electrolux.in/globalassets/support/faq/microwave-faq-640x640.jpg?width=464"
    },
    {
      id: 15,
      title: "Laptop Backpack",
      price: 1499,
      oldPrice: 1999,
      discount: 25,
      rating: 4.3,
      reviews: 35,
      description: "Durable laptop backpack with multiple compartments and water resistance.",
      image: "https://m.media-amazon.com/images/I/81idlqFqcUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 16,
      title: "Action Camera",
      price: 8999,
      oldPrice: 11999,
      discount: 25,
      rating: 4.5,
      reviews: 55,
      description: "Waterproof action camera with 4K video recording and Wi-Fi.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh3zaoSwA1ulnhSXvTlJekutw7Qm_In1DIqA&s"
    },
    {
      id: 17,
      title: "Router Wi-Fi 6",
      price: 3999,
      oldPrice: 4999,
      discount: 20,
      rating: 4.4,
      reviews: 70,
      description: "High-speed Wi-Fi 6 router with wide coverage and multiple devices support.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVQuf-EjSMsUzXhRETfZw8qHVJkcjZGKMfA&s"
    },
    {
      id: 18,
      title: "Projector 1080p",
      price: 15999,
      oldPrice: 19999,
      discount: 20,
      rating: 4.5,
      reviews: 45,
      description: "Full HD projector for home theater and presentations.",
      image: "https://blaupunkt.com/wp-content/uploads/2021/08/BP1080W-1-2-1024x669.jpg"
    },
    {
      id: 19,
      title: "Portable SSD 1TB",
      price: 8999,
      oldPrice: 11999,
      discount: 25,
      rating: 4.6,
      reviews: 60,
      description: "Fast portable SSD for backup and high-speed file transfer.",
      image: "https://i0.wp.com/arihant.net.in/wp-content/uploads/2021/08/extreme-pro-usb-3-1-ssd-front.png.thumb_.1280.1280.png?fit=1280%2C1280&ssl=1"
    },
    {
      id: 20,
      title: "Electric Toothbrush",
      price: 2999,
      oldPrice: 3999,
      discount: 25,
      rating: 4.4,
      reviews: 50,
      description: "Rechargeable electric toothbrush with multiple modes and timer.",
      image: "https://m.media-amazon.com/images/I/71Ipo1ZbMFL._AC_UF1000,1000_QL80_.jpg"
    }
  ];
  
  export default electronicsData;
  