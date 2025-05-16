export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const products = [
  {
    id: "001",
    name: "4007 QUARTER ZIP SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/QuarterZip_Black_01.jpg?v=1737052391&width=823",
    color: "Black",
    priceRupees: 6999,
  },
  {
    id: "002",
    name: "3013 RELAXED FIT FLEECE HOODED SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/PullOver_HeatherGrey_01.jpg?v=1732917072&width=823",
    color: "White",
    priceRupees: 4599,
  },
  {
    id: "003",
    name: "1012 RELAXED FIT T-SHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/TShirt_Black_01.jpg?v=1732911152&width=823",
    color: "Black",
    priceRupees: 2100,
  },
  {
    id: "004",
    name: "3010 RELAXED FIT PULLOVER HOODED SWEATSHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/RelaxedFitPullover_ForestGreen_01_1.jpg?v=1726671087&width=823",
    color: "Forest Green",
    priceRupees: 5400,
  },
  {
    id: "005",
    name: "1012 RELAXED FIT T-SHIRT",
    image:
      "https://wholesale.houseofblanks.com/ckfinder/userfiles/images/1012_rf_tees/heather_grey/TShirt_HeatherGrey_01.jpg",
    color: "Heather Grey",
    priceRupees: 2549,
  },
  {
    id: "006",
    name: "1009 HEAVYWEIGHT T-SHIRT",
    image:
      "https://www.houseofblanks.com/cdn/shop/files/HeavyweightTshirt_Red_01.jpg?v=1726516718&width=823",
    color: "Red",
    priceRupees: 1949,
  },
  {
    id: "007",
    name: "4004 CLASSIC CREWNECK",
    image:
      "https://wholesale.houseofblanks.com/ckfinder/userfiles/images/4004_classic_crews/navy/ClassicCrewneck_Navy_01.jpg",
    color: "Navy",
    priceRupees: 3149,
  },
  {
    id: "008",
    name: "3010 RELAXED FIT FRENCH TERRY HOODED SWEATSHIRT",
    image:
      "https://wholesale.houseofblanks.com/ckfinder/userfiles/images/3010_rf_terry_hoodies/chocolate_brown/RelaxedFitPullover_ChocolateBrown_01.jpg",
    color: "Chocolate Brown",
    priceRupees: 4200,
  },
];
