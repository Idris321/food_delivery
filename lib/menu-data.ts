// Menu data based on the provided images

export const menuData: { [key: string]: any[] } = {
  shawarma: [
    {
      id: "sh-1",
      name: "Signature Saudia Shawarma",
      price: 70,
      description: "Our signature blend of spices and fresh ingredients",
    },
    {
      id: "sh-2",
      name: "Peri Peri Chicken Shawarma",
      price: 80,
      description: "Spicy peri peri chicken with special sauce",
    },
    { id: "sh-3", name: "BBQ Chicken Shawarma", price: 80, description: "Smoky BBQ flavor with tender chicken" },
    { id: "sh-4", name: "Mexican Saudia Shawarma", price: 90, description: "Mexican spices with Arabian twist" },
    { id: "sh-5", name: "Cheese Saudia Shawarma", price: 90, description: "Extra cheese for cheese lovers" },
    { id: "sh-6", name: "New York Style Shawarma", price: 100, description: "New York inspired shawarma" },
    { id: "sh-7", name: "Death by Cheese Shawarma", price: 110, description: "Maximum cheese overload" },
    { id: "sh-8", name: "Al Bayt Shawarma (Arabic)", price: 120, description: "Traditional home-style shawarma" },
    {
      id: "sh-9",
      name: "Overload Chicken Shawarma",
      price: 120,
      description: "Extra everything - loaded with goodness",
    },
  ],

  salad: [
    { id: "sal-1", name: "Roasted Chicken Salad", price: 130, description: "Fresh greens with roasted chicken" },
    { id: "sal-2", name: "Yoghurt Chicken Salad", price: 140, description: "Creamy yoghurt dressing with chicken" },
    { id: "sal-3", name: "Tandoori Chicken Salad", price: 150, description: "Tandoori spiced chicken on fresh greens" },
    { id: "sal-4", name: "Peri Peri Chicken Salad", price: 160, description: "Spicy peri peri chicken salad" },
    { id: "sal-5", name: "BBQ Chicken Salad", price: 160, description: "BBQ chicken with fresh vegetables" },
    { id: "sal-6", name: "Chipotle Chicken Salad", price: 170, description: "Smoky chipotle with fresh salad" },
    { id: "sal-7", name: "No Fat Salad", price: 180, description: "Healthy low-fat option" },
  ],

  platter: [
    { id: "pl-1", name: "Signature Chicken Platter", price: 220, description: "Our signature chicken with sides" },
    { id: "pl-2", name: "Peri Peri Chicken Platter", price: 230, description: "Spicy peri peri chicken platter" },
    { id: "pl-3", name: "Mexican Chicken Platter", price: 250, description: "Mexican style chicken platter" },
    { id: "pl-4", name: "BBQ Chicken Platter", price: 250, description: "BBQ chicken with all the fixings" },
    { id: "pl-5", name: "Cheesy Chipotle Chicken Platter", price: 250, description: "Cheesy chipotle perfection" },
    { id: "pl-6", name: "Cheesy Jalepeno Chicken Platter", price: 250, description: "Spicy jalepeno with cheese" },
    { id: "pl-7", name: "Tandoori Chicken Platter", price: 260, description: "Traditional tandoori chicken platter" },
  ],

  "open-shawarma": [
    { id: "os-1", name: "Signature Open Shawarma", price: 130, description: "Open-style signature shawarma" },
    { id: "os-2", name: "Peri Peri Open Shawarma", price: 140, description: "Spicy open shawarma" },
    { id: "os-3", name: "Mexican Open Shawarma", price: 150, description: "Mexican-style open shawarma" },
    { id: "os-4", name: "BBQ Open Shawarma", price: 150, description: "BBQ flavored open shawarma" },
    { id: "os-5", name: "Cheesy Chipotle Open Shawarma", price: 160, description: "Cheesy chipotle open style" },
    { id: "os-6", name: "Cheesy Jalepeno Chicken Platter", price: 170, description: "Spicy and cheesy combination" },
    { id: "os-7", name: "Tandoori Open Shawarma", price: 170, description: "Tandoori spiced open shawarma" },
  ],

  "chicken-mandi": [
    { id: "cm-1", name: "Chicken Mandi", halfPrice: 380, fullPrice: 760, description: "Traditional chicken mandi" },
    {
      id: "cm-2",
      name: "Chicken Broasted Mandi",
      halfPrice: 400,
      fullPrice: 800,
      description: "Broasted chicken mandi",
    },
    {
      id: "cm-3",
      name: "Chicken Al-Faham Mandi",
      halfPrice: 420,
      fullPrice: 840,
      description: "Al-Faham style chicken mandi",
    },
    {
      id: "cm-4",
      name: "Special Chicken Juicy Mandi",
      halfPrice: 450,
      fullPrice: 900,
      description: "Extra juicy chicken mandi",
    },
    {
      id: "cm-5",
      name: "Feel in Saudia Spl. Chicken Mandi",
      halfPrice: 470,
      fullPrice: 940,
      description: "Our special house mandi",
    },
    {
      id: "cm-6",
      name: "Feel in Saudia Spl. Platter Mandi (4 Person)",
      price: 1000,
      description: "Family platter for 4 people",
    },
    {
      id: "cm-7",
      name: "Feel in Saudia Spl. Shahi Platter (6 Person)",
      price: 1200,
      description: "Royal platter for 6 people",
    },
  ],

  "mutton-mandi": [
    { id: "mm-1", name: "Mutton Mandi", halfPrice: 680, fullPrice: 1350, description: "Traditional mutton mandi" },
    {
      id: "mm-2",
      name: "Mutton Faham Mandi",
      halfPrice: 720,
      fullPrice: 1420,
      description: "Faham style mutton mandi",
    },
    {
      id: "mm-3",
      name: "Mutton Juicy Mandi",
      halfPrice: 750,
      fullPrice: 1450,
      description: "Extra juicy mutton mandi",
    },
    {
      id: "mm-4",
      name: "Mutton Mathloom",
      halfPrice: 780,
      fullPrice: 1550,
      description: "Slow-cooked mutton mathloom",
    },
    { id: "mm-5", name: "Spl. Mutton Zurbian", halfPrice: 800, fullPrice: 1600, description: "Special mutton zurbian" },
  ],

  "beef-mandi": [
    { id: "bm-1", name: "Beef Mandi", halfPrice: 400, fullPrice: 800, description: "Traditional beef mandi" },
    { id: "bm-2", name: "Beef Faham Mandi", halfPrice: 430, fullPrice: 860, description: "Faham style beef mandi" },
    { id: "bm-3", name: "Beef Juicy Mandi", halfPrice: 470, fullPrice: 940, description: "Extra juicy beef mandi" },
    { id: "bm-4", name: "Beef Mathloom", halfPrice: 500, fullPrice: 1000, description: "Slow-cooked beef mathloom" },
    { id: "bm-5", name: "Spl. Beef Zurbian", halfPrice: 550, fullPrice: 1100, description: "Special beef zurbian" },
  ],

  "fish-mandi": [
    { id: "fm-1", name: "Fish Mandi (1 Piece)", price: 450, description: "Single piece fish mandi" },
    { id: "fm-2", name: "Broasted Fish Mandi (1 Piece)", price: 450, description: "Broasted fish mandi single piece" },
    { id: "fm-3", name: "Broasted Fish Mandi (2 Piece)", price: 600, description: "Two pieces broasted fish mandi" },
    { id: "fm-4", name: "Spl. Fish Mandi (2 Piece)", price: 700, description: "Special fish mandi two pieces" },
  ],

  "prawns-mandi": [
    { id: "pm-1", name: "Prawns Mandi (12 Piece)", price: 350, description: "12 pieces prawns mandi" },
    { id: "pm-2", name: "Prawns Fry (12 Piece)", price: 250, description: "12 pieces fried prawns" },
    { id: "pm-3", name: "Spl. Prawns Mandi (24 Piece)", price: 700, description: "24 pieces special prawns mandi" },
  ],

  "add-ons": [
    { id: "ao-1", name: "Extra Chicken", price: 40, description: "Add extra chicken to your order" },
    { id: "ao-2", name: "Extra Mayo", price: 20, description: "Additional mayonnaise" },
    { id: "ao-3", name: "Extra Cheese", price: 20, description: "Additional cheese" },
    { id: "ao-4", name: "Extra Rumali", price: 20, description: "Additional rumali roti" },
  ],
}
