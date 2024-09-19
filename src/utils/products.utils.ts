import { CategoryWithProducts } from "../types/categories.types";

export const categoriesWithProduct: CategoryWithProducts[] = [
  {
    id: 1,
    name: "iPhone",
    products: [
      {
        id: 1,
        name: "iPhone 13 Pro",
        description:
          "El último lanzamiento de Apple con una cámara avanzada y rendimiento excepcional.",
        category: "iPhone",
        price: 5399000,
        image:
          "https://tiendasishop.com/media/catalog/product/i/p/iphone15_black_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 2,
        name: "iPhone 12",
        description:
          "Potente y elegante, el iPhone 12 ofrece un rendimiento incomparable.",
        category: "iPhone",
        price: 3599000,
        image:
          "https://tiendasishop.com/media/catalog/product/i/p/iphone15_black_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 3,
        name: "iPhone SE",
        description:
          "Compacto pero poderoso, el iPhone SE es ideal para quienes prefieren un tamaño más pequeño.",
        category: "iPhone",
        price: 2199000,
        image:
          "https://tiendasishop.com/media/catalog/product/i/p/iphone15_black_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 4,
        name: "iPhone 11 Pro Max",
        description:
          "Con una pantalla Super Retina XDR y un sistema de cámara triple, el iPhone 11 Pro Max redefine la fotografía móvil.",
        category: "iPhone",
        price: 4999000,
        image:
          "https://tiendasishop.com/media/catalog/product/i/p/iphone15_black_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 5,
        name: "iPhone XR",
        description:
          "Un iPhone potente con un diseño colorido y una pantalla Liquid Retina.",
        category: "iPhone",
        price: 2799000,
        image:
          "https://tiendasishop.com/media/catalog/product/i/p/iphone15_black_pdp_image_position-1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
    ],
  },
  {
    id: 2,
    name: "mac",
    products: [
      {
        id: 6,
        name: 'MacBook Pro 16"',
        description:
          "La potencia y el rendimiento definitivos para profesionales creativos y usuarios exigentes.",
        category: "Mac",
        price: 12499000,
        image:
          "https://mac-center.com/cdn/shop/files/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__ESES_1445x.jpg?v=1700304225",
      },
      {
        id: 7,
        name: "MacBook Air",
        description:
          "Delgado, ligero y poderoso, el MacBook Air es perfecto para la productividad diaria.",
        category: "Mac",
        price: 6499000,
        image:
          "https://mac-center.com/cdn/shop/files/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__ESES_1445x.jpg?v=1700304225",
      },
      {
        id: 8,
        name: 'iMac 24"',
        description:
          "Con su impresionante pantalla Retina 4.5K, el iMac ofrece una experiencia visual extraordinaria.",
        category: "Mac",
        price: 9699000,
        image:
          "https://mac-center.com/cdn/shop/files/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__ESES_1445x.jpg?v=1700304225",
      },
      {
        id: 9,
        name: "Mac Mini",
        description:
          "El Mac más versátil y compacto hasta la fecha, perfecto para cualquier entorno de trabajo.",
        category: "Mac",
        price: 4499000,
        image:
          "https://mac-center.com/cdn/shop/files/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__ESES_1445x.jpg?v=1700304225",
      },
      {
        id: 10,
        name: "Mac Pro",
        description:
          "La máquina definitiva para profesionales que buscan un rendimiento inigualable.",
        category: "Mac",
        price: 27499000,
        image:
          "https://mac-center.com/cdn/shop/files/MacBook_Pro_14-in_Space_Gray_PDP_Image_Position-1__ESES_1445x.jpg?v=1700304225",
      },
    ],
  },
  {
    id: 3,
    name: "accessories",
    products: [
      {
        id: 11,
        name: "AirPods Pro",
        description:
          "Cancelación activa de ruido para un sonido inmersivo, los AirPods Pro llevan la experiencia auditiva a otro nivel.",
        category: "Accessory",
        price: 1199000,
        image:
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 12,
        name: "Apple Watch Series 7",
        description:
          "El compañero perfecto para mantenerte activo, conectado y saludable.",
        category: "Accessory",
        price: 1999000,
        image:
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 13,
        name: "Magic Keyboard",
        description:
          "Con teclas retroiluminadas y trackpad incorporado, el Magic Keyboard mejora tu experiencia con el iPad.",
        category: "Accessory",
        price: 749000,
        image:
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 14,
        name: "Apple Pencil (2nd generation)",
        description:
          "Preciso, reactivo y sin demora, el Apple Pencil es la herramienta perfecta para dar vida a tus ideas.",
        category: "Accessory",
        price: 649000,
        image:
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
      {
        id: 15,
        name: "AirTag",
        description:
          "Nunca pierdas de vista tus pertenencias con el AirTag y la app Buscar de Apple.",
        category: "Accessory",
        price: 109000,
        image:
          "https://tiendasishop.com/media/catalog/product/m/t/mtjv3.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
      },
    ],
  },
];
