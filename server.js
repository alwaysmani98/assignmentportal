const app = require("./app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}).on("error", (error) => {
  console.error(`Error starting server: ${error.message}`);
  process.exit(1);
});
