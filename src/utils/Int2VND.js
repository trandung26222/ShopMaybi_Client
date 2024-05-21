export function Int2VND(number) {
  if (isNaN(number)) return "";
  let currencyString = number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return currencyString;
}
