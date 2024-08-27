
let sampleListings =[
    { 
        title: 'Sunny Beach Resort', 
        description: 'A beautiful beach resort with golden sands.', 
        image: { 
            filename: 'sunny_beach_resort.jpg', 
            url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3000, 
        location: 'Cox-Bazar', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Mountain Paradise', 
        description: 'A serene retreat in the mountains.', 
        image: { 
            filename: 'mountain_paradise.jpg', 
            url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60' 
        }, 
        price: 2500, 
        location: 'Bandarban', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Lakeside Cabin', 
        description: 'A cozy cabin by the lake.', 
        image: { 
            filename: 'lakeside_cabin.jpg', 
            url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 2000, 
        location: 'Rangamati', 
        country: 'Bangladesh' 
    },
    { 
        title: 'City Lights Apartment', 
        description: 'A modern apartment with a view of the city lights.', 
        image: { 
            filename: 'city_lights_apartment.jpg', 
            url:  "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 3500, 
        location: 'Dhaka', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Historic Villa', 
        description: 'A villa with a rich history.', 
        image: { 
            filename: 'historic_villa.jpg', 
            url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 4000, 
        location: 'Chittagong', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Countryside Bungalow', 
        description: 'A peaceful bungalow in the countryside.', 
        image: { 
            filename: 'countryside_bungalow.jpg', 
            url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 1800, 
        location: 'Sylhet', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Seaside Cottage', 
        description: 'A charming cottage by the sea.', 
        image: { 
            filename: 'seaside_cottage.jpg', 
            url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2200, 
        location: 'Kuakata', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Forest Lodge', 
        description: 'A lodge surrounded by lush forest.', 
        image: { 
            filename: 'forest_lodge.jpg', 
            url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2800, 
        location: 'Sreemangal', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Desert Oasis', 
        description: 'An oasis in the desert.', 
        image: { 
            filename: 'desert_oasis.jpg', 
            url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 2600, 
        location: 'Rajshahi', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Riverfront Hotel', 
        description: 'A luxurious hotel by the river.', 
        image: { 
            filename: 'riverfront_hotel.jpg', 
            url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 3200, 
        location: 'Khulna', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Island Getaway', 
        description: 'A private island getaway.', 
        image: { 
            filename: 'island_getaway.jpg', 
            url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 5000, 
        location: 'Saint Martin\'s Island', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Hilltop House', 
        description: 'A house on top of a hill.', 
        image: { 
            filename: 'hilltop_house.jpg', 
            url:  "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2700, 
        location: 'Rangamati', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Luxury Penthouse', 
        description: 'A luxurious penthouse in the city.', 
        image: { 
            filename: 'luxury_penthouse.jpg', 
            url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 6000, 
        location: 'Dhaka', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Beachfront Villa', 
        description: 'A villa right on the beach.', 
        image: { 
            filename: 'beachfront_villa.jpg', 
            url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 4500, 
        location: 'Cox-Bazar', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Jungle Retreat', 
        description: 'A retreat in the middle of the jungle.', 
        image: { 
            filename: 'jungle_retreat.jpg', 
            url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3100, 
        location: 'Sundarbans', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Urban Studio', 
        description: 'A modern studio in the urban center.', 
        image: { 
            filename: 'urban_studio.jpg', 
            url:  "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2000, 
        location: 'Chittagong', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Farmhouse', 
        description: 'A traditional farmhouse.', 
        image: { 
            filename: 'farmhouse.jpg', 
            url:  "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 1600, 
        location: 'Bogra', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Cultural Heritage Home', 
        description: 'A home with rich cultural heritage.', 
        image: { 
            filename: 'cultural_heritage_home.jpg', 
            url:  "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3300, 
        location: 'Rajshahi', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Waterside Villa', 
        description: 'A villa by the waterside.', 
        image: { 
            filename: 'waterside_villa.jpg', 
            url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 2800, 
        location: 'Barisal', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Modern Loft', 
        description: 'A modern loft with open space.', 
        image: { 
            filename: 'modern_loft.jpg', 
            url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2500, 
        location: 'Dhaka', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Ocean View Apartment', 
        description: 'An apartment with a view of the ocean.', 
        image: { 
            filename: 'ocean_view_apartment.jpg', 
            url:  "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3700, 
        location: 'Cox-Bazar', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Heritage Inn', 
        description: 'An inn with historical charm.', 
        image: { 
            filename: 'heritage_inn.jpg', 
            url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2900, 
        location: 'Sylhet', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Riverside Retreat', 
        description: 'A retreat on the banks of a river.', 
        image: { 
            filename: 'riverside_retreat.jpg', 
            url:  "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3100, 
        location: 'Khulna', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Snowy Mountain Lodge', 
        description: 'A lodge nestled in snowy mountains.', 
        image: { 
            filename: 'snowy_mountain_lodge.jpg', 
            url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3800, 
        location: 'Bandarban', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Coastal Retreat', 
        description: 'A retreat by the coast.', 
        image: { 
            filename: 'coastal_retreat.jpg', 
            url:  "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2600, 
        location: 'Kuakata', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Lakeview Mansion', 
        description: 'A mansion with views of a tranquil lake.', 
        image: { 
            filename: 'lakeview_mansion.jpg', 
            url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 4200, 
        location: 'Rangamati', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Artistic Loft', 
        description: 'An artistic loft with creative decor.', 
        image: { 
            filename: 'artistic_loft.jpg', 
            url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 2900, 
        location: 'Dhaka', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Rural Retreat', 
        description: 'A retreat in a peaceful rural setting.', 
        image: { 
            filename: 'rural_retreat.jpg', 
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 1800, 
        location: 'Rajshahi', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Skyline View Apartment', 
        description: 'An apartment with stunning skyline views.', 
        image: { 
            filename: 'skyline_view_apartment.jpg', 
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", 
        }, 
        price: 3500, 
        location: 'Dhaka', 
        country: 'Bangladesh' 
    },
    { 
        title: 'Tranquil Cottage', 
        description: 'A tranquil cottage amidst nature.', 
        image: { 
            filename: 'tranquil_cottage.jpg', 
            url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        }, 
        price: 2300, 
        location: 'Sylhet', 
        country: 'Bangladesh' 
    }
];

module.exports={data:sampleListings};
   