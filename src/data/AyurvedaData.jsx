const AyurvedaData = [
    {
      id: 37,
      title: "Ashwagandha Powder (200g)",
      price: 249,
      oldPrice: 299,
      discount: 17,
      rating: 4.7,
      reviews: 198,
      description: "Pure organic ashwagandha powder known to reduce stress and support overall vitality.",
      image: "https://m.media-amazon.com/images/I/71-qC6WI4AL.jpg"
    },
    {
      id: 38,
      title: "Triphala Churna (200g)",
      price: 199,
      oldPrice: 249,
      discount: 20,
      rating: 4.6,
      reviews: 176,
      description: "Traditional ayurvedic formulation that supports digestion and detoxification naturally.",
      image: "https://rukminim2.flixcart.com/image/480/640/xif0q/ayurvedic/u/9/l/triphala-churna-helps-relieve-constipation-quick-acidity-gas-original-imah6ddsrcnwysur.jpeg?q=90"
    },
    {
      id: 39,
      title: "Brahmi Capsules (60 Capsules)",
      price: 299,
      oldPrice: 369,
      discount: 19,
      rating: 4.6,
      reviews: 142,
      description: "Herbal brahmi capsules that help improve memory, focus, and mental clarity.",
      image: "https://m.media-amazon.com/images/I/41a70Qsqn9L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 40,
      title: "Giloy Juice (500ml)",
      price: 279,
      oldPrice: 349,
      discount: 20,
      rating: 4.7,
      reviews: 189,
      description: "Natural giloy juice known for boosting immunity and supporting overall wellness.",
      image: "https://www.patanjaliayurved.net/assets/product_images/400x500/17395259941.1.webp"
    },
    {
      id: 41,
      title: "Neem Capsules (60 Capsules)",
      price: 249,
      oldPrice: 299,
      discount: 17,
      rating: 4.5,
      reviews: 134,
      description: "Ayurvedic neem capsules that help purify blood and support skin health.",
      image: "https://ishalife.sadhguru.org/media/catalog/product/h/i/hi0000700001_1__1.jpg?optimize=medium&fit=bounds&height=782&width=782"
    },
    {
      id: 42,
      title: "Amla Juice (500ml)",
      price: 229,
      oldPrice: 279,
      discount: 18,
      rating: 4.6,
      reviews: 165,
      description: "Freshly processed amla juice rich in vitamin C for immunity and digestion.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTowokUDnmO8GyA91QqYOkTQSsJnK2HEkL0tg&s"
    },
    {
      id: 43,
      title: "Shatavari Powder (200g)",
      price: 269,
      oldPrice: 329,
      discount: 18,
      rating: 4.5,
      reviews: 121,
      description: "Traditional shatavari powder that supports hormonal balance and vitality.",
      image: "https://cdn01.pharmeasy.in/dam/products_otc/B22513/al-ayurvedic-life-organic-shatavari-powder-200-gms-pack-of-5-2-1753500605.jpg?dim=400x0&dpr=1&q=100"
    },
    {
      id: 44,
      title: "Turmeric Curcumin Capsules",
      price: 349,
      oldPrice: 429,
      discount: 19,
      rating: 4.7,
      reviews: 158,
      description: "High-potency turmeric capsules known for anti-inflammatory benefits.",
      image: "https://m.media-amazon.com/images/I/51if-GnlNgL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 45,
      title: "Herbal Immunity Kadha",
      price: 199,
      oldPrice: 249,
      discount: 20,
      rating: 4.6,
      reviews: 143,
      description: "Ayurvedic immunity kadha blend with herbs that support natural defense.",
      image: "https://srvhospitals.com/wp-content/uploads/2020/06/banner_2e767036-7da7-4213-a2d9-b3f1bf92f789_1006x.progressive-e1593415482437-1.jpg"
    },
    {
      id: 46,
      title: "Moringa Powder (200g)",
      price: 249,
      oldPrice: 309,
      discount: 19,
      rating: 4.5,
      reviews: 117,
      description: "Nutrient-rich moringa powder supporting energy, metabolism, and immunity.",
      image: "https://m.media-amazon.com/images/I/81sfuDD06GL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 47,
      title: "Herbal Digestive Tablets",
      price: 159,
      oldPrice: 199,
      discount: 20,
      rating: 4.4,
      reviews: 109,
      description: "Natural digestive tablets that help relieve gas and improve digestion.",
      image: "https://m.media-amazon.com/images/I/510sY9qf13L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 48,
      title: "Tulsi Drops (30ml)",
      price: 149,
      oldPrice: 189,
      discount: 21,
      rating: 4.6,
      reviews: 132,
      description: "Concentrated tulsi drops that support respiratory health and immunity.",
      image: "https://m.media-amazon.com/images/I/711BtjiDpxL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 49,
      title: "Herbal Pain Relief Oil (100ml)",
      price: 219,
      oldPrice: 279,
      discount: 21,
      rating: 4.5,
      reviews: 126,
      description: "Ayurvedic pain relief oil for soothing muscle and joint discomfort.",
      image: "https://himalayawellness.in/cdn/shop/products/pain-relief-oil.jpg?v=1622100876"
    },
    {
      id: 50,
      title: "Licorice (Mulethi) Powder (100g)",
      price: 179,
      oldPrice: 229,
      discount: 22,
      rating: 4.6,
      reviews: 98,
      description: "Pure mulethi powder known for throat relief and digestive benefits.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Sk3rYvbYvDW9GKmdGfHb3wBwSmouaS7jiw&s"
    },
    {
      id: 51,
      title: "Herbal Detox Tea (100g)",
      price: 249,
      oldPrice: 299,
      discount: 17,
      rating: 4.5,
      reviews: 114,
      description: "Refreshing herbal detox tea that supports cleansing and digestion.",
      image: "https://m.media-amazon.com/images/I/711dp1cJhwL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 52,
      title: "Ayurvedic Chyawanprash (500g)",
      price: 349,
      oldPrice: 429,
      discount: 19,
      rating: 4.7,
      reviews: 173,
      description: "Traditional chyawanprash formulated to boost immunity and stamina.",
      image: "https://m.media-amazon.com/images/I/71tH6y4K-SL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 53,
      title: "Herbal Sleep Aid Tablets",
      price: 299,
      oldPrice: 369,
      discount: 19,
      rating: 4.5,
      reviews: 101,
      description: "Natural herbal tablets that help promote restful and quality sleep.",
      image: "https://m.media-amazon.com/images/I/51fgXKIlSLL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 54,
      title: "Organic Fenugreek (Methi) Seeds (250g)",
      price: 119,
      oldPrice: 149,
      discount: 20,
      rating: 4.4,
      reviews: 92,
      description: "Organic methi seeds known for digestive health and blood sugar balance.",
      image: "https://m.media-amazon.com/images/I/61N0a4enwRL._AC_UF894,1000_QL80_.jpg"
    },
    {
      id: 55,
      title: "Herbal Liver Care Syrup (200ml)",
      price: 229,
      oldPrice: 279,
      discount: 18,
      rating: 4.6,
      reviews: 119,
      description: "Ayurvedic liver care syrup that supports detoxification and liver health.",
      image: "https://m.media-amazon.com/images/I/81zM7bmUA8L._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 56,
      title: "Ayurvedic Eye Care Drops (10ml)",
      price: 159,
      oldPrice: 199,
      discount: 20,
      rating: 4.5,
      reviews: 88,
      description: "Gentle ayurvedic eye drops that help relieve eye strain and dryness.",
      image: "https://m.media-amazon.com/images/I/41Q51gzzyTL._AC_UF1000,1000_QL80_.jpg"
    }
  ];
  
  export default AyurvedaData;
  