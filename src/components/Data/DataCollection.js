export const DataCollection = [
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_1.png?v=754",
    alt: "MỚI VỀ",
    text: "MỚI VỀ",
    link: "/collections/new-arrival-maybi-is-back",
    nametypography: "NEW ARRIVAL - MAYBI's back",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_2.png?v=754",
    alt: "MOTHER'S DAY",
    text: "MOTHER'S DAY",
    link: "/collections/mother-s-day",
    nametypography: "MOTHER'S DAY",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_3.png?v=754",
    alt: "LAST CHANCE",
    text: "LAST CHANCE",
    link: "/collections/last-chance-deal-khung",
    nametypography: "LAST CHANCE DEAL KHỦNG - CHỈ TỪ 29K!!!",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_4.png?v=754",
    alt: "BÁN CHẠY",
    text: "BÁN CHẠY",
    link: "/collections/best-seller",
    nametypography: "BEST SELLER",
  },
  {
    iconSrc:
      "//theme.hstatic.net/1000341902/1001140246/14/menu_icon_5.png?v=754",
    alt: "SẢN PHẨM",
    text: "SẢN PHẨM",
    link: "/collections/san-pham",
    nametypography: "SẢN PHẨM",
  },
  {
    text: "THỜI TRANG CÔNG SỞ",
    link: "/collections/thoi-trang-cong-so",
    nametypography: "THỜI TRANG CÔNG SỞ",
  },
  {
    text: "BLOG",
    link: "/",
    nametypography: "BLOG",
  },
];

export const linkcollections = [];

DataCollection.forEach((item) => {
  const parts = item.link.split("/");

  const lastPart = parts[parts.length - 1];

  linkcollections.push(item.link);
});
