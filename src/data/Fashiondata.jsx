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
      image: "https://images.unsplash.com/photo-1606813908882-7687b1f52d7c?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1580894894512-2b1fdf62de2d?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1611078481206-911b4c8c7a5b?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1612831455549-84ff6a5d6f5f?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1587202372775-0ff3f5e6b7f6?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600077081471-0c8be5ee1a87?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1606813855276-d0f0b0e0a6c5?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600379329550-9f7d1f5e65b1?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1604147706281-4f62c1b08907?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600180758894-1c8f0f8c0d90?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1605254752422-7de2b9f5fffb?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600180758894-1c8f0f8c0d90?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600180758894-1c8f0f8c0d90?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1598300040117-2b8e1b3b1d21?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1598300040117-2b8e1b3b1d21?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1598300040117-2b8e1b3b1d21?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600180758894-1c8f0f8c0d90?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600180758894-1c8f0f8c0d90?auto=format&fit=crop&w=800&q=80"
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
      image: "https://images.unsplash.com/photo-1600180758894-1c8f0f8c0d90?auto=format&fit=crop&w=800&q=80"
    }
  ];
  
  export default electronicsData;
  