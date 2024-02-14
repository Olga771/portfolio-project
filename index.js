function showAnswer(response) {
  console.log("Processed");
  alert(response.data.asnwer);
}

let apiKey = "7f4590fo354t54d904d24b1af975d02a";
let context =
  "be polite.and provide a short answer.the shorter the better. make sure to pick one";
let prompt = "when was AI first created";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Processing");
axios.get(apiUrl).then(showAnswer);
