function getComments(){
    fetch("testing.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("#output").innerText = data.comments

        
    })
}

function sendComments(){
    comment = document.getElementById("comment").input

    fetch("testing.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        data.comments.push(comment);

    })

}