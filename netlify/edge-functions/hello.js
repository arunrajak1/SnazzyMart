// export  default async (request,context)=> {
// return new Response("Hello world! from the Edge server",{
//   headers: {
//         'content-type': 'text/html',
//   }, 
// });
// };

export default () => new Response("Hello world");

export const config = { path: "/test" };
