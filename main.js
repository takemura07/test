var milkcocoa = new MilkCocoa("https://io-pi3159ro9.mlkcca.com");
/* your-app-id にアプリ作成時に発行される"io-"から始まるapp-idを記入します */ 
3 var chatDataStore = milkcocoa.dataStore("chat"); 
4 
 
5 // フォームの情報を記録しておく変数 
6 var textArea, board,textName;                   // ←これ 
7 
 
8 // ページが読み込み終わったときの処理 
9 window.onload = function(){ 
10   textArea = document.getElementById("msg"); 
11   board = document.getElementById("board"); 
12   textName = document.getElementById("txtName");  // ←これ 
13 } 
14 
 
15 function clickEvent(){ 
16   var text = textArea.value; 
17   sendText(text,textName.value);                  // ←これ 
18 } 
19 
 
20 function sendText(text,nm){                       // ←これ 
21   chatDataStore.push({uname : nm,content : text},function(data){  // ←これ 
22     console.log("送信完了!"); 
23     textArea.value = ""; 
24   }); 
25 } 
26 
 
27 chatDataStore.on("push",function(data){ 
28   addText(data.value);     // ←これ 
29 }); 
30 
 
31 function addText(text){ 
32   var msgDom = document.createElement("li"); 
33   msgDom.innerHTML = text.uname+":"+text.content; // ←これ 
34   board.insertBefore(msgDom, board.firstChild); 
35 } 
