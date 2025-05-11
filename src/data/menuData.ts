import americano from '../assets/coffee/americano.jpg';
import brownsugar from '../assets/coffee/brownsugar.jpg';
import chizzu from '../assets/coffee/chizzu.jpg';
import klepon from '../assets/coffee/klepon.jpg';
import nefo from '../assets/coffee/nefo.jpg';
import pandan from '../assets/coffee/pandan.jpg';
import redvelvet from '../assets/coffee/Redvelvet.jpg';

// Cookie images
import chocochips from '../assets/cookies/chocochips.jpg';
import chocolate from '../assets/cookies/chocolate.jpg';
import redvelevet from '../assets/cookies/redvelevet.jpg';
import marshmellow from '../assets/cookies/marshmellow.jpg';

// Menu data for Nefo Coff
export const menuData = {
  drinks: {
    signature: [
      { name: 'Nefo', price: '10K', description: '', image: nefo },
      { name: 'Milky Nefo', price: '13K', description: '', image: brownsugar },
      { name: 'Thiraa', price: '20K', description: '', image: klepon },
      { name: 'Chizzy', price: '20K', description: '', image: chizzu },
      { name: 'Kaara', price: '15K', description: '', image: pandan },
      { name: 'Panda', price: '15K', description: '', image: brownsugar },
      { name: 'Clayphone', price: '15K', description: '', image: brownsugar },
      { name: 'Vanny', price: '15K', description: '', image: redvelvet },
      { name: 'Shcooby', price: '15K', description: '', image: chizzu },
      { name: 'Karen', price: '15K', description: '', image: nefo },
    ],
    "espresso base": [
      { name: 'Americano', price: '10K', description: '', image: americano },
      { name: 'Cappuccino', price: '15K', description: '', image: brownsugar },
      { name: 'Long Black', price: '12K', description: '', image: americano },
      { name: 'Cafe Latte', price: '15K', description: '', image: brownsugar },
      { name: 'Mocha', price: '15K', description: '', image: redvelvet },
    ],
    "non coffee": [
      { name: 'Chizzy', price: '18K', description: '', image: chizzu },
      { name: 'Thiraa', price: '18K', description: '', image: klepon },
      { name: 'Choco', price: '10K / 15K', description: '', image: brownsugar },
      { name: 'Velly', price: '10K / 15K', description: '', image: brownsugar },
      { name: 'Taro', price: '10K / 15K', description: '', image: pandan },
      { name: 'Milo', price: '10K / 15K', description: '', image: brownsugar },
      { name: 'Vanny', price: '10K / 15K', description: '', image: redvelvet },
      { name: 'Kaara', price: '10K / 15K', description: '', image: pandan },
      { name: 'Strawbelly', price: '10K / 15K', description: '', image: redvelvet },
    ],
  },
  cookies: [
    {
      name: "Original (94#BOO)",
      price: "8.000 - 12.000",
      description: "Soft cookies dengan choco chips coklat sederhana",
      image: chocochips,
      sizes: [
        { weight: "50gr", price: "8.000" },
        { weight: "70gr", price: "12.000" }
      ]
    },
    {
      name: "Red Velvet with Cheese (94#REDMELT)",
      price: "14.000 - 18.000",
      description: "Soft cookies red velvet dengan isian keju dan coklat putih",
      image: redvelevet,
      sizes: [
        { weight: "50gr", price: "14.000" },
        { weight: "70gr", price: "18.000" }
      ]
    },
    {
      name: "Double Chocolate (84#COCO)",
      price: "13.000 - 18.000",
      description: "Soft cookies dengan dark chocolate dan choco chips",
      image: chocolate,
      sizes: [
        { weight: "50gr", price: "13.000" },
        { weight: "70gr", price: "18.000" }
      ]
    },
    {
      name: "Marshmellow (84#Mallow)",
      price: "10.000 - 13.000",
      description: "Soft cookies chochochips dengan marshmellow",
      image: marshmellow,
      sizes: [
        { weight: "50gr", price: "10.000" },
        { weight: "70gr", price: "13.000" }
      ]
    }
  ]
};