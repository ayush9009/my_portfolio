//here we connect sanity clients with our react application
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

//sanity manage going to open the sanity management tool

export const client=sanityClient({
    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN,
})

//to keep all this data safe especially the token we can crate a new env file in the root



const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

//yaha hum sanity client ko front end se connect karenge yani jo bhi ab front end milega data vo sanity se leke milega,mtlb vo sab sanity hoga aur vaha se hum fetch karenge dynamically