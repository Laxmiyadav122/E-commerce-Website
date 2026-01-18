const FreshProducedata = [
    {
      id: 1,
      title: "Organic Red Apples (1kg)",
      price: 199,
      oldPrice: 249,
      discount: 20,
      rating: 4.7,
      reviews: 145,
      description: "Fresh and juicy organic red apples grown without chemicals.",
      image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Organic Bananas (1 Dozen)",
      price: 89,
      oldPrice: 120,
      discount: 25,
      rating: 4.5,
      reviews: 98,
      description: "Naturally ripened organic bananas, rich in energy and nutrients.",
      image: "https://img.clevup.in/94460/1634373514600_SKU-0010_0.jpeg?width=600&format=webp"
    },
    {
      id: 3,
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
      id: 4,
      title: "Organic Spinach (Palak)",
      price: 49,
      oldPrice: 70,
      discount: 30,
      rating: 4.4,
      reviews: 76,
      description: "Fresh green organic spinach rich in iron and vitamins.",
      image: "https://www.greendna.in/cdn/shop/products/English_Spinach__67562_425x.jpg?v=1607938113"
    },
    {
      id: 5,
      title: "Organic Carrots (1kg)",
      price: 69,
      oldPrice: 95,
      discount: 27,
      rating: 4.5,
      reviews: 88,
      description: "Crunchy and sweet organic carrots grown using natural methods.",
      image: "https://m.media-amazon.com/images/I/71kDFOqyT8L.jpg"
    },
    {
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
      title: "Organic Green Chillies (250g)",
      price: 39,
      oldPrice: 55,
      discount: 29,
      rating: 4.5,
      reviews: 67,
      description: "Fresh organic green chillies with natural heat and flavor.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbtUPxEjNsBzkq43XHw42vJf_9H_nAOFtjg&s"
    },
    {
      id: 10,
      title: "Organic Cauliflower",
      price: 89,
      oldPrice: 120,
      discount: 26,
      rating: 4.6,
      reviews: 73,
      description: "Farm-fresh organic cauliflower grown without chemicals.",
      image: "https://cdn.shopaccino.com/rootz/products/picture9-665168_m.jpg?v=569"
    },
    {
      id: 11,
      title: "Organic Broccoli (500g)",
      price: 149,
      oldPrice: 189,
      discount: 21,
      rating: 4.7,
      reviews: 58,
      description: "Fresh organic broccoli rich in fiber and nutrients.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2wWp177Hy_y4OiO-ySAGJLNglbKFKPP8xw&s"
    },
    {
      id: 12,
      title: "Organic Papaya",
      price: 99,
      oldPrice: 130,
      discount: 24,
      rating: 4.4,
      reviews: 61,
      description: "Naturally ripened organic papaya, sweet and healthy.",
      image: "https://pushtiorganics.com/cdn/shop/files/papaya_235d4198-2bc9-4a5c-9051-83c2126a7445.png?v=1709210378"
    },
    {
      id: 13,
      title: "Organic Cucumber (1kg)",
      price: 49,
      oldPrice: 70,
      discount: 30,
      rating: 4.3,
      reviews: 79,
      description: "Fresh organic cucumbers, crisp and refreshing.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Inw2iTIpC0XAEC0UT5-i2Hlp65Ibsa1CQQ&s"
    },
    {
      id: 14,
      title: "Organic Beetroot (1kg)",
      price: 79,
      oldPrice: 105,
      discount: 25,
      rating: 4.5,
      reviews: 66,
      description: "Naturally grown organic beetroot rich in antioxidants.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMAfQl9UuP6_pAOsu1PTirL2HIsYswlYzug&s"
    },
    {
      id: 15,
      title: "Organic Lemons (500g)",
      price: 59,
      oldPrice: 80,
      discount: 26,
      rating: 4.4,
      reviews: 72,
      description: "Fresh organic lemons with natural aroma and taste.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYg4XvurSU6JlKbXIJbOXIZ15M-dF0x070aw&s"
    },
    {
      id: 16,
      title: "Organic Pomegranate",
      price: 179,
      oldPrice: 220,
      discount: 19,
      rating: 4.6,
      reviews: 54,
      description: "Juicy organic pomegranates rich in antioxidants.",
      image: "https://cdn.shopaccino.com/rootz/products/picture19-192802688603861_m.jpg?v=569"
    }
  
  ];
  
  export default FreshProducedata;
  