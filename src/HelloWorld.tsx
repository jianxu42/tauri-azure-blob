import { invoke } from "@tauri-apps/api";

function HelloWorld() {
  invoke("greet", { name: "World" })
    // `invoke` returns a Promise
    .then((response) => console.log(response));
}

export default HelloWorld;
