export async function onRequestPost(context) {
  try {
    let input = await context.request.formData();
    sendEmails(input);
    return new Response('alert("Info Received");', { status: 200 });
  } catch (err) {
    return new Response('alert("Invalid Submission");', { status: 400 });
  }
}

export async function sendEmails(input) {
    let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "body": JSON.stringify({
            "personalizations": [{ 
                "to": [ {"email": input.email,
                          "name": input.name}],
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
                "value": "Dear " + input.name + ",\n\nWe have received your application and are currently looking over it. We will try to get back to you asap.\n\n Best,\nThe Bolt Bots",
            }],
        }),
    });
}
