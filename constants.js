// (types removed)

export const PRODUCTS = [
  {
    id: '1',
    name: "Lay's Classic Potato Chips",
    price: 1.99,
    category: 'Chips',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1566478989037-eec170784d0b?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1566478945415-467272202681?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'The classic, crispy potato chip that has been a favorite for generations. Made with only three simple ingredients: potatoes, vegetable oil, and salt.',
    ingredients: 'Potatoes, Vegetable Oil (Canola, Corn, Soybean, and/or Sunflower Oil), Salt.',
    rating: 4.8,
    reviews: 1250
  },
  {
    id: '2',
    name: 'Coca-Cola Classic',
    price: 1.25,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1554866585-cd94860890b7?auto=format&fit=crop&q=80&w=1000'
    ],
    description: "The world's favorite soft drink since 1886. Enjoy the crisp, refreshing taste of Coca-Cola with your favorite snack.",
    ingredients: 'Carbonated Water, High Fructose Corn Syrup, Caramel Color, Phosphoric Acid, Natural Flavors, Caffeine.',
    rating: 4.7,
    reviews: 2100
  },
  {
    id: '3',
    name: 'Oreo Double Stuf Cookies',
    price: 4.49,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1541445942335-a95f73cd0a9b?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Double the creme, double the fun! These chocolate sandwich cookies are filled with twice as much original Oreo creme.',
    ingredients: 'Sugar, Unbleached Enriched Flour, Palm and/or Canola Oil, Cocoa, High Fructose Corn Syrup, Leavening, Salt, Soy Lecithin, Chocolate, Artificial Flavor.',
    rating: 4.9,
    reviews: 850
  },
  {
    id: '4',
    name: 'Haribo Goldbears Gummy Candy',
    price: 2.49,
    category: 'Candy',
    image: 'https://images.unsplash.com/photo-1582050041567-9cfdd33e35d5?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1582050041567-9cfdd33e35d5?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1612906375050-6a2dc2434b9d?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'The original gummy bear! Enjoy the chewy, fruity goodness of Haribo Goldbears in five classic flavors: Raspberry, Orange, Strawberry, Pineapple, and Lemon.',
    ingredients: 'Glucose Syrup, Sugar, Gelatin, Dextrose, Citric Acid, Corn Starch, Fruit and Vegetable Juices for Color, Natural and Artificial Flavors.',
    rating: 4.8,
    reviews: 1500
  },
  {
    id: '5',
    name: 'SkinnyPop Original Popcorn',
    price: 3.99,
    category: 'Chips',
    image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Pure popped perfection. This popcorn is made with just three simple ingredients and contains no artificial flavors or preservatives. Non-GMO and gluten-free.',
    ingredients: 'Popcorn, Sunflower Oil, Salt.',
    rating: 4.6,
    reviews: 620
  },
  {
    id: '6',
    name: 'Kind Bar - Dark Chocolate Nuts',
    price: 1.75,
    category: 'Candy',
    image: 'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5605d?auto=format&fit=crop&q=80&w=1000'
    ],
    description: "A satisfying snack that's both sweet and salty. Made with whole nuts, dark chocolate, and a hint of sea salt.",
    ingredients: 'Almonds, Peanuts, Dark Chocolate Coating, Chicory Root Fiber, Honey, Glucose Syrup, Rice Flour, Sea Salt, Soy Lecithin, Sugar.',
    rating: 4.7,
    reviews: 430
  },
  {
    id: '7',
    name: 'Doritos Nacho Cheese',
    price: 1.99,
    category: 'Chips',
    image: 'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&q=80&w=1000',
    images: [
      'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1599490659213-e2b9527bb087?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Experience the bold flavor of Doritos Nacho Cheese. These tortilla chips are packed with a powerful crunch and intense cheesy taste.',
    ingredients: 'Corn, Vegetable Oil, Maltodextrin, Salt, Cheddar Cheese, Whey, Monosodium Glutamate, Buttermilk, Romano Cheese, Whey Protein Concentrate, Onion Powder, Spices, Natural and Artificial Flavor.',
    rating: 4.8,
    reviews: 980
  }
];

export const CATEGORIES = ['All', 'Chips', 'Cookies', 'Candy', 'Drinks'];

export const ORDERS = [
  {
    id: '123456',
    date: 'Jan 15, 2024',
    status: 'Shipped',
    total: 99.99,
    items: 5
  },
  {
    id: '123332',
    date: 'Jan 10, 2024',
    status: 'Processing',
    total: 45.50,
    items: 2
  }
];
