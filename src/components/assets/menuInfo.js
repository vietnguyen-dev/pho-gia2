let sections = [
  {
    id: 0,
    name: "Appetizers",
    servedWith: "",
    items: [
      {
        id: 1,
        name: "Fresh Salad Rolls",
        description: "Rice paper rolls with shrimp or prl or chicken or beef",
        price: "choice",
        dietType: "gluten free",
        choices: [ 
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: 5.50},
          {id: 2, meat: `Beef or Shrimp`, price: 5.95},
          {id: 3, meat: `Combined Shrimp and Pork OR Chicken`, price: 7.50},
          {id: 4, meat: `Combined Shrimp, Pork, and Chicken `, price: 8.50},
        ]
      },
      {
        id: 2,
        name: "Crab Puffs",
        description: "Rice paper rolls with shrimp or prl or chicken or beef",
        price: '4.95',
        dietType: "none",
      },
      {
        id: 3,
        name: "Pot Sticker (deep fried or steamed)",
        description: "Deep fried wonton skin wrapped with vegetables and pork meat.",
        price: '4.95',
        dietType: "none",
      },
      {
        id: 4,
        name: "Deep Fried Tofu",
        description: "Deep fried tofu with soy sauce (soy sauce contains gluten, sweet chili sauce contains no gluten)",
        price: '4.95',
        dietType: "both",
      },
      {
        id: 5,
        name: "Chicken Satay",
        description: "Deep fried tofu with soy sauce (soy sauce contains gluten, sweet chili sauce contains no gluten)",
        price: '6.95',
        dietType: "gluten free",
      },
      {
        id: 6,
        name: "Chicken Nuggets",
        description: "Deep fried and battered chicken",
        price:'4.95',
        dietType: "none",
      },
      {
        id: 7,
        name: "Crispy Eggs Rolls - Cha Gio",
        description: 'Cripsy rolls with ground pork, mushrooms, shredded taro, onions, carrots served with sweet chili or fish sauce',
        price: '5.50',
        dietType: "none",
      },
      {
        id: 8,
        name: "Veggie Crispy Eggs Rolls - Cha Gio Chay",
        description: 'Cripsy rolls with tofu, mushrooms, shredded taro, onions, carrots served with sweet chili or fish sauce',
        price: '5.50',
        dietType: "vegetarian",
      },
      {
        id: 9,
        name: "Chicken Wings - Canh Ga Chien",
        description: 'Cripsy rolls with tofu, mushrooms, shredded taro, onions, carrots served with sweet chili or fish sauce',
        price: '6.95',
        dietType: "none",
      },
      {
        id: 10,
        name: "Cocout Breaded Shrimp",
        description: 'Cripsy deep fried coconut breaded shrimp served with chili sauce',
        price: '6.95',
        dietType: "none",
      },
      {
        id: 11,
        name: "Pepper Salted Shrimp or Calimari",
        description: 'Crispy deep fried pepper salted shrimp or calimari with carrots and onions',
        price: '9.50',
        dietType: "none",
      },
      {
        id: 12,
        name: "Battered Cod fish fillets",
        description: 'Deep fried battered Cod fish fillets',
        price: '4.50',
        dietType: "none",
      },
      {
        id: 13,
        name: "French Fries",
        description: 'Our French Fries are crispy and golden on the outside and fluffy on the inside with 0 grams trans fat',
        price: '3.95',
        dietType: "none",
      },
    ]
  },
  {
    id: 1,
    name: "Salad",
    servedWith: "",
    items: [
      {
        id: 18,
        name: "Beef Salad - Goi Bo",
        description:
          "Beef, lettuce, cilantro, red bell pepper, cucumber, dry pepper, tomatoes fried shallots, tappes with roasted peanuts",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 19,
        name: "Chicken Breast Salad - Goi Ga",
        description:
          "Finely shredded cabbage, chicken, cilantro, red bell pepper, fried shallots, pickled carrots and radish, roasted peanuts tossed in our special homemade sauce",
        price: "9.50",
        dietType: "gluten free",
      },
      {
        id: 20,
        name: "Garden Salad",
        description:
          "Fresh green lettuce, red bell pepper, tomatoes, cilantro, fresh advocado, cucumbers, carrots, boiled egg, seasoned cruton",
        price: "9.95 with choice",
        dietType: "both",
        choices: [ 
          {id: 1, meat: `Chicken breast, tofu, or naturally smoked real bacon`, price: ""},
          {id: 2, meat: `Blue, romano, cheddar, or swiss cheese`, price: ""},
          {id: 3, meat: `Caesar, ranch, thousand island, italian olive garden, or homemade sauce (sauce contains gluten)`, price: ""},
        ]
      },
      {
        id: 21,
        name: "Green Papaya Salad",
        description:
          "Finely shredded green papaya, shrimp or tofu, carrots, tomatoes, dry pepper, cilantro, red bell pepper, string bean, topped with fried shallots and roasted peanuts",
        price: "10.95",
        dietType: "gluten free",
      },
    ]
  },
  {
    id: 2,
    name: "Noodle Soup - Pho",
    servedWith:
      "Served with noodles, fresh bean sprouts, basil leaves, onions, cilantro, and a lime wedge except for entrees with *. Add 2.00 for Larger size. Add 4.00 for Super Bowl size. Add extra vegetable or noodle 2.00. add extra meat 3.00. Add extra seafood 4.00",
    items: [
      {
        id: 28,
        name: "Pho Tai",
        description: "Beef Round Steak",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 29,
        name: "Pho Tai Gan",
        description: "Beef Round Steak and beef tendon",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 30,
        name: "Pho Gia Special - Pho Dac Biet",
        description: "Combination noodle soup with beed round steak brisket, flank, tendon, shredded tripe, and beef meatballs",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 31,
        name: "Pho Tai Nam",
        description: "Beef Round Steak and well done beef flank",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 32,
        name: "Pho Tai Sach",
        description: "Beef Round Steak and beef tripe",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 33,
        name: "Pho Chin Nam",
        description: "Well done beef brisket and beef flank",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 34,
        name: "Pho Gan Sach",
        description: "Beef tendon and beef tripe",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 35,
        name: "Pho Chin Bo Vien",
        description: "Well done beef brisket and beef meatballs",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 36,
        name: "Pho Seafood - Pho Hai San",
        description: "Shrimp, scallop, mussle, squid, brocolli, zucchini, and mushroom",
        price: "11.50",
        dietType: "none",
      },
      {
        id: 37,
        name: "Pho Tai Chin",
        description: "Beef Round Steak and well done beef brisket",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 38,
        name: "Pho Bo Vien",
        description: "Beef Meatballs",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 39,
        name: "Pho Tai, Bo Vien",
        description: "Beef Round Steak and beef meatballs",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 40,
        name: "Pho Chin",
        description: "Well done beef brisket",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 41,
        name: "Pho Ga (Chicken)",
        description: "Sliced Chicken Breast",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 42,
        name: "Pho Nam, Bo Vien",
        description: "Well done beef flank and beef meat balls",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 43,
        name: "Pho Nam Gan",
        description: "Well done beef flank and beef tendon",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 44,
        name: "Pho Nam",
        description: "Well done beef flank",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 45,
        name: "Pho Veggie - Pho Chay",
        description: "Vegetable broth with tofu, mushrooms, bell pepper, brocolli, zucchini, cabbage, carrot, topped with fried onion",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 46,
        name: "Pho Shrimp",
        description: "Shrimps, brocolli, zucchini, carrots, and mushrooms",
        price: "11.50",
        dietType: "none",
      },
      {
        id: 47,
        name: "Spicy Beef Noodle - Bun Bo Hue * (one size)",
        description: "Round rice noodles, beef shank, in a spicy lemongrass beef broth",
        price: "11.50",
        dietType: "none",
      },
      {
        id: 48,
        name: "Chicken Glass Noodle Soup - Mien Ga * (one size)",
        description: "Glass noodles, chicken breast, cilantro onions, fried shallots, with chicken broth",
        price: "9.50",
        dietType: "none",
      },
      {
        id: 49,
        name: "Chicken and Bamboo Shoot Vermicelli Noodle Soup - Bun Mang Ga * (one size)",
        description: "Bamboo Shoot, chicken breast, cilantro, onions, fired shallots, with vermicelli rice noodles, and chicken broth",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 50,
        name: "Tom Yum or Tom Kha Noodle Soup * (one size)",
        description: "Spicy and sour lemongrass soup with rice noddle, tomatoes, galangal root, lime leaves celery, shallots, and mushrooms",
        price: "choice",
        dietType: "none",
        choices: [ 
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "10.50"},
          {id: 2, meat: `Beef or Shrimp`, price: "11.50"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
    ]
  },
  {
    id: 3,
    name: "Egg Noodle Soup",
    servedWith:
      "Served with egg noodles, fresh bean sprouts, basil leaves, onion, cilantro, and a lime wedge except for entrees with *",
    items: [
      {
        id: 56,
        name: "Udon Soup",
        description:
          "Chicken or tofu with brocoli, carrot, cilantro, onions, mushrooms, and seaweed",
        price: "choice",
        dietType: "vegetarian",
        choices: [
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "9.95"},
          {id: 2, meat: `Beef or Shrimp`, price: "10.95"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
      {
        id: 57,
        name: "Wonton Egg Noodle Soup",
        description:
          "Egg noodles, shrimp, pork, pork wonton, baby bok choy, topped with fried garlic and chives with pork broth",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 58,
        name: "Wonton Soup (no noodles)",
        description:
          "Pork wonton, baby bok choy, topped with fried garlic and chives with pork broth",
        price: "8.95",
        dietType: "none",
      },
      {
        id: 59,
        name: "Egg Noodle Soup Special - Mi Dac Biet",
        description:
          "Combination of pork, shrimp, quail eggs, celery, chives, topped with fried shallots with pork broth",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 60,
        name: "Seafood Rice or Egg Noodle Soup - Hu Tieu Hai San Dac Biet",
        description:
          "Shrimps, scallops, mussel, squid, quail eggs, onion, celery, chives, topped with fried shallots with pork broth",
        price: "8.95",
        dietType: "none",
      },
      {
        id: 61,
        name: "Tofu with Rice or Egg Noodle Soup",
        description:
          "Tofu with rice noodle or egg noodles, cilantro, onion, chives, celery, topped with fried shallots, with chicken or pork broth",
        price: "9.95",
        dietType: "both",
      },
      {
        id: 62,
        name: "Egg Noodle Chicken Breast Soup - Mi Ga",
        description:
          "Egg noodles, chicken breasat, cilantro, onions, chives, celery, topped with fried shallots with chicken or pork broth",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 63,
        name: "Ramen Noodles",
        description:
          "Ramen noodles, cilantro, onions, chives, celery, and topped with fried shallots with chicken or pork broth",
        price: "choice",
        dietType: "none",
        choices: [
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "10.50"},
          {id: 2, meat: `Beef or Shrimp`, price: "11.50"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
    ]
  },
  {
    id: 4,
    name: "Vermicelli Noodle Entree - Bun",
    servedWith:
      "Bowl of Vermicelli rice noodles served with lettuce, bean sprouts, basil, cilantro, cucumbers, fried fresh green onions, fried shallots, picked carrots, and radish, roasted peanutes, with a side of housemade fish sauce",
    items: [
      {
        id: 70,
        name: "Grilled Pork",
        description: "Bowl of vermicelli with grilled marinated pork",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 71,
        name: "Grilled Chicken",
        description: "Bowl of vermicelli with grilled marinated chicken",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 72,
        name: "Grilled Shrimp",
        description: "Bowl of vermicelli with grilled marinated shrimp",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 73,
        name: "Grilled Pork and Shrimp",
        description: "Bowl of vermicelli with grilled marinated pork and shrimp",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 74,
        name: "Grilled Chicken and Shrimp",
        description: "Bowl of vermicelli with grilled marinated chicken and shrimp",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 75,
        name: "Crispy Egg Roll Noodles",
        description: "Bowl of vermicelli with deep fried crispy egg rolls",
        price: "10.95",
        dietType: "none",
      },
      {
        id: 76,
        name: "Crispy Vegetarian Egg Roll Noodles",
        description: "Bowl of vermicelli with deep fried vegetarian crispy egg rolls",
        price: "10.95",
        dietType: "vegetarian",
      },
      {
        id: 77,
        name: "Grilled Pork or Chicken, Shrimpm and Crispy Egg Roll Combo",
        description: "Bowl of vermicelli noodles with choice of grilled marinated pork or chicken, shrimp, and deep fried vegetarian crispy egg rolls",
        price: "12.95",
        dietType: "none",
      },
      {
        id: 78,
        name: "Garlic Tofu",
        description: "Bowl of vermicelli noodles with stir fried tofu",
        price: "9.95",
        dietType: "vegetarian",
      },
      {
        id: 79,
        name: "Lemongrass Tofu",
        description: "Bowl of vermicelli noodles with stir fried tofu",
        price: "9.95",
        dietType: "vegetarian",
      },
      {
        id: 80,
        name: "Lemongrass Chili Chicken",
        description: "Bowl of vermicelli with stir fried mild spicy lemongrass chicken",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 81,
        name: "Lemongrass Seafood",
        description: "Bowl of vermicelli with stir fried lemongrassm shrimp, scallop, mussel, and squid",
        price: "12.50",
        dietType: "none",
      },
      {
        id: 82,
        name: "Lemongrass Beef",
        description: "Bowl of Vermicelli with stir fried lemongrass beef",
        price: "10.95",
        dietType: "none",
      },
    ]
  },
  {
    id: 5,
    name: "Rice Entrees - Com",
    servedWith:
      "All rice entrees served with steamed rice or rice noodles and stir fried vegetables except for entrees with *",
    items: [
      {
        id: 89,
        name: "Special Rice Combo",
        description:
          "Grilled marinated pork or chicken, shrimp, eggs, with cucumber, tomato and lettuce or stir fried vegetables",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 90,
        name: "Chicken or Pork Fried Rice *",
        description:
          "Fried rice with chicken or pork, eggs, peas, corn, onions, and carrots",
        price: "choice",
        dietType: "none",
        choices: [
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "9.95"},
          {id: 2, meat: `Beef or Shrimp`, price: "10.95"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
      {
        id: 91,
        name: "Pineapple Fried Rice *",
        description:
          "Fried rice with egg, pineapple, onion, and basil leaf",
        price: "choice",
        dietType: "vegetarian",
        choices: [
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "9.95"},
          {id: 2, meat: `Beef or Shrimp`, price: "10.95"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
      {
        id: 92,
        name: "Spicy Vegetables with Chicken or Tofu",
        description:
          "Spicy vegetables, tossed in spicy homemade sauce",
        price: "9.95",
        dietType: "vegetarian",
      },
      {
        id: 93,
        name: "Grilled Pork or Chicken",
        description:
          "Grilled marinated pork or chicken with stir fried vegetables",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 94,
        name: "Grilled Pork or Chicken and Shrimp",
        description:
          "Grilled marinated pork or chicken and shrimp with stir fried vegetables",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 95,
        name: "Teriyaki Chicken",
        description:
          "Steamed rice or noodles, grilled marinated chicken and fresh steamed mixed vegetables",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 96,
        name: "Chicken Satay",
        description:
          "Stir fried marinated chicken in curry sauce with carrots and onions",
        price: "9.95",
        dietType: "none",
      },
      {
        id: 97,
        name: "Ginger Chicken or Tofu",
        description:
          "Grilled marinated chicken or deep fried tofu with ginger sauce with mixed vegetables",
        price: "9.75",
        dietType: "vegetarian",
      },
      {
        id: 98,
        name: "Lemongrass Chili Chicken or Tofu",
        description:
          "Grilled marinated chicken or deep fried fofu stir fried in mild spicy chili lemongrass with mixed vegetables",
        price: "9.75",
        dietType: "vegetarian",
      },
      {
        id: 99,
        name: "Wok Broccoli Chicken or Pork or Tofu",
        description:
          "Stir fried marinated chicken in curry sauce with carrots and onions",
        price: "choice",
        dietType: "vegetarian",
        choices: [
          {id: 1, meat: `Chicken, Pork, or Tofu`, price: "9.95"},
          {id: 2, meat: `Beef or Shrimp`, price: "10.95"},
          {id: 3, meat: `Seafood - Shrimp, Scallop, Mussel, and Squid`, price: "12.95"},
        ]
      },
      {
        id: 100,
        name: "Orange Chicken *",
        description:
          "Deep fried marinated flour chicken topped with orange homemade sauce",
        price: "9.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 6,
    name: "Beef Entrees",
    servedWith:
      "All entrees served with steamed rice or rice noodles and stir fried vegetables except for entrees with *",
    items: [
      {
        id: 0,
        name: "Special Rice Combo",
        description:
          "Grilled marinated pork or chicken, shrimp, eggs, with cucumber, tomato and lettuce or stir fried vegetables",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 1,
        name: "Chicken or Pork Fried Rice",
        description:
          "Fried rice with chien or pork, eggs, peas, corn, onions, and carrots",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
  {
    id: 7,
    name: "House Specialties",
    servedWith:
      "All plates served with steamed rice or rice noodles and stir fried vegetables except for entrees with *",
    items: [
      {
        id: 112,
        name: "Curry Chicken dishes",
        description:
          "Yellow, red, or green curry with potatoes mixed with vegatables and chicken",
        price: "8.95",
        dietType: "gluten free",
      },
      {
        id: 113,
        name: "Chicken or Pork Fried Rice",
        description:
          "Yellow, red, or green curry with potatoes mixed with vegatables and chicken",
        price: "8.95",
        dietType: "both",
      },
    ],
  },
  {
    id: 8,
    name: "Drink - Nuoc Uong",
    servedWith:
      "Smoothies, Thai Ice Tea, and Boba Tea, Milk Tea. Contains milk with or w/o dairy (coconut milk also available)",
    items: [
      {
        id: 0,
        name: "Special Rice Combo",
        description:
          "Grilled marinated pork or chicken, shrimp, eggs, with cucumber, tomato and lettuce or stir fried vegetables",
        price: "11.95",
        dietType: "none",
      },
      {
        id: 1,
        name: "Chicken or Pork Fried Rice",
        description:
          "Fried rice with chien or pork, eggs, peas, corn, onions, and carrots",
        price: "8.95",
        dietType: "none",
      },
    ],
  },
];


export default sections