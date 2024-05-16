export function tinhtongquantity(data) {
  var tongsl = 0;
  for (var i = 0; i < data.length; i++) {
    tongsl += data[i].quantity;
  }
  return tongsl;
}
