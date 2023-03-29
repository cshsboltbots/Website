export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();
    let r = sendEmails(input);
    let s = 'alert("' + r + '");'
    return new Response(s, { status: 200 });
  } catch (err) {
    return new Response('alert("Invalid Submission");', { status: 400 });
  }
}

export function sendEmails(input) {
    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify({
            "personalizations": [{ 
                "to": [ {"email": input.email,
                          "name": input.fname + " " + input.lname}],
                "dkim_domain": DKIM_DOMAIN,
                "dkim_selector": DKIM_SELECTOR,
                "dkim_private_key": DKIM_PRIVATE_KEY,
            }],
            "from": {
                "email": SENDER,
                "name": SENDER_NAME,
            },

            "subject": "Bolt Bots Application Received",
            "content": [{
                "type": "text/plain",
                "value": "Dear " + input.fname + ",\n\nWe have received your application and are currently looking over it. We will try to get back to you asap.\n\nBest,\nThe Bolt Bots",
            }],
        }),
    });
    const r = await fetch(send_request);
    const rt = await r.text();
    return rt;
}
