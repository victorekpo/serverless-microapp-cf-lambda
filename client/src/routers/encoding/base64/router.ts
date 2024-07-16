import { Buffer } from 'buffer';

export const base64Handler = async ({ params }) => {
    // Decode text like "Hello%20world" into "Hello world"
    let input = decodeURIComponent(params.text)

    // Construct a buffer from our input
    let buffer = Buffer.from(input, "utf8")

    // Serialise the buffer into a base64 string
    let base64 = buffer.toString("base64")

    const backendApi = 'https://6wkf624dt4.execute-api.us-east-1.amazonaws.com/prod/';
    const response = await fetch(backendApi)
    const data = await response.json()

    // Return the HTML with the string to the client
    return new Response(`
<p>Base64 encoding: <code>${base64}</code></p>
<p>${JSON.stringify(data, null, 2)}</p>
`, {
        headers: {
            "Content-Type": "text/html"
        }
    })
};