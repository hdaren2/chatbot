"use client"

import { useEffect } from "react"
import { ShopifyChatbot } from "./shopify-chatbot"

export function ChatbotEmbed() {
  useEffect(() => {
    // Notify parent window when chatbot opens/closes
    const handleChatbotToggle = (isOpen: boolean) => {
      if (window.parent) {
        window.parent.postMessage(isOpen ? "chatbot-opened" : "chatbot-closed", "*")
      }
    }

    // You can add event listeners here if needed
    return () => {
      // Cleanup
    }
  }, [])

  return <ShopifyChatbot />
}
