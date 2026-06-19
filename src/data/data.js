import AmericanoPrimary from "../assets/americano/primary.webp";
import AmericanoSecondary from "../assets/americano/secondary.webp";
import EspressoPrimary from "../assets/espresso/primary.webp";
import EspressoSecondary from "../assets/espresso/secondary.webp";
import CappuccinoPrimary from "../assets/cappuccino/primary.webp";
import CappuccinoSecondary from "../assets/cappuccino/secondary.webp";
import LattePrimary from "../assets/latte/primary.webp";
import LatteSecondary from "../assets/latte/secondary.webp";
import ColaSmallPrimary from "../assets/coca-cole-s/primary.webp";
import ColaSmallSecondary from "../assets/coca-cole-s/secondary.webp"
import SpriteSmallPrimary from "../assets/sprite/primary.webp";
import SpriteSmallSecondary from "../assets/sprite/secondary.webp"

export const menu = [
  {
    type: "hot-drink",
    name: "Амерікано",
    price: 50,
    volume: "150ml",
    description: "Класична чорна кава з насиченим смаком.",
    img_primary: AmericanoPrimary,
    img_secondary: AmericanoSecondary,
  },
  {
    type: "hot-drink",
    name: "Еспрессо",
    price: 50,
    volume: "50ml",
    description: "Міцна ароматна кава для справжніх поціновувачів.",
    img_primary: EspressoPrimary,
    img_secondary: EspressoSecondary,
  },
  {
    type: "hot-drink",
    name: "Капучіно",
    price: 50,
    volume: "150ml",
    description: "Ніжна кава з повітряною молочною пінкою.",
    img_primary: CappuccinoPrimary,
    img_secondary: CappuccinoSecondary,
  },
  {
    type: "hot-drink",
    name: "Латте",
    price: 50,
    volume: "150ml",
    description: "М'яка кава з великою кількістю молока.",
    img_primary: LattePrimary,
    img_secondary: LatteSecondary,
  },
  {
    type: "non-alco",
    name: "Coca-Cola",
    price: 35,
    volume: "500ml",
    description: "Освіжаючий газований напій із класичним смаком.",
    img_primary: ColaSmallPrimary,
    img_secondary: ColaSmallSecondary,
  },
  {
    type: "non-alco",
    name: "Sprite",
    price: 35,
    volume: "500ml",
    description: "Легкий лимонно-лаймовий смак та освіжаюча прохолода.",
    img_primary: SpriteSmallPrimary,
    img_secondary: SpriteSmallSecondary,
  },
  {
    type: "alco",
    name: "Jameson",
    price: 100,
    volume: "50ml",
    description: "Ірландський віскі з м'яким збалансованим смаком.",
  },
  {
    type: "cocktail",
    name: "Aperol",
    price: 100,
    volume: "200ml",
    description: "Легкий цитрусовий коктейль з гіркуватими нотами.",
  },
  {
    type: "shot",
    name: "Mad-Dog",
    price: 50,
    volume: "50ml",
    description: "Яскравий шот із гострим та насиченим смаком.",
  },
];