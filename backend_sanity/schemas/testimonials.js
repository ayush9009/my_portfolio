//here we write plain javascript code
export default {    //our entire schema is just going to be one project,inisde our schema we have following properties
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',  //type of schema
    fields: [        //array of fiedls that are testimonials objects going to have
        {
            name: 'name',
            title: 'Name',
            type: 'string'

        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'

        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options:{
                hotspot:true,    //user will able to choose crop or uploading image ,this is the feature you have to implement on your own if we wernt using sanity
            }

        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'

        },
    ]
}