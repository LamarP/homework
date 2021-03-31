const myMiddleware = (store) => {
  console.log("I'm in the top level middleware function");
  console.log("store: ", store);
  return (next) => {
    console.log("I'm in the function where next is an arggument!")
  }
}