// TODO: format post numbers: 123,456,345


/* VARIABLES */
var map;
var infowindow, infoBubble;
var mapStyles = [{
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#444444"
    }]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [{
      "color": "#f2f2f2"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [{
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [{
      "visibility": "simplified"
    }]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
        "color": "#46bcec"
      },
      {
        "visibility": "on"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#30b5b2"
    }]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#ffffff"
    }]
  }
];

var markerCluster;
var options = {
  imagePath: 'images/m'
};

var hotness = 2;

/* JSON DATA */
var artsData = [{
    "name": "Tate Modern",
    "category": "Arts&Culture",
    "hashtag": "tatemodern",
    "posts": 644931,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 3
  },
  {
    "name": "Natural History Museum",
    "category": "Arts&Culture",
    "hashtag": "naturalhistorymuseum",
    "posts": 435166,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "British Museum",
    "category": "Arts&Culture",
    "hashtag": "britishmuseum",
    "posts": 373049,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Royal Albert Hall",
    "category": "Arts&Culture",
    "hashtag": "royalalberthall",
    "posts": 225602,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Somerset House",
    "category": "Arts&Culture",
    "hashtag": "somersethouse",
    "posts": 205003,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Saatchi Gallery",
    "category": "Arts&Culture",
    "hashtag": "saatchigallery",
    "posts": 181385,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Kensington Palace",
    "category": "Arts&Culture",
    "hashtag": "kensingtonpalace",
    "posts": 139886,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Victoria and Albert Museum",
    "category": "Arts&Culture",
    "hashtag": "victoriaandalbertmuseum",
    "posts": 135212,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Tate Britain",
    "category": "Arts&Culture",
    "hashtag": "tatebritain",
    "posts": 130290,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Design Museum",
    "category": "Arts&Culture",
    "hashtag": "designmuseum",
    "posts": 100382,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "National Theatre",
    "category": "Arts&Culture",
    "hashtag": "nationaltheatre",
    "posts": 97259,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "National Portrait Gallery",
    "category": "Arts&Culture",
    "hashtag": "nationalportraitgallery",
    "posts": 88004,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Royal Opera House",
    "category": "Arts&Culture",
    "hashtag": "royaloperahouse",
    "posts": 77503,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Barbican Centre",
    "category": "Arts&Culture",
    "hashtag": "barbicancentre",
    "posts": 46707,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Photographers' Gallery",
    "category": "Arts&Culture",
    "hashtag": "thephotographersgallery",
    "posts": 44988,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Royal Academy of Arts",
    "category": "Arts&Culture",
    "hashtag": "royalacademyofarts",
    "posts": 41757,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "British Library",
    "category": "Arts&Culture",
    "hashtag": "britishlibrary",
    "posts": 40757,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Imperial War Museum",
    "category": "Arts&Culture",
    "hashtag": "imperialwarmuseum",
    "posts": 39609,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "HMS Belfast",
    "category": "Arts&Culture",
    "hashtag": "hmsbelfast",
    "posts": 38400,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hammersmith Apollo",
    "category": "Arts&Culture",
    "hashtag": "hammersmithapollo",
    "posts": 33732,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Royal Festival Hall",
    "category": "Arts&Culture",
    "hashtag": "royalfestivalhall",
    "posts": 31010,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The British Museum",
    "category": "Arts&Culture",
    "hashtag": "thebritishmuseum",
    "posts": 28439,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Theatre Royal",
    "category": "Arts&Culture",
    "hashtag": "theatreroyal",
    "posts": 27544,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Lyceum Theatre",
    "category": "Arts&Culture",
    "hashtag": "lyceumtheatre",
    "posts": 23120,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Museum of London",
    "category": "Arts&Culture",
    "hashtag": "museumoflondon",
    "posts": 21810,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Shakespeare's Globe",
    "category": "Arts&Culture",
    "hashtag": "shakespearesglobe",
    "posts": 21560,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hayward Gallery",
    "category": "Arts&Culture",
    "hashtag": "haywardgallery",
    "posts": 21235,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wellcome Collection",
    "category": "Arts&Culture",
    "hashtag": "wellcomecollection",
    "posts": 20623,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Queen Elizabeth Olympic Park",
    "category": "Arts&Culture",
    "hashtag": "queenelizabetholympicpark",
    "posts": 19302,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Palladium",
    "category": "Arts&Culture",
    "hashtag": "londonpalladium",
    "posts": 18698,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Whitechapel Gallery",
    "category": "Arts&Culture",
    "hashtag": "whitechapelgallery",
    "posts": 18564,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wallace Collection",
    "category": "Arts&Culture",
    "hashtag": "wallacecollection",
    "posts": 16919,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Horniman Museum",
    "category": "Arts&Culture",
    "hashtag": "hornimanmuseum",
    "posts": 16486,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Royal Exchange",
    "category": "Arts&Culture",
    "hashtag": "royalexchange",
    "posts": 15712,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Old Vic",
    "category": "Arts&Culture",
    "hashtag": "oldvic",
    "posts": 13733,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sherlock Holmes Museum",
    "category": "Arts&Culture",
    "hashtag": "sherlockholmesmuseum",
    "posts": 13259,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Queen's House",
    "category": "Arts&Culture",
    "hashtag": "queenshouse",
    "posts": 12970,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "National Maritime Museum",
    "category": "Arts&Culture",
    "hashtag": "nationalmaritimemuseum",
    "posts": 10344,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Coliseum",
    "category": "Arts&Culture",
    "hashtag": "londoncoliseum",
    "posts": 10259,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Transport Museum",
    "category": "Arts&Culture",
    "hashtag": "londontransportmuseum",
    "posts": 10040,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];
var entertainmentData = [{
    "name": "Stamford Bridge",
    "category": "Entertainment",
    "hashtag": "stamfordbridge",
    "posts": 304774,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "O2 Arena",
    "category": "Entertainment",
    "hashtag": "o2arena",
    "posts": 241289,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wembley Stadium",
    "category": "Entertainment",
    "hashtag": "wembleystadium",
    "posts": 190957,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Zoo",
    "category": "Entertainment",
    "hashtag": "londonzoo",
    "posts": 176080,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Ministry of Sound",
    "category": "Entertainment",
    "hashtag": "ministryofsound",
    "posts": 155029,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Emirates Stadium",
    "category": "Entertainment",
    "hashtag": "emiratesstadium",
    "posts": 146610,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Brixton Academy",
    "category": "Entertainment",
    "hashtag": "brixtonacademy",
    "posts": 78268,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "White Hart Lane",
    "category": "Entertainment",
    "hashtag": "whitehartlane",
    "posts": 70486,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wembley Arena",
    "category": "Entertainment",
    "hashtag": "wembleyarena",
    "posts": 49918,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Twickenham Stadium",
    "category": "Entertainment",
    "hashtag": "twickenhamstadium",
    "posts": 26760,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Oval",
    "category": "Entertainment",
    "hashtag": "theoval",
    "posts": 23589,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Stadium",
    "category": "Entertainment",
    "hashtag": "londonstadium",
    "posts": 22098,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Madame Tussauds",
    "category": "Entertainment",
    "hashtag": "madametussaudslondon",
    "posts": 19196,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Horse Guards",
    "category": "Entertainment",
    "hashtag": "horseguards",
    "posts": 18451,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Selhurst Park",
    "category": "Entertainment",
    "hashtag": "selhurstpark",
    "posts": 12456,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "ICANDO",
    "category": "Entertainment",
    "hashtag": "icando",
    "posts": 11818,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Box Park (Croydon)",
    "category": "Entertainment",
    "hashtag": "boxparkcroydon",
    "posts": 10830,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Dungeon",
    "category": "Entertainment",
    "hashtag": "londondungeon",
    "posts": 10242,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "ArcelorMittal Orbit",
    "category": "Entertainment",
    "hashtag": "arcelormittalorbit",
    "posts": 10080,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Loftus Road",
    "category": "Entertainment",
    "hashtag": "loftusroad",
    "posts": 9190,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Barbican Conservatory",
    "category": "Entertainment",
    "hashtag": "barbicanconservatory",
    "posts": 7115,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Lord's Cricket Ground",
    "category": "Entertainment",
    "hashtag": "lordscricketground",
    "posts": 6445,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sea Life London",
    "category": "Entertainment",
    "hashtag": "sealifelondon",
    "posts": 6301,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Little Venice",
    "category": "Entertainment",
    "hashtag": "littlevenicelondon",
    "posts": 5031,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Southbank Skatepark",
    "category": "Entertainment",
    "hashtag": "southbankskatepark",
    "posts": 4007,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "M&M's World London",
    "category": "Entertainment",
    "hashtag": "mmsworldlondon",
    "posts": 2896,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Emirates Air Line cable car",
    "category": "Entertainment",
    "hashtag": "emiratesairlinecablecar",
    "posts": 1524,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Victoria Embankment Gardens",
    "category": "Entertainment",
    "hashtag": "victoriaembankmentgardens",
    "posts": 1382,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Bus Tour",
    "category": "Entertainment",
    "hashtag": "londonbustour",
    "posts": 1105,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Thames RIB Experience",
    "category": "Entertainment",
    "hashtag": "thamesribexperience",
    "posts": 1090,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Making of Harry Potter Studio Tour",
    "category": "Entertainment",
    "hashtag": "themakingofharrypotterstudiotour",
    "posts": 918,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Franks Rooftop Bar",
    "category": "Entertainment",
    "hashtag": "franksrooftopbar",
    "posts": 862,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Media Space",
    "category": "Entertainment",
    "hashtag": "mediaspace",
    "posts": 840,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Shrek's Adventure! London",
    "category": "Entertainment",
    "hashtag": "shreksadventurelondon",
    "posts": 833,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Osterley Park and House",
    "category": "Entertainment",
    "hashtag": "osterleyparkandhouse",
    "posts": 393,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "City Cruises",
    "category": "Entertainment",
    "hashtag": "citycruiseslondon",
    "posts": 391,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Crystal Maze",
    "category": "Entertainment",
    "hashtag": "crystalmazelondon",
    "posts": 352,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "All England Lawn Tennis and Croquet Club",
    "category": "Entertainment",
    "hashtag": "allenglandlawntennisandcroquetclub",
    "posts": 289,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Crystal Palace National Sports Centre",
    "category": "Entertainment",
    "hashtag": "crystalpalacenationalsportscentre",
    "posts": 259,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Queen Elizabeth's Hunting Lodge",
    "category": "Entertainment",
    "hashtag": "queenelizabethshuntinglodge",
    "posts": 47,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];
var foodData = [{
    "name": "Sketch London",
    "category": "Food & Dining",
    "hashtag": "sketchlondon",
    "posts": 43775,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Aqua Shard",
    "category": "Food & Dining",
    "hashtag": "aquashard",
    "posts": 37347,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hawksmoor",
    "category": "Food & Dining",
    "hashtag": "hawksmoor",
    "posts": 36367,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Cereal Killer Cafe",
    "category": "Food & Dining",
    "hashtag": "cerealkillercafe",
    "posts": 23544,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Petersham Nurseries",
    "category": "Food & Dining",
    "hashtag": "petershamnurseries",
    "posts": 23052,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Bob Bob Ricard",
    "category": "Food & Dining",
    "hashtag": "bobbobricard",
    "posts": 20840,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Ace Cafe London",
    "category": "Food & Dining",
    "hashtag": "acecafelondon",
    "posts": 19708,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Berners Tavern",
    "category": "Food & Dining",
    "hashtag": "bernerstavern",
    "posts": 16881,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Wolseley",
    "category": "Food & Dining",
    "hashtag": "thewolseley",
    "posts": 12463,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Tom's Kitchen",
    "category": "Food & Dining",
    "hashtag": "tomskitchen",
    "posts": 10456,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Churchill Arms",
    "category": "Food & Dining",
    "hashtag": "churchillarms",
    "posts": 10390,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sushi Samba",
    "category": "Food & Dining",
    "hashtag": "sushisambalondon",
    "posts": 8202,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Dinner by Heston Blumenthal",
    "category": "Food & Dining",
    "hashtag": "dinnerbyhestonblumenthal",
    "posts": 7448,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "German Gymnasium",
    "category": "Food & Dining",
    "hashtag": "germangymnasium",
    "posts": 7422,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Galvin at Windows",
    "category": "Food & Dining",
    "hashtag": "galvinatwindows",
    "posts": 7361,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Dandelyan",
    "category": "Food & Dining",
    "hashtag": "dandelyan",
    "posts": 6398,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Pollen Street Social",
    "category": "Food & Dining",
    "hashtag": "pollenstreetsocial",
    "posts": 5773,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Regency Caf�",
    "category": "Food & Dining",
    "hashtag": "regencycafe",
    "posts": 2584,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Union Street Caf�",
    "category": "Food & Dining",
    "hashtag": "unionstreetcafe",
    "posts": 2460,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Madison London",
    "category": "Food & Dining",
    "hashtag": "madisonlondon",
    "posts": 2148,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Chez Bruce",
    "category": "Food & Dining",
    "hashtag": "chezbruce",
    "posts": 2109,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Restaurant Gordon Ramsay",
    "category": "Food & Dining",
    "hashtag": "restaurantgordonramsay",
    "posts": 1961,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Bleecker",
    "category": "Food & Dining",
    "hashtag": "bleeckerburger",
    "posts": 1780,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Tokyo Diner",
    "category": "Food & Dining",
    "hashtag": "tokyodiner",
    "posts": 1768,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Prospect of Whitby",
    "category": "Food & Dining",
    "hashtag": "prospectofwhitby",
    "posts": 1557,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Veeraswamy",
    "category": "Food & Dining",
    "hashtag": "veeraswamy",
    "posts": 1403,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wong Kei",
    "category": "Food & Dining",
    "hashtag": "wongkei",
    "posts": 1356,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hakkasan London",
    "category": "Food & Dining",
    "hashtag": "hakkasanlondon",
    "posts": 1269,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Locanda Locatelli",
    "category": "Food & Dining",
    "hashtag": "locandalocatelli",
    "posts": 1218,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Club Gascon",
    "category": "Food & Dining",
    "hashtag": "clubgascon",
    "posts": 1213,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Mandarin Oriental Hyde Park",
    "category": "Food & Dining",
    "hashtag": "mandarinorientalhydepark",
    "posts": 1040,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Alain Ducasse at the Dorchester",
    "category": "Food & Dining",
    "hashtag": "alainducasseatthedorchester",
    "posts": 1019,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Yauatcha",
    "category": "Food & Dining",
    "hashtag": "yauatchalondon",
    "posts": 1007,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "La Trompette",
    "category": "Food & Dining",
    "hashtag": "latrompette",
    "posts": 968,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Simpson's-in-the-Strand",
    "category": "Food & Dining",
    "hashtag": "simpsonsinthestrand",
    "posts": 915,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Breakfast Club",
    "category": "Food & Dining",
    "hashtag": "thebreakfastclublondon",
    "posts": 889,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "L'Autre Pied",
    "category": "Food & Dining",
    "hashtag": "lautrepied",
    "posts": 858,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Farmacy",
    "category": "Food & Dining",
    "hashtag": "farmacyuk",
    "posts": 855,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Kai Mayfair",
    "category": "Food & Dining",
    "hashtag": "kaimayfair",
    "posts": 838,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Tower Restaurant",
    "category": "Food & Dining",
    "hashtag": "towerrestaurant",
    "posts": 819,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];
var gemsData = [{
    "name": "Pop Brixton",
    "category": "Hidden Gem",
    "hashtag": "popbrixton",
    "posts": 27514,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "name": "Eltham Palace",
    "category": "Hidden Gem",
    "hashtag": "elthampalace",
    "posts": 9259,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Thames Barrier",
    "category": "Hidden Gem",
    "hashtag": "thamesbarrier",
    "posts": 9051,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Little Nan's Bar",
    "category": "Hidden Gem",
    "hashtag": "littlenansbar",
    "posts": 8570,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Osterley Park",
    "category": "Hidden Gem",
    "hashtag": "osterleypark",
    "posts": 7756,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Palm Vaults",
    "category": "Hidden Gem",
    "hashtag": "palmvaults",
    "posts": 6926,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Fashion and Textile Museum",
    "category": "Hidden Gem",
    "hashtag": "fashionandtextilemuseum",
    "posts": 6278,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Chelsea Physic Garden",
    "category": "Hidden Gem",
    "hashtag": "chelseaphysicgarden",
    "posts": 5684,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Churchill War Rooms",
    "category": "Hidden Gem",
    "hashtag": "churchillwarrooms",
    "posts": 4777,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Royal Mews",
    "category": "Hidden Gem",
    "hashtag": "royalmews",
    "posts": 3364,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Walpole Park",
    "category": "Hidden Gem",
    "hashtag": "walpolepark",
    "posts": 3339,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Fenton House",
    "category": "Hidden Gem",
    "hashtag": "fentonhouse",
    "posts": 2771,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Two Temple Place",
    "category": "Hidden Gem",
    "hashtag": "twotempleplace",
    "posts": 2034,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sutton House",
    "category": "Hidden Gem",
    "hashtag": "suttonhouse",
    "posts": 1899,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Charlton Park",
    "category": "Hidden Gem",
    "hashtag": "charltonpark",
    "posts": 1752,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Victoria Tower Gardens",
    "category": "Hidden Gem",
    "hashtag": "victoriatowergardens",
    "posts": 1599,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Keats House",
    "category": "Hidden Gem",
    "hashtag": "keatshouse",
    "posts": 1530,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Cartoon Museum",
    "category": "Hidden Gem",
    "hashtag": "cartoonmuseum",
    "posts": 1477,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Oak Hill Park",
    "category": "Hidden Gem",
    "hashtag": "oakhillpark",
    "posts": 1351,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Marble Hill House",
    "category": "Hidden Gem",
    "hashtag": "marblehillhouse",
    "posts": 1063,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Pollock's Toy Museum",
    "category": "Hidden Gem",
    "hashtag": "pollockstoymuseum",
    "posts": 1026,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Ham Common",
    "category": "Hidden Gem",
    "hashtag": "hamcommon",
    "posts": 1014,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Museum of London Docklands",
    "category": "Hidden Gem",
    "hashtag": "museumoflondondocklands",
    "posts": 957,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Deptford Creek",
    "category": "Hidden Gem",
    "hashtag": "deptfordcreek",
    "posts": 851,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Chiswick Fire Station",
    "category": "Hidden Gem",
    "hashtag": "chiswickfirestation",
    "posts": 727,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Evans & Peels Detective Agency",
    "category": "Hidden Gem",
    "hashtag": "evansandpeeldetectiveagency",
    "posts": 627,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sydenham Hill Wood",
    "category": "Hidden Gem",
    "hashtag": "sydenhamhillwood",
    "posts": 505,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Jack the Ripper Museum",
    "category": "Hidden Gem",
    "hashtag": "jacktherippermuseum",
    "posts": 459,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Jewel Tower",
    "category": "Hidden Gem",
    "hashtag": "jeweltower",
    "posts": 447,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Bank of England Museum",
    "category": "Hidden Gem",
    "hashtag": "bankofenglandmuseum",
    "posts": 435,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wapping Hydraulic Power Station",
    "category": "Hidden Gem",
    "hashtag": "wappinghydraulicpowerstation",
    "posts": 324,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Vestry House Museum",
    "category": "Hidden Gem",
    "hashtag": "vestryhousemuseum",
    "posts": 320,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Cherry Tree Wood",
    "category": "Hidden Gem",
    "hashtag": "cherrytreewood",
    "posts": 304,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Addington Hills",
    "category": "Hidden Gem",
    "hashtag": "addingtonhills",
    "posts": 273,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Betts Park",
    "category": "Hidden Gem",
    "hashtag": "bettspark",
    "posts": 265,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Crossness Pumping Station",
    "category": "Hidden Gem",
    "hashtag": "crossnesspumpingstation",
    "posts": 241,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Town of Ramsgate",
    "category": "Hidden Gem",
    "hashtag": "townoframsgate",
    "posts": 192,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Upminster Windmill",
    "category": "Hidden Gem",
    "hashtag": "upminsterwindmill",
    "posts": 114,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Gay Hussar",
    "category": "Hidden Gem",
    "hashtag": "thegayhussar",
    "posts": 64,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Casa Tua Camden",
    "category": "Hidden Gem",
    "hashtag": "casatuacamden",
    "posts": 55,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];
var landmarksData = [{
    "name": "Big Ben",
    "category": "Landmark",
    "hashtag": "bigben",
    "posts": 2803311,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Eye",
    "category": "Landmark",
    "hashtag": "londoneye",
    "posts": 2349774,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Tower Bridge",
    "category": "Landmark",
    "hashtag": "towerbridge",
    "posts": 1552808,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Southbank",
    "category": "Landmark",
    "hashtag": "southbank",
    "posts": 1075220,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Covent Garden",
    "category": "Landmark",
    "hashtag": "coventgarden",
    "posts": 911862,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Buckingham Palace",
    "category": "Landmark",
    "hashtag": "buckinghampalace",
    "posts": 765746,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Brick Lane",
    "category": "Landmark",
    "hashtag": "bricklane",
    "posts": 756378,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Bridge",
    "category": "Landmark",
    "hashtag": "londonbridge",
    "posts": 739165,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Oxford Street",
    "category": "Landmark",
    "hashtag": "oxfordstreet",
    "posts": 630004,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Shard",
    "category": "Landmark",
    "hashtag": "theshard",
    "posts": 561303,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Trafalgar Square",
    "category": "Landmark",
    "hashtag": "trafalgarsquare",
    "posts": 425381,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Tower of London",
    "category": "Landmark",
    "hashtag": "toweroflondon",
    "posts": 399054,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Piccadilly",
    "category": "Landmark",
    "hashtag": "piccadilly",
    "posts": 324368,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Underground",
    "category": "Landmark",
    "hashtag": "londonunderground",
    "posts": 300667,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Piccadilly Circus",
    "category": "Landmark",
    "hashtag": "piccadillycircus",
    "posts": 240288,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "St Paul's Cathedral",
    "category": "Landmark",
    "hashtag": "stpaulscathedral",
    "posts": 236293,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Leicester Square",
    "category": "Landmark",
    "hashtag": "leicestersquare",
    "posts": 184991,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Westminster Abbey",
    "category": "Landmark",
    "hashtag": "westminsterabbey",
    "posts": 179088,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Lombard Street",
    "category": "Landmark",
    "hashtag": "lombardstreet",
    "posts": 178843,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Mall",
    "category": "Landmark",
    "hashtag": "themall",
    "posts": 174931,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Oxford Circus",
    "category": "Landmark",
    "hashtag": "oxfordcircus",
    "posts": 162226,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Park Lane",
    "category": "Landmark",
    "hashtag": "parklane",
    "posts": 124264,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Alexandra Palace",
    "category": "Landmark",
    "hashtag": "alexandrapalace",
    "posts": 105016,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Heathrow Airport",
    "category": "Landmark",
    "hashtag": "heathrowairport",
    "posts": 103089,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Westminster Bridge",
    "category": "Landmark",
    "hashtag": "westminsterbridge",
    "posts": 95407,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hampton Court Palace",
    "category": "Landmark",
    "hashtag": "hamptoncourtpalace",
    "posts": 79377,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Mansion House",
    "category": "Landmark",
    "hashtag": "mansionhouse",
    "posts": 74244,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Haymarket",
    "category": "Landmark",
    "hashtag": "haymarket",
    "posts": 73479,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Whitehall",
    "category": "Landmark",
    "hashtag": "whitehall",
    "posts": 71714,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "King's Cross station",
    "category": "Landmark",
    "hashtag": "kingscrossstation",
    "posts": 62503,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sloane Square",
    "category": "Landmark",
    "hashtag": "sloanesquare",
    "posts": 60473,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Marble Arch",
    "category": "Landmark",
    "hashtag": "marblearch",
    "posts": 54532,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Guildhall",
    "category": "Landmark",
    "hashtag": "guildhall",
    "posts": 50532,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Heron Tower",
    "category": "Landmark",
    "hashtag": "herontower",
    "posts": 48338,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Oxo Tower",
    "category": "Landmark",
    "hashtag": "oxotower",
    "posts": 44556,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Battersea Power Station",
    "category": "Landmark",
    "hashtag": "batterseapowerstation",
    "posts": 41381,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Waterloo Bridge",
    "category": "Landmark",
    "hashtag": "waterloobridge",
    "posts": 39685,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "HMS Belfast",
    "category": "Landmark",
    "hashtag": "hmsbelfast",
    "posts": 38398,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Palace of Westminster",
    "category": "Landmark",
    "hashtag": "palaceofwestminster",
    "posts": 35484,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "BT Tower",
    "category": "Landmark",
    "hashtag": "bttower",
    "posts": 33308,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];
var parksData = [{
    "name": "Hyde Park",
    "category": "Parks & Greenspaces",
    "hashtag": "hydepark",
    "posts": 1629302,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 10
  },
  {
    "name": "Kew Gardens",
    "category": "Parks & Greenspaces",
    "hashtag": "kewgardens",
    "posts": 324671,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Regent's Park",
    "category": "Parks & Greenspaces",
    "hashtag": "regentspark",
    "posts": 276222,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Victoria Park",
    "category": "Parks & Greenspaces",
    "hashtag": "victoriapark",
    "posts": 270544,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Richmond Park",
    "category": "Parks & Greenspaces",
    "hashtag": "richmondpark",
    "posts": 223279,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Green Park",
    "category": "Parks & Greenspaces",
    "hashtag": "greenpark",
    "posts": 217576,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Primrose Hill",
    "category": "Parks & Greenspaces",
    "hashtag": "primrosehill",
    "posts": 168262,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hampstead Heath",
    "category": "Parks & Greenspaces",
    "hashtag": "hampsteadheath",
    "posts": 160389,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Holland Park",
    "category": "Parks & Greenspaces",
    "hashtag": "hollandpark",
    "posts": 129818,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Finsbury Park",
    "category": "Parks & Greenspaces",
    "hashtag": "finsburypark",
    "posts": 104859,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Kensington Gardens",
    "category": "Parks & Greenspaces",
    "hashtag": "kensingtongardens",
    "posts": 108709,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },

  {
    "name": "Blackheath",
    "category": "Parks & Greenspaces",
    "hashtag": "blackheath",
    "posts": 100675,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Queen's Park",
    "category": "Parks & Greenspaces",
    "hashtag": "queenspark",
    "posts": 99379,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Battersea Park",
    "category": "Parks & Greenspaces",
    "hashtag": "batterseapark",
    "posts": 97491,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Greenwich Park",
    "category": "Parks & Greenspaces",
    "hashtag": "greenwichpark",
    "posts": 95775,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "London Fields",
    "category": "Parks & Greenspaces",
    "hashtag": "londonfields",
    "posts": 91162,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Clapham Common",
    "category": "Parks & Greenspaces",
    "hashtag": "claphamcommon",
    "posts": 87041,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Memorial Park",
    "category": "Parks & Greenspaces",
    "hashtag": "memorialpark",
    "posts": 71971,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Bushy Park",
    "category": "Parks & Greenspaces",
    "hashtag": "bushypark",
    "posts": 66910,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Epping Forest",
    "category": "Parks & Greenspaces",
    "hashtag": "eppingforest",
    "posts": 47995,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Paradise Park",
    "category": "Parks & Greenspaces",
    "hashtag": "paradisepark",
    "posts": 37228,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Brockwell Park",
    "category": "Parks & Greenspaces",
    "hashtag": "brockwellpark",
    "posts": 33392,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Parsons Green",
    "category": "Parks & Greenspaces",
    "hashtag": "parsonsgreen",
    "posts": 32657,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wimbledon Common",
    "category": "Parks & Greenspaces",
    "hashtag": "wimbledoncommon",
    "posts": 23618,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Clissold Park",
    "category": "Parks & Greenspaces",
    "hashtag": "clissoldpark",
    "posts": 23304,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Grand Union Canal",
    "category": "Parks & Greenspaces",
    "hashtag": "grandunioncanal",
    "posts": 22587,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Highgate Cemetery",
    "category": "Parks & Greenspaces",
    "hashtag": "highgatecemetery",
    "posts": 19847,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Crystal Palace Park",
    "category": "Parks & Greenspaces",
    "hashtag": "crystalpalacepark",
    "posts": 19000,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Russell Square",
    "category": "Parks & Greenspaces",
    "hashtag": "russellsquare",
    "posts": 18998,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hylands Park",
    "category": "Parks & Greenspaces",
    "hashtag": "hylandspark",
    "posts": 15327,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Manor Park",
    "category": "Parks & Greenspaces",
    "hashtag": "manorpark",
    "posts": 15048,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Oaks Park",
    "category": "Parks & Greenspaces",
    "hashtag": "oakspark",
    "posts": 14402,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wandsworth Common",
    "category": "Parks & Greenspaces",
    "hashtag": "wandsworthcommon",
    "posts": 14206,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Castle Wood",
    "category": "Parks & Greenspaces",
    "hashtag": "castlewood",
    "posts": 13861,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Newington Green",
    "category": "Parks & Greenspaces",
    "hashtag": "newingtongreen",
    "posts": 13196,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Trent Park",
    "category": "Parks & Greenspaces",
    "hashtag": "trentpark",
    "posts": 12330,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Grove Park",
    "category": "Parks & Greenspaces",
    "hashtag": "grovepark",
    "posts": 11823,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wimbledon Park",
    "category": "Parks & Greenspaces",
    "hashtag": "wimbledonpark",
    "posts": 11070,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hackney Marshes",
    "category": "Parks & Greenspaces",
    "hashtag": "hackneymarshes",
    "posts": 10919,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Dulwich Park",
    "category": "Parks & Greenspaces",
    "hashtag": "dulwichpark",
    "posts": 9999,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];
var shoppingData = [{
    "name": "Harrods",
    "category": "Shopping",
    "hashtag": "harrods",
    "posts": 1228917,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 1
  },
  {
    "name": "Selfridges",
    "category": "Shopping",
    "hashtag": "selfridges",
    "posts": 502608,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Borough Market",
    "category": "Shopping",
    "hashtag": "boroughmarket",
    "posts": 327713,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Baker Street",
    "category": "Shopping",
    "hashtag": "bakerstreet",
    "posts": 266474,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Regent Street",
    "category": "Shopping",
    "hashtag": "regentstreet",
    "posts": 243750,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Carnaby Street",
    "category": "Shopping",
    "hashtag": "carnabystreet",
    "posts": 233218,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Portobello Road",
    "category": "Shopping",
    "hashtag": "portobelloroad",
    "posts": 199856,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hamleys",
    "category": "Shopping",
    "hashtag": "hamleys",
    "posts": 150887,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Bond Street",
    "category": "Shopping",
    "hashtag": "bondstreet",
    "posts": 136827,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Liberty London",
    "category": "Shopping",
    "hashtag": "libertylondon",
    "posts": 133632,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Fortnum and Mason",
    "category": "Shopping",
    "hashtag": "fortnumandmason",
    "posts": 126512,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "King's Road",
    "category": "Shopping",
    "hashtag": "kingsroad",
    "posts": 122040,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Sloane Street",
    "category": "Shopping",
    "hashtag": "sloanestreet",
    "posts": 74127,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 1
  },
  {
    "name": "Cyber Dog",
    "category": "Shopping",
    "hashtag": "cyberdog",
    "posts": 46432,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Columbia Road Flower Market",
    "category": "Shopping",
    "hashtag": "columbiaroadflowermarket",
    "posts": 37639,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Spitalfields Market",
    "category": "Shopping",
    "hashtag": "spitalfieldsmarket",
    "posts": 35261,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Greenwich Market",
    "category": "Shopping",
    "hashtag": "greenwichmarket",
    "posts": 29053,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "God's Own Junk Yard",
    "category": "Shopping",
    "hashtag": "godsownjunkyard",
    "posts": 27933,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Leadenhall Market",
    "category": "Shopping",
    "hashtag": "leadenhallmarket",
    "posts": 25552,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Aspinal of London",
    "category": "Shopping",
    "hashtag": "aspinaloflondon",
    "posts": 18876,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Burlington Arcade",
    "category": "Shopping",
    "hashtag": "burlingtonarcade",
    "posts": 15484,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "One New Change",
    "category": "Shopping",
    "hashtag": "onenewchange",
    "posts": 14860,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Brent Cross",
    "category": "Shopping",
    "hashtag": "brentcross",
    "posts": 14232,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Westfield London",
    "category": "Shopping",
    "hashtag": "westfieldlondon",
    "posts": 13514,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Stables Market",
    "category": "Shopping",
    "hashtag": "stablesmarket",
    "posts": 12357,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Peter Jones",
    "category": "Shopping",
    "hashtag": "peterjones",
    "posts": 7049,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Cheapside",
    "category": "Shopping",
    "hashtag": "cheapside",
    "posts": 6720,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Kensington High Street",
    "category": "Shopping",
    "hashtag": "kensingtonhighstreet",
    "posts": 5940,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Smithfield Market",
    "category": "Shopping",
    "hashtag": "smithfieldmarket",
    "posts": 5767,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Westfield Stratford City",
    "category": "Shopping",
    "hashtag": "westfieldstratfordcity",
    "posts": 2985,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Chelsea Harbour Designer Centre",
    "category": "Shopping",
    "hashtag": "chelseaharbourdesigncentre",
    "posts": 2200,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Hackney Walk",
    "category": "Shopping",
    "hashtag": "hackneywalk",
    "posts": 1858,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Notting Hill Market",
    "category": "Shopping",
    "hashtag": "nottinghillmarket",
    "posts": 1426,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Goodhood Store",
    "category": "Shopping",
    "hashtag": "goodhoodstore",
    "posts": 908,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Wembley Designer Outlet",
    "category": "Shopping",
    "hashtag": "wembleyoutlet",
    "posts": 790,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Choccywoccydoodah",
    "category": "Shopping",
    "hashtag": "choccywoccydoodahlondon",
    "posts": 687,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Petticoat Lane Market",
    "category": "Shopping",
    "hashtag": "petticoatlanemarket",
    "posts": 662,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Conran Shop",
    "category": "Shopping",
    "hashtag": "theconranshoplondon",
    "posts": 523,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "Savile Row",
    "category": "Shopping",
    "hashtag": "savilerowlondon",
    "posts": 168,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  },
  {
    "name": "The Mall Wood Green",
    "category": "Shopping",
    "hashtag": "themallwoodgreen",
    "posts": 105,
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/images/place-holder-img.png",
    "copy": "Cupcake ipsum dolor. Sit amet jelly cupcake muffin. Cake candy muffin jelly beans sweet.",
    "hotness": 5
  }
];


/* MARKERS LOCATIONS ARRAYS */
var activeMarkers = [];

var artsMarkersLocation = [{
    "lat": 51.50759530000001,
    "lng": -0.09935640000003332
  },
  {
    "lat": 51.49671499999999,
    "lng": -0.17636719999995876
  },
  {
    "lat": 51.5194133,
    "lng": -0.12695659999997133
  },
  {
    "lat": 51.5009088,
    "lng": -0.17736600000000635
  },
  {
    "lat": 51.511059,
    "lng": -0.11714800000004288
  },
  {
    "lat": 51.4906972,
    "lng": -0.15871649999996862
  },
  {
    "lat": 51.50583719999999,
    "lng": -0.18772390000003725
  },
  {
    "lat": 51.4966392,
    "lng": -0.17218000000002576
  },
  {
    "lat": 51.4910621,
    "lng": -0.12778860000003078
  },
  {
    "lat": 51.4998973,
    "lng": -0.20024399999999787
  },
  {
    "lat": 51.50699299999999,
    "lng": -0.11422970000000987
  },
  {
    "lat": 51.5094236,
    "lng": -0.12812159999998585
  },
  {
    "lat": 51.5129211,
    "lng": -0.12219759999993585
  },
  {
    "lat": 51.5200574,
    "lng": -0.09379460000002382
  },
  {
    "lat": 51.51492709999999,
    "lng": -0.1390605000000278
  },
  {
    "lat": 51.5094426,
    "lng": -0.1398685999999998
  },
  {
    "lat": 51.5299717,
    "lng": -0.12767589999998563
  },
  {
    "lat": 51.49583080000001,
    "lng": -0.10866150000003927
  },
  {
    "lat": 51.506579,
    "lng": -0.08138899999994464
  },
  {
    "lat": 51.4908397,
    "lng": -0.22450389999994513
  },
  {
    "lat": 51.50580619999999,
    "lng": -0.11662879999994402
  },
  {
    "lat": 51.5194133,
    "lng": -0.12695659999997133
  },
  {
    "lat": 51.5128536,
    "lng": -0.12037150000003294
  },
  {
    "lat": 51.5115961,
    "lng": -0.11998719999996865
  },
  {
    "lat": 51.5176183,
    "lng": -0.09677820000001702
  },
  {
    "lat": 51.508076,
    "lng": -0.09719399999994494
  },
  {
    "lat": 51.50608099999999,
    "lng": -0.11630400000001373
  },
  {
    "lat": 51.525851,
    "lng": -0.13394500000003973
  },
  {
    "lat": 51.54329610000001,
    "lng": -0.016551700000036362
  },
  {
    "lat": 51.5145329,
    "lng": -0.1404790999999932
  },
  {
    "lat": 51.5160375,
    "lng": -0.07009440000001632
  },
  {
    "lat": 51.5174543,
    "lng": -0.15302199999996446
  },
  {
    "lat": 51.441035,
    "lng": -0.06100900000001275
  },
  {
    "lat": 51.5136208,
    "lng": -0.08713979999993171
  },
  {
    "lat": 51.50205949999999,
    "lng": -0.10931249999998727
  },
  {
    "lat": 51.523767,
    "lng": -0.15855569999996533
  },
  {
    "lat": 51.4810945,
    "lng": -0.0037413999999671432
  },
  {
    "lat": 51.480875,
    "lng": -0.005288999999947919
  },
  {
    "lat": 51.50978199999999,
    "lng": -0.1268039999999928
  },
  {
    "lat": 51.5118912,
    "lng": -0.1215717999999697
  }
];
var entertainmentMarkersLocation = [{
    "lat": 51.481663,
    "lng": -0.19095649999997022
  },
  {
    "lat": 51.503038,
    "lng": 0.0031543000000056054
  },
  {
    "lat": 51.5560208,
    "lng": -0.2795188000000053
  },
  {
    "lat": 51.5352875,
    "lng": -0.15343029999996816
  },
  {
    "lat": 51.4977004,
    "lng": -0.09949119999998857
  },
  {
    "lat": 51.5548885,
    "lng": -0.10843799999997827
  },
  {
    "lat": 51.4656337,
    "lng": -0.1149728000000323
  },
  {
    "lat": 51.6032123,
    "lng": -0.06573890000004212
  },
  {
    "lat": 51.558096,
    "lng": -0.28258600000003753
  },
  {
    "lat": 51.4559357,
    "lng": -0.3415158000000247
  },
  {
    "lat": 51.4837512,
    "lng": -0.1149112000000514
  },
  {
    "lat": 51.5387095,
    "lng": -0.016603700000018762
  },
  {
    "lat": 51.5230457,
    "lng": -0.15434529999993174
  },
  {
    "lat": 51.5048871,
    "lng": -0.12703639999995175
  },
  {
    "lat": 51.3982531,
    "lng": -0.08548670000004677
  },
  {
    "lat": 51.4987967,
    "lng": -0.14325250000001688
  },
  {
    "lat": 51.3750236,
    "lng": -0.09377150000000256
  },
  {
    "lat": 51.50251189999999,
    "lng": -0.11876280000001316
  },
  {
    "lat": 51.5384281,
    "lng": -0.012901400000032481
  },
  {
    "lat": 51.5092767,
    "lng": -0.2321123000000398
  },
  {
    "lat": 51.520003,
    "lng": -0.09316209999997227
  },
  {
    "lat": 51.52983099999999,
    "lng": -0.17215639999994892
  },
  {
    "lat": 51.5015554,
    "lng": -0.11950409999997191
  },
  {
    "lat": 51.521666,
    "lng": -0.18190720000006877
  },
  {
    "lat": 51.5069228,
    "lng": -0.11643909999997959
  },
  {
    "lat": 51.51067150000001,
    "lng": -0.13128870000002735
  },
  {
    "lat": 51.507696,
    "lng": 0.017962000000011358
  },
  {
    "lat": 51.50802119999999,
    "lng": -0.12237849999996797
  },
  {
    "lat": 51.4930718,
    "lng": -0.14641280000000734
  },
  {
    "lat": 51.50736,
    "lng": -0.1210959999999659
  },
  {
    "lat": 51.6904131,
    "lng": -0.4175800000000436
  },
  {
    "lat": 51.470652,
    "lng": -0.06828300000006493
  },
  {
    "lat": 51.4973816,
    "lng": -0.17428330000007008
  },
  {
    "lat": 51.501575,
    "lng": -0.11953229999994619
  },
  {
    "lat": 51.489536,
    "lng": -0.34549200000003566
  },
  {
    "lat": 51.501706,
    "lng": -0.12325999999995929
  },
  {
    "lat": 51.5326837,
    "lng": -0.10736999999994623
  },
  {
    "lat": 51.4342911,
    "lng": -0.21448829999997088
  },
  {
    "lat": 51.4210481,
    "lng": -0.06730900000002293
  },
  {
    "lat": 51.6344536,
    "lng": 0.017572800000039024
  }
];
var foodMarkersLocation = [{
    "lat": 51.512693,
    "lng": -0.14152899999999136
  },
  {
    "lat": 51.50451870000001,
    "lng": -0.0867064000000255
  },
  {
    "lat": 51.5097213,
    "lng": -0.13616239999998925
  },
  {
    "lat": 51.5237469,
    "lng": -0.07133909999993193
  },
  {
    "lat": 51.4471997,
    "lng": -0.30243240000004334
  },
  {
    "lat": 51.5123587,
    "lng": -0.13725859999999557
  },
  {
    "lat": 51.54127940000001,
    "lng": -0.27776619999997365
  },
  {
    "lat": 51.5166544,
    "lng": -0.13610449999998764
  },
  {
    "lat": 51.50740949999999,
    "lng": -0.14092030000006162
  },
  {
    "lat": 51.4904425,
    "lng": -0.16807040000003326
  },
  {
    "lat": 51.50693,
    "lng": -0.19479200000000674
  },
  {
    "lat": 51.5161743,
    "lng": -0.08094019999998636
  },
  {
    "lat": 51.502161,
    "lng": -0.15996399999994537
  },
  {
    "lat": 51.53234819999999,
    "lng": -0.1253749999999627
  },
  {
    "lat": 51.505555,
    "lng": -0.15014300000007097
  },
  {
    "lat": 51.50854709999999,
    "lng": -0.10682599999995546
  },
  {
    "lat": 51.5133756,
    "lng": -0.14232370000001993
  },
  {
    "lat": 51.4939939,
    "lng": -0.13222350000000915
  },
  {
    "lat": 51.5035938,
    "lng": -0.10123899999996411
  },
  {
    "lat": 51.513618,
    "lng": -0.09541000000001532
  },
  {
    "lat": 51.4460109,
    "lng": -0.165649099999996
  },
  {
    "lat": 51.48543249999999,
    "lng": -0.16213749999997162
  },
  {
    "lat": 51.4965056,
    "lng": -0.14465470000004643
  },
  {
    "lat": 51.51182000000001,
    "lng": -0.12931400000002213
  },
  {
    "lat": 51.5071233,
    "lng": -0.05116309999993973
  },
  {
    "lat": 51.5100071,
    "lng": -0.13786719999995967
  },
  {
    "lat": 51.51146689999999,
    "lng": -0.13228010000000268
  },
  {
    "lat": 51.5102647,
    "lng": -0.1450005000000374
  },
  {
    "lat": 51.5151228,
    "lng": -0.15728660000002037
  },
  {
    "lat": 51.5186292,
    "lng": -0.10023639999997158
  },
  {
    "lat": 51.5021402,
    "lng": -0.16004109999994398
  },
  {
    "lat": 51.5072938,
    "lng": -0.1523412000000235
  },
  {
    "lat": 51.513663,
    "lng": -0.1352719999999863
  },
  {
    "lat": 51.4919007,
    "lng": -0.2560148999999683
  },
  {
    "lat": 51.510551,
    "lng": -0.1205649999999423
  },
  {
    "lat": 51.3747687,
    "lng": -0.09387930000002598
  },
  {
    "lat": 51.5182248,
    "lng": -0.15207780000002913
  },
  {
    "lat": 51.5154097,
    "lng": -0.1928439000000708
  },
  {
    "lat": 51.5087515,
    "lng": -0.1515718000000561
  },
  {
    "lat": 51.508347,
    "lng": -0.10827800000004117
  }
];
var gemsMarkersLocation = [{
    "lat": 51.4633416,
    "lng": -0.11234160000003612
  },
  {
    "lat": 51.4470483,
    "lng": 0.04843500000004042
  },
  {
    "lat": 51.4949853,
    "lng": 0.037274799999977404
  },
  {
    "lat": 51.47873990000001,
    "lng": -0.027119500000026164
  },
  {
    "lat": 51.489536,
    "lng": -0.34549200000003566
  },
  {
    "lat": 51.5492229,
    "lng": -0.05526910000003227
  },
  {
    "lat": 51.5011298,
    "lng": -0.08191409999994903
  },
  {
    "lat": 51.484447,
    "lng": -0.1623500000000604
  },
  {
    "lat": 51.5020865,
    "lng": -0.1287296000000424
  },
  {
    "lat": 51.4987662,
    "lng": -0.14448779999997896
  },
  {
    "lat": 51.5086871,
    "lng": -0.30956960000003164
  },
  {
    "lat": 51.5588874,
    "lng": -0.17961370000000443
  },
  {
    "lat": 51.51163529999999,
    "lng": -0.11224289999995563
  },
  {
    "lat": 51.548482,
    "lng": -0.05042389999994157
  },
  {
    "lat": 51.480185,
    "lng": 0.043220099999984996
  },
  {
    "lat": 51.4969444,
    "lng": -0.125
  },
  {
    "lat": 51.5555762,
    "lng": -0.16794100000004164
  },
  {
    "lat": 51.517661,
    "lng": -0.12596699999994598
  },
  {
    "lat": 51.6384262,
    "lng": -0.15513659999999163
  },
  {
    "lat": 51.44949219999999,
    "lng": -0.31328499999995074
  },
  {
    "lat": 51.5203078,
    "lng": -0.13524210000002768
  },
  {
    "lat": 51.4351502,
    "lng": -0.3072839000000158
  },
  {
    "lat": 51.5075283,
    "lng": -0.023845899999969333
  },
  {
    "lat": 51.4792064,
    "lng": -0.018856700000014825
  },
  {
    "lat": 51.4923005,
    "lng": -0.25746240000000853
  },
  {
    "lat": 51.4900556,
    "lng": -0.19111910000003718
  },
  {
    "lat": 51.4351627,
    "lng": -0.06685360000005858
  },
  {
    "lat": 51.5107921,
    "lng": -0.06793270000002849
  },
  {
    "lat": 51.4984536,
    "lng": -0.12639079999996738
  },
  {
    "lat": 51.514135,
    "lng": -0.08763699999997243
  },
  {
    "lat": 51.5073586,
    "lng": -0.05160739999996622
  },
  {
    "lat": 51.5840176,
    "lng": -0.012752399999953923
  },
  {
    "lat": 51.586064,
    "lng": -0.15957430000003114
  },
  {
    "lat": 51.3640442,
    "lng": -0.05690960000003997
  },
  {
    "lat": 51.408824,
    "lng": -0.06453690000000734
  },
  {
    "lat": 51.508863,
    "lng": 0.1381820000000289
  },
  {
    "lat": 51.50345009999999,
    "lng": -0.06198399999993853
  },
  {
    "lat": 51.5578177,
    "lng": 0.2448259999999891
  },
  {
    "lat": 51.5148501,
    "lng": -0.13130960000000869
  },
  {
    "lat": 51.5416167,
    "lng": -0.13800560000004225
  }
];
var landmarksMarkersLocation = [{
    "lat": 51.50072919999999,
    "lng": -0.12462540000001354
  },
  {
    "lat": 51.503324,
    "lng": -0.1195430000000215
  },
  {
    "lat": 51.5054564,
    "lng": -0.07535649999999805
  },
  {
    "lat": 51.5071591,
    "lng": -0.11548579999998765
  },
  {
    "lat": 51.5117797,
    "lng": -0.12319109999998545
  },
  {
    "lat": 51.501364,
    "lng": -0.1418899999999894
  },
  {
    "lat": 51.52200120000001,
    "lng": -0.0716827999999623
  },
  {
    "lat": 51.3613472,
    "lng": -0.14752980000002935
  },
  {
    "lat": 51.5045,
    "lng": -0.08650000000000091
  },
  {
    "lat": 51.508039,
    "lng": -0.12806899999998222
  },
  {
    "lat": 51.5078788,
    "lng": -0.08773210000003928
  },
  {
    "lat": 51.50811239999999,
    "lng": -0.07594930000004751
  },
  {
    "lat": 51.5087668,
    "lng": -0.13820780000003197
  },
  {
    "lat": 51.4181008,
    "lng": -0.17803140000000894
  },
  {
    "lat": 51.5100913,
    "lng": -0.13456759999996848
  },
  {
    "lat": 51.5138453,
    "lng": -0.0983506000000034
  },
  {
    "lat": 51.3826623,
    "lng": -0.08459800000002815
  },
  {
    "lat": 51.4992921,
    "lng": -0.12730970000006891
  },
  {
    "lat": 51.4092537,
    "lng": -0.18991729999993368
  },
  {
    "lat": 51.50464849999999,
    "lng": -0.13387309999995978
  },
  {
    "lat": 51.3613472,
    "lng": -0.14752980000002935
  },
  {
    "lat": 51.3707524,
    "lng": -0.09629900000004454
  },
  {
    "lat": 51.5941783,
    "lng": -0.1307732999999871
  },
  {
    "lat": 51.4700223,
    "lng": -0.4542954999999438
  },
  {
    "lat": 51.5008638,
    "lng": -0.12196449999999004
  },
  {
    "lat": 51.4036128,
    "lng": -0.3377623000000085
  },
  {
    "lat": 51.51300699999999,
    "lng": -0.08950900000002093
  },
  {
    "lat": 51.5088407,
    "lng": -0.1320137000000159
  },
  {
    "lat": 51.36612119999999,
    "lng": -0.15388759999996182
  },
  {
    "lat": 51.5316396,
    "lng": -0.12442310000005818
  },
  {
    "lat": 51.4927325,
    "lng": -0.15737079999996695
  },
  {
    "lat": 51.5131099,
    "lng": -0.15891480000004776
  },
  {
    "lat": 51.5158998,
    "lng": -0.09198779999996987
  },
  {
    "lat": 51.5162529,
    "lng": -0.08094489999996313
  },
  {
    "lat": 51.50832339999999,
    "lng": -0.10885010000004058
  },
  {
    "lat": 51.4818235,
    "lng": -0.1443983000000344
  },
  {
    "lat": 51.50859879999999,
    "lng": -0.11685609999994995
  },
  {
    "lat": 51.506579,
    "lng": -0.08138899999994464
  },
  {
    "lat": 51.4994794,
    "lng": -0.12480919999995876
  },
  {
    "lat": 51.5214598,
    "lng": -0.13889640000002146
  }
];
var parksMarkersLocation = [{
    "lat": 51.5072682,
    "lng": -0.16573029999995015
  },
  {
    "lat": 51.4787438,
    "lng": -0.2955729999999903
  },
  {
    "lat": 51.5312705,
    "lng": -0.15696939999997994
  },
  {
    "lat": 51.5365614,
    "lng": -0.03897200000005796
  },
  {
    "lat": 51.4463869,
    "lng": -0.2757727000000614
  },
  {
    "lat": 51.5039038,
    "lng": -0.14385670000001483
  },
  {
    "lat": 51.538449,
    "lng": -0.1549929999999904
  },
  {
    "lat": 51.5608421,
    "lng": -0.1631376000000273
  },
  {
    "lat": 51.5032252,
    "lng": -0.20366680000006454
  },
  {
    "lat": 51.563296,
    "lng": -0.1074350000000095
  },
  {
    "lat": 51.506987,
    "lng": -0.1791650000000118
  },
  {
    "lat": 51.4658393,
    "lng": 0.009033799999997427
  },
  {
    "lat": 51.53338129999999,
    "lng": -0.20892300000002706
  },
  {
    "lat": 51.4791075,
    "lng": -0.15649810000002162
  },
  {
    "lat": 51.4769095,
    "lng": 0.0014642999999523454
  },
  {
    "lat": 51.5422923,
    "lng": -0.0615099999999984
  },
  {
    "lat": 51.4584523,
    "lng": -0.14926089999994474
  },
  {
    "lat": 51.4319424,
    "lng": -0.0054824000000053275
  },
  {
    "lat": 51.416531,
    "lng": -0.3398173000000497
  },
  {
    "lat": 51.7043936,
    "lng": 0.1656223999999611
  },
  {
    "lat": 51.54850099999999,
    "lng": -0.11185599999998885
  },
  {
    "lat": 51.4498717,
    "lng": -0.10920080000005328
  },
  {
    "lat": 51.4753102,
    "lng": -0.2010533000000123
  },
  {
    "lat": 51.4366449,
    "lng": -0.2335468999999648
  },
  {
    "lat": 51.5601859,
    "lng": -0.09050300000001243
  },
  {
    "lat": 52.147161,
    "lng": -0.8059627999999748
  },
  {
    "lat": 51.5669271,
    "lng": -0.147070900000017
  },
  {
    "lat": 51.4218504,
    "lng": -0.0723852999999508
  },
  {
    "lat": 51.52175,
    "lng": -0.1258900000000267
  },
  {
    "lat": 51.7111721,
    "lng": 0.43721359999995
  },
  {
    "lat": 51.5493953,
    "lng": 0.048640999999975065
  },
  {
    "lat": 51.5784666,
    "lng": 0.09157319999997071
  },
  {
    "lat": 51.45316469999999,
    "lng": -0.16900799999996252
  },
  {
    "lat": 51.4699386,
    "lng": -0.1778343999999379
  },
  {
    "lat": 51.55167729999999,
    "lng": -0.08565050000004248
  },
  {
    "lat": 51.6590545,
    "lng": -0.13884949999999208
  },
  {
    "lat": 51.43547299999999,
    "lng": 0.020278899999993882
  },
  {
    "lat": 51.43593329999999,
    "lng": -0.2101810999999998
  },
  {
    "lat": 51.55297179999999,
    "lng": -0.02552179999997861
  },
  {
    "lat": 51.4430278,
    "lng": -0.07926329999997961
  }
];
var shoppingMarkersLocation = [{
    "lat": 51.49940549999999,
    "lng": -0.1632343999999648
  },
  {
    "lat": 51.51463,
    "lng": -0.1525699999999688
  },
  {
    "lat": 51.50544,
    "lng": -0.09106059999999161
  },
  {
    "lat": 51.405568,
    "lng": -0.15923539999994318
  },
  {
    "lat": 51.5120431,
    "lng": -0.1396346999999878
  },
  {
    "lat": 51.51322099999999,
    "lng": -0.13890360000004875
  },
  {
    "lat": 51.5170287,
    "lng": -0.20588640000005398
  },
  {
    "lat": 51.51278199999999,
    "lng": -0.14016400000002704
  },
  {
    "lat": 51.4092435,
    "lng": -0.16600470000003043
  },
  {
    "lat": 51.513829,
    "lng": -0.14017499999999927
  },
  {
    "lat": 51.5083685,
    "lng": -0.13848780000000716
  },
  {
    "lat": 51.485129,
    "lng": -0.17444460000001527
  },
  {
    "lat": 51.4973858,
    "lng": -0.1590292999999292
  },
  {
    "lat": 51.5422159,
    "lng": -0.14750170000002072
  },
  {
    "lat": 51.529719,
    "lng": -0.06897400000002563
  },
  {
    "lat": 51.5196641,
    "lng": -0.07544350000000577
  },
  {
    "lat": 51.4815373,
    "lng": -0.00908640000000105
  },
  {
    "lat": 51.5840695,
    "lng": -0.008341699999959928
  },
  {
    "lat": 51.5128019,
    "lng": -0.0834833000000117
  },
  {
    "lat": 51.530182,
    "lng": -0.12548000000003867
  },
  {
    "lat": 51.5089779,
    "lng": -0.1402370000000701
  },
  {
    "lat": 51.5138239,
    "lng": -0.09545700000001034
  },
  {
    "lat": 51.5763589,
    "lng": -0.22369560000004185
  },
  {
    "lat": 51.5090459,
    "lng": -0.22082899999998062
  },
  {
    "lat": 51.5415108,
    "lng": -0.14571079999996073
  },
  {
    "lat": 51.49227,
    "lng": -0.15895899999998164
  },
  {
    "lat": 51.5141905,
    "lng": -0.09452910000004522
  },
  {
    "lat": 51.4993829,
    "lng": -0.19767090000004828
  },
  {
    "lat": 51.519482,
    "lng": -0.10120299999994131
  },
  {
    "lat": 51.5431462,
    "lng": -0.007235400000013215
  },
  {
    "lat": 51.47602089999999,
    "lng": -0.1829786000000695
  },
  {
    "lat": 51.5469395,
    "lng": -0.048565700000040124
  },
  {
    "lat": 51.50841339999999,
    "lng": -0.19561250000003838
  },
  {
    "lat": 51.52667599999999,
    "lng": -0.0806519999999864
  },
  {
    "lat": 51.5565916,
    "lng": -0.2838959000000614
  },
  {
    "lat": 51.514601,
    "lng": -0.12557600000002367
  },
  {
    "lat": 51.5163688,
    "lng": -0.07631390000005922
  },
  {
    "lat": 51.522374,
    "lng": -0.15122199999996155
  },
  {
    "lat": 51.3732124,
    "lng": -0.07823069999994914
  },
  {
    "lat": 51.594443,
    "lng": -0.10889799999995375
  }
];

/* FUNCTIONS */

function initMap() {

  console.log('init map baby!');

  var london = {
    lat: 51.502716,
    lng: -0.144281
  };
  map = new google.maps.Map(document.getElementById('insta_map'), {
    zoom: 12,
    center: london,
    // Map custom styles
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    panControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false,
    overviewMapControl: false
  });

  // default markers category
  createMarkers(parksData, parksMarkersLocation, 'parks');

  // cluster markers
  markerCluster = new MarkerClusterer(map, activeMarkers,{imagePath: 'https://www.thistle.com/d/thistle/media/insta_map_assets/clusters/m'});
}

function createMarkers(locationsData, markersLocation, category) {

  // clear map
  clearMarkers(activeMarkers);

  // infowindow = new google.maps.InfoWindow();
  infoBubble = new InfoBubble({
    map: map,
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    shadowStyle: 0,
    padding: 0,
    backgroundColor: '#fff',
    borderRadius: 0,
    arrowSize: 15,
    borderWidth: 0,
    borderColor: 'transparent',
    disableAutoPan: false,
    hideCloseButton: false,
    arrowPosition: 75,
    backgroundClassName: 'info-content',
    arrowStyle: 0,
    minHeight: 200,
    maxHeight: 286,
    minWidth: 400,
    maxWidth: 580,
    closeSrc: 'https://www.thistle.com/d/thistle/media/insta_map_assets/black/close-btn2x_f74344.png'
  });

  for (var i = 0; i < locationsData.length; i++) {

    var markerOptions = {
      map: map,
      position: markersLocation[i],
      name: locationsData[i].name,
      posts: locationsData[i].posts,
      category: locationsData[i].category,
      hashtag: locationsData[i].hashtag,
      image: locationsData[i].image,
      copy: locationsData[i].copy,
      hotness: locationsData[i].hotness
    };

    if (markerOptions.hotness > 0 && markerOptions.hotness <= 2) {
      hotness = 5;
    } else if (markerOptions.hotness > 2 && markerOptions.hotness <= 4) {
      hotness = 4;
    } else if (markerOptions.hotness > 4 && markerOptions.hotness <= 6) {
      hotness = 3;
    } else if (markerOptions.hotness > 6 && markerOptions.hotness <= 8) {
      hotness = 2;
    } else if (markerOptions.hotness > 8 && markerOptions.hotness <= 10) {
      hotness = 1;
    }

    var artsIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-arts-culture2x_1590cd.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };
    var entertainmentIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-entertainment2x_925776.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };
    var foodIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-food-dining2x_258dbc.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };
    var gemsIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-hidden-gems2x_56e52c.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };
    var landmarksIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-landmarks2x_cdb260.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };
    var parksIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-parks-greenspaces2x_564e03.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };
    var shoppingIcon = {
      url: "https://www.thistle.com/d/thistle/media/insta_map_assets/" + hotness + "/pin-shopping2x_335991.png",
      anchor: new google.maps.Point(25, 50),
      scaledSize: new google.maps.Size(48, 54)
    };

    switch (category) {
      case 'arts':
        markerOptions.icon = artsIcon;
        break;

      case 'entertainment':
        markerOptions.icon = entertainmentIcon;
        break;

      case 'food':
        markerOptions.icon = foodIcon;
        break;

      case 'gems':
        markerOptions.icon = gemsIcon;
        break;

      case 'landmarks':
        markerOptions.icon = landmarksIcon;
        break;

      case 'parks':
        markerOptions.icon = parksIcon;
        break;

      case 'shopping':
        markerOptions.icon = shoppingIcon;
        break;

      default:
        markerOptions.icon = parksIcon;
    }

    var marker = new google.maps.Marker(markerOptions);

    activeMarkers.push(marker);

    google.maps.event.addListener(marker, 'click', function() {
      infoBubble.close();
      infoBubble.setContent('<img src="' + this.image + '" /><div class="info"><h4 class="amber">' + this.name + '</h4>' + '<p class="category">' + this.category + '</p>' + '<p><span class="amber">#</span>' + this.hashtag + '</p><p><span class="amber"> Posts: </span>  ' + this.posts + '</p><p class="copy">' + this.copy + '</p></div>');
      infoBubble.open(map, this);

      // add styles to the popup
      $('.info-content').parent().css('overflow', 'hidden');
      $('.info-content').parent().css('box-shadow', '0px 7px 5px rgba(0, 0, 0, 0.3)');

      $('.info-content').parent().parent().css('margin-top', '-10px');

      $($('.info-content').parent().next().children()[1]).addClass('arrow');
    });

  }

}

function clearMarkers(markersLocation) {
  if (infoBubble) {
    infoBubble.close();
  }

  for (var k = 0; k < markersLocation.length; k++) {
    markersLocation[k].setMap(null);
  }

  activeMarkers = [];
}

function getCategoryData(category, callback) {

  switch (category) {
    case 'arts':
      callback(artsData, artsMarkersLocation, category);
      break;

    case 'entertainment':
      callback(entertainmentData, artsMarkersLocation, category);
      break;

    case 'food':
      callback(foodData, foodMarkersLocation, category);
      break;

    case 'gems':
      callback(gemsData, gemsMarkersLocation, category);
      break;

    case 'landmarks':
      callback(landmarksData, landmarksMarkersLocation, category);
      break;

    case 'parks':
      callback(parksData, parksMarkersLocation, category);
      break;

    case 'shopping':
      callback(shoppingData, shoppingMarkersLocation, category);
      break;

    default:
      callback(parksData, parksMarkersLocation);
  }

}

function showTopTen(data) {
  // populate the list with the selected category data
  for (var i = 0; i < 10; i++) {
    $($('#topTen li')[i]).html('<img src="' + data[i].image + '" /> <div class="top-ten-info"><p><span class="amber">' + data[i].category + '</span></p><h4>' + data[i].name + '</h4><p class="copy">' + data[i].copy + '</p></div>');
  }
}

// function used to find the lat and long of the places by name
function findPlaces(locationsData, markersLocation, map) {

  // run the search multiple times - 10 results max per search
  for (var i = 0; i < locationsData.length; i++) {
    (function(j) {
      var service = new google.maps.places.PlacesService(map);

      // find the place by name
      var request = {
        location: map.getCenter(),
        query: locationsData[i].name
      };

      setTimeout(function() {
        service.textSearch(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {

            markersLocation.push(results[0].geometry.location);

          }
        })
      }, j * 500);
    })(i);
  }


  return markersLocation;

}


// category click event
$('.categories a').click(function(event) {

  event.preventDefault();

  var category = $(this).attr('class');

  getCategoryData(category, createMarkers);

  // cluster the new markers
  markerCluster.clearMarkers();
  markerCluster = new MarkerClusterer(map, activeMarkers,{imagePath: 'https://www.thistle.com/d/thistle/media/insta_map_assets/clusters/m'});

});

$('.top-ten-select').change(function() {

  var category = $('.top-ten-select option:selected').attr('value');

  getCategoryData(category, showTopTen);

});



initMap();

showTopTen(parksData);
