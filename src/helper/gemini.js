// utils/geminiconfig/gemini.js
import componentscode from "@/app/data/componentscode";
import { GoogleGenerativeAI } from "@google/generative-ai";


const generateGeminiText = async (history, message) => {
    try {
        console.log(history, message)
        const codeArray = Object.entries(componentscode);
        const historycode = codeArray.map(([componentName, code]) => ({ text: code }))

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            throw new Error('GEMINI_API_KEY environment variable not set.');
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
        };

        // Start a new chat session or continue an existing one based on history
        const chatSession = model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [...historycode,
                        { text: "\" only use this componet to create any page or section when requierd to use other things the use other \"" },
                        { text: "\"From now on, when I ask you to create a page, please follow these steps:\n\nRequirements and Page Structure:\n\nBegin by asking me for specific requirements and outline the page's UI structure and design.\nShare a visual breakdown or structural layout, and ask me to confirm or specify any changes.\nIterative Feedback:\n\nIf I request changes, continue refining the structure and design without generating code until I give a final confirmation.\nOnce I confirm, provide only the final code for the complete page.\nComponent Reusability:\n\nPrioritize using any components I've previously specified in the chat.\nIf additional components are required, ask for confirmation before creating new ones.\nComponent Code Requests:\n\nAfter you’ve shared the final page code, if I ask for a specific component, provide the code for just that component separately.\nEnsure you consistently follow this approach for all page requests, aiming to reuse previously mentioned components whenever possible.\"" },
                    ]
                },
                {
                    role: "model",
                    parts: [
                        { text: "Okay, I understand.  Let's start with the first page. Please tell me about the page you'd like to create. What is its purpose? What content should it display?  How should the UI be structured and designed (e.g., navigation, layout, visual style)?  Any specific components you have in mind?\n\nThe more details you provide, the better I can understand your vision and create the page you want.  A simple sketch or a description of the layout would be very helpful.\n" },
                    ],
                },
                ...history
            ],
        });

        const result = await chatSession.sendMessage(message);
        return result.response.text();

    } catch (error) {
        console.log(`Error generating text: ${error.message}`);
        throw error;
    }
};

export default generateGeminiText;
