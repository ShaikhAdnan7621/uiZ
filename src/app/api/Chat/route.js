import generateGeminiText from "@/helper/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const { message, history } = body.data

        if (!message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }
        const response = await generateGeminiText(history, message);
        console.log(response) // response message are visibke
        return NextResponse.json({ response }, { status: 200 });


    } catch (error) {
        console.error("Error in /api/Chat:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}




// import generateGeminiText from "@/helper/gemini";
// import { NextResponse } from "next/server";

// export async function POST(req) {
//     try {
//         const body = await req.json();
//         const { message, history } = await req.json();

//         console.log(body)

// // if (!message) {
// //     return NextResponse.json({ error: 'Message is required' }, { status: 400 });
// // }
// // const response = await generateGeminiText(body.history, body.message);
// return NextResponse.json({ response: "response", }, { status: 200 });


//     }
//     catch (err) {
//         console.error("Error in /api/caht:", err);
//         return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//     }
// }


// //      // Parse the request body
// //      const { message, history } = await request.json();

// //      // Validate the message
// //      if (!message) {
// //          return NextResponse.json({ error: 'Message is required' }, { status: 400 });
// //      }

// //      // Generate the Gemini response
// //      const geminiResponse = await generateGeminiText(history, message);

// //      // Return the response
// //      return NextResponse.json({ response: geminiResponse }, { status: 200 });
// //  } catch (error) {
// //      console.error("Error in /api/ai:", error);
// //      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
// //  }