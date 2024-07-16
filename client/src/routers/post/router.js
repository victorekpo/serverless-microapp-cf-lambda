var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
This shows a different HTTP method, a POST.

Try send a POST request using curl or another tool.

Try the below curl command to send JSON:

$ curl -X POST <worker> -H "Content-Type: application/json" -d '{"abc": "def"}'
*/
export const postHandler = (request) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a base object with some fields.
    let fields = {
        "asn": request.cf.asn,
        "colo": request.cf.colo
    };
    // If the POST data is JSON then attach it to our response.
    if (request.headers.get("Content-Type") === "application/json") {
        fields["json"] = yield request.json();
    }
    // Serialise the JSON to a string.
    const returnData = JSON.stringify(fields, null, 2);
    return new Response(returnData, {
        headers: {
            "Content-Type": "application/json"
        }
    });
});
