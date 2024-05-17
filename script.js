
let likeNumber = document.getElementById("howmany") 
let post = document.getElementById("firstPost");  
let postsBox = document.getElementById("postsBox")  
let text = document.getElementById("text");
let comment = document.getElementById("comment")  
let comments = document.getElementById("comments")  
 
let c=69; 
 
let imgurls = [  
    "neko1.jpg", 
    "neko2.jpg", 
    "nekoichi.jpg", 
]  
 
 
let textIT = [  
    "この猫が好きですか？ ", 
    "はーい！！", 
    "ありがとう!", 
]  
 
for(let i = 1; i < 100; i++){  
    newtext = textIT[i%3] 
    text.innerHTML = newtext 
    console.log(textIT[i%3]) 
 
    newpost = post.cloneNode(true);  
    imgpost = newpost.getElementsByClassName("img")[0]  
    text.innerHTML = textIT[i%3] 
    imgpost.setAttribute("src", imgurls[i%3])  
 
 
    postsBox.appendChild(newpost);  
 
} 
 
function like(){ 
    c++ 
    likeNumber.innerHTML = c 
} 
 
function addcomment(){ 
    let input = comment.value  
    let addme = document.createElement("p") 
    addme.innerHTML = "お前:" + input 
    comments.appendChild(addme) 
}