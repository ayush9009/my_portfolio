//initially sanity mai empty schemas thai to humne schamas bnaye khudke jo ki humari jaraoat kai thai ,;ike about testimonials and so on

export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'description',
            title:'Description',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,    //ye sanity ek aisa feature proviide karta hai jiski madath se user apni photo crop vagera kar sakta hai
            },
        },
        
    ]
}