import { createStore } from "redux";
// import producto from './assets/icons/lupa1.png'

const initialState = {
  brands: [
    {
      name: "ASUS",
      img: "https://lorenaruiz0717.github.io/Vs0.2-CardValidation-BOG002/src/IMG/galeria/producto8.png",
    },
    {
      name: "GENERICA",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "HUAWEI",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "IPHONE",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "LG",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "MOTOROLA",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "NOKIA",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "OPPO",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "REALME",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "SAMSUNG",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "SONY",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "TEAM",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "TECNO",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
    {
      name: "XIAOMI",
      img: "https://i.pinimg.com/564x/56/00/d1/5600d1b886e22ce1e0d679d5f2d06b95.jpg",
    },
  ],
  category:[{
    
// estuches-cases
// celular
// audifonos
// i-pad
// vidrios
// pantalla
// camara
// tecnologia
// teclados
// bluetooth
// cargadores
// tipoc
// i-phone
// cables
  estuches: [
    {
      id: 1,
      name: "estuches",
      // imgLink:'../../assets/products/umbrella1.png',
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
  celular: [
    {
      id: 1,
      name: "celular",
      // imgLink:'../../assets/products/umbrella1.png',
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
  audifonos: [{
    id: 1,
    name: "estuches",
    // imgLink:'../../assets/products/umbrella1.png',
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
    // imgLink:'../../assets/products/umbrella1.png',
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
  },
],
  
}],
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


// Marcas
// ASUS
// GENERICA
// HUAWEI
// IPHONE
// LG
// MOTOROLA
// NOKIA
// OPPO
// REALME
// SAMSUNG
// SONY
// TEAM pendiente
// TECNO
// VIVO
// XIAOMI
