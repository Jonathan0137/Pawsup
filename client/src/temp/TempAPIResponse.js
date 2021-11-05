const AllServiceDetailedPage = [
    {
      serviceId: "s1",
      serviceProviderId: "10001",
      serviceProviderName: "Wade",
      serviceProviderPhone: "647-402-xxxx",
      serviceProviderEmail: "wade@gmail.com",
      serviceProviderAvatar: "https://ui-avatars.com/api/name=Wade&background=random",
      servicePicURL: ["https://www.homestratosphere.com/wp-content/uploads/2018/08/dog-house-lead-image-080318-min.jpg", "https://static.thebark.com/sites/default/files/styles/full/public/content/blog/full/dog-proofing-your-home-room-guide.jpg?itok=VXvCpDpB"],
      serviceTitle: "A Place For Dog Home 1",
      serviceDetail: "warm place for dog to live.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
      serviceFacility: ["Bath", "Pet Toy", "Pet Room"],
      Location: "Markham",
      rating: 4,
      pricePerday: 10,
      ListOfComments: [
        {
          CommentTitle: "A Grate Place for Dog",
          CommentDetail: "This Place is good, I take my dog here, very nice",
          CommentAuthorName: "John",
          CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=John&background=white",
          CommentTime: "20/04/20",
          CommentReplies: [
            {
              replyUserName: "Wade",
              replyAvatartURL: "https://ui-avatars.com/api/name=Wade&background=white",
              replyDetail: "Thanks For the support",
              replyTime: "21/04/20",
            },
            {
              replyUserName: "John",
              replyAvatartURL: "https://ui-avatars.com/api/name=John&background=white",
              replyDetail: "No problem",
              replyTime: "22/04/20",
            },
          ],

        },
        {
          CommentTitle: "This place sucks",
          CommentDetail: "My dog now starts playing video games after coming here. Bad habbit developed from this house. Never coming here again",
          CommentAuthorName: "Troll",
          CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Troll&background=random",
          CommentTime: "22/04/20",
          CommentReplies: [
            {
              replyUserName: "Wade",
              replyAvatartURL: "https://ui-avatars.com/api/name=Wade&background=white",
              replyDetail: "Sorry To hear that",
              replyTime: "23/04/20",
            },
          ],

        },
      ],

    },
    {
      serviceId: "s2",
      serviceProviderId: "10002",
      serviceProviderName: "Wade",
      serviceProviderPhone: "647-402-xxxx",
      serviceProviderEmail: "wade@gmail.com",
      serviceProviderAvatar: "https://ui-avatars.com/api/name=Wade&background=white",
      servicePicURL: ["https://www.ippinka.com/wp-content/uploads/2015/07/Inside-Dog-House-Your-Pets-Home-Within-a-Home-01.jpg"],
      serviceTitle: "A good place for cat",
      serviceDetail: "Cat house",
      serviceFacility: ["Bath", "Pet Toy", "Pet Room"],
      Location: "Markham",
      rating: 5,
      pricePerday: 10,
      ListOfComments: [
        {
          CommentTitle: "Not bad for a cat house",
          CommentDetail: "Fast reply, safe place.",
          CommentAuthorName: "Kevin",
          CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Kevin&background=random",
          CommentTime: "22/04/20",
          CommentReplies: [
            {
              replyUserName: "Jenny",
              replyAvatartURL: "https://ui-avatars.com/api/name=Jonathan&background=random",
              replyDetail: "Same!",
              replyTime: "22/04/20",
            },

          ],

        },
      ],

    },
];
const AllMediaDetailedPage = [
  {
    mediaId : "m1",
    autorName : "Kevin",
    autorProfilePicURL : "https://ui-avatars.com/api/name=Kevin&background=random",
    mediaPictureURL: [
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
      },
      {
        image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
      },
      {
        image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",

      },
      {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",

      },
      {
        image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",

      },
      {
        image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",

      },
      {
        image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",

      },
      {
        image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",

      },

    ],
    mediaTitle: "Come Look at my pictures!",
    mediaDetail: "Here are some pictures of famous cities",
    numberOfLikes: 20,
    PublishedTime: "22/04/20",
    ListOfComments: [
      {
        CommentTitle: "Not bad for a cat house",
        CommentDetail: "Fast reply, safe place.",
        CommentAuthorName: "Kevin",
        CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Kevin&background=random",
        CommentTime: "22/04/20",
        CommentReplies: [
          {
            replyUserName: "Babe",
            replyAvatartURL: "https://ui-avatars.com/api/name=Babe&background=random",
            replyDetail: "Same!",
            replyTime: "22/04/20",
          },

        ],

      },
    ],
  },
]
const AllProductDetailedPage = [
    {
      productId: "p1",
      productName: "Orijen Puppy Large Breed Dog Food",
      productOrigin: "Orijen",
      productDetail: "ORIJEN Puppy Large Breed Dog Food is packed with protein and healthy fats to ensure your pup gets everything they need to support their fast bone growth and development. Using whole animal ingredients along with nutritious fruits and vegetables, this kibble is a great choice for your large puppy. Orijen Puppy Large Breed Dog Food is a grain free food",
      productPrice: [59.99 ,94.99],
      productType: ["6kg", "11.4kg"],
      productPicURL: ["https://cdn.shopify.com/s/files/1/1074/9060/products/PuppyLargeDogFrontRight6kg_2000x.png?v=1600605800", "https://cdn.shopify.com/s/files/1/1074/9060/products/sizfishtreats_e7b8446f-fd19-4223-a0a8-0e282fe014ee_1600x.jpg?v=1626106610"],
      productRating: 5,
      productComment:[
        {
          CommentDetail: "Great service and fast delivery, it’ll be my place to go from now on :).",
          CommentAuthorName: "Will",
          CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Will&background=random",
          CommentTime: "04/21/21",
          CommentReplies: [
            {
              replyUserName:"Adam Scott",
              replyAvatarURL: "https://ui-avatars.com/api/name=Adam&background=random",
              replyDetail:"Thanks! Im working hard",
              replyTime: "04/24/21"
            },
            {
              replyUserName:"Riya Negi",
              replyAvatarURL: "https://ui-avatars.com/api/name=Riya&background=random",
              replyDetail:"Welcome",
              replyTime: "04/24/21"
            },

          ]
        },
        {
          CommentDetail: "My Puppy Loves it. Greate service too!!",
          CommentAuthorName: "Megan Foxx",
          CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Megan&background=random",
          CommentTime: "10/02/21",
          CommentReplies: [
          ]
        },
      ]
    },
    {
        productId: "p2",
        productName: "Orijen Puppy Dog Food",
        productOrigin: "Orijen",
        productDetail: "ORIJEN Puppy Dog Food is full of great protein and healthy fats to help your growing puppy develop into a strong and happy dog. With ingredients including free-run chicken, turkey, wild-caught fish, and cage-free eggs, this nutrient packed food is a perfect choice for your puppy. Orijen Puppy Dog Food is a grain free food",
        productPrice: [28.99, 59.99 ,94.99],
        productType: ["2kg", "6kg", "11.4kg"],
        productPicURL: ["https://cdn.shopify.com/s/files/1/1074/9060/products/PuppyDogFrontRight6kg_2000x.png?v=1600604106", "https://www.amazon.ca/images/I/619qh7RstZL._AC_SY879_.jpg"],
        productRating: 4.5,
        productComment:[
          {
            CommentTitle: "Greate Experience",
            CommentDetail: "Great service and fast delivery, it’ll be my place to go from now on :).",
            CommentAuthorName: "Will",
            CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Will&background=random",
            CommentTime: "04/21/21",
            CommentReplies: [
              {
                replyUserName:"Adam Scott",
                replyAvatarURL: "https://ui-avatars.com/api/name=Adam&background=random",
                replyDetail:"Thanks! Im working hard",
                replyTime: "04/24/21"
              },
              {
                replyUserName:"Riya Negi",
                replyAvatarURL: "https://ui-avatars.com/api/name=Riya&background=random",
                replyDetail:"Welcome",
                replyTime: "04/24/21"
              },
  
            ]
          },
          {
            CommentTitle: "Greate Experience",
            CommentDetail: "Great service and fast delivery, it’ll be my place to go from now on :).",
            CommentAuthorName: "Will",
            CommentAuthorProfilePicURL: "https://ui-avatars.com/api/name=Will&background=random",
            CommentTime: "04/21/21",
            CommentReplies: [
              {
                replyUserName:"Adam Scott",
                replyAvatarURL: "https://ui-avatars.com/api/name=Adam&background=random",
                replyDetail:"Thanks! Im working hard",
                replyTime: "04/24/21"
              },
              {
                replyUserName:"Riya Negi",
                replyAvatarURL: "https://ui-avatars.com/api/name=Riya&background=random",
                replyDetail:"Welcome",
                replyTime: "04/24/21"
              },
  
            ]
          },
        ]
      },
  ];
  export {AllProductDetailedPage, AllServiceDetailedPage, AllMediaDetailedPage};