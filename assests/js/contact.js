var volume = true
document.getElementById("message-volume").addEventListener("click", () => {
    if (volume) {
        volume = false
        document.getElementById("message-volume").innerHTML = `
        <i class="fas fa-volume-mute"></i>`
    } else {
        volume = true
        document.getElementById("message-volume").innerHTML = `
        <i class="fas fa-volume-up"></i>`
    }
})

speakTextHindi("आप संदेश टाइप कर सकते हैं या अपने प्रश्नों के बारे में विशेषज्ञ से बात करने के लिए बोल सकते हैं")

document.getElementById("doubt_ask").addEventListener("click", () => {
    speakTextHindi("आप संदेश टाइप कर सकते हैं या अपने प्रश्नों के बारे में विशेषज्ञ से बात करने के लिए बोल सकते हैं")
})

document.getElementById("speak-message").addEventListener("click", () => {
    var reco = new webkitSpeechRecognition()
    reco.continous = true
    reco.interimResults = true
    reco.lang = "hi-IN"
    reco.onresult = (e) => {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="sender-message">You : ${e.results[0][0].transcript}</div>`
        message_reply(e.results[0][0].transcript)
    }
    reco.start()
})

document.getElementById("message-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        enter_message_of_sender()
    }
})

document.getElementById("start-conversation").addEventListener("click", () => {
    enter_message_of_sender()
})

function enter_message_of_sender() {
    var message = document.getElementById("message-input").value
    document.getElementById("conversation-messages").innerHTML +=
        `<div class="sender-message">You : ${message}</div>`
    message_reply(message)
}

function message_reply(message) {
    if (message === "hi" || message === "hello") {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">Expert : Hello there how may i help you</div>`
    }
    if (message === "हेलो") {
        speakTextHindi("हैलो मैं कैसे आपकी मदद कर सकती हूं")
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">विशेषज्ञ : हैलो, मैं कैसे आपकी मदद कर सकती हूं</div>`
    }
    if (message.includes("मदद")) {
        speakTextHindi("यदि आप अपने उत्पादों को बेचना चाहते हैं तो आप प्रोफ़ाइल पर जा सकते हैं और आवश्यक विवरण के साथ लॉगिन कर सकते हैं और फिर आप इसके लिए चित्र और अन्य विवरण अपलोड कर सकते हैं")
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">विशेषज्ञ : यदि आप अपने उत्पादों को बेचना चाहते हैं तो आप प्रोफ़ाइल पर जा सकते हैं <br>और आवश्यक विवरण के साथ लॉगिन कर सकते हैं और फिर आप इसके लिए चित्र और<br> अन्य विवरण अपलोड कर सकते हैं</div>`
    }
    if (message.includes("help")) {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">Expert : If you want to sell your products then you can go to <br>profile and login with required details and then you can upload<br> the images and other details for it</div>`
    }
    if (message.includes("पैसे") || message.includes("पैसा") || message.includes("निकालना") || message.includes("निकालने")) {
        speakTextHindi("यदि आप बेचे गए उत्पादों के पैसे निकालना चाहते हैं तो आप प्रोफ़ाइल के लेखा अनुभाग में जा सकते हैं, वहां एक निकासी विकल्प उपलब्ध होगा जिससे आप राशि निकाल सकते हैं")
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">विशेषज्ञ : यदि आप बेचे गए उत्पादों के पैसे निकालना चाहते हैं तो आप प्रोफ़ाइल के लेखा <br>अनुभाग में जा सकते हैं, वहां एक निकासी विकल्प उपलब्ध होगा जिससे आप राशि <br>निकाल सकते हैं</div>`
    }
    if (message.includes("money") || message.includes("cash") || message.includes("withdraw")) {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">Expert : If you want to withdraw money of the products sold<br> you can go to the accounts section of the profile , a withdraw<br> option wil be available there form which you can withdraw<br> the amountt</div>`
    }
}

function speakTextHindi(text) {
    if (volume) {
        responsiveVoice.speak(text, "Hindi Female");
    }
}