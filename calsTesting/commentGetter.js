function getComments(){
    fetch("testing.json")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.querySelector("#output").innerText = data.comments

        
    })
}