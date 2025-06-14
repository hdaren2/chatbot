import { ShopifyChatbot } from "@/components/shopify-chatbot"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopify Chatbot Demo</h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Integration Instructions</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p>To integrate this chatbot into your Shopify store:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Download the chatbot code using the "Download Code" button</li>
              <li>Host the chatbot on Vercel or your preferred platform</li>
              <li>Add the chatbot iframe or script tag to your Shopify theme</li>
              <li>Customize the styling and responses to match your brand</li>
            </ol>
          </div>
        </div>

        {/* Demo content to show chatbot overlay */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Product 1</h3>
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <p className="text-gray-600">Sample product description</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Product 2</h3>
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <p className="text-gray-600">Sample product description</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-semibold mb-2">Product 3</h3>
            <div className="w-full h-32 bg-gray-200 rounded mb-2"></div>
            <p className="text-gray-600">Sample product description</p>
          </div>
        </div>
      </div>

      {/* Chatbot Component */}
      <ShopifyChatbot />
    </div>
  )
}
