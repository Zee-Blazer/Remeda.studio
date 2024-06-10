const sendMsg = document.getElementById("send");
const formDetails = document.getElementById("form_details");

const errMsg = document.getElementById("error_msg"); // Error or success message

const sendEmail = async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value; // Get username
    const useremail = document.getElementById("useremail").value; // Get user email
    const userStory = document.getElementById("userstory").value; // Get the about of the User

    if(username.length < 3 || useremail.length < 5 || userStory.length < 1) {
        errMsg.innerText = "An error occured!!\nPlease full in all neccessary details";
        errMsg.style.color = "red";
    }
    else{
        try{
            console.log(useremail, username)
            const response = await fetch(
                    '/send-email', 
                    { 
                        method: "POST", 
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email: useremail, username, story: userStory })
                    }
                )

            const result = await response.json();
            errMsg.innerText = "Emails sent. Thanks";
            errMsg.style.color = "green";
        } catch(err) {}
    }
}

formDetails.addEventListener("submit", sendEmail);
sendMsg.addEventListener('click', sendEmail);
