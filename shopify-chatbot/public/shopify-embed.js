;(() => {
  // Create and inject the chatbot
  function loadChatbot() {
    const chatbotContainer = document.createElement("div")
    chatbotContainer.id = "shopify-chatbot-container"
    chatbotContainer.innerHTML = `
      <iframe 
        src="https://YOUR-VERCEL-URL.vercel.app/embed" 
        style="position: fixed; bottom: 0; right: 0; width: 100%; height: 100%; border: none; pointer-events: none; z-index: 9999; background: transparent;"
        id="chatbot-iframe">
      </iframe>
    `
    document.body.appendChild(chatbotContainer)

    // Handle iframe interactions
    window.addEventListener("message", (event) => {
      const iframe = document.getElementById("chatbot-iframe")
      if (event.data === "chatbot-opened") {
        iframe.style.pointerEvents = "all"
      } else if (event.data === "chatbot-closed") {
        iframe.style.pointerEvents = "none"
      }
    })
  }

  // Load when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadChatbot)
  } else {
    loadChatbot()
  }
})()
