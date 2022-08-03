// import axios from "axios";

// const handler = async (event, context) => {
//   const listId = "4297abfa34";
//   const apiKey = "5ec9fea1239d513416253ced0e7a31c9-us17";

//   const body = JSON.parse(event.body);
//   const { email_address, merge_fields } = body;

//   if (!email_address) {
//     return {
//       statusCode: 400,
//       body: JSON.stringify({ message: "Please provide an email address." }),
//     };
//   }
//   try {
//     const payload = {
//       email_address,
//       merge_fields,
//       status: "Subscribed",
//     };
//     const { data } = await axios.post(
//       `https://us17.api.mailchimp.com/3.0/lists/${listId}/members`,
//       payload,
//       {
//         headers: {
//           Authorization: `Basic ${apiKey}`,
//         },
//       }
//     );

//     return {
//         statusCode: 200,
//         body: JSON.stringify(data)
//     }
//   } catch (error) {
//     console.log(error);
//     return{
//         statusCode: 500,
//         body: JSON.stringify(error),
//     }
//   }
// };

// export {handler}

import axios from 'axios';

const handler = async (event, context) => {
    const listId = '4297abfa34';
    const apiKey = '5ec9fea1239d513416253ced0e7a31c9-us17';
    const body = JSON.parse(event.body);
    const { email_address } = body;
    if (!email_address) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Please provide an email address.' }),
        }
    }

    try {
        const payload = {
            email_address,
            status: 'subscribed',
        }
        const { data } = await axios.post(`https://us17.api.mailchimp.com/3.0/lists/${listId}/members`, payload, {
            headers: {
                Authorization: `Basic ${apiKey}`,
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error),
        }
    }
};

export {
    handler,
}
