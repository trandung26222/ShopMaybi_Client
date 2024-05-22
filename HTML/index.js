var url = "https://jsonplaceholder.typicode.com/users";

var getuser = async (url) => {
  return (await axios.get(url)).data;
};

document.querySelector(".b1").addEventListener("click", async () => {
  // Gửi yêu cầu GET đến một URL bất kỳ sử dụng Axios
  var kq = await getuser(url);
  console.log(kq);
});
