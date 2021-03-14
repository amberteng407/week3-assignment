function getData(){
    var req = new XMLHttpRequest();
        req.open("get", "https://padax.github.io/taipei-day-trip-resources/taipei-attractions.json");
        req.send();
        req.onload = function(){
            var state = JSON.parse(this.responseText);
            // JSON.parse是string轉object,方便撈取資料
            // xhr.responseText 獲得字符串形式的響應數據
            for (var i = 0; i < 8; i ++){
                
                let content = document.querySelector(".content");
                let box = document.createElement("div");
                box.className = "box";
                box.id = "pic";
                content.appendChild(box);

                //載入照片放入 <div class="box" id = "pic"> 中       
                let pic = document.createElement("div");
                pic.className="img";
                let pics = document.createElement("img");
                pic.appendChild(pics);
                let src1 = state["result"]["results"][i]["file"];
                let src2 = src1.split("http:")[1]; 
                pics.src = "http:" + src2;
                box.appendChild(pic);

                //放入文字
                let word = document.createElement("div"); 
                word.className = "word";
                let name = state["result"]["results"][i]["stitle"];
                let title = document.createTextNode(name);       
                word.appendChild(title);
                box.appendChild(word);
            }                     
        }
}