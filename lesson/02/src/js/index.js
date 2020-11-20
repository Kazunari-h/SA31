import "../scss/index.scss";

const axios = require("axios")

document.querySelector(".button").addEventListener("click", () => {
    axios
        .get("https://wa25-ogp-api.herokuapp.com?url=https://www.youtube.com/watch?v=4Q9DWZLaY2U")
        .then(res => {
            // #resultに取得できたデータを表示する
            const result = document.getElementById("result")

            // pタグを作る
            const p = document.createElement("p")
            p.innerText = res.data.title

            // imgタグを作る
            const img = document.createElement("img")
            img.src = res.data.image
            img.width = 100

            // #resultにpタグを追加する
            result.appendChild(p);
            result.appendChild(img);

        })
        .catch(error => {
            console.log(error);
        })
})
