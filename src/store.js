import { createStore } from "redux";
// import producto from "./assets/icons/lupa1.png"
// import data from "./data.json"

// const initialState =data
const initialState = {
  promotions:[
    {
        id: "promotion01",
        img:"https://i.pinimg.com/564x/0d/c5/0f/0dc50f1e23412b6106fdfafe717890b8.jpg",
        name:"promotion1"
    },
    {
      id: "promotion02",
      img:"https://i.pinimg.com/564x/90/88/40/908840612a991abe3cac0cc9c5458b9a.jpg",
      name:"promotion2"
  },
  {
    id: "promotion03",
    img:"https://i.pinimg.com/564x/93/cf/ae/93cfaef96141daee9de1a5aa39878e49.jpg",
    name:"promotion3"
}
  ],
  brands:[
    {
      id: "brand01",
      img:"https://esaef4b6b96.exactdn.com/wp-content/uploads/2019/02/asus-logo.jpg?strip=all&lossy=1&quality=85&w=2560&ssl=1",
      name:"ASUS"
    },
    {
      id: "brand02",
      img:"https://socialgeek.co/wp-content/uploads/2014/07/Logo-Huawei.jpg",
      name:"HUAWEI"
    },
    {
      id: "brand03",
      img:"https://i.pinimg.com/564x/2f/5a/8c/2f5a8c55d6f34094fe44b7d9125ee074.jpg",
      name:"IPHONE"
    },
    {
      id: "brand04",
      img:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_of_the_LG_Corporation_%281995-2008%29.svg",
      name:"LG"
    },
    {
      id: "brand05",
      img:"https://upload.wikimedia.org/wikipedia/commons/1/13/Motorola-Logo.svg",
      name:"MOTOROLA"
    },
    {
      id: "brand06",
      img:"https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg",
      name:"NOKIA"
    },
    {
      id: "brand07",
      img:"https://upload.wikimedia.org/wikipedia/commons/1/1c/OPPO_LOGO.jpg",
      name:"OPPO"
    },
    {
      id: "brand08",
      img:"https://i0.wp.com/zeevector.com/wp-content/uploads/Realme-Logo-Vector.png?resize=768%2C218&ssl=1",
      name:"REALME"
    },
    {
      id: "brand09",
      img:"https://i.pinimg.com/564x/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.jpg",
      name:"SAMSUNG"
    },
    {
      id: "brand10",
      img:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Sony_logos.JPG",
      name:"SONY"
    },
    {
      id: "brand11",
      img:"https://mb.cision.com/Public/13403/3257506/89afae1ba6296ef6_800x800ar.png",
      name:"TECNO"
    },
    {
      id: "brand12",
      img:"https://upload.wikimedia.org/wikipedia/commons/b/b8/Vivo_logo.jpg",
      name:"VIVO"
    },
    {
      id: "brand12",
      img:"https://logos-download.com/wp-content/uploads/2016/05/Xiaomi_Logo_2019.png",
      name:"XIAOMI"
    },
  ],
  categories: [
    {
      id: 1,
      name: "Cases",
      // imgLink:"../../assets/products/umbrella1.png",
      img: "https://i.pinimg.com/564x/63/00/89/630089e85304deba1c5f31a12a35625b.jpg",
      // img:JSON.stringify({producto}),
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 2,
      name: "Audifonos",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/c6/cd/4c/c6cd4c602f2b23e28e1707cecc60e92c.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 3,
      name: "I-pad",
      img:"https://i.pinimg.com/564x/f2/a1/ac/f2a1ac78fb48af2ab064d7cbda278ec2.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    
    {
      id: 1,
      name: "Cases",
      // imgLink:"../../assets/products/umbrella1.png",
      img: "https://i.pinimg.com/564x/63/00/89/630089e85304deba1c5f31a12a35625b.jpg",
      // img:JSON.stringify({producto}),
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 2,
      name: "Audifonos",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/c6/cd/4c/c6cd4c602f2b23e28e1707cecc60e92c.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 3,
      name: "I-pad",
      img:"https://i.pinimg.com/564x/f2/a1/ac/f2a1ac78fb48af2ab064d7cbda278ec2.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 1,
      name: "Cases",
      // imgLink:"../../assets/products/umbrella1.png",
      img: "https://i.pinimg.com/564x/63/00/89/630089e85304deba1c5f31a12a35625b.jpg",
      // img:JSON.stringify({producto}),
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 2,
      name: "Audifonos",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/c6/cd/4c/c6cd4c602f2b23e28e1707cecc60e92c.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
  
    // {
    //   id: 4,
    //   name: "estuches",
    //   imgLink:
    //     "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    //   img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
    //   description: "Descripción del producto. Este es un texto simulado",
    // },
    // {
    //   id: 5,
    //   name: "estuches",
    //   imgLink:
    //     "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    //   img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
    //   description: "Descripción del producto. Este es un texto simulado",
    // },
    // {
    //   id: 6,
    //   name: "estuches",
    //   imgLink:
    //     "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    //   img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
    //   description: "Descripción del producto. Este es un texto simulado",
    // }
  ],
  celular: [
    {
      id: 1,
      name: "celular",
      // imgLink:"../../assets/products/umbrella1.png",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      // img:JSON.stringify({producto}),
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 2,
      name: "celular",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 3,
      name: "celular",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 4,
      name: "celular",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
  ],
  audifonos: [
    {
      id: 1,
      name: "estuches",
      // imgLink:"../../assets/products/umbrella1.png",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      // img:JSON.stringify({producto}),
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 2,
      name: "estuches",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 3,
      name: "estuches",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 4,
      name: "estuches",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    }
  ],
  ipad: [
    {
      id: 1,
      name: "ipad",
      // imgLink:"../../assets/products/umbrella1.png",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      // img:JSON.stringify({producto}),
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 2,
      name: "ipad",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 3,
      name: "ipad",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    },
    {
      id: 4,
      name: "ipad",
      imgLink:
        "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
      img: "https://i.pinimg.com/564x/47/1e/85/471e85fd404b3b1653bafc84c819bd9e.jpg",
      description: "Descripción del producto. Este es un texto simulado",
    }
  ],
  galleryInstagram: [
    {
      id: "100",
      img: "https://i.pinimg.com/564x/b2/db/5e/b2db5eb4073d1677a2fd691cc8bcf184.jpg",
    },
    {
      id: "200",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      id: "300",
      img: "https://i.pinimg.com/236x/6a/d6/23/6ad623c8e13d270c2d44ae488816c82f.jpg",
    },
    {
      id: "400",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      id: "600",
      img: "https://i.pinimg.com/236x/6a/d6/23/6ad623c8e13d270c2d44ae488816c82f.jpg",
    },
    {
      id: "700",
      img: "https://i.pinimg.com/564x/b2/db/5e/b2db5eb4073d1677a2fd691cc8bcf184.jpg",
    },
  ],
};
const reducerProducts = (state = initialState, action) => {
  return state;
};

export default createStore(reducerProducts);

// TEAM pendiente

