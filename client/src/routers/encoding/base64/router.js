var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Buffer } from 'buffer';
export const base64Handler = (_a) => __awaiter(void 0, [_a], void 0, function* ({ params }) {
    // Decode text like "Hello%20world" into "Hello world"
    let input = decodeURIComponent(params.text);
    // Construct a buffer from our input
    let buffer = Buffer.from(input, "utf8");
    // Serialise the buffer into a base64 string
    let base64 = buffer.toString("base64");
    const backendApi = 'https://6wkf624dt4.execute-api.us-east-1.amazonaws.com/prod/';
    const response = yield fetch(backendApi);
    const data = yield response.json();
    // Return the HTML with the string to the client
    return new Response(`
<p>Base64 encoding: <code>${base64}</code></p>
<p>${JSON.stringify(data, null, 2)}</p>
`, {
        headers: {
            "Content-Type": "text/html"
        }
    });
});
