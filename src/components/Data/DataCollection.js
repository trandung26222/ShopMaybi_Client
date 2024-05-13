export const DataCollection = [
  {
    id: 0,
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_1.png?v=754",
    alt: "MỚI VỀ",
    text: "MỚI VỀ",
    link: "/collections/new-arrival-maybi-is-back",
    nametypography: "NEW ARRIVAL - MAYBI's back",
    imgbackground:
      "https://file.hstatic.net/1000341902/collection/homepage_2000x679-100_b263dd31246e43a7834da5e13f3326ad.jpg",
  },
  {
    id: 1,
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_2.png?v=754",
    alt: "HOT DEALS",
    text: "HOT DEALS",
    link: "/collections/hotdeals",
    nametypography: "HOT DEALS",
    imgbackground:
      "https://file.hstatic.net/1000341902/collection/homepage_2000x679_copy-100_7c5cd6c1c6dd4a85922f3e9978b6096f.jpg",
  },
  {
    id: 2,
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_3.png?v=754",
    alt: "LAST CHANCE",
    text: "LAST CHANCE",
    link: "/collections/last-chance-deal-khung",
    nametypography: "LAST CHANCE DEAL KHỦNG - CHỈ TỪ 29K!!!",
  },
  {
    id: 3,
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_4.png?v=754",
    alt: "BÁN CHẠY",
    text: "BÁN CHẠY",
    link: "/collections/best-seller",
    nametypography: "BEST SELLER",
  },
  {
    id: 4,
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_5.png?v=754",
    alt: "SẢN PHẨM",
    text: "SẢN PHẨM",
    link: "/collections/san-pham",
    nametypography: "SẢN PHẨM",
  },
  {
    id: 5,
    text: "THỜI TRANG CÔNG SỞ",
    link: "/collections/thoi-trang-cong-so",
    nametypography: "THỜI TRANG CÔNG SỞ",
  },
  {
    id: 6,
    text: "BLOG",
    link: "/collections/blog",
    nametypography: "BLOG",
  },
];

export const RouteChildOfCollection = [];

DataCollection.forEach((item) => {
  const parts = item.link.split("/");

  const lastPart = parts[parts.length - 1];

  RouteChildOfCollection.push(lastPart);
});
