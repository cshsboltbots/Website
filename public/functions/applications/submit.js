export async function onRequestPost({request,env}) {
    try {
      let input = await request.formData();
      const r = await sendEmails(input,env);
      let s = 'alert("' + r + '");'
      return new Response(s, { status: 200 });
    } catch (err) {
      return new Response('alert("Invalid Submission");'+err, { status: 400 });
    }
  }

function sendEmails(input,env) {
      let send_request = new Request("https://api.mailchannels.net/tx/v1/send", {
          "method": "POST",
          "headers": {
              "content-type": "application/json",
          },
          "body": JSON.stringify({
              "personalizations": [{ 
                  "to": [ {"email": input.email,
                            "name": input.fname + " " + input.lname}],
                  "dkim_domain": env.DKIM_DOMAIN,
                  "dkim_selector": env.DKIM_SELECTOR,
                  "dkim_private_key": env.DKIM_PRIVATE_KEY,
              }],
              "from": {
                  "email": env.SENDER,
                  "name": env.SENDER_NAME,
              },

              "subject": "Bolt Bots Application Received",
              "content": [{
                  "type": "text/plain",
                  "value": "Dear " + input.fname + ",\n\nWe have received your application and are currently looking over it. We will try to get back to you asap.\n\nBest,\nThe Bolt Bots",
              }],
          }),
      });
      const r = fetch(send_request);
      const rt = r.text();
      return rt;
  }
