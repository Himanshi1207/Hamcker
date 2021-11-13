speakText("आप संदेश टाइप कर सकते हैं या अपने प्रश्नों के बारे में विशेषज्ञ से बात करने के लिए बोल सकते हैं")

document.getElementById("doubt_ask").addEventListener("click", () => {
    speakText("आप संदेश टाइप कर सकते हैं या अपने प्रश्नों के बारे में विशेषज्ञ से बात करने के लिए बोल सकते हैं")
})

document.getElementById("speak-message").addEventListener("click", () => {
    var reco = new webkitSpeechRecognition()
    reco.continous = true
    reco.interimResults = true
    reco.lang = "hi-IN"
    reco.onresult = (e) => {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="sender-message">You : ${e.results[0][0].transcript}</div>`
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
    if (message === "hi" || message === "hello") {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">Expert : Hello there how may i help you</div>`
    }
    if (message === "हेलो") {
        document.getElementById("conversation-messages").innerHTML +=
            `<div class="expert-message">विशेषज्ञ : हैलो, मैं कैसे आपकी मदद कर सकता हूं</div>`
    }
}

function speakText(text) {
    responsiveVoice.speak(text, "Hindi Female");
}