export interface Product {
   id: string;
   name: string;
   subName: string;
   price: string;
   description: string;
   folderPath: string;
   themeColor: string;
   gradient: string;
   features: string[];
   stats: { label: string; val: string }[];
   section1: { title: string; subtitle: string };
   section2: { title: string; subtitle: string };
   section3: { title: string; subtitle: string };
   section4: { title: string; subtitle: string };
   detailsSection: { title: string; description: string; imageAlt: string };
   freshnessSection: { title: string; description: string };
   buyNowSection: {
       price: string;
       unit: string;
       processingParams: string[];
       deliveryPromise: string;
       returnPolicy: string;
   };
}

export const products: Product[] = [
   {
       id: "strawberry",
       name: "Durex Strawberry",
       subName: "Sweet & Sensual.",
       price: "₹200",
       description: "Extra Thin - Sweet Strawberry Flavour - Dotted",
       folderPath: "/images/strawberry",
       themeColor: "#E91E63",
       gradient: "linear-gradient(135deg, #F06292 0%, #C2185B 100%)",
       features: ["Sweet Strawberry Flavour", "Dotted Texture", "Premium Lubrication"],
       stats: [{ label: "Material", val: "Latex" }, { label: "Width", val: "53mm" }, { label: "Safety", val: "100% Tested" }],
       section1: { title: "Durex Strawberry.", subtitle: "Sweet & Sensual." },
       section2: { title: "A touch of sweetness.", subtitle: "Designed to enhance the experience, offering a fun and fruity twist for you and your partner." },
       section3: { title: "Heightened stimulation.", subtitle: "Features specially designed dots to increase pleasure and intensity." },
       section4: { title: "Confidence meets pleasure.", subtitle: "" },
       detailsSection: {
           title: "Sensual Strawberry",
           description: "Add a playful edge to your intimate moments. Our Strawberry condoms are pre-lubricated with a sweet, fruity silicone lube that masks the latex smell and provides a smooth, frictionless experience.",
           imageAlt: "Strawberry Product Details"
       },
       freshnessSection: {
           title: "Tested for Reliability",
           description: "Pleasure should never come at the cost of peace of mind. Every single condom is electronically tested for holes and imperfections, and dermatologically tested for skin safety."
       },
       buyNowSection: {
           price: "₹200",
           unit: "per pack of 10",
           processingParams: ["Dotted", "Fruity Lube", "Easy-On Shape"],
           deliveryPromise: "Discreet packaging guaranteed. Delivered straight to your door with zero branding on the shipping box.",
           returnPolicy: "Secure and final sale for hygiene and safety purposes."
       }
   },
   {
       id: "chocolate",
       name: "Durex Chocolate",
       subName: "Rich & Indulgent.",
       price: "₹230",
       description: "Intense Chocolate Flavour - Dotted - Extra Lube",
       folderPath: "/images/chocolate",
       themeColor: "#5D4037",
       gradient: "linear-gradient(135deg, #8D6E63 0%, #4E342E 100%)",
       features: ["Rich Chocolate Flavour", "Dotted Texture", "Smooth Silicone Lube"],
       stats: [{ label: "Material", val: "Latex" }, { label: "Width", val: "53mm" }, { label: "Safety", val: "100% Tested" }],
       section1: { title: "Durex Chocolate.", subtitle: "Rich & Indulgent." },
       section2: { title: "Decadence redefined.", subtitle: "Combining a decadent flavor with features designed for mutual, intense pleasure." },
       section3: { title: "Textured for her.", subtitle: "Raised dots provide additional stimulation exactly where it's needed most." },
       section4: { title: "Satisfy your cravings.", subtitle: "" },
       detailsSection: {
           title: "Intense Chocolate",
           description: "Indulge your senses with the rich and exciting taste of chocolate. Designed for adventurous nights, these condoms feature a straight-walled, teat-ended shape for a secure fit that feels natural and stays in place.",
           imageAlt: "Chocolate Product Details"
       },
       freshnessSection: {
           title: "Premium Quality Latex",
           description: "Made from carefully sourced natural rubber latex. Our manufacturing process ensures a pleasant scent and an incredibly reliable barrier, letting you focus entirely on the moment."
       },
       buyNowSection: {
           price: "₹230",
           unit: "per pack of 10",
           processingParams: ["Rich Flavour", "Dotted", "Natural Latex"],
           deliveryPromise: "Discreet packaging guaranteed. Delivered straight to your door with zero branding on the shipping box.",
           returnPolicy: "Secure and final sale for hygiene and safety purposes."
       }
   },
   {
       id: "bubblegum",
       name: "Durex Bubblegum",
       subName: "Playful & Fun.",
       price: "₹180",
       description: "Extra Thin - Nostalgic Bubblegum Flavour - Smooth",
       folderPath: "/images/bubblegum",
       themeColor: "#EC407A",
       gradient: "linear-gradient(135deg, #F48FB1 0%, #D81B60 100%)",
       features: ["Sweet Bubblegum Flavour", "Extra Thin Design", "Smooth Texture"],
       stats: [{ label: "Material", val: "Latex" }, { label: "Width", val: "53mm" }, { label: "Safety", val: "100% Tested" }],
       section1: { title: "Durex Bubblegum.", subtitle: "Playful & Fun." },
       section2: { title: "An explosion of flavor.", subtitle: "Bring a playful, nostalgic, and sweet element directly to your bedroom." },
       section3: { title: "Closer than ever.", subtitle: "Extra-thin design engineered for heightened sensitivity and a profound natural feeling." },
       section4: { title: "Pop the excitement.", subtitle: "" },
       detailsSection: {
           title: "Extra Thin Bubblegum",
           description: "Perfect for heightening sensitivity and adding excitement. The transparent, extra-thin natural rubber latex is pre-lubricated with a fun bubblegum scent that turns any encounter into a playful adventure.",
           imageAlt: "Bubblegum Product Details"
       },
       freshnessSection: {
           title: "The Perfect Fit",
           description: "Featuring our signature Easy-On shape, Durex Bubblegum condoms are designed to be easier to put on and more comfortable to wear, ensuring nothing interrupts your flow."
       },
       buyNowSection: {
           price: "₹180",
           unit: "per pack of 10",
           processingParams: ["Extra Thin", "Smooth", "Playful Flavour"],
           deliveryPromise: "Discreet packaging guaranteed. Delivered straight to your door with zero branding on the shipping box.",
           returnPolicy: "Secure and final sale for hygiene and safety purposes."
       }
   }
];
