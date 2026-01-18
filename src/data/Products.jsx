const products = [
  {
    id: 78,
    title: "Organic Green Grapes (500g)",
    price: 129,
    oldPrice: 169,
    discount: 24,
    rating: 4.6,
    reviews: 64,
    description: "Seedless organic green grapes, fresh and naturally sweet.",
    image: "https://b2092962.smushcdn.com/2092962/wp-content/uploads/2021/04/white-seedless-grapes-500x500-1.jpg?lossy=1&strip=1&webp=1"
  },
  {
    id: 79,
    title: "Organic Potatoes (1kg)",
    price: 59,
    oldPrice: 85,
    discount: 31,
    rating: 4.4,
    reviews: 92,
    description: "Naturally grown organic potatoes with rich taste and quality.",
    image: "https://m.media-amazon.com/images/I/51T6ABtzOxL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 80,
    title: "Organic Onions (1kg)",
    price: 69,
    oldPrice: 95,
    discount: 27,
    rating: 4.3,
    reviews: 85,
    description: "Fresh organic onions sourced directly from trusted farms.",
    image: "https://parajorganics.com/wp-content/uploads/2016/12/Fresh-Onion.jpg"
  },
  
  {
    id: 81,
    title: "Organic Clay Face Mask (Multani Mitti)",
    price: 179,
    oldPrice: 229,
    discount: 22,
    rating: 4.5,
    reviews: 108,
    description: "Natural multani mitti mask that absorbs excess oil and refreshes skin.",
    image: "https://i.etsystatic.com/19630774/r/il/527f0f/3357668782/il_570xN.3357668782_eqs3.jpg"
  },
  {
    id: 82,
    title: "Organic Handmade Soap (Neem & Tulsi)",
    price: 129,
    oldPrice: 159,
    discount: 19,
    rating: 4.6,
    reviews: 149,
    description: "Handcrafted organic soap that gently cleanses and protects skin naturally.",
    image: "https://m.media-amazon.com/images/I/61NKowT4VuL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 83,
    title: "Fresh Organic Tomatoes (1kg)",
    price: 79,
    oldPrice: 110,
    discount: 28,
    rating: 4.6,
    reviews: 112,
    description: "Farm-fresh organic tomatoes with natural taste and aroma.",
    image: "https://cdn.shopaccino.com/rootz/products/tomato01-1887131792329048_l.jpg?v=569"
  },

  {
    id: 84,
    title: "Organic Aloe Vera Gel (200ml)",
    price: 199,
    oldPrice: 249,
    discount: 20,
    rating: 4.7,
    reviews: 245,
    description: "Hydrating organic aloe vera gel for skin and hair care.",
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 85,
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
    id: 86,
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
    id: 87,
    title: "Shatavari Powder (200g)",
    price: 269,
    oldPrice: 329,
    discount: 18,
    rating: 4.5,
    reviews: 121,
    description: "Traditional shatavari powder that supports hormonal balance and vitality.",
    image: "https://cdn01.pharmeasy.in/dam/products_otc/B22513/al-ayurvedic-life-organic-shatavari-powder-200-gms-pack-of-5-2-1753500605.jpg?dim=400x0&dpr=1&q=100"
  },,
    {
      id: 88,
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
      id: 89,
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
      id: 90,
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
      id: 91,
      title: "Herbal Anti-Dandruff Hair Oil",
      price: 279,
      oldPrice: 349,
      discount: 20,
      rating: 4.6,
      reviews: 123,
      description: "Ayurvedic hair oil that helps control dandruff and nourishes scalp.",
      image: "https://m.media-amazon.com/images/I/81GTStfw-CL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      id: 92,
      title: "Organic Face Serum (Vitamin C)",
      price: 449,
      oldPrice: 549,
      discount: 18,
      rating: 4.7,
      reviews: 141,
      description: "Lightweight organic vitamin C serum that boosts glow and reduces pigmentation.",
      image: "https://m.media-amazon.com/images/I/51jEoS-cYwL._AC_UF1000,1000_QL80_.jpg"
    },
   
  {
    id: 93,
    title: "Organic Baby Massage Oil (200ml)",
    price: 329,
    oldPrice: 399,
    discount: 18,
    rating: 4.8,
    reviews: 182,
    description: "Gentle and safe organic oil specially formulated for baby skin massage.",
    image: "https://m.media-amazon.com/images/I/51nt+GSZGcL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 94,
    title: "Organic Body Wash (Lavender)",
    price: 249,
    oldPrice: 299,
    discount: 17,
    rating: 4.5,
    reviews: 117,
    description: "Relaxing lavender body wash that cleanses skin without drying.",
    image: "https://bryanandcandy.com/cdn/shop/products/CopyofDSC09998.jpg?v=1657005534"
  },
];

export default products;
