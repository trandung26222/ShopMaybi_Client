export function tinhtonggia(data) {
  var tonggia = 0;
  for (var i = 0; i < data.length; i++) {
    tonggia += data[i].gia * data[i].quantity;
  }
  return tonggia;
}
