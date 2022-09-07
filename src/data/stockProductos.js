let stockProductos = [{
  id: 1, 
  nombre: "Contenedor 120 Lts ", 
  tipo: "Contenedores", 
  cantidad: 1, 
  desc: "Contenedor SULO de 120 Lts", 
  precio: 3100,  
  stock: 10,
  color:[
    {
      value: 'black',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-gris.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'green',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-verde.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'brown',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-marron.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'blue',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-azul.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'white',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-blanco.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'red',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-rojo.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'yellow',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-amarillo.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    },
    {
      value: 'orange',
      img: ['https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-naranja.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas.jpg',
            'https://d27dpjgffpea1z.cloudfront.net/wp-content/uploads/2019/05/contenedor-de-residuos-120-lt-medidas-2.jpg']
    }
  ]
},
/* {
  id: 2, 
  nombre: "Contenedor 240 Lts", 
  tipo: "Contenedores", 
  cantidad: 1, 
  desc: "Contenedor SULO de 240 Lts", 
  precio: 4200, 
  stock: 10,
  color:  ["black", "blue", "red", "yellow", "white"],
  img: ['https://http2.mlstatic.com/D_NQ_NP_693270-MLU49787249841_042022-O.webp', 
        'https://http2.mlstatic.com/D_NQ_NP_883628-MLU50452881879_062022-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp']
},
{
  id: 3, 
  nombre: "Contenedor de 360 Lts", 
  tipo: "Contenedores", 
  cantidad: 1, 
  desc: "Contenedor SULO de 360 Lts", 
  precio: 6300,  
  stock: 10,
  color:  ["black", "blue", "red", "yellow", "white"],
  img: ['https://http2.mlstatic.com/D_NQ_NP_903332-MLU31241501031_062019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp']
},
{
  id: 4, 
  nombre: "Contenedor 800 Lts", 
  tipo: "Contenedores", 
  cantidad: 1, 
  desc: "Contenedor SULO Citybac 800 Lts", 
  precio: 18800, 
  stock: 10,
  color:  ["black", "blue", "red", "yellow", "white"],
  img: ['https://http2.mlstatic.com/D_NQ_NP_752631-MLU31241259807_062019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp']
},
{
  id: 5,
  nombre: 'Contenedor de 1100 Lts',
  tipo: 'Contenedores',
  cantidad: 1,
  desc: 'Contenedor SULO Citybac 1100 Lts',
  precio: 20100,
  stock: 10,
  color:  ["black", "blue", "red", "yellow", "white"],
  img: ['https://http2.mlstatic.com/D_NQ_NP_810951-MLU32027207841_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_749094-MLU49546975295_042022-O.webp']
},
{
  id: 6,
  nombre: 'Dispensador Alcohol en Gel',
  tipo: 'Dispensadores',
  cantidad: 1,
  desc: 'Dispensador de Alcohol en Gel de Pie en Acero Inox',
  precio: 3200,
  stock: 10,
  color: ['grey'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_834217-MLU42940375409_072020-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_845845-MLU45494403058_042021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_748421-MLU45494407110_042021-O.webp']
},
{
  id: 7,
  nombre: 'Rueda Para Contenedor de Basura 120-240-360',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Rueda de 200 mm de diámetro para contenedores de basura de 120, 240 y 360 lts',
  precio: 400,
  stock: 10,
  color: ['black'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_623408-MLU32806338451_112019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_909100-MLU32806353699_112019-O.webp']
},
{
  id: 8,
  nombre: 'Compostador Bulbeo 360 Lts',
  tipo: 'Compostaje',
  cantidad: 1,
  desc: 'Compostador Bulbeo de 360 Lts',
  precio: 6300,
  stock: 10,
  color: ['green'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_720954-MLU31804494824_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_685675-MLU31822278814_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_795225-MLU31822278798_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_808292-MLU31804430775_082019-O.webp']
},
{
  id: 9,
  nombre: 'Compostador Bulbeo 700 Lts',
  tipo: 'Compostaje',
  cantidad: 1,
  desc: 'Compostador Bulbeo de 700 Lts',
  precio: 10700,
  stock: 10,
  color: ['green'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_694403-MLU32026782545_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_709717-MLU32026773989_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_966065-MLU32026784507_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_616145-MLU29404814597_022019-O.webp']
},
{
  id: 10,
  nombre: 'Papelera Clásica 50 Lts',
  tipo: 'Papelera',
  cantidad: 1,
  desc: 'Papelera clásica "boca de sapo" de 50 Lts',
  precio: 2000,
  stock: 10,
  color: ['green', 'blue', 'grey', 'red', 'yellow', 'orange'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_774358-MLU31241057765_062019-O.webp',
        'https://downloads.sulo.com/Solutions/Products/Citymate/Classic/Citymate-Classic-50L.png']
},
{
  id: 11,
  nombre: 'Tapa Contenedor 120 Lts',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Tapa para contenedor de basura de 120 Lts',
  precio: 650,
  stock: 10,
  color: ['blue'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_697276-MLU30742949686_052019-O.webp']
},
{
  id: 12,
  nombre: 'Papelera 40.5 Lts tapa basculante',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'Papelera en acero inoxidable, tapa plástica basculante, de 40,5 Lts',
  precio: 2920,
  stock: 10,
  color: ['grey', 'blue', 'green', 'yellow'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_949973-MLU31245805082_062019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_722325-MLU32990047463_112019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_769961-MLU43157927430_082020-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_741649-MLU32990079162_112019-O.webp']
},
{
  id: 13,
  nombre: 'Papelera Inox 6 Lts',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'Papelera en acero inox, 6 litros, con pedal',
  precio: 1128,
  stock: 10,
  color: ['white', 'grey'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_710671-MLU45980834747_052021-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_835713-MLU45980931231_052021-O.webp']
},
{
  id: 14,
  nombre: 'Papelera Prima Linea 50 Lts',
  tipo: 'Papeleras',
  cantidad: 1,
  desc: 'papelera Prima Línea 50 Lts en polietileno de alta densidad',
  precio: 7390,
  stock: 10,
  color: ['green', 'grey'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_801609-MLU31803781903_082019-O.webp',
        'https://http2.mlstatic.com/D_NQ_NP_975392-MLU31803842147_082019-O.webp']
},
{
  id: 15,
  nombre: 'Rueda para Contenedor 770-1100 Lts',
  tipo: 'Repuestos',
  cantidad: 1,
  desc: 'Rueda de 200 mm para contenedores de 4 ruedas de 770 o 1100 lts',
  precio: 1100,
  stock: 10,
  color: ['black'],
  img: ['https://http2.mlstatic.com/D_NQ_NP_604593-MLU32814158273_112019-O.webp']
} */
];

export default stockProductos