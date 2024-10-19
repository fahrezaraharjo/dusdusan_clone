import { Brand, CategoryProduct, MenarikArticle } from "@/interfaces/interfaces";

export const categories: string[] = [
  'PROMO',
  'KATEGORI',
  'TERPILIH',
  'TERLARIS',
  'TERPOPULER',
  'TERBARU',
];

export const images: string[] = [
  'https://images.dusdusan.com/product/xN816nLn1727164465_1727164333802.jpg',
  'https://images.dusdusan.com/product/mZD1k6gI1727163911_1727163779724.jpg',
  'https://images.dusdusan.com/product/EUyh0aWx1727164099_1727163967607.jpg',
  'https://images.dusdusan.com/product/m96M1XBM1727164242_1727164110861.jpg',
  'https://images.dusdusan.com/product/3ZjvsL2R1727164147_1727164015499.jpg',
];

export const promoItems = [
  {
    id: 12679,
    imageUrl: 'https://images.dusdusan.com/product/WZT3FNLW1727705239_1727705108574.jpg',
    detailLink: 'promoDetail/12679',
  },
  {
    id: 12781,
    imageUrl: 'https://images.dusdusan.com/product/rtMAroxY1727733864_1727733733048.jpg',
    detailLink: 'promoDetail/12781',
  },
  {
    id: 12676,
    imageUrl: 'https://images.dusdusan.com/product/y0ev2EuG1727704741_1727704528546.jpg',
    detailLink: 'promoDetail/12676',
  },
];

export const categoriesProduct: CategoryProduct[] = [
  { id: 1, name: 'Persiapan Jualan', imageUrl: 'https://images.dusdusan.com/article/iuEdmtDw1609373123_ICON%20WEB-11.png' },
  { id: 2, name: 'Ibu dan Bayi', imageUrl: 'https://images.dusdusan.com/article/5aPryCAU1607483494_ICON%20WEB-03.png' },
  { id: 3, name: 'Muslim', imageUrl: 'https://images.dusdusan.com/article/87vNYtiz1607483559_ICON%20WEB-05.png' },
  { id: 4, name: 'Rumah Tangga', imageUrl: 'https://images.dusdusan.com/article/9eb6cLql1607483702_ICON%20WEB-09.png' },
  { id: 5, name: 'Elektronik', imageUrl: 'https://images.dusdusan.com/article/LTMxObvs1607483470_ICON%20WEB-02.png' },
  { id: 6, name: 'Textile', imageUrl: 'https://images.dusdusan.com/article/u6BhFw6v1607483432_ICON%20WEB-01.png' },
  { id: 7, name: 'Kesehatan dan Kecantikan', imageUrl: 'https://images.dusdusan.com/article/habuivdr1607483530_ICON%20WEB-04.png' },
  { id: 8, name: 'Hobi dan Olahraga', imageUrl: 'https://images.dusdusan.com/article/8yXd9wWp1607483596_ICON%20WEB-06.png' },
  { id: 9, name: 'Stationary', imageUrl: 'https://images.dusdusan.com/article/eQ7GprjP1607483659_ICON%20WEB-07.png' },
  { id: 10, name: 'Dapur', imageUrl: 'https://images.dusdusan.com/article/OOsayb9i1607483674_ICON%20WEB-08.png' },
  { id: 11, name: 'Makanan dan Minuman', imageUrl: 'https://images.dusdusan.com/article/Yq083Twe1607483734_ICON%20WEB-10.png' },
  { id: 12, name: 'Lainnya', imageUrl: '/assets/svg/e25960fc52951b43eca7cf23b3c1617a.svg' },
];

export const menarikArticles: MenarikArticle[] = [
  {
    id: 1,
    imageUrl: 'https://images.dusdusan.com/product/W0s3Fmrp1717993047_promo_beli_bodimax_running_machine_gratis_bodimax_wellness_yoga_matt_b_3_juni_24_2_.jpg',
    category: 'Info Promo',
    title: 'Makin Sehat Berolahraga Beli Alatnya di Dusdusan Banyak Bonusan!!',
    date: '10 Jun 2024',
  },
  {
    id: 2,
    imageUrl: 'https://images.dusdusan.com/product/qk9ofisn1717993325_promo_beli_alexa_kasur_lantai_150_x_200_gratis_sajadah_premium_3_juni_24_1_.jpg',
    category: 'Info Promo',
    title: 'Belanja Makin Hemat! Hadiahnya Bikin Makin Rajin Ibadah',
    date: '10 Jun 2024',
  },
];

export const brands: Brand[] = [
  {
    id: 116,
    name: 'Bambang',
    logoUrl: 'https://images.dusdusan.com/article/uMB4049w1576745507_BAMBANG-LOGO.jpg',
    link: '/brand/116',
  },
  {
    id: 39,
    name: 'Technoplast',
    logoUrl: 'https://images.dusdusan.com/article/OimIRZhJ1559030902_BRANDS-39.jpg',
    link: '/brand/39',
  },
  {
    id: 36,
    name: 'Smart Mom',
    logoUrl: 'https://images.dusdusan.com/article/8v6jq0Qt1559030826_BRANDS-36.jpg',
    link: '/brand/36',
  },
  {
    id: 15,
    name: 'Homecook',
    logoUrl: 'https://images.dusdusan.com/article/WIAvMh0e1633694441_LOGO-HOMECOOK.jpg',
    link: '/brand/15',
  },
  {
    id: 7,
    name: 'Berlinger Haus',
    logoUrl: 'https://images.dusdusan.com/article/WAUHez1f1559029850_BRANDS-06.jpg',
    link: '/brand/7',
  },
];

export const bestSellingProducts = [
  {
      id: 1,
      name: 'Cypruz Marble Cookware Set of 7 pcs',
      price: 'Rp 969,000/Set',
      imageUrl: 'https://nos.wjv-1.neo.id/images.dusdusan.com/product/1klRKmWX1665720641_1665720631356.jpg',
  },
  {
      id: 2,
      name: 'Technoplast Square Dishes Keeper 3 Susun Brown',
      price: 'Rp 179,000/Set',
      imageUrl: 'https://nos.wjv-1.neo.id/images.dusdusan.com/product/w3Cz7yG41719383994_1719383859282.jpg',
  },
  {
      id: 3,
      name: 'Bodimax New Running Machine',
      price: 'Rp 3,680,000/Unit',
      imageUrl: 'https://nos.wjv-1.neo.id/images.dusdusan.com/product/GHQXfMfw1675220738_1675220737961.jpg',
      stockStatus: 'Hampir Habis',
  },
  {
      id: 4,
      name: 'Bambang Jumbo Food Container set 14 Pcs',
      price: 'Rp 177,000/Dus',
      imageUrl: 'https://nos.wjv-1.neo.id/images.dusdusan.com/product/AimOC2uD1696234445_1696234445738.jpg',
  },
  {
      id: 5,
      name: 'Value Kitchen Set of 5 Blue',
      price: 'Rp 199,000/Set',
      imageUrl: 'https://nos.wjv-1.neo.id/images.dusdusan.com/product/VqOn5VO91665736423_1665736422415.jpg',
  },
];