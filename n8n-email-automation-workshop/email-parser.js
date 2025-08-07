const items = $input.all();
const emailContent = items
  .map((item) => item.json)
  .reduce((acc, curr) => {
    return acc + "\n" + JSON.stringify(curr);
  }, "");

return { emailContent };
