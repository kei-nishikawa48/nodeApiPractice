const main = async () => {
  fetch("http://localhost:3022", { headers: { apikey: "12345" } }).then(
    (text) => {
      text.json().then((data) => {
        console.log(data);
      });
    }
  );
};

main();
