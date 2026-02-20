import app from "./app.js";

app.listen(3000, (error) => {
  error ? console.log(error) : console.log("server is running");
});
