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
var artsData = [
  {
    "name": "Tate Modern",
    "category": "Arts&Culture",
    "hashtag": "tatemodern",
    "posts": "644,931",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/tatemodern.jpg",
    "copy": "Located on the south bankside in London, the Tate is an institution that houses the United Kingdom's natural collection of British art, and international modern and contemporary art.",
    "hotness": 10,
    "lat": 51.5075953,
    "lng": -0.0993564000000333
  },
  {
    "name": "Natural History Museum",
    "category": "Arts&Culture",
    "hashtag": "naturalhistorymuseum",
    "posts": "435,166",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/naturalhistorymuseum.jpg",
    "copy": "Established in 1881, the Natural History museum exhibits a vast range of natural history. If life and earth science if your thing, then it is a must visit museum! ",
    "hotness": 7.0306,
    "lat": 51.496715,
    "lng": -0.176367199999959
  },
  {
    "name": "British Museum",
    "category": "Arts&Culture",
    "hashtag": "britishmuseum",
    "posts": "373,049",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/britishmuseum.jpg",
    "copy": "Located in Bloomsbury, the British Museum is a public institution dedicated to human history, art and culture. It's permanent collection numbers around 8 million works. ",
    "hotness": 6.1513,
    "lat": 51.5194133,
    "lng": -0.126956599999971
  },
  {
    "name": "Royal Albert Hall",
    "category": "Arts&Culture",
    "hashtag": "royalalberthall",
    "posts": "225,602",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/royalalberthall.jpg",
    "copy": "The Royal Albert Hall is on the northern edge of South Kensington, holding Proms concerts annually each summer since 1941. Since opening in 1871, some of the World's biggest performers have appeared on it's stage. ",
    "hotness": 4.0641,
    "lat": 51.5009088,
    "lng": -0.177366000000006
  },
  {
    "name": "Somerset House",
    "category": "Arts&Culture",
    "hashtag": "somersethouse",
    "posts": "205,003",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/somersethouse.jpg",
    "copy": "A large Neoclassical building located along the strand, overlooking the River Thames and designed in 1776 by Sir William Chambers. It's well know for it's Fashion Week exhibitions and Ice Skating in the Winter! ",
    "hotness": 3.7725,
    "lat": 51.511059,
    "lng": -0.117148000000043
  },
  {
    "name": "Saatchi Gallery",
    "category": "Arts&Culture",
    "hashtag": "saatchigallery",
    "posts": "181,385",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/saatchigallery.jpg",
    "copy": "A London gallery for contemporary art, opened by Charles Saatchi in 1985 in order to exhibit his collection to the public. Located currently in Chelsea, surrounded by plenty of shops and restaurants. ",
    "hotness": 3.4382,
    "lat": 51.4906972,
    "lng": -0.158716499999969
  },
  {
    "name": "Kensington Palace",
    "category": "Arts&Culture",
    "hashtag": "kensingtonpalace",
    "posts": "139,886",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kensingtonpalace.jpg",
    "copy": "A Royal residence set in Kensington Gardens. It is the current official London home to the Duke and Duchess of Cambridge and the newlywed Duke and Duchess of Sussex. ",
    "hotness": 2.8508,
    "lat": 51.5058372,
    "lng": -0.187723900000037
  },
  {
    "name": "Victoria and Albert Museum",
    "category": "Arts&Culture",
    "hashtag": "victoriaandalbertmuseum",
    "posts": "135,212",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/victoriaandalbertmuseum.jpg",
    "copy": "The V&A is the world's largest museum of decorative arts and design, housing a permanent collection of over 2.3 million objects. It was founded in 1852 after Queen Victoria and Prince Albert. ",
    "hotness": 2.7846,
    "lat": 51.4966392,
    "lng": -0.172180000000026
  },
  {
    "name": "Tate Britain",
    "category": "Arts&Culture",
    "hashtag": "tatebritain",
    "posts": "130,290",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/tatebritain.jpg",
    "copy": "The Tate Britain is an art museum based on Millbank in the City of Westminster. Established in 1897 and is one of the largest museums in the country. ",
    "hotness": 2.7149,
    "lat": 51.4910621,
    "lng": -0.127788600000031
  },
  {
    "name": "Design Museum",
    "category": "Arts&Culture",
    "hashtag": "designmuseum",
    "posts": "100,382",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/designmuseum.jpg",
    "copy": "The Design museum is based in Kensington and covers product, industrial, graphic, fashion and architectural design. Established in 1989 and founded by Sir Terence Conran, it was orginally located by the River Thames and was later relocated. ",
    "hotness": 2.2916,
    "lat": 51.4998973,
    "lng": -0.200243999999998
  },
  {
    "name": "National Theatre",
    "category": "Arts&Culture",
    "hashtag": "nationaltheatre",
    "posts": "97,259",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/nationaltheatre.jpg",
    "copy": "One of the United Kingdom's most prominent pubically funded performing arts venues. Located along the South Bank, River Thames this popular spot with locals and tourists is well worth a visit. ",
    "hotness": 2.2474,
    "lat": 51.506993,
    "lng": -0.11422970000001
  },
  {
    "name": "National Portrait Gallery",
    "category": "Arts&Culture",
    "hashtag": "nationalportraitgallery",
    "posts": "88,004",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/nationalportraitgallery.jpg",
    "copy": "The National Portrait Gallery houses a collection of portraits of historically important and famous British people. It was the first portrait gallery in the world when it opened in 1856. ",
    "hotness": 2.1164,
    "lat": 51.5094236,
    "lng": -0.128121599999986
  },
  {
    "name": "Royal Opera House",
    "category": "Arts&Culture",
    "hashtag": "royaloperahouse",
    "posts": "77,503",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/royaloperahouse.jpg",
    "copy": "An opera house and major performing arts venue in Covent Garden, central London it is also the home of The Royal Opera and the Royal Ballet. ",
    "hotness": 1.9677,
    "lat": 51.5129211,
    "lng": -0.122197599999936
  },
  {
    "name": "Barbican Centre",
    "category": "Arts&Culture",
    "hashtag": "barbicancentre",
    "posts": "46,707",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/barbicancentre.jpg",
    "copy": "A performing arts centre in the City of London that is the largest of its kind in Europe. Opening in 1982, the centre still hosts film screening, events and exhibitions. ",
    "hotness": 1.5318,
    "lat": 51.5200574,
    "lng": -0.0937946000000238
  },
  {
    "name": "The Photographers' Gallery",
    "category": "Arts&Culture",
    "hashtag": "thephotographersgallery",
    "posts": "44,988",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thephotographersgallery.jpg",
    "copy": "Founded in 1971 as the first public gallery in the UK dedicated to photography. Located near to Covent Garden, this gallery is well worth a visit if your a photography fan! ",
    "hotness": 1.5074,
    "lat": 51.5149271,
    "lng": -0.139060500000028
  },
  {
    "name": "Royal Academy of Arts",
    "category": "Arts&Culture",
    "hashtag": "royalacademyofarts",
    "posts": "41,757",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/royalacademyofarts.jpg",
    "copy": "An institution based in Burlington House, near Piccadilly. Established in 1768 through a personal act of King George, with a mission to promote the arts of design in Britain. ",
    "hotness": 1.4617,
    "lat": 51.5094426,
    "lng": -0.1398686
  },
  {
    "name": "British Library",
    "category": "Arts&Culture",
    "hashtag": "britishlibrary",
    "posts": "40,757",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/britishlibrary.jpg",
    "copy": "The largest library in the world, the British library was established in 1973. It holds over 170 million items from many countries and hosts events and exhibitions, recently including a Harry Potter exhibition. ",
    "hotness": 1.4475,
    "lat": 51.5299717,
    "lng": -0.127675899999986
  },
  {
    "name": "Imperial War Museum",
    "category": "Arts&Culture",
    "hashtag": "imperialwarmuseum",
    "posts": "39,609",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/imperialwarmuseum.jpg",
    "copy": "First established in 1917 to record the civil and military war effort and sacrifice of Britiain during the First World War. The first museum is located along Lambeth Road in London, which is easily accessible. ",
    "hotness": 1.4313,
    "lat": 51.4958308,
    "lng": -0.108661500000039
  },
  {
    "name": "Hammersmith Apollo",
    "category": "Arts&Culture",
    "hashtag": "hammersmithapollo",
    "posts": "33,732",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hammersmithapollo.jpg",
    "copy": "An entertainment venue and listed building, the Hammersmith Apollo is home to live events, concerts and comedy shows. Built in 1930, this venue is still going strong for entertainment! ",
    "hotness": 1.3481,
    "lat": 51.490993,
    "lng": -0.223925
  },
  {
    "name": "Royal Festival Hall",
    "category": "Arts&Culture",
    "hashtag": "royalfestivalhall",
    "posts": "31,010",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/royalfestivalhall.jpg",
    "copy": "Located within the Southbank centre, it officially opened in 1951. Hosting a number of concerts, events and talks, there's always something going on, so worth checking out if you're close by. ",
    "hotness": 1.3096,
    "lat": 51.505981,
    "lng": -0.116752
  },
  {
    "name": "The British Museum",
    "category": "Arts&Culture",
    "hashtag": "thebritishmuseum",
    "posts": "28,439",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thebritishmuseum.jpg",
    "copy": "Located in Bloomsbury, the British Museum is a public institution dedicated to human history, art and culture. It's permanent collection numbers around 8 million works. ",
    "hotness": 1.2732,
    "lat": 51.519640,
    "lng": -0.126055
  },
  {
    "name": "Theatre Royal",
    "category": "Arts&Culture",
    "hashtag": "theatreroyal",
    "posts": "27,544",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/theatreroyal.jpg",
    "copy": "Commonly known as Dury Lane, this West End theatre is located in Covent Garden. First opening in 1660, making it the oldest theatre site in London still in use. ",
    "hotness": 1.2605,
    "lat": 51.5194133,
    "lng": -0.126956599999971
  },
  {
    "name": "Lyceum Theatre",
    "category": "Arts&Culture",
    "hashtag": "lyceumtheatre",
    "posts": "23,120",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/lyceumtheatre.jpg",
    "copy": "A West End theatre located in the City of Westminster, just off the Strand. It has been hosting the West End show, The Lion King since 1999, a show worth seeing!",
    "hotness": 1.1979,
    "lat": 51.5128536,
    "lng": -0.120371500000033
  },
  {
    "name": "Museum of London",
    "category": "Arts&Culture",
    "hashtag": "museumoflondon",
    "posts": "21,810",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/museumoflondon.jpg",
    "copy": "Established in 1976, the museum of London documents the history of the English capital from prehistoric to modern times. Located on London Wall, close to the Barbican centre. ",
    "hotness": 1.1793,
    "lat": 51.5115961,
    "lng": -0.119987199999969
  },
  {
    "name": "Shakespeare's Globe",
    "category": "Arts&Culture",
    "hashtag": "shakespearesglobe",
    "posts": "21,560",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/shakespearesglobe.jpg",
    "copy": "Located along the Southbank of the River Thames, this is the famous playhouse associated with William Shakespeare. Showing a variety of shows throughout the summer, this is one worth getting a ticket for. ",
    "hotness": 1.1758,
    "lat": 51.508169,
    "lng": -0.096990
  },
  {
    "name": "Hayward Gallery",
    "category": "Arts&Culture",
    "hashtag": "haywardgallery",
    "posts": "21,235",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/haywardgallery.jpg",
    "copy": "An art gallery located within the Southbank centre, a major arts venue along the River Thames. The Hayward Gallery was built by Higgs and Hill in 1968 and sits adjacent to the other Southbank centre buildings. ",
    "hotness": 1.1712,
    "lat": 51.508076,
    "lng": -0.0971939999999449
  },
  {
    "name": "Wellcome Collection",
    "category": "Arts&Culture",
    "hashtag": "wellcomecollection",
    "posts": "20,623",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wellcomecollection.jpg",
    "copy": "The Wellcome Collection is a museum and library based along Euston Road, London, displaying an unusual mixture of medical artifacts and original artworks. ",
    "hotness": 1.1625,
    "lat": 51.526011,
    "lng": -0.133248
  },
  {
    "name": "Queen Elizabeth Olympic Park",
    "category": "Arts&Culture",
    "hashtag": "queenelizabetholympicpark",
    "posts": "19,302",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/queenelizabetholympicpark.jpg",
    "copy": "A sporting complex built for the 2012 olympics situated to the east of the city. The park is overlooked by the ArcelorMittal Orbit, an observation tower and Britain's largest piece of public art. ",
    "hotness": 1.1438,
    "lat": 51.543550,
    "lng": -0.015693
  },
  {
    "name": "London Palladium",
    "category": "Arts&Culture",
    "hashtag": "londonpalladium",
    "posts": "18,698",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonpalladium.jpg",
    "copy": "A grade listed West End theatre located on Argyll Street in the City of Westminster. It is one of the most famous theatres in London, especially for music variety shows! ",
    "hotness": 1.1353,
    "lat": 51.514663,
    "lng": -0.140207
  },
  {
    "name": "Whitechapel Gallery",
    "category": "Arts&Culture",
    "hashtag": "whitechapelgallery",
    "posts": "18,564",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/whitechapelgallery.jpg",
    "copy": "A public art gallery in Whitechapel, in the East End of London. It was opened in 1901 as one of the first galleries for temporary exhibitions in London. ",
    "hotness": 1.1334,
    "lat": 51.5145329,
    "lng": -0.140479099999993
  },
  {
    "name": "Wallace Collection",
    "category": "Arts&Culture",
    "hashtag": "wallacecollection",
    "posts": "16,919",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wallacecollection.jpg",
    "copy": "Located in Manchester Square, this art gallery, established in 1897, is open to the public. It has an extensive collection of fine and decorative arts from the 15th to the 19th centuries, ",
    "hotness": 1.1101,
    "lat": 51.517544,
    "lng": -0.152447
  },
  {
    "name": "Horniman Museum",
    "category": "Arts&Culture",
    "hashtag": "hornimanmuseum",
    "posts": "16,486",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hornimanmuseum.jpg",
    "copy": "This museum opened in 1901 and was designed by Charles Harrisons Townsend. Located in Forest Hill, this museum is known for its large collection of taxidermied animals. ",
    "hotness": 1.104,
    "lat": 51.441239,
    "lng": -0.059224
  },
  {
    "name": "Royal Exchange",
    "category": "Arts&Culture",
    "hashtag": "royalexchange",
    "posts": "15,712",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/royalexchange.jpg",
    "copy": "Founded in the 16th century as a centre of commerce for the City of London. It is also one of the locations where a herald proclaims the new monarch's reign to the public. ",
    "hotness": 1.093,
    "lat": 51.513789,
    "lng": -0.086565
  },
  {
    "name": "Old Vic",
    "category": "Arts&Culture",
    "hashtag": "oldvic",
    "posts": "13,733",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oldvic.jpg",
    "copy": "A 1,000 seat, not for profit, producing theatre located just south east of Waterloo station. The Old Vic is the crucible of many of the performing arts companies and theatres in London today. ",
    "hotness": 1.065,
    "lat": 51.502213,
    "lng": -0.108561
  },
  {
    "name": "Sherlock Holmes Museum",
    "category": "Arts&Culture",
    "hashtag": "sherlockholmesmuseum",
    "posts": "13,259",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sherlockholmesmuseum.jpg",
    "copy": "A privately run museum in London, dedicated to the famous fictional dective Sherlock Holmes. It opened in 1990 and is located along Baker Street, bearing the number 221B by permission of the City of Westminster. ",
    "hotness": 1.0583,
    "lat": 51.523880,
    "lng": -0.158255
  },
  {
    "name": "Queen's House",
    "category": "Arts&Culture",
    "hashtag": "queenshouse",
    "posts": "12,970",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/queenshouse.jpg",
    "copy": "A former Royal residence built between 1616 and 1635 in Greenwich. One of the most important buildings in British architectural history, being the first consciously classical building to have been built in the country. ",
    "hotness": 1.0542,
    "lat": 51.481281,
    "lng": -0.003088
  },
  {
    "name": "National Maritime Museum",
    "category": "Arts&Culture",
    "hashtag": "nationalmaritimemuseum",
    "posts": "10,344",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/nationalmaritimemuseum.jpg",
    "copy": "The leading maritime museum of the United Kingdom and is one of the largest museums of its kind in the world. Located in Greenwich, it also incorporates the Royal Observatory and Queen's House. ",
    "hotness": 1.017,
    "lat": 51.4810945,
    "lng": -0.00374139999996714
  },
  {
    "name": "London Coliseum",
    "category": "Arts&Culture",
    "hashtag": "londoncoliseum",
    "posts": "10,259",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londoncoliseum.jpg",
    "copy": "A theatre in St Martin's Lane, Westminster, it was built as one of London's largest and most luxurious family variety theatres. It opened in 1904 with the ambition of being the people's palace of entertainment and one of the finest music halls. ",
    "hotness": 1.0158,
    "lat": 51.510416,
    "lng": -0.125200
  },
  {
    "name": "London Transport Museum",
    "category": "Arts&Culture",
    "hashtag": "londontransportmuseum",
    "posts": "10,040",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londontransportmuseum.jpg",
    "copy": "Based in Covent Garden, the museum seeks to conserve and explain the transport heritage of Britain's capital city. Established in 1980, this is one to check out if you're interested in the seeing how the city runs! ",
    "hotness": 1.0127,
    "lat": 51.509782,
    "lng": -0.126803999999993
  },
  {
    "name": "Old Bailey",
    "category": "Arts&Culture",
    "hashtag": "oldbailey",
    "posts": "9,141",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oldbailey.jpg",
    "copy": "The Central Criminal Court of England given it's name, the Old Bailey from the street on which it stands.  The Crown Court sitting here deals with major criminal cases within London and other areas of the country in exceptional cases. As with all courts, the Old Bailey is open to the public if security measures are reached",
    "hotness": 1,
    "lat": 51.515890,
    "lng": -0.101221
  }
];

var entertainmentData = [
  {
    "name": "Stamford Bridge",
    "category": "Entertainment",
    "hashtag": "stamfordbridge",
    "posts": "304,774",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/stamfordbridge.jpg",
    "copy": "Opened in 1877, Stamford Bridge has been the home of the Blues (Chelsea F.C) for over 100 years. With a capacity of over 40,000, it's the 8th largest ground in the Premier League season and has bared witness to many triumphs and defeats.",
    "hotness": 10,
    "lat": 51.481806,
    "lng": -0.190906
  },
  {
    "name": "O2 Arena",
    "category": "Entertainment",
    "hashtag": "o2arena",
    "posts": "241,289",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/o2arena.jpg",
    "copy": "Originally the Millennium Dome, the O2 Arena is now one of the world's most recognised venues for concerts and family shows. Nearly all famous UK and US artists have been snapped performing on stage.",
    "hotness": 8.125,
    "lat": 51.503226,
    "lng": 0.003416
  },
  {
    "name": "Wembley Stadium",
    "category": "Entertainment",
    "hashtag": "wembleystadium",
    "posts": "190,957",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wembleystadium.jpg",
    "copy": "The Wembley Stadium arch is the crowing glory of the stadium sitting 134-metres high, an iconic landmark of London. The Stadium cost nearly '800m when it was originally built and houses over 90,000 sporting fans.",
    "hotness": 6.6385,
    "lat": 51.5560208,
    "lng": -0.279518800000005
  },
  {
    "name": "London Zoo",
    "category": "Entertainment",
    "hashtag": "londonzoo",
    "posts": "176,080",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonzoo.jpg",
    "copy": "Take a pic with a Black Mamba or Yemen Chameleon, one of over 700 species that inhabits London Zoo ' sometimes called Regent's Zoo. Originally opened on 27th April 1828, did you know it's the world's oldest scientific zoo?",
    "hotness": 6.1991,
    "lat": 51.535738,
    "lng": -0.161203
  },
  {
    "name": "Ministry of Sound",
    "category": "Entertainment",
    "hashtag": "ministryofsound",
    "posts": "155,029",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/ministryofsound.jpg",
    "copy": "No matter what genre of music you like, the Ministry of Sound has a club night for you. One of the UK's most recognised clubs, containing a sound system that you can literally feel, makes the Ministry of Sound an Instagram hotspot.",
    "hotness": 5.5773,
    "lat": 51.497821,
    "lng": -0.098461
  },
  {
    "name": "Emirates Stadium",
    "category": "Entertainment",
    "hashtag": "emiratesstadium",
    "posts": "146,610",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/emiratesstadium.jpg",
    "copy": "The home of Arsenal F.C needs little introduction. Costing nearly '400m to build and having a capacity of around 60,000 has made this a world recognised stadium in north London. Wenger surely left his mark!",
    "hotness": 5.3287,
    "lat": 51.555974,
    "lng": -0.108305
  },
  {
    "name": "Brixton Academy",
    "category": "Entertainment",
    "hashtag": "brixtonacademy",
    "posts": "78,268",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/brixtonacademy.jpg",
    "copy": "With its Italian Renaissance-inspired interior and a long history of hosting prominent music bands such as The Clash, and Madonna, the Brixton Academy is one of the London's top music venues. Make sure you give an ear to the upcoming events if you up for dancing to Camila Cabello or Goo Goo Dolls.",
    "hotness": 3.3102,
    "lat": 51.465854,
    "lng":  -0.114479
  },
  {
    "name": "White Hart Lane",
    "category": "Entertainment",
    "hashtag": "whitehartlane",
    "posts": "70,486",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/whitehartlane.jpg",
    "copy": "It is where Totthenham's Hotspur player Harry Kane has been practicing his best strikes. The stadium was fully demolished at the end of 2017, and now is undergoing renovation. The Spurs and their fans will be returning to the site for more football-induced excitement later this year.",
    "hotness": 3.0804,
    "lat": 51.603379,
    "lng": -0.065138
  },
  {
    "name": "Wembley Arena",
    "category": "Entertainment",
    "hashtag": "wembleyarena",
    "posts": "49,918",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wembleyarena.jpg",
    "copy": "Right at the doorstep of Wembley Stadium, is London's famous venue hosting events filled with music, laughter and heightened sports emotions. Wembley Arena is where you can see notable performers and bronze plaques imprinted with their names and handprints, just the way they do it in Hollywood!",
    "hotness": 2.4729,
    "lat": 51.558059,
    "lng": -0.281594
  },
  {
    "name": "Twickenham Stadium",
    "category": "Entertainment",
    "hashtag": "twickenhamstadium",
    "posts": "26,760",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/twickenhamstadium.jpg",
    "copy": "Twickenham Stadium is where the real ' and virtual sports events collide. The stadium is the largest dedicated rugby union venue in the world, this year, however, the stadium will also host  the FACEIT Minors - the largest and most prestigious esport tournament to be held in the UK. ",
    "hotness": 1.789,
    "lat": 51.455350,
    "lng": -0.339666
  },
  {
    "name": "The Oval",
    "category": "Entertainment",
    "hashtag": "theoval",
    "posts": "23,589",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/theoval.jpg",
    "copy": "The Oval is the South London's staple, and a home to the Surrey County Cricket Club where cricket fans flock to watch the famous bat-and-ball game from its theatrical roof terraces. During its ground tours, the site is also open to tourists  who want to brush up on cricketing history. ",
    "hotness": 1.6953,
    "lat": 51.483421,
    "lng": -0.112009
  },
  {
    "name": "London Stadium",
    "category": "Entertainment",
    "hashtag": "londonstadium",
    "posts": "22,098",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonstadium.jpg",
    "copy": "London Stadium was built to host 2012 Summer Olympic Games, and to this day, is used to host sports events such as the Rugby World Cup, or The Race of Champions. Through the summer, the stadium stages global talents such as Jay-Z and Beyonc'.",
    "hotness": 1.6513,
    "lat": 51.538936,
    "lng": -0.016121
  },
  {
    "name": "Madame Tussauds",
    "category": "Entertainment",
    "hashtag": "madametussaudslondon",
    "posts": "19,196",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/madametussaudslondon.jpg",
    "copy": "London's famous wax figure museum is where your dreams of rubbing shoulders with celebs, politicians and historical figures can finally come true. Join the unique A-list party and load your Instagram account with some magazine cover - like snaps! ",
    "hotness": 1.5656,
    "lat": 51.523253,
    "lng": -0.153873
  },
  {
    "name": "Horse Guards",
    "category": "Entertainment",
    "hashtag": "horseguards",
    "posts": "18,451",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/horseguards.jpg",
    "copy": "Horse Guards Parade, is a large parade ground close to Whitehall in central London, that is site to annual ceremonies of Trooping the colour performed by regiments of British and Commonwealth armies to mark the official birthday of the British sovereign. \r\n",
    "hotness": 1.5436,
    "lat": 51.5048871,
    "lng": -0.127036399999952
  },
  {
    "name": "Selhurst Park",
    "category": "Entertainment",
    "hashtag": "selhurstpark",
    "posts": "12,456",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/selhurstpark.jpg",
    "copy": "Home to Premier League's Crystal Palace Football Club, Selhurst Park was designed by, a famous at the time, Scottish architect - Archibald Leitch and opened to the public in 1924 by the Lord Mayor of London. \r\n\r\n",
    "hotness": 1.3665,
    "lat": 51.3982531,
    "lng": -0.0854867000000468
  },
  {
    "name": "ICANDO",
    "category": "Entertainment",
    "hashtag": "icando",
    "posts": "11,818",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/icando.jpg",
    "copy": "Are you ready for an urban adventure? Explore London like you never have before at ICANDO. Located just a stone's throw away from the Queen's Residence, Buckingham Palace, it's the perfect location to pop in during your lunch and snap a photo.",
    "hotness": 1.3477,
    "lat": 51.498944,
    "lng": -0.142748
  },
  {
    "name": "Box Park (Croydon)",
    "category": "Entertainment",
    "hashtag": "boxparkcroydon",
    "posts": "10,830",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/boxparkcroydon.jpg",
    "copy": "Box Park Croydon is where you can take a sneak peek at the best picks of London street fashion, while trying some of the finest British cuisine! Built out of refitted shipping containers, it is the proof of London's artfulness, where foodies and fashionistas will feel at home. ",
    "hotness": 1.3185,
    "lat": 51.375157,
    "lng": -0.093160
  },
  {
    "name": "London Dungeon",
    "category": "Entertainment",
    "hashtag": "londondungeon",
    "posts": "10,242",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londondungeon.jpg",
    "copy": "Step into London’s dark and gruesome history at the London Dungeon. With live performances, special effects, stages and rides, there’s more than enough to see and do in one of the capital’s most beloved attractions.",
    "hotness": 1.3011,
    "lat": 51.502659,
    "lng": -0.118076
  },
  {
    "name": "ArcelorMittal Orbit",
    "category": "Entertainment",
    "hashtag": "arcelormittalorbit",
    "posts": "10,080",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/arcelormittalorbit.jpg",
    "copy": "This permanent and most visual legacy of London hosting the 2012 Summer Olympic and Paralympic Games is the 114.5 ' meter-high sculpture and observation tower, and the UK's tallest public artwork. Climb it, and then close your eyes and then take down the 178 meters long slide! ",
    "hotness": 1.2963,
    "lat": 51.5384281,
    "lng": -0.0129014000000325
  },
  {
    "name": "Loftus Road",
    "category": "Entertainment",
    "hashtag": "loftusroad",
    "posts": "9,190",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/loftusroad.jpg",
    "copy": "The green football pastures of the Loftus Road stadium is where the famous Queens Park Rangers F.C football club (commonly abbreviated to QPR) are playing. The stadium was built with areas designated for standing only ' this resulted in stands being so close to the pitch, you feel like being involved in the game yourself. ",
    "hotness": 1.27,
    "lat": 51.509424,
    "lng": -0.231125
  },
  {
    "name": "Barbican Conservatory",
    "category": "Entertainment",
    "hashtag": "barbicanconservatory",
    "posts": "7,115",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/barbicanconservatory.jpg",
    "copy": "Step into Barbican Conservatory for a truly hot cup of afternoon tea in the exotic scenery made from than 2,000 species of tropical plants and trees. Pay a visit on the weekend to learn how these botanical wonders can grow in the London concrete jungle!",
    "hotness": 1.2088,
    "lat": 51.520150,
    "lng": -0.092615
  },
  {
    "name": "Lord's Cricket Ground",
    "category": "Entertainment",
    "hashtag": "lordscricketground",
    "posts": "6,445",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/lordscricketground.jpg",
    "copy": "If you're a fan of the sport, then Lord's Cricket Ground is a must see. Situated in St John's Wood, which is now the grounds third location, you can witness some of the worlds best test matches and one-day internationals.",
    "hotness": 1.189,
    "lat": 51.529831,
    "lng": -0.172156399999949
  },
  {
    "name": "Sea Life London",
    "category": "Entertainment",
    "hashtag": "sealifelondon",
    "posts": "6,301",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sealifelondon.jpg",
    "copy": "Who would have thought that without having access to the sea, a city can have such rich underwater life? Visit the sea life zoo to see shark pups, Piranhas wolfing down their dinners, and count how many fish it takes to feed a very hungry Gentoo Penguin! ",
    "hotness": 1.1847,
    "lat": 51.501642,
    "lng": -0.118957
  },
  {
    "name": "Little Venice",
    "category": "Entertainment",
    "hashtag": "littlevenicelondon",
    "posts": "5,031",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/littlevenicelondon.jpg",
    "copy": "When it comes to attractions, London has it all. It even has its own Italian-like, tranquil canal area called Little Venice, where traditional narrow boats are parked through the year, and people flock to refresh in quirky waterside cafes. La vita e bella!",
    "hotness": 1.1472,
    "lat": 51.521666,
    "lng": -0.181907200000069
  },
  {
    "name": "Southbank Skatepark",
    "category": "Entertainment",
    "hashtag": "southbankskatepark",
    "posts": "4,007",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/southbankskatepark.jpg",
    "copy": "Who hasn't heard the rattling sound of skateboards coming from the Southbank's Undercroft skatepark? If you haven't, you can't really claim to have explored this part of London's cultural scene. Dubbed 'spiritual home of British skating' the spot is a designated for skateboarders of all abilities to ace their tricks. ",
    "hotness": 1.117,
    "lat": 51.5069228,
    "lng": -0.11643909999998
  },
  {
    "name": "M&M's World London",
    "category": "Entertainment",
    "hashtag": "mmsworldlondon",
    "posts": "2,896",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/mmsworldlondon.jpg",
    "copy": "M&M's World can easily be called London's very own chocolate factory! The store is dedicated entirely to the famous Red and Yellow button-shaped chocolates, and for years has been luring chocolate-lovers from all over the world! ",
    "hotness": 1.0841,
    "lat": 51.510772,
    "lng": -0.130795
  },
  {
    "name": "Emirates Air Line cable car",
    "category": "Entertainment",
    "hashtag": "emiratesairlinecablecar",
    "posts": "1,524",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/emiratesairlinecablecar.jpg",
    "copy": "By taking the Emirates Cable Car you can enjoy the best possible views of the capital. The line runs over the River Thames from North Greenwich Peninsula to Royal Victoria Dock. See London like you have never seen it before, either during the day or on one of the romantic night cruises! ",
    "hotness": 1.0436,
    "lat": 51.499946,
    "lng": 0.008748
  },
  {
    "name": "Victoria Embankment Gardens",
    "category": "Entertainment",
    "hashtag": "victoriaembankmentgardens",
    "posts": "1,382",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/victoriaembankmentgardens.jpg",
    "copy": "\r\nLondoners much appreciated retreat from the busy Embankment area, is mostly populated by the office workers who use it as a pleasant space to eat lunch and relax. With grass and pretty flower beds spread throughout, Victoria Embankment Gardens is a perfect destination for taking time out from a busy sightseeing day. \r\n",
    "hotness": 1.0394,
    "lat": 51.508168,
    "lng": -0.122067
  },
  {
    "name": "London Bus Tour",
    "category": "Entertainment",
    "hashtag": "londonbustour",
    "posts": "1,105",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonbustour.jpg",
    "copy": "What's a better way to see London, than from an iconic double-decker bus? Hop on and off anytime you want, to explore more than 50 of London's most famous sites in the Megabus Sightseeing Tour, or embark on the voyage through time with the London Time Tour Bus. ",
    "hotness": 1.0312,
    "lat": 51.496564,
    "lng": -0.143042
  },
  {
    "name": "Thames RIB Experience",
    "category": "Entertainment",
    "hashtag": "thamesribexperience",
    "posts": "1,090",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thamesribexperience.jpg",
    "copy": "These super-fast and mega loud speedboats are one of the capitals favourite tourist attractions that offers a completely new, adrenaline -packed perspective of London's most famous landmarks and sights.",
    "hotness": 1.0308,
    "lat": 51.50736,
    "lng": -0.121095999999966
  },
  {
    "name": "The Making of Harry Potter Studio Tour",
    "category": "Entertainment",
    "hashtag": "themakingofharrypotterstudiotour",
    "posts": "918",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/themakingofharrypotterstudiotour.jpg",
    "copy": "Muggles from all over the world flock to the famous Warner Bros Harry Potter Studio Tour, to have a sneak peek at what it takes to be a true wizard. Whether you want to retrieve childhood memories or please your own children, it's the imagination-probing treat for those who sometimes miss having magical powers. ",
    "hotness": 1.0257,
    "lat": 51.690769,
    "lng": -0.416494
  },
  {
    "name": "Franks Rooftop Bar",
    "category": "Entertainment",
    "hashtag": "franksrooftopbar",
    "posts": "862",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/franksrooftopbar.jpg",
    "copy": "The famous rooftop bar based on a Peckham Car Park won Londoners' hearts with its exquisite revival of classic Italian Negronis and Spritzes that can be ordered together with a selection of grilled treats from the charcoal barbecue. ",
    "hotness": 1.0241,
    "lat": 51.470786,
    "lng": -0.067596
  },
  {
    "name": "Media Space",
    "category": "Entertainment",
    "hashtag": "mediaspace",
    "posts": "840",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/mediaspace.jpg",
    "copy": "Media Space is an exhibition space developed by the National Media Museum that strives to engage different audiences with stories about how technology and science have aided art and vice- versa. Great for improving your undersanding about media industries and cinematography! ",
    "hotness": 1.0234,
    "lat": 51.497508,
    "lng": -0.173597
  },
  {
    "name": "Shrek's Adventure! London",
    "category": "Entertainment",
    "hashtag": "shreksadventurelondon",
    "posts": "833",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/shreksadventurelondon.jpg",
    "copy": "\"Sometimes things are more than they appear\" Donkey was famously urged by Shrek, but not at the must-see Shrek's Adventure! London where you can embark on an immersive journey into the world of the Green Ogre and his ( perhaps a little bit more sociable) friends. ",
    "hotness": 1.0232,
    "lat": 51.501749,
    "lng": -0.118942
  },
  {
    "name": "Osterley Park and House",
    "category": "Entertainment",
    "hashtag": "osterleyparkandhouse",
    "posts": "393",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/osterleyparkandhouse.jpg",
    "copy": "This neo-classical manor house was built in the 1570s for one of the King Edward's VI bankers. Since then, the mansion grew into a complex of large houses designed by Robert Adam that for years have served as county retreats for wealthy families. ",
    "hotness": 1.0102,
    "lat": 51.493188,
    "lng": -0.321777
  },
  {
    "name": "City Cruises",
    "category": "Entertainment",
    "hashtag": "citycruiseslondon",
    "posts": "391",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/citycruiseslondon.jpg",
    "copy": "City Cruises let you explore London like you have never seen it before! One of the best sightseeing tours offers the unique experience of sailing down the River Thames and seeing the top London landmarks such as Big Ben, Tower Bridge, and The London Eye in one go! ",
    "hotness": 1.0102,
    "lat": 51.501793,
    "lng": -0.122466
  },
  {
    "name": "Crystal Maze",
    "category": "Entertainment",
    "hashtag": "crystalmazelondon",
    "posts": "352",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/crystalmazelondon.jpg",
    "copy": "A tribute to the famous 90's TV show, \"The Crystal Maze\" was brought to life thanks to a Kickstarter campaign organized by a group of devoted show's fans. It's a fun, and exciting activity for those who have always dreamt of being a part of a game TV show!",
    "hotness": 1.009,
    "lat": 51.532924,
    "lng": -0.106171
  },
  {
    "name": "All England Lawn Tennis and Croquet Club",
    "category": "Entertainment",
    "hashtag": "allenglandlawntennisandcroquetclub",
    "posts": "289",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/allenglandlawntennisandcroquetclub.jpg",
    "copy": "Also known as All England Club, since 1868 has been operating as a private member's club, that is best known for hosting the Wimbledon Championships, that is the only Grand Slam tennis event held on grass. ",
    "hotness": 1.0071,
    "lat": 51.432371,
    "lng": -0.213109
  },
  {
    "name": "Crystal Palace National Sports Centre",
    "category": "Entertainment",
    "hashtag": "crystalpalacenationalsportscentre",
    "posts": "259",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/crystalpalacenationalsportscentre.jpg",
    "copy": "Located in South London, at Crystal Palace, the National Sports Centre is one of the largest sports centers with athletics stadium in the capital. The building was designed under Sir Leslie Martin between 1953 ' 54 and is now a Grade II listed building.",
    "hotness": 1.0063,
    "lat": 51.421148,
    "lng": -0.066300
  },
  {
    "name": "Queen Elizabeth's Hunting Lodge",
    "category": "Entertainment",
    "hashtag": "queenelizabethshuntinglodge",
    "posts": "47",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/queenelizabethshuntinglodge.jpg",
    "copy": "The building is a Grade II listed former hunting lodge commissioned by Henry VIII in 1542 and renovated in 1589 by Queen Elizabeth I. The premise is used as a museum to host a collection of artifacts organised around Tudors dynasty with various Tudor dressing up activities. ",
    "hotness": 1,
    "lat": 51.637416,
    "lng":  0.029489
  }
];

var foodData = [
  {
    "name": "Sketch London",
    "category": "Food & Dining",
    "hashtag": "sketchlondon",
    "posts": "43,775",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sketchlondon.jpg",
    "copy": "With walls decorated edge to edge with funny drawings, and bubblegum pink plush armchairs, Sketch London's outlandish interiors will make you gawk in astonishment! Visit it for a high - tea or pick something from the \"standard\" Michelin three-starred menu. ",
    "hotness": 10,
    "lat": 51.512693,
    "lng": -0.141528999999991
  },
  {
    "name": "Aqua Shard",
    "category": "Food & Dining",
    "hashtag": "aquashard",
    "posts": "37,347",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/aquashard.jpg",
    "copy": "Situated in the London's famous edifice ' The Shard, the restaurant offers a fine dining experience with a stunning view. Visit it for a taste of contemporary British cuisine, or a chilled tipple from a spectacular three-storey atrium bar. ",
    "hotness": 8.6542,
    "lat": 51.5045187,
    "lng": -0.0867064000000255
  },
  {
    "name": "Hawksmoor",
    "category": "Food & Dining",
    "hashtag": "hawksmoor",
    "posts": "36,367",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hawksmoor.jpg",
    "copy": "Everything that is served at Hawksmoor, from the seasonal vegetables to beef from grass-fed native cattle is a combination of the best British ingredients. Must- visit if you fancy having a quality rump steak or a native lobster! ",
    "hotness": 8.4491,
    "lat": 51.5097213,
    "lng": -0.136162399999989
  },
  {
    "name": "Cereal Killer Cafe",
    "category": "Food & Dining",
    "hashtag": "cerealkillercafe",
    "posts": "23,544",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/cerealkillercafe.jpg",
    "copy": "Breakfast is the most important meal of the day. Having your first meal at the Cereal Killer Caf' means not only will you be filled up for the day but also retrieve some of your precious childhood memories. \r\n",
    "hotness": 5.7644,
    "lat": 51.5237469,
    "lng": -0.0713390999999319
  },
  {
    "name": "Petersham Nurseries",
    "category": "Food & Dining",
    "hashtag": "petershamnurseries",
    "posts": "23,052",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/petershamnurseries.jpg",
    "copy": "Simplicity and minimalism are at the heart of Petersham Nurseries dining philosophy. The restaurant's focus is on quality ingredients and Italian flavors. Apart from a delicious dining experience, the restaurant also offers various horticulture workshops! \r\n",
    "hotness": 5.6614,
    "lat": 51.4471997,
    "lng": -0.302432400000043
  },
  {
    "name": "Bob Bob Ricard",
    "category": "Food & Dining",
    "hashtag": "bobbobricard",
    "posts": "20,840",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bobbobricard.jpg",
    "copy": "A true gem of the Soho landscape, Bob Bob Ricard specialises in serving luxury English and Russian food that can be consumed in its art-deco All Booth Dining Rooms. It's the best place for those who like bit of extravagance now and then. ",
    "hotness": 5.1983,
    "lat": 51.5123587,
    "lng": -0.137258599999996
  },
  {
    "name": "Ace Cafe London",
    "category": "Food & Dining",
    "hashtag": "acecafelondon",
    "posts": "19,708",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/acecafelondon.jpg",
    "copy": "Rock's Roll is not dead at Ace's Caf'. Established as long ago as in 1938, this first London's roadhouse diner is the capital of the \"cafe racing\" phenomenon.  Visit it for a hearty full English Breakfast and a cup of black coffee to keep the levels of adrenaline and energy up.  ",
    "hotness": 4.9613,
    "lat": 51.5412794,
    "lng": -0.277766199999974
  },
  {
    "name": "Berners Tavern",
    "category": "Food & Dining",
    "hashtag": "bernerstavern",
    "posts": "16,881",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bernerstavern.jpg",
    "copy": "Simple, yet elegant. The unique combination of Micheline starred cusine and s breathtaking setting, is what has attracted many to the Berners Tavern, including Geroge Clooney who has allegedly chosen it for a first date with his girlfriend at the time - Amal Alamuddin.  ",
    "hotness": 4.3695,
    "lat": 51.5166544,
    "lng": -0.136104499999988
  },
  {
    "name": "The Wolseley",
    "category": "Food & Dining",
    "hashtag": "thewolseley",
    "posts": "12,463",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thewolseley.jpg",
    "copy": "It's hard to pass by The Wolseley without wanting to step in, even for a quick tipple. This all-day, ritzy  - style caf' sits right in the middle of the iconic Piccadilly Street, waiting for you to come in and enjoy the delights of European Grand Caf' Traditional cuisine. ",
    "hotness": 3.4445,
    "lat": 51.5074095,
    "lng": -0.140920300000062
  },
  {
    "name": "Tom's Kitchen",
    "category": "Food & Dining",
    "hashtag": "tomskitchen",
    "posts": "10,456",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/tomskitchen.jpg",
    "copy": "Prepared to be truly spoilt here. Tom's Kitchen takes the quality of food and service seriously to deliver the best dining experience. Pop in, whenever you feel like eating your feelings, delicious comfort food is served in a calm and informal environment. ",
    "hotness": 3.0243,
    "lat": 51.4904425,
    "lng": -0.168070400000033
  },
  {
    "name": "The Churchill Arms",
    "category": "Food & Dining",
    "hashtag": "churchillarms",
    "posts": "10,390",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/churchillarms.jpg",
    "copy": "Often described as one of London's most colourful pubs, the Churchill Arms is a definitive favourite spot for Instagrammers. Adorned with colourful flower displays all year, if you're around check out the amazing Christmas display.",
    "hotness": 3.0105,
    "lat": 51.50693,
    "lng": -0.194792000000007
  },
  {
    "name": "Sushi Samba",
    "category": "Food & Dining",
    "hashtag": "sushisambalondon",
    "posts": "8,202",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sushisambalondon.jpg",
    "copy": "If sky-high dining, on the 38th floor of one of London's most iconic buildings isn't the perfect photo opportunity ' we don't know what is. The eclectic mix of Japanese-Brazilian-Peruvian set in a cool surrounding make Sushi Samba a must see while in the capital.",
    "hotness": 2.5524,
    "lat": 51.5161743,
    "lng": -0.0809401999999864
  },
  {
    "name": "Dinner by Heston Blumenthal",
    "category": "Food & Dining",
    "hashtag": "dinnerbyhestonblumenthal",
    "posts": "7,448",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/dinnerbyhestonblumenthal.jpg",
    "copy": "When is an Orange not an Orange? When it's a world-famous chicken liver mousse conjured up by the one and only Heston Blumenthal in Dinner by Heston Blumenthal. You'll never see food the same again at this 2-star Michelin restaurant.",
    "hotness": 2.3946,
    "lat": 51.502161,
    "lng": -0.159963999999945
  },
  {
    "name": "German Gymnasium",
    "category": "Food & Dining",
    "hashtag": "germangymnasium",
    "posts": "7,422",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/germangymnasium.jpg",
    "copy": "This former gym, in a grade II listed building, has been lovingly transformed into a restaurant serving Mittel-European dishes all day long. Spread across two floors and with comfy heated terraces, what's not to love?",
    "hotness": 2.3891,
    "lat": 51.5323482,
    "lng": -0.125374999999963
  },
  {
    "name": "Galvin at Windows",
    "category": "Food & Dining",
    "hashtag": "galvinatwindows",
    "posts": "7,361",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/galvinatwindows.jpg",
    "copy": "Dine in style, and snap a few shots, on the top floor of the London Hilton at Galvin at Windows. This Michelin star restaurant, launched in 2006, offers incredible 360 degree views of London during the day and at night.",
    "hotness": 2.3763,
    "lat": 51.505555,
    "lng": -0.150143000000071
  },
  {
    "name": "Dandelyan",
    "category": "Food & Dining",
    "hashtag": "dandelyan",
    "posts": "6,398",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/dandelyan.jpg",
    "copy": "Come for the award-winning drinks but stay for the amazing d'cor. Dandelyan challenges the typical bar setting borrowing inspiration from Sea Containers house with pink banquettes and a distinctive green marble bar. The best part? The river views.",
    "hotness": 2.1747,
    "lat": 51.5085471,
    "lng": -0.106825999999955
  },
  {
    "name": "Pollen Street Social",
    "category": "Food & Dining",
    "hashtag": "pollenstreetsocial",
    "posts": "5,773",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/pollenstreetsocial.jpg",
    "copy": "Opened in 2011, Pollen Street Social serves incredible food in a social setting. Whether you come for the food, the Champagne or the private areas or the bar, the relaxed atmosphere and vibe will keep you coming back for more.",
    "hotness": 2.0439,
    "lat": 51.5133756,
    "lng": -0.14232370000002
  },
  {
    "name": "Regency Caf'",
    "category": "Food & Dining",
    "hashtag": "regencycafe",
    "posts": "2,584",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/regencycafe.jpg",
    "copy": "Described as 'stodgetastic' by TimeOut, you should have a good indication of what to expect at this art deco themed caf'. Regency Caf' is frequently ranked as one of the best restaurants in London, take a trip and see for yourself. ",
    "hotness": 1.3762,
    "lat": 51.4939939,
    "lng": -0.132223500000009
  },
  {
    "name": "Union Street Caf'",
    "category": "Food & Dining",
    "hashtag": "unionstreetcafe",
    "posts": "2,460",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/unionstreetcafe.jpg",
    "copy": "No two days are ever the same at Union Street Caf', due to the daily changing menu. This converted warehouse, located in Southwark, serves Mediterranean dishes. The best part about? Gordan Ramsey is the owner.",
    "hotness": 1.3503,
    "lat": 51.5035938,
    "lng": -0.101238999999964
  },
  {
    "name": "Madison London",
    "category": "Food & Dining",
    "hashtag": "madisonlondon",
    "posts": "2,148",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/madisonlondon.jpg",
    "copy": "Get a taste of the Manhattan lifestyle in the UK at Madison London. The restaurant serves fantastic burgers and slow cooked classics from the wood fired Josper and when you're ready to take a few pics, the roof top terrace offers incredible views of the city skyline.",
    "hotness": 1.2849,
    "lat": 51.513618,
    "lng": -0.0954100000000153
  },
  {
    "name": "Chez Bruce",
    "category": "Food & Dining",
    "hashtag": "chezbruce",
    "posts": "2,109",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/chezbruce.jpg",
    "copy": "If you're in need of high-end French dining, SW17 is the place to be. Chez Bruce, just off Wandsworth Common, is a simply decorated, award winning restaurant serving exceptional food and an extensive cheeseboard.",
    "hotness": 1.2768,
    "lat": 51.4460109,
    "lng": -0.165649099999996
  },
  {
    "name": "Restaurant Gordon Ramsay",
    "category": "Food & Dining",
    "hashtag": "restaurantgordonramsay",
    "posts": "1,961",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/restaurantgordonramsay.jpg",
    "copy": "This 3-star Michelin star restaurant owned by Gordan Ramsey has been serving incredible food in an intimate setting for 20 years. The French dishes served at the flagship restaurant both taste and look amazing, making for some great photo opportunities.",
    "hotness": 1.2458,
    "lat": 51.486431,
    "lng": -0.157785
  },
  {
    "name": "Bleecker",
    "category": "Food & Dining",
    "hashtag": "bleeckerburger",
    "posts": "1,780",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bleeckerburger.jpg",
    "copy": "There are burgers and there are BURGERS, Bleecker Burgers is the latter. Started in 2012 by an ex-lawyer from New York who moved to London, this pop-up offers great tasting burgers street food style burgers ' delish!",
    "hotness": 1.2079,
    "lat": 51.4965056,
    "lng": -0.144654700000046
  },
  {
    "name": "Tokyo Diner",
    "category": "Food & Dining",
    "hashtag": "tokyodiner",
    "posts": "1,768",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/tokyodiner.jpg",
    "copy": "Want a taste of Tokyo in London? Toyko Diner is the place to be. Set over 3 floors, the restaurant has made a commitment to sustainably source their ingredients. If you love simple and authentic Japanese cuisine, pop in for a mouth-watering meal.",
    "hotness": 1.2054,
    "lat": 51.512492,
    "lng": -0.129031
  },
  {
    "name": "Prospect of Whitby",
    "category": "Food & Dining",
    "hashtag": "prospectofwhitby",
    "posts": "1,557",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/prospectofwhitby.jpg",
    "copy": "Sipping a pint by the Thames, what could be better? This historic riverside pub is usually busy all year round with tourists and Londoners alike, but the real magic are the Thames views from Wapping.",
    "hotness": 1.1612,
    "lat": 51.507270,
    "lng": -0.050530
  },
  {
    "name": "Veeraswamy",
    "category": "Food & Dining",
    "hashtag": "veeraswamy",
    "posts": "1,403",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/veeraswamy.jpg",
    "copy": "The Maharajah-inspired restaurants bold colours and intricate designs make it the perfect spot for an Instagram shot. Not to mention the high-end 1-star Indian cuisine that has been served in the restaurant since 1926.",
    "hotness": 1.129,
    "lat": 51.5100071,
    "lng": -0.13786719999996
  },
  {
    "name": "Wong Kei",
    "category": "Food & Dining",
    "hashtag": "wongkei",
    "posts": "1,356",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wongkei.jpg",
    "copy": "Once labelled 'the rudest restaurant in London', Wong Kei has given itself a new lease of life. The restaurant now offers a calm and pleasant atmosphere, serving a huge array of Cantonese classics in an authentic setting.",
    "hotness": 1.1191,
    "lat": 51.5114669,
    "lng": -0.132280100000003
  },
  {
    "name": "Hakkasan London",
    "category": "Food & Dining",
    "hashtag": "hakkasanlondon",
    "posts": "1,269",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hakkasanlondon.jpg",
    "copy": "The Hakkasan motto of 'elegance, energy and invention' are certainly true. This Michelin starred Cantonese restaurant serves beautiful high-end food in a subdued setting, perfect for date nights ' make sure your cameras good in low light!",
    "hotness": 1.1009,
    "lat": 51.5102647,
    "lng": -0.145000500000037
  },
  {
    "name": "Locanda Locatelli",
    "category": "Food & Dining",
    "hashtag": "locandalocatelli",
    "posts": "1,218",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/locandalocatelli.jpg",
    "copy": "Located in the Churchill Hotel on Seymour Street, Locanda Locatelli is the London restaurant of Italian chef Giorgio Locatelli serving ' you guessed it ' classic Italian food. Make sure to check out the breads and extensive wine selection!",
    "hotness": 1.0902,
    "lat": 51.5151228,
    "lng": -0.15728660000002
  },
  {
    "name": "Club Gascon",
    "category": "Food & Dining",
    "hashtag": "clubgascon",
    "posts": "1,213",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/clubgascon.jpg",
    "copy": "This multi award-winning restaurant needs little introduction. Club Gascon has been whetting people's appetites since 1999 when it won best newcomer, and the south-west French menu has been delighting customers ever since with it's incredible food and wine selection.",
    "hotness": 1.0892,
    "lat": 51.5186292,
    "lng": -0.100236399999972
  },
  {
    "name": "Mandarin Oriental Hyde Park",
    "category": "Food & Dining",
    "hashtag": "mandarinorientalhydepark",
    "posts": "1,040",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/mandarinorientalhydepark.jpg",
    "copy": "Not only a 5-star hotel located in exclusive Knightsbridge, the Mandarin Oriental has not one but two outstanding restaurants, a bar, a lounge and impeccable service and d'cor that will make friends and family jealous of your Instagram feed. ",
    "hotness": 1.053,
    "lat": 51.5021402,
    "lng": -0.160041099999944
  },
  {
    "name": "Alain Ducasse at the Dorchester",
    "category": "Food & Dining",
    "hashtag": "alainducasseatthedorchester",
    "posts": "1,019",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/alainducasseatthedorchester.jpg",
    "copy": "When imaginative Modern French cuisine just isn't enough, Alain Ducasse at the Dorchester provides a fibre-optic light backdrop that needs to be seen to be believed. This Mayfair restaurant offers glitz, glam and great food in abundance.",
    "hotness": 1.0486,
    "lat": 51.5072938,
    "lng": -0.152341200000023
  },
  {
    "name": "Yauatcha",
    "category": "Food & Dining",
    "hashtag": "yauatchalondon",
    "posts": "1,007",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/yauatchalondon.jpg",
    "copy": "Invite friends for some amazing dim sum at Yauatcha in Soho. Established in 2004 by Alan Yau, he also created Wagamama's and Thai Busaba, the Chinese restaurant is known for it's huge selection of dim sum and contemporary setting.",
    "hotness": 1.0461,
    "lat": 51.513756,
    "lng": -0.134907
  },
  {
    "name": "La Trompette",
    "category": "Food & Dining",
    "hashtag": "latrompette",
    "posts": "968",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/latrompette.jpg",
    "copy": "Want style, sophistication and modern French cuisine? La Trompette has it all. This Chiswick based restaurant prides itself on offering some of the best food in London without the normal high price tag.  ",
    "hotness": 1.0379,
    "lat": 51.492155,
    "lng": -0.254737
  },
  {
    "name": "Simpson's-in-the-Strand",
    "category": "Food & Dining",
    "hashtag": "simpsonsinthestrand",
    "posts": "915",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/simpsonsinthestrand.jpg",
    "copy": "Being one of the first restaurants in London to be deemed worthy enough of a Michelin star is testament to the quality of food at Simpson's-in-the-Strand. The former coffee house has been serving traditional British food since 1828.",
    "hotness": 1.0268,
    "lat": 51.510698,
    "lng": -0.119750
  },
  {
    "name": "The Breakfast Club",
    "category": "Food & Dining",
    "hashtag": "thebreakfastclublondon",
    "posts": "889",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thebreakfastclublondon.jpg",
    "copy": "Paying homage to the 1980s, the Breakfast Club is the mecca for vintage and retro Instagram pictures. Its exposed brick walls are covered end to end in '80's memorabilia, so head down and snap a picture of the past.",
    "hotness": 1.0214,
    "lat": 51.3747687,
    "lng": -0.093879300000026
  },
  {
    "name": "Farmacy",
    "category": "Food & Dining",
    "hashtag": "farmacyuk",
    "posts": "855",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/farmacyuk.jpg",
    "copy": "Set in Notting Hill, Farmacy is a vegan and vegetarians dream. The planet-based dishes on offer come in an array of wonderful colours that not only taste incredible but also look great to capture on your phone.",
    "hotness": 1.0142,
    "lat": 51.5182248,
    "lng": -0.152077800000029
  },
  {
    "name": "Kai Mayfair",
    "category": "Food & Dining",
    "hashtag": "kaimayfair",
    "posts": "838",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kaimayfair.jpg",
    "copy": "Kai Mayfair offers elegance and sophistication if you're looking for Chinese fine dining. The multi award-winning, Michelin star restaurant pays homage to traditional Chinese cooking and draft while also taking an innovate approach to food.",
    "hotness": 1.0107,
    "lat": 51.5154097,
    "lng": -0.192843900000071
  },
  {
    "name": "Tower Restaurant",
    "category": "Food & Dining",
    "hashtag": "towerrestaurant",
    "posts": "819",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/towerrestaurant.jpg",
    "copy": "A huge wine selection, live music and an outstanding seasonal British menu are just some of the reasons you should check out the OXO Tower Restaurant. Located along the Southbank on the OXO Tower rooftop, you'll have views to die for.",
    "hotness": 1.0067,
    "lat": 51.5087515,
    "lng": -0.151571800000056
  },
  {
    "name": "The Ivy",
    "category": "Food & Dining",
    "hashtag": "theivylondon",
    "posts": "787",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/theivylondon.jpg",
    "copy": "A part of London's food and social scene since 1917, The Ivy in Covent Garden has been popular for nearly a century. The a la carte menu takes influences from seasonal British dishes and the interiors stained glass and oak panelling are picture perfect.",
    "hotness": 1,
    "lat": 51.508347,
    "lng": -0.108278000000041
  }
];

var gemsData = [
  {
    "name": "Pop Brixton",
    "category": "Hidden Gem",
    "hashtag": "popbrixton",
    "posts": "27,514",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/popbrixton.jpg",
    "copy": "Pop Brixton is a pop up project that has given new life to disused land and turned it into a creative space for local, independent businesses. Check out the website for details on what's up and coming ",
    "hotness": 10,
    "lat": 51.4633416,
    "lng": -0.112341600000036
  },
  {
    "name": "Eltham Palace",
    "category": "Hidden Gem",
    "hashtag": "elthampalace",
    "posts": "9,259",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/elthampalace.jpg",
    "copy": "A large house in Eltham in the Royal borough of Greenwich, it is an unoccipied former Royal residence owned by the Crown estates. The interior of the Art Deco house has been critiqued as a masterpiece of modern design.",
    "hotness": 4.0167,
    "lat": 51.4470483,
    "lng": 0.0484350000000404
  },
  {
    "name": "Thames Barrier",
    "category": "Hidden Gem",
    "hashtag": "thamesbarrier",
    "posts": "9,051",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thamesbarrier.jpg",
    "copy": "The Thames Barrier is responsible for stopping London from flooding during high tides and storms coming in from the North Sea. Orgionally built in 1984, it it used to restore the river's flow towards the sea. ",
    "hotness": 3.9485,
    "lat": 51.4949853,
    "lng": 0.0372747999999774
  },
  {
    "name": "Little Nan's Bar",
    "category": "Hidden Gem",
    "hashtag": "littlenansbar",
    "posts": "8,570",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/littlenansbar.jpg",
    "copy": "A kitsch living room bar located in Deptford, opened in honour of Tristan Scutts grandmother who lived to the age of 104. Order cocktails by the teapot or order some nostalgic food in the form of fish finger sarnies. ",
    "hotness": 3.7909,
    "lat": 51.4787399,
    "lng": -0.0271195000000262
  },
  {
    "name": "Osterley Park",
    "category": "Hidden Gem",
    "hashtag": "osterleypark",
    "posts": "7,756",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/osterleypark.jpg",
    "copy": "A large park and one of the largest open spaces in London. The house served as a country retreat for many wealthy families and is located in the London borough of Hounslow. ",
    "hotness": 3.5241,
    "lat": 51.489536,
    "lng": -0.345492000000036
  },
  {
    "name": "Palm Vaults",
    "category": "Hidden Gem",
    "hashtag": "palmvaults",
    "posts": "6,926",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/palmvaults.jpg",
    "copy": "Popular instagram hotspot, Palm Vaults is a cafe filled with hanging baskets, pastel colours and retro prints. If you're after coffee, cake and some instant cool points head to Hackney now  ",
    "hotness": 3.252,
    "lat": 51.5492229,
    "lng": -0.0552691000000323
  },
  {
    "name": "Fashion and Textile Museum",
    "category": "Hidden Gem",
    "hashtag": "fashionandtextilemuseum",
    "posts": "6,278",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/fashionandtextilemuseum.jpg",
    "copy": "The only museum in the UK soley dedicated to showcasing developments in contemporary fashion. Founded by British designer Zandra Rhodes in 2003, this museum is known for its ongoing programme of exciting exhibitions. ",
    "hotness": 3.0397,
    "lat": 51.5011298,
    "lng": -0.081914099999949
  },
  {
    "name": "Chelsea Physic Garden",
    "category": "Hidden Gem",
    "hashtag": "chelseaphysicgarden",
    "posts": "5,684",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/chelseaphysicgarden.jpg",
    "copy": "Established as the apothecaries garden in London in 1673, it's one of the oldest botanical gardens in Britain. A great place to escape the busy city and admire nature!",
    "hotness": 2.845,
    "lat": 51.484447,
    "lng": -0.16235000000006
  },
  {
    "name": "Churchill War Rooms",
    "category": "Hidden Gem",
    "hashtag": "churchillwarrooms",
    "posts": "4,777",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/churchillwarrooms.jpg",
    "copy": "A museum in London comprising of a historic underground complex that housed a British Government command centre throughout the Second World War. Eastablished in 1984 as a museum, it's still as popular as ever with history fans. ",
    "hotness": 2.5477,
    "lat": 51.5020865,
    "lng": -0.128729600000042
  },
  {
    "name": "Royal Mews",
    "category": "Hidden Gem",
    "hashtag": "royalmews",
    "posts": "3,364",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/royalmews.jpg",
    "copy": "The Royal Mews belongs to the Royal Family and is located close to Buckingham Palace. The site is open to the public for most of the year and is worth a visit if you're in the area. ",
    "hotness": 2.0846,
    "lat": 51.4987662,
    "lng": -0.144487799999979
  },
  {
    "name": "Walpole Park",
    "category": "Hidden Gem",
    "hashtag": "walpolepark",
    "posts": "3,339",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/walpolepark.jpg",
    "copy": "A municipal urban public open space run by London borough of Ealing, it was opened to the public for the first time in May 1901 and is still popular with many locals and tourists. ",
    "hotness": 2.0764,
    "lat": 51.5086871,
    "lng": -0.309569600000032
  },
  {
    "name": "Fenton House",
    "category": "Hidden Gem",
    "hashtag": "fentonhouse",
    "posts": "2,771",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/fentonhouse.jpg",
    "copy": "A 17th-century merchant's house in Hampstead in north London which now belongs to the National Trust. The house has a 300-year old orchard where they hold an annual Apple Day where memebers of the public can savour some of its rare and delicious apples. ",
    "hotness": 1.8902,
    "lat": 51.5588874,
    "lng": -0.179613700000004
  },
  {
    "name": "Two Temple Place",
    "category": "Hidden Gem",
    "hashtag": "twotempleplace",
    "posts": "2,034",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/twotempleplace.jpg",
    "copy": "A building situated near Victoria Embankment in central London. It's known for its architecture and contains notable works by the likes of William Silver Frith and Sir George Frampton. ",
    "hotness": 1.6486,
    "lat": 51.5116353,
    "lng": -0.112242899999956
  },
  {
    "name": "Sutton House",
    "category": "Hidden Gem",
    "hashtag": "suttonhouse",
    "posts": "1,899",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/suttonhouse.jpg",
    "copy": "Built in 1535 by Sir Raplh Sadler,it is one of the oldest residential buildings in Hackney and a rare example of a red brick building from the Tudor period. ",
    "hotness": 1.6044,
    "lat": 51.548482,
    "lng": -0.0504238999999416
  },
  {
    "name": "Charlton Park",
    "category": "Hidden Gem",
    "hashtag": "charltonpark",
    "posts": "1,752",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/charltonpark.jpg",
    "copy": "A public park in south east London in the Royal borough of Greenwich. Within the park, you can find a Japanese style herb garden and pond garden, perfect for escaping the busy city for an afternoon.",
    "hotness": 1.5562,
    "lat": 51.480185,
    "lng": 0.043220099999985
  },
  {
    "name": "Victoria Tower Gardens",
    "category": "Hidden Gem",
    "hashtag": "victoriatowergardens",
    "posts": "1,599",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/victoriatowergardens.jpg",
    "copy": "A public park along the north bank of the River Thames, forming part of the Thames Embankment. This is a popular place for people to come and soak in some sunshine, surrounded by impressive views of the Palace of Westminster. ",
    "hotness": 1.5061,
    "lat": 51.4969444,
    "lng": -0.125
  },
  {
    "name": "Keats House",
    "category": "Hidden Gem",
    "hashtag": "keatshouse",
    "posts": "1,530",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/keatshouse.jpg",
    "copy": "A writer's house museum once occupied by the romantic poet John Keats. Located in Hampstead toward the edge of inner North London it's easily accessible and worth checking out if you're a romance fan! ",
    "hotness": 1.4834,
    "lat": 51.5555762,
    "lng": -0.167941000000042
  },
  {
    "name": "Cartoon Museum",
    "category": "Hidden Gem",
    "hashtag": "cartoonmuseum",
    "posts": "1,477",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/cartoonmuseum.jpg",
    "copy": "A museum dedicated to British cartoons, caricatures, comic strips and animation, owned and operated by the Cartoon Art Trust. It has a library of over 5,000 books and 4,000 comics relating to the subject. ",
    "hotness": 1.4661,
    "lat": 51.517661,
    "lng": -0.125966999999946
  },
  {
    "name": "Oak Hill Park",
    "category": "Hidden Gem",
    "hashtag": "oakhillpark",
    "posts": "1,351",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oakhillpark.jpg",
    "copy": "It is one of Barnet's premier parks and received a Green Flag award. This large area of parkland has a wide range of facilities including an outdoor gym and a golf course. ",
    "hotness": 1.4248,
    "lat": 51.6384262,
    "lng": -0.155136599999992
  },
  {
    "name": "Marble Hill House",
    "category": "Hidden Gem",
    "hashtag": "marblehillhouse",
    "posts": "1,063",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/marblehillhouse.jpg",
    "copy": "Located in Richmond upon Thames, Marble Hill House is a Palladian villa built in 1724, the compact design became famous as the standard model for the Georgian English villa. ",
    "hotness": 1.3304,
    "lat": 51.4494922,
    "lng": -0.313284999999951
  },
  {
    "name": "Pollock's Toy Museum",
    "category": "Hidden Gem",
    "hashtag": "pollockstoymuseum",
    "posts": "1,026",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/pollockstoymuseum.jpg",
    "copy": "The museum was started in 1956 in a single attic room, near Covent Garden. By 1969 the collection had grown so much that the museum moved to 1 Scala Street, it's still open today and is run by the grandson of the founder. ",
    "hotness": 1.3183,
    "lat": 51.5203078,
    "lng": -0.135242100000028
  },
  {
    "name": "Ham Common",
    "category": "Hidden Gem",
    "hashtag": "hamcommon",
    "posts": "1,014",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hamcommon.jpg",
    "copy": "A conservation area located in Richmon upon Thames, it is the second largest area of common land in the borough. It contains grassland, woodland and is an area of ecological interest. ",
    "hotness": 1.3143,
    "lat": 51.4351502,
    "lng": -0.307283900000016
  },
  {
    "name": "Museum of London Docklands",
    "category": "Hidden Gem",
    "hashtag": "museumoflondondocklands",
    "posts": "957",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/museumoflondondocklands.jpg",
    "copy": "A museum located in Poplar, east London. It tells the history of London's River Thames and the growth of the Docklands. The museum opened in 2003 and is a short walk from Canary Wharf. ",
    "hotness": 1.2956,
    "lat": 51.5075283,
    "lng": -0.0238458999999693
  },
  {
    "name": "Deptford Creek",
    "category": "Hidden Gem",
    "hashtag": "deptfordcreek",
    "posts": "851",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/deptfordcreek.jpg",
    "copy": "The tidal reach of the River Ravensbourne which flows off the River Thames, its an area of nature conservation and discovery. ",
    "hotness": 1.2609,
    "lat": 51.4792064,
    "lng": -0.0188567000000148
  },
  {
    "name": "Chiswick Fire Station",
    "category": "Hidden Gem",
    "hashtag": "chiswickfirestation",
    "posts": "727",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/chiswickfirestation.jpg",
    "copy": "A smart all -day bar and restaurant in the middle of Chiswick high road, with its contemporary design this bar has a bright and instagram worthy interior.",
    "hotness": 1.2203,
    "lat": 51.4923005,
    "lng": -0.257462400000009
  },
  {
    "name": "Evans & Peels Detective Agency",
    "category": "Hidden Gem",
    "hashtag": "evansandpeeldetectiveagency",
    "posts": "627",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/evansandpeeldetectiveagency.jpg",
    "copy": "A little hideaway with great decor to create the perfect ambiance of the detective agency. With an interesting selection of spirits and food, a great place to hide away for the evening. ",
    "hotness": 1.1875,
    "lat": 51.4900556,
    "lng": -0.191119100000037
  },
  {
    "name": "Sydenham Hill Wood",
    "category": "Hidden Gem",
    "hashtag": "sydenhamhillwood",
    "posts": "505",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sydenhamhillwood.jpg",
    "copy": "Located on the northern slopes of the Norwood Ridge in Southwark, this wood is designated as a local nature reserve and convservation. The perfect place to take in a wilder side of London and escape the city for a while. ",
    "hotness": 1.1475,
    "lat": 51.4351627,
    "lng": -0.0668536000000586
  },
  {
    "name": "Jack the Ripper Museum",
    "category": "Hidden Gem",
    "hashtag": "jacktherippermuseum",
    "posts": "459",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/jacktherippermuseum.jpg",
    "copy": "The Jack the Ripper museum opened in August 2015. Located on Cable Street, it recreated the east London setting in which the unsolved murders took place in 1888. If you're into murder history, then this is a must see! ",
    "hotness": 1.1324,
    "lat": 51.5107921,
    "lng": -0.0679327000000285
  },
  {
    "name": "Jewel Tower",
    "category": "Hidden Gem",
    "hashtag": "jeweltower",
    "posts": "447",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/jeweltower.jpg",
    "copy": "Built in 1366 to house the personal treasure of Edward III. A surviving element of the royal Palace of Westminster, this popular historic landmark receives over 30,000 visits a year. ",
    "hotness": 1.1285,
    "lat": 51.4984536,
    "lng": -0.126390799999967
  },
  {
    "name": "Bank of England Museum",
    "category": "Hidden Gem",
    "hashtag": "bankofenglandmuseum",
    "posts": "435",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bankofenglandmuseum.jpg",
    "copy": "The museum is located within the Bank of England in the City of London. It's open to the public, free of charge on weekdays and holds an impressive collection, which is worth seeing! ",
    "hotness": 1.1245,
    "lat": 51.514135,
    "lng": -0.0876369999999724
  },
  {
    "name": "Wapping Hydraulic Power Station",
    "category": "Hidden Gem",
    "hashtag": "wappinghydraulicpowerstation",
    "posts": "324",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wappinghydraulicpowerstation.jpg",
    "copy": "Originally built in 1890 and used to power machinery across London, it closed in 1977 and became an arts centre. The Wapping Project continues its work in the arts to this day, through comissioning new works from artists. ",
    "hotness": 1.0882,
    "lat": 51.5073586,
    "lng": -0.0516073999999662
  },
  {
    "name": "Vestry House Museum",
    "category": "Hidden Gem",
    "hashtag": "vestryhousemuseum",
    "posts": "320",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/vestryhousemuseum.jpg",
    "copy": "A history museum in Walthamstow, focusing on the heritage of the local area. The collection includes various artifacts dating from the Victorian Era to the 20th Century. ",
    "hotness": 1.0869,
    "lat": 51.5840176,
    "lng": -0.0127523999999539
  },
  {
    "name": "Cherry Tree Wood",
    "category": "Hidden Gem",
    "hashtag": "cherrytreewood",
    "posts": "304",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/cherrytreewood.jpg",
    "copy": "A 5.3 hectare park in East Finchley, is a site of local importance for nature conservation. Containing woodland, grassland, playgrounds, a cafe and tennis courts, it has plenty to keep everyone entertained. ",
    "hotness": 1.0816,
    "lat": 51.586064,
    "lng": -0.159574300000031
  },
  {
    "name": "Addington Hills",
    "category": "Hidden Gem",
    "hashtag": "addingtonhills",
    "posts": "273",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/addingtonhills.jpg",
    "copy": "A park in Upper Shirley, the site largely cosists of woodland with London's largest area of heathland at its heart. ",
    "hotness": 1.0715,
    "lat": 51.3640442,
    "lng": -0.05690960000004
  },
  {
    "name": "Betts Park",
    "category": "Hidden Gem",
    "hashtag": "bettspark",
    "posts": "265",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bettspark.jpg",
    "copy": "Opened in December 1928 this public park in Penge, London borough of Bromley  has a number of attractions, including part of the old Croydon Canal. ",
    "hotness": 1.0688,
    "lat": 51.408824,
    "lng": -0.0645369000000073
  },
  {
    "name": "Crossness Pumping Station",
    "category": "Hidden Gem",
    "hashtag": "crossnesspumpingstation",
    "posts": "241",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/crossnesspumpingstation.jpg",
    "copy": "A former sewage pumping station designed by Sir Joseph Bazalgette and constructed in 1865. It features spectacular ornamental cast ironwork that has been described as a masterpiece of engineering. ",
    "hotness": 1.061,
    "lat": 51.508863,
    "lng": 0.138182000000029
  },
  {
    "name": "Town of Ramsgate",
    "category": "Hidden Gem",
    "hashtag": "townoframsgate",
    "posts": "192",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/townoframsgate.jpg",
    "copy": "A public house located at the centre of the ancient hamlet of Wapping in the London borough of Tower Hamlets. Despite changes throughout the years, the pub has a distinictive atmosphere. ",
    "hotness": 1.0449,
    "lat": 51.5034501,
    "lng": -0.0619839999999385
  },
  {
    "name": "Upminster Windmill",
    "category": "Hidden Gem",
    "hashtag": "upminsterwindmill",
    "posts": "114",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/upminsterwindmill.jpg",
    "copy": "A grade II listed mill located in the London borough of Havering built in 1803. It has been transformed into a museum and is now open to the public at selected times.  ",
    "hotness": 1.0193,
    "lat": 51.5578177,
    "lng": 0.244825999999989
  },
  {
    "name": "The Gay Hussar",
    "category": "Hidden Gem",
    "hashtag": "thegayhussar",
    "posts": "64",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/thegayhussar.jpg",
    "copy": "A celebrated Hungarian restaurant located at 2 Greek Street in Soho, central London. Founded by Victor Sassie in 1953, it's a popular destination for food fans. ",
    "hotness": 1.0029,
    "lat": 51.5148501,
    "lng": -0.131309600000009
  },
  {
    "name": "Casa Tua Camden",
    "category": "Hidden Gem",
    "hashtag": "casatuacamden",
    "posts": "55",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/casatuacamden.jpg",
    "copy": "One of two Italian restaurants in London opened by Giuseppe Miggianoa native from Italy, who moved to London in 2009. A winner of Time Out Love London Awards 2014. ",
    "hotness": 1,
    "lat": 51.5416167,
    "lng": -0.138005600000042
  }
];

var landmarksData = [
  {
    "name": "Big Ben",
    "category": "Landmark",
    "hashtag": "bigben",
    "posts": "2,803,311",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bigben.jpg",
    "copy": "Big Ben is the name given to the Great Bell of the clock residing over the north end of the Palace of Westminster. When visiting London for the first time, this is a must see and makes up a large percentage of London tagged instagram posts",
    "hotness": 10,
    "lat": 51.5007292,
    "lng": -0.124625400000014
  },
  {
    "name": "London Eye",
    "category": "Landmark",
    "hashtag": "londoneye",
    "posts": "2,349,774",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londoneye.jpg",
    "copy": "A giant ferris wheel located alongside the South Bank of the River Thames. Take a ride on the wheel if you want spectcaular views over the whole of London. A great location for all ages",
    "hotness": 8.5264,
    "lat": 51.503324,
    "lng": -0.119543000000021
  },
  {
    "name": "Tower Bridge",
    "category": "Landmark",
    "hashtag": "towerbridge",
    "posts": "1,552,808",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/towerbridge.jpg",
    "copy": "One of the most iconic landmarks in London, Tower Bridge is located near the Tower of London and is a bascule and suspension bridge crossing the River Thames. The deck is freely accesible to both cars and pedestrians but the upper deck forms part of the Tower Bridge Exhibition and holds an admin charge",
    "hotness": 5.937,
    "lat": 51.5054564,
    "lng": -0.0753564999999981
  },
  {
    "name": "Southbank",
    "category": "Landmark",
    "hashtag": "southbank",
    "posts": "1,075,220",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/southbank.jpg",
    "copy": "Southbank is the name given to a central area of London situatated along the Ssuth bank of the River Thames. A popular area during the summertime due to food markets, open air resturants and bars and street performers. If you are looking for a fun and lighthearted way to spend a few hours, this is the place for you",
    "hotness": 4.3853,
    "lat": 51.5071591,
    "lng": -0.115485799999988
  },
  {
    "name": "Covent Garden",
    "category": "Landmark",
    "hashtag": "coventgarden",
    "posts": "911,862",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/coventgarden.jpg",
    "copy": "Londons main theatre and entertainment area, Covent Garden is located in Londons West End. Both locals and tourists fill the elegant, car-free plaza to look in the shops, eat delicious food and even catch a show at the Royal Opera House",
    "hotness": 3.8545,
    "lat": 51.5117797,
    "lng": -0.123191099999985
  },
  {
    "name": "Buckingham Palace",
    "category": "Landmark",
    "hashtag": "buckinghampalace",
    "posts": "765,746",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/buckinghampalace.jpg",
    "copy": "Buckingham Palace has served as the offical London residence of the UK's royal family since 1837 and today is the administrative headquaters for Queen Elizabeth. Visitors flock here daily to see the Changing of the Guard and during the summer months the state rooms are open to the public",
    "hotness": 3.3798,
    "lat": 51.501364,
    "lng": -0.141889999999989
  },
  {
    "name": "Brick Lane",
    "category": "Landmark",
    "hashtag": "bricklane",
    "posts": "756,378",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bricklane.jpg",
    "copy": "Brick Lane is a street in east London. Spend a Sunday roaming the lane, hunting for antiques, vintage clothes and records, there is definately a bargin to be found. Don't forget to fuel up in one of the many resturants on offer",
    "hotness": 3.3493,
    "lat": 51.5220012,
    "lng": -0.0716827999999623
  },
  {
    "name": "London Bridge",
    "category": "Landmark",
    "hashtag": "londonbridge",
    "posts": "739,165",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonbridge.jpg",
    "copy": "Over time there have been several bridges named London Bridge, the current crossing opened in 1973. The bridge has featured in popular nursery rhyme 'London Bridge is falling down'  ",
    "hotness": 3.2934,
    "lat": 51.508018,
    "lng": -0.087374
  },
  {
    "name": "Oxford Street",
    "category": "Landmark",
    "hashtag": "oxfordstreet",
    "posts": "630,004",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oxfordstreet.jpg",
    "copy": "Attracting over half a million visitors a day, Oxford Street is home to over 300 major department stores and flagship retail stores. With everything you could ever need in walking distance, it's no wonder it's one of Londons most popular destinations",
    "hotness": 2.9387,
    "lat": 51.515150,
    "lng": -0.144583
  },
  {
    "name": "The Shard",
    "category": "Landmark",
    "hashtag": "theshard",
    "posts": "561,303",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/theshard.jpg",
    "copy": "If you are scared of heights, this one isn't for you! Standing tall at 309.7 metres, the Shard is the tallest building in both the UK and the European Union. Primarly made up of offices, the Shard does offer a viewing platform for tourists. Don't forget to book yourself into the resturant for great food and panoramic views of the city",
    "hotness": 2.7155,
    "lat": 51.504526,
    "lng": -0.085272
  },
  {
    "name": "Trafalgar Square",
    "category": "Landmark",
    "hashtag": "trafalgarsquare",
    "posts": "425,381",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/trafalgarsquare.jpg",
    "copy": "A public square based in the City of Westminster. It's name commemorates the Battle of Trafalgar. Nelson's Column, a 169 foot statue, can be found in the centre guarded by four lion statues",
    "hotness": 2.2739,
    "lat": 51.508143,
    "lng": -0.127915
  },
  {
    "name": "Tower of London",
    "category": "Landmark",
    "hashtag": "toweroflondon",
    "posts": "399,054",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/toweroflondon.jpg",
    "copy": "The Tower of London is a historic castle located on the north bank of the River Thames. The Crown Jewels of England are held in the tower. It has besieged several times and controlling the tower has been important to controlling the country. Tourists flock to see and explore the Tower of London and it is advised to book your tickets in advance ",
    "hotness": 2.1883,
    "lat": 51.5081124,
    "lng": -0.0759493000000475
  },
  {
    "name": "Piccadilly",
    "category": "Landmark",
    "hashtag": "piccadilly",
    "posts": "324,368",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/piccadilly.jpg",
    "copy": "Piccadily is a road in the City of Westminster joining Hyde Park Corner and Piccadily Circus. It also makes up one of the groups on the London Monopoly board",
    "hotness": 1.9457,
    "lat": 51.5087668,
    "lng": -0.138207800000032
  },
  {
    "name": "London Underground",
    "category": "Landmark",
    "hashtag": "londonunderground",
    "posts": "300,667",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonunderground.jpg",
    "copy": "The London Underground is a public transport system serving London and some adjacent counties. The network is made up of 270 stations, serviced by 11 different lines. The Underground is easy to navigate thanks to its colour coded design",
    "hotness": 1.8687,
    "lat": 51.508591,
    "lng": -0.124600
  },
  {
    "name": "Piccadilly Circus",
    "category": "Landmark",
    "hashtag": "piccadillycircus",
    "posts": "240,288",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/piccadillycircus.jpg",
    "copy": "Built to connect Regents Park with Piccadilly, Piccadily Circus is now one of the most popular locations in London. The space is well known for its video display and neon signs. ",
    "hotness": 1.6725,
    "lat": 51.5100913,
    "lng": -0.134567599999968
  },
  {
    "name": "St Paul's Cathedral",
    "category": "Landmark",
    "hashtag": "stpaulscathedral",
    "posts": "236,293",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/stpaulscathedral.jpg",
    "copy": "An Anglican cathedral that sits on Ludgate Hill at the highest point of the City of London. The cathedral is one of Londons most recognisable landmarks and its dome has dominated the London skyline for over 300 years. St Pauls Cathedral is open to the public, be sure to check visiting times and buy tickets online to avoid disapointment",
    "hotness": 1.6595,
    "lat": 51.5138453,
    "lng": -0.0983506000000034
  },
  {
    "name": "Leicester Square",
    "category": "Landmark",
    "hashtag": "leicestersquare",
    "posts": "184,991",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/leicestersquare.jpg",
    "copy": "Leicester Square can only be described as Londons home of entertainment. From West End shows to star studded premiers, grab a drink and a bite to eat and watch the world go by",
    "hotness": 1.4928,
    "lat": 51.510785,
    "lng": -0.129631
  },
  {
    "name": "Westminster Abbey",
    "category": "Landmark",
    "hashtag": "westminsterabbey",
    "posts": "179,088",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/westminsterabbey.jpg",
    "copy": "The Abbey we see today was built by Henry III in 1245, it is seen as one of the most important Gothic buildings in the UK and has the shrine of an Anglo-Saxon saint at its heart. Westminster Abbey is open for visitors all year round",
    "hotness": 1.4737,
    "lat": 51.4992921,
    "lng": -0.127309700000069
  },
  {
    "name": "Lombard Street",
    "category": "Landmark",
    "hashtag": "lombardstreet",
    "posts": "178,843",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/lombardstreet.jpg",
    "copy": "Lombard Street is notable for its connections to the banking and finance industries within London, dating back to medieval times. Located at Bank junction, Lombard Street is one of nine roads that converge by the Bank of England",
    "hotness": 1.4729,
    "lat": 51.512854,
    "lng": -0.087119
  },
  {
    "name": "The Mall",
    "category": "Landmark",
    "hashtag": "themall",
    "posts": "174,931",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/themall.jpg",
    "copy": "The Mall is a road running between Buckingham Palace and Tralgar Square through Admiralty Arch.The Mall began as a field for playing Pall-mall. Lined with trees the Mall was envisioned as a ceremonial route similar to Berlin and Washington DC. Annually The Mall is the finishing location for the Virgin London Marathon  ",
    "hotness": 1.4601,
    "lat": 51.5046485,
    "lng": -0.13387309999996
  },
  {
    "name": "Oxford Circus",
    "category": "Landmark",
    "hashtag": "oxfordcircus",
    "posts": "162,226",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oxfordcircus.jpg",
    "copy": "Oxford Circus is the infamous London tube station. Situated on the popular road interchange where Oxford Street meets Regents Street. ",
    "hotness": 1.4189,
    "lat": 50.3613472,
    "lng": -0.127529800000029
  },
  {
    "name": "Park Lane",
    "category": "Landmark",
    "hashtag": "parklane",
    "posts": "124,264",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/parklane.jpg",
    "copy": "Park Lane is a major road in Central London, connecting Hyde Park Corner in the south with Marble Arch in the north. It acts as a divide between Hyde Park and Mayfair. Modern day Park Lane is famous for its array of luxury hotels, in particular The Dorchester",
    "hotness": 1.2955,
    "lat": 51.508429,
    "lng": -0.154634
  },
  {
    "name": "Alexandra Palace",
    "category": "Landmark",
    "hashtag": "alexandrapalace",
    "posts": "105,016",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/alexandrapalace.jpg",
    "copy": "Alexandra Palace, also know as 'Ally Pally' is a grad II listed building located between Muswell Hill and Wood Green. Containing a concert hall, Ally Pally has hosted some of the worlds biggest music stars ",
    "hotness": 1.233,
    "lat": 51.5941783,
    "lng": -0.130773299999987
  },
  {
    "name": "Heathrow Airport",
    "category": "Landmark",
    "hashtag": "heathrowairport",
    "posts": "103,089",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/heathrowairport.jpg",
    "copy": "Heathrow Airport is a major international airport located on the outskirts of London. Heathrow serves as a gateway to not only Europe but also to the rest of the world. The airport is one of the top five busiest airports in the world",
    "hotness": 1.2267,
    "lat": 51.4700223,
    "lng": -0.454295499999944
  },
  {
    "name": "Westminster Bridge",
    "category": "Landmark",
    "hashtag": "westminsterbridge",
    "posts": "95,407",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/westminsterbridge.jpg",
    "copy": "A popular road and foot traffic bridge, linking Westmister Abbey and Big Ben with Lambeth. ",
    "hotness": 1.2018,
    "lat": 51.5008638,
    "lng": -0.12196449999999
  },
  {
    "name": "Hampton Court Palace",
    "category": "Landmark",
    "hashtag": "hamptoncourtpalace",
    "posts": "79,377",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hamptoncourtpalace.jpg",
    "copy": "Hampton Court Palace, is a royal palace found in Richmond. The palace is open to the public and is a major London tourist attraction. The palace is the perfect place for families due to the family friendly educational activies put on daily. Don't forget to spend an hour getting lost in the infamous gardens",
    "hotness": 1.1497,
    "lat": 51.4036128,
    "lng": -0.337762300000009
  },
  {
    "name": "Mansion House",
    "category": "Landmark",
    "hashtag": "mansionhouse",
    "posts": "74,244",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/mansionhouse.jpg",
    "copy": "Mansion House is located in the heart of the city above Bank station, in a Grade I listed building. It is the official residence of the Lord Mayor of London ",
    "hotness": 1.133,
    "lat": 51.513007,
    "lng": -0.0895090000000209
  },
  {
    "name": "Haymarket",
    "category": "Landmark",
    "hashtag": "haymarket",
    "posts": "73,479",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/haymarket.jpg",
    "copy": "A busy street nestled in the St. Jame's area of the city. It is a prominant part of London's theatre district in the West End. Top tip: Grab tickets to see a show at the Theatre Royal Haymarket",
    "hotness": 1.1305,
    "lat": 51.5088407,
    "lng": -0.132013700000016
  },
  {
    "name": "Whitehall",
    "category": "Landmark",
    "hashtag": "whitehall",
    "posts": "71,714",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/whitehall.jpg",
    "copy": "A main road running through the City of Westminster, linking Trafalgar Square to Chelsea. The street is recognised as the centre of the Government of the United Kingdom, You'll be able to find numerous departments and ministries, including the Ministry of Defence",
    "hotness": 1.1248,
    "lat": 51.504966,
    "lng": -0.126367
  },
  {
    "name": "King's Cross station",
    "category": "Landmark",
    "hashtag": "kingscrossstation",
    "posts": "62,503",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kingscrossstation.jpg",
    "copy": "Kings Cross railway station is one of busiest railway stations in the UK. Situated on the northern edge of the city, it connects London with many destinations in the UK. The station was made famous by its inclusion in the Harry Potter franchise, at any time of day you will see fans and tourists lining up to take a photo at platform 9 3/4",
    "hotness": 1.0949,
    "lat": 51.5316396,
    "lng": -0.124423100000058
  },
  {
    "name": "Sloane Square",
    "category": "Landmark",
    "hashtag": "sloanesquare",
    "posts": "60,473",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sloanesquare.jpg",
    "copy": "If you are looking a glamourous shopping location, look no futher then Sloane Square. Found in 'the heart of Chelsea', it is situated at the intersection of Kings Road and Sloane Street. You'll find plenty of shopping, culture and food",
    "hotness": 1.0883,
    "lat": 51.4927325,
    "lng": -0.157370799999967
  },
  {
    "name": "Marble Arch",
    "category": "Landmark",
    "hashtag": "marblearch",
    "posts": "54,532",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/marblearch.jpg",
    "copy": "A 19th century white marble arch located on the north east side of Hyde Park. The arch was designed in 1827 to be the state entrance to Buckingham Palace, it was moved to Park Lane in the 1960's. Historically only members of the Royal Family, the Kings Troop and the Royal Horse Artillery were permitted to pass through",
    "hotness": 1.069,
    "lat": 51.5131099,
    "lng": -0.158914800000048
  },
  {
    "name": "Guildhall",
    "category": "Landmark",
    "hashtag": "guildhall",
    "posts": "50,532",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/guildhall.jpg",
    "copy": "Guidhall is a Grade II listed building found in the heart of the City. Steeped in tradition, visitors can experience Gothic grandeur and the largest surving medieval crypts",
    "hotness": 1.056,
    "lat": 51.5158998,
    "lng": -0.0919877999999699
  },
  {
    "name": "Heron Tower",
    "category": "Landmark",
    "hashtag": "herontower",
    "posts": "48,338",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/herontower.jpg",
    "copy": "Home to the infamous Duck and Waffle resturant, the Heron Tower can be found at 110 Bishopsgate. For the best panoramic views and experimental dishes it's worth a visit. Don't forget to book a table",
    "hotness": 1.0488,
    "lat": 51.5162529,
    "lng": -0.0809448999999631
  },
  {
    "name": "Oxo Tower",
    "category": "Landmark",
    "hashtag": "oxotower",
    "posts": "44,556",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oxotower.jpg",
    "copy": "The Oxo Tower is a prominent feature along London's south bank. Filled with resturants, cafes and bars, the tower is also used as an exhibition space and has been used by many of the country's most innovative contemporary designers",
    "hotness": 1.0365,
    "lat": 51.5083234,
    "lng": -0.108850100000041
  },
  {
    "name": "Battersea Power Station",
    "category": "Landmark",
    "hashtag": "batterseapowerstation",
    "posts": "41,381",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/batterseapowerstation.jpg",
    "copy": "Battersea Power Station is an unusued coal-fire power station located in south west London. The iconic Grad II listed building and it's surrounding area is being bought back to life as one of Londons most exciting and innovative areas",
    "hotness": 1.0262,
    "lat": 51.4818235,
    "lng": -0.144398300000034
  },
  {
    "name": "Waterloo Bridge",
    "category": "Landmark",
    "hashtag": "waterloobridge",
    "posts": "39,685",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/waterloobridge.jpg",
    "copy": "Waterloo Bridge is a road and foot traffic bridge crossing the River Thames. Named after the victory of the British, the Dutch and the Prussians at the Battle of Waterloo in 1815. Its location on a strategic bend in the river, means the views, both to the east and the west from Waterloo Bridge are some of the finest in the City. ",
    "hotness": 1.0207,
    "lat": 51.5085988,
    "lng": -0.11685609999995
  },
  {
    "name": "HMS Belfast",
    "category": "Landmark",
    "hashtag": "hmsbelfast",
    "posts": "38,398",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hmsbelfast.jpg",
    "copy": "A Town-class light cruiser designed and built for the Royal Navy. You'll now find the HMS Belfast permentantly moored as a museum ship on the River Thames. A great location for history fans and familes",
    "hotness": 1.0165,
    "lat": 51.506579,
    "lng": -0.0813889999999446
  },
  {
    "name": "Palace of Westminster",
    "category": "Landmark",
    "hashtag": "palaceofwestminster",
    "posts": "35,484",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/palaceofwestminster.jpg",
    "copy": "The meeting place of the House of Commons and the House of Lords, the two houses of the Parliment of the United Kingdom. The name derived from the neighbouring Westminster Abbey and is located on the north bank of the River Thames. A must see if you are visiting London for the first time",
    "hotness": 1.0071,
    "lat": 51.4994794,
    "lng": -0.124809199999959
  },
  {
    "name": "BT Tower",
    "category": "Landmark",
    "hashtag": "bttower",
    "posts": "33,308",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bttower.jpg",
    "copy": "The BT Tower is a working communications tower located in Fitzrovia, London. Up until 1980 it was known as being the tallest building in London. The tower featured in Harry Potter and the Chamber of Secrets, when an enchanted Ford Anglia 105E flying above",
    "hotness": 1,
    "lat": 51.5214598,
    "lng": -0.138896400000021
  }
]

var parksData = [
  {
    "name": "Hyde Park",
    "category": "Parks & Greenspaces",
    "hashtag": "hydepark",
    "posts": "1,629,302",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hydepark.jpg",
    "copy": "No trip to London is complete without a visit to the renowned Hyde Park. And with 350 acres of greenery, it's no surprised it's the most Instagrammed park in the city. Over 1.6 million snaps of this green space are uploaded every year, from visitors and locals alike.",
    "hotness": 10,
    "lat": 51.5072682,
    "lng": -0.16573029999995
  },
  {
    "name": "Kew Gardens",
    "category": "Parks & Greenspaces",
    "hashtag": "kewgardens",
    "posts": "324,671",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kewgardens.jpg",
    "copy": "Kew Gardens, 300 acres of green space, and the second most Instagrammed park in London. Every year, almost 350,000 posts of Kew Gardens are uploaded at this UNESCO World Heritage Site that was opened in 1759.",
    "hotness": 2.7489,
    "lat": 51.4787438,
    "lng": -0.29557299999999
  },
  {
    "name": "Regent's Park",
    "category": "Parks & Greenspaces",
    "hashtag": "regentspark",
    "posts": "276,222",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/regentspark.jpg",
    "copy": "Who wouldn't love a park that comes with a zoo? Home to the popular London Zoo, Regents Park is a city hotspot that consists of 410 acres of beautiful green space. Regents Park has plenty to offer when you're trying to take the perfect snap.",
    "hotness": 2.4797,
    "lat": 51.5312705,
    "lng": -0.15696939999998
  },
  {
    "name": "Victoria Park",
    "category": "Parks & Greenspaces",
    "hashtag": "victoriapark",
    "posts": "270,544",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/victoriapark.jpg",
    "copy": "Victoria Park, aka the People's park, has been a Green Flag award winner since 2011. The park is the pride of the East, and host to several music concert and festivals each year ' no wonder it's such a social media hotspot!",
    "hotness": 2.4481,
    "lat": 51.5365614,
    "lng": -0.038972000000058
  },
  {
    "name": "Richmond Park",
    "category": "Parks & Greenspaces",
    "hashtag": "richmondpark",
    "posts": "223,279",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/richmondpark.jpg",
    "copy": "If you've always dreamed of visiting a deer park, head over to Richmond Park. This 17th century park is of national and international importance for wildlife conservation. And yes, the deer will pose patiently until you take the perfect Instagram photo",
    "hotness": 2.1854,
    "lat": 51.4463869,
    "lng": -0.275772700000061
  },
  {
    "name": "Green Park",
    "category": "Parks & Greenspaces",
    "hashtag": "greenpark",
    "posts": "217,576",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/greenpark.jpg",
    "copy": "Sightseeing in a city like London can be exhausting. And if you happen to be near Buckingham Palace, pop over to Green Park to take a breather. Situated in the heart of the city, this 47-acre patch of green is the ultimate spot for that all important holiday snap",
    "hotness": 2.1537,
    "lat": 51.5039038,
    "lng": -0.143856700000015
  },
  {
    "name": "Primrose Hill",
    "category": "Parks & Greenspaces",
    "hashtag": "primrosehill",
    "posts": "168,262",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/primrosehill.jpg",
    "copy": "When was the last time you visited an outdoor gym? Known as the Hill Trim Trail, this open-air workout area can be found in Primrose Hill, one of London's favorite parks. Head over to flex your guns outside.",
    "hotness": 1.8796,
    "lat": 51.538449,
    "lng": -0.15499299999999
  },
  {
    "name": "Hampstead Heath",
    "category": "Parks & Greenspaces",
    "hashtag": "hampsteadheath",
    "posts": "160,389",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hampsteadheath.jpg",
    "copy": "Three open-air swimming pools and a chain of ponds, that's what Hampstead Heath has to offer aside from its 790 acres of green space. And you'll struggle to find a better backdrop for the ultimate Instagram shot during the summer months",
    "hotness": 1.8359,
    "lat": 51.5608421,
    "lng": -0.163137600000027
  },
  {
    "name": "Holland Park",
    "category": "Parks & Greenspaces",
    "hashtag": "hollandpark",
    "posts": "129,818",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hollandpark.jpg",
    "copy": "Famous for its two Japanese gardens - the Kyoto Garden and Fukushima Memorial Garden, Holland Park is one of London's most stunning green spaces. So, if you don't fancy a 12-hour journey to Japan, head over to Holland Park and take some photos that will most definitely fool your friends",
    "hotness": 1.6659,
    "lat": 51.5032252,
    "lng": -0.203666800000065
  },
  {
    "name": "Kensington Gardens",
    "category": "Parks & Greenspaces",
    "hashtag": "kensingtongardens",
    "posts": "108,709",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kensingtongardens.jpg",
    "copy": "Origionally created by Henry VIII in 1536 to be used as a hunting ground, Kensington Gardens are Grade I listed on the the Register of Historic Parks and Gardens, making for some great images. Find them on the western side of Hyde Park",
    "hotness": 1.5486,
    "lat": 51.507033,
    "lng": -0.178764
  },
  {
    "name": "Finsbury Park",
    "category": "Parks & Greenspaces",
    "hashtag": "finsburypark",
    "posts": "104,859",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/finsburypark.jpg",
    "copy": "A public park found in Harringay, north London. Facilities include an athletic stadium, skatepark and football pitches. Unusually, the park is home to both an American football field and softabll and baseball fields",
    "hotness": 1.5272,
    "lat": 51.571069,
    "lng": -0.100848
  },
  {
    "name": "Blackheath",
    "category": "Parks & Greenspaces",
    "hashtag": "blackheath",
    "posts": "100,675",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/blackheath.jpg",
    "copy": "A vast green space, found near Greenwich. Blackheath is the home to one of the London marathon starting pens and features firmly on runners social media accounts ",
    "hotness": 1.504,
    "lat": 51.4658393,
    "lng": 0.00903379999999743
  },
  {
    "name": "Queen's Park",
    "category": "Parks & Greenspaces",
    "hashtag": "queenspark",
    "posts": "99,379",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/queenspark.jpg",
    "copy": "Queens Park is seen as one of the most affluent areas, located in north London. It's a beautiful park with cafe facilities and stunning gardens for everyone to enjoy. Nearest station: Kilburn",
    "hotness": 1.4968,
    "lat": 51.5333813,
    "lng": -0.208923000000027
  },
  {
    "name": "Battersea Park",
    "category": "Parks & Greenspaces",
    "hashtag": "batterseapark",
    "posts": "97,491",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/batterseapark.jpg",
    "copy": "A 200-acre green park, found in Wandsworth, South London. You'll find a childrens zoo, a running track and a boating lake to keep you entertained",
    "hotness": 1.4863,
    "lat": 51.4791075,
    "lng": -0.156498100000022
  },
  {
    "name": "Greenwich Park",
    "category": "Parks & Greenspaces",
    "hashtag": "greenwichpark",
    "posts": "95,775",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/greenwichpark.jpg",
    "copy": "Greenwich Park makes up one of the largest green spaces in south east London. Formerly a hunting park, the park is now home to tourists and locals trying to escape the city. Situated along the River Thames, you'll see one of London's most iconic views",
    "hotness": 1.4767,
    "lat": 51.4769095,
    "lng": 0.00146429999995235
  },
  {
    "name": "London Fields",
    "category": "Parks & Greenspaces",
    "hashtag": "londonfields",
    "posts": "91,162",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/londonfields.jpg",
    "copy": "The green space, located centrally in East London, is home to one of the cities best outdoor lido's. Broadway market is found on the south side of the fields where independent food stalls and resturants can be found",
    "hotness": 1.4511,
    "lat": 51.5422923,
    "lng": -0.0615099999999984
  },
  {
    "name": "Clapham Common",
    "category": "Parks & Greenspaces",
    "hashtag": "claphamcommon",
    "posts": "87,041",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/claphamcommon.jpg",
    "copy": "A large triangular urban park found in Clapham, south London. It was converted into parkland in 1878. The park contains three ponds, a modern paddling pool alongside various sports facilities. During the summer months the park is packed with locals and tourists enjoying picnics and bbq's. Don't forget your camera",
    "hotness": 1.4282,
    "lat": 51.4584523,
    "lng": -0.149260899999945
  },
  {
    "name": "Memorial Park",
    "category": "Parks & Greenspaces",
    "hashtag": "memorialpark",
    "posts": "71,971",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/memorialpark.jpg",
    "copy": "Kensington Memorial Park has a water play area, a large playground (space themed) and a One O'Clock Club. It's a great place to take the kids, and even better, it's all free",
    "hotness": 1.3444,
    "lat": 51.520860,
    "lng": -0.219444
  },
  {
    "name": "Bushy Park",
    "category": "Parks & Greenspaces",
    "hashtag": "bushypark",
    "posts": "66,910",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bushypark.jpg",
    "copy": "Bushey Park, found in Richmond, is the second largest of Londons Royal Parks. The park gained its name when Henry VIII took over Hampton Court Palace in 1529. You can find the park north of Hampton Court Palace and is a few minutes walk away from Kingston Bridge. ",
    "hotness": 1.3163,
    "lat": 51.416531,
    "lng": -0.33981730000005
  },
  {
    "name": "Epping Forest",
    "category": "Parks & Greenspaces",
    "hashtag": "eppingforest",
    "posts": "47,995",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/eppingforest.jpg",
    "copy": "Formerly a Royal Forest, Epping Forest is an ancient woodland found stradling the boader between Greater London and Essex. Epping Forest is popular among trail runners and hikers trying to get out of the city",
    "hotness": 1.2112,
    "lat": 51.664777,
    "lng": 0.042678
  },
  {
    "name": "Paradise Park",
    "category": "Parks & Greenspaces",
    "hashtag": "paradisepark",
    "posts": "37,228",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/paradisepark.jpg",
    "copy": "Paradise Park is a popular park  based in Islington. Located next to Freighliners City Farm, you can see why it is an attractive option for families. There are lots of things to do in the park including sports and enjoying the playground",
    "hotness": 1.1513,
    "lat": 51.548501,
    "lng": -0.111855999999989
  },
  {
    "name": "Brockwell Park",
    "category": "Parks & Greenspaces",
    "hashtag": "brockwellpark",
    "posts": "33,392",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/brockwellpark.jpg",
    "copy": "Located conviniently between Brixton, Herne Hill and Tulse Hill in south London. The park provides spectacular views of the skyline of central London, no wonder it boasts 4 million visits a year. Singer Adele is said to prefer \"sitting in Brockwell Park with my friends, drinking cider\", if it's good enough for Adele, it's good enough for us",
    "hotness": 1.13,
    "lat": 51.4498717,
    "lng": -0.109200800000053
  },
  {
    "name": "Parsons Green",
    "category": "Parks & Greenspaces",
    "hashtag": "parsonsgreen",
    "posts": "32,657",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/parsonsgreen.jpg",
    "copy": "Parsons Green is a residential district in Fulham, west London. The green is triangular in shape and is bounded by the New Kings Road",
    "hotness": 1.1259,
    "lat": 51.4753102,
    "lng": -0.201053300000012
  },
  {
    "name": "Wimbledon Common",
    "category": "Parks & Greenspaces",
    "hashtag": "wimbledoncommon",
    "posts": "23,618",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wimbledoncommon.jpg",
    "copy": "A large common including ponds, a nature trail and a windmill. Situated in south west London and providing muddy trails this is a runners paradise, with many races taking place weekly. Don't forget to look out for a Womble on your travels",
    "hotness": 1.0757,
    "lat": 51.4366449,
    "lng": -0.233546899999965
  },
  {
    "name": "Clissold Park",
    "category": "Parks & Greenspaces",
    "hashtag": "clissoldpark",
    "posts": "23,304",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/clissoldpark.jpg",
    "copy": "One of Hackney's best loved parks, Cissold Park is an open space in Stoke Newington, east London. A great place to escape from the business of the city with facilities including a paddling pool, a multi use games area and even a butterfly dome",
    "hotness": 1.0739,
    "lat": 51.5601859,
    "lng": -0.0905030000000124
  },
  {
    "name": "Grand Union Canal",
    "category": "Parks & Greenspaces",
    "hashtag": "grandunioncanal",
    "posts": "22,587",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/grandunioncanal.jpg",
    "copy": "The Grand Union Canal connects London and Birmingham. The Paddington Arm runs through the heart of west London and is now home to lots of bars, resturants, shops and even juice bars. The perfect place for a stroll and drink in the sun",
    "hotness": 1.07,
    "lat": 52.147161,
    "lng": -0.805962799999975
  },
  {
    "name": "Highgate Cemetery",
    "category": "Parks & Greenspaces",
    "hashtag": "highgatecemetery",
    "posts": "19,847",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/highgatecemetery.jpg",
    "copy": "Grade II listed cemetery found in north London. You'll find many famous people buried here, with Karl Marx arguably being the most famous burial. Once seen as a creepy cemetery filled with mobs of stake-carrying vampire hunters, it is now one of London's most visited and photgraphed spots",
    "hotness": 1.0547,
    "lat": 51.5669271,
    "lng": -0.147070900000017
  },
  {
    "name": "Crystal Palace Park",
    "category": "Parks & Greenspaces",
    "hashtag": "crystalpalacepark",
    "posts": "19,000",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/crystalpalacepark.jpg",
    "copy": "Crystal Palace Park, situated in south east London is the perfect place for families to explore and learn. Famous for its giant diosaur statues in the Dinosaur Court and hosts one of the largest mazes in the country, it's a must visit for families ",
    "hotness": 1.05,
    "lat": 51.4218504,
    "lng": -0.0723852999999508
  },
  {
    "name": "Russell Square",
    "category": "Parks & Greenspaces",
    "hashtag": "russellsquare",
    "posts": "18,998",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/russellsquare.jpg",
    "copy": "Russell Square in Bloomsbury, is a large garden square. The square was named after the surname of the Earls and Dukes of Bedford. Now, it's a picturesque landscapre found in the heart of London. Head here if the city is getting a little too much",
    "hotness": 1.05,
    "lat": 51.52175,
    "lng": -0.125890000000027
  },
  {
    "name": "Hylands Park",
    "category": "Parks & Greenspaces",
    "hashtag": "hylandspark",
    "posts": "15,327",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hylandspark.jpg",
    "copy": "Hylands Park is a public park found in Havering, near Romford. The park has been awarded a Green Flag status",
    "hotness": 1.0296,
    "lat": 51.571810,
    "lng": 0.201627
  },
  {
    "name": "Manor Park",
    "category": "Parks & Greenspaces",
    "hashtag": "manorpark",
    "posts": "15,048",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/manorpark.jpg",
    "copy": "Manor Park is a residential area in east London, situated in the London Borough of Newham. ",
    "hotness": 1.0281,
    "lat": 51.5493953,
    "lng": 0.0486409999999751
  },
  {
    "name": "Oaks Park",
    "category": "Parks & Greenspaces",
    "hashtag": "oakspark",
    "posts": "14,402",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/oakspark.jpg",
    "copy": "Oaks Park is a public park in Carshalton, Sutton, London. The Park lent its name to the Oaks horserace ran annually during the Derby meeting at Epsom Downs Racecourse",
    "hotness": 1.0245,
    "lat":  51.339034,
    "lng": -0.165271
  },
  {
    "name": "Wandsworth Common",
    "category": "Parks & Greenspaces",
    "hashtag": "wandsworthcommon",
    "posts": "14,206",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wandsworthcommon.jpg",
    "copy": "South west London is well provided with parks and open green space. Wandsworth Common is located in Wandsworth and is made up of woods, lakes and a heath. Facilitites also include playgrounds and cafes",
    "hotness": 1.0234,
    "lat": 51.4531647,
    "lng": -0.169007999999963
  },
  {
    "name": "Castle Wood",
    "category": "Parks & Greenspaces",
    "hashtag": "castlewood",
    "posts": "13,861",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/castlewood.jpg",
    "copy": "Fancy a stroll along part of the Green Chain Walk? Castle Wood in Greenwich, which is surround by Oxleas Wood and Jack Wood, is a site of special scientific interest (SSSI). Make sure you take a few Instagram worthy pics at the beautiful rose garden!",
    "hotness": 1.0215,
    "lat": 51.466056,
    "lng": 0.059244
  },
  {
    "name": "Newington Green",
    "category": "Parks & Greenspaces",
    "hashtag": "newingtongreen",
    "posts": "13,196",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/newingtongreen.jpg",
    "copy": "An open space in north London found between Islington and Hackney. Many locals make use of the green space to escape London life. It is believed Samuel Pepys was sent there in oprder to benefit from the fresh air",
    "hotness": 1.0178,
    "lat": 51.5516773,
    "lng": -0.0856505000000425
  },
  {
    "name": "Trent Park",
    "category": "Parks & Greenspaces",
    "hashtag": "trentpark",
    "posts": "12,330",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/trentpark.jpg",
    "copy": "Trent Park is a traditional English country house found in north London. Until 2012, the house itself formed the Trent Park campus of Middlesex University. Before being turned into a sports hall, the indoor tennis court was attended by royalty",
    "hotness": 1.013,
    "lat": 51.6590545,
    "lng": -0.138849499999992
  },
  {
    "name": "Grove Park",
    "category": "Parks & Greenspaces",
    "hashtag": "grovepark",
    "posts": "11,823",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/grovepark.jpg",
    "copy": "Grove Park is a residential area in south east London, situated in the London Borough of Lewisham",
    "hotness": 1.0101,
    "lat": 51.435473,
    "lng": 0.0202788999999939
  },
  {
    "name": "Wimbledon Park",
    "category": "Parks & Greenspaces",
    "hashtag": "wimbledonpark",
    "posts": "11,070",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wimbledonpark.jpg",
    "copy": "Wimbledon Park is an urban park found in Wimbledon, south west London. You'll find tennis courts, a beach volleyball court and facilities for sailing, kayaking and canoeing. A large firework display is help every November and is one of the most popular shows in London",
    "hotness": 1.006,
    "lat": 51.4359333,
    "lng": -0.2101811
  },
  {
    "name": "Hackney Marshes",
    "category": "Parks & Greenspaces",
    "hashtag": "hackneymarshes",
    "posts": "10,919",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hackneymarshes.jpg",
    "copy": "Area of grassland on the western bank of the River Lea in Hackney, east London. It now forms part of the Olympic Park for the 2012 games. In 2012 BBC Radio One bought it's infamous big weekend to Hackney Marshes with huge names such as Jay-Z and Rhianna playing",
    "hotness": 1.0051,
    "lat": 51.5529718,
    "lng": -0.0255217999999786
  },
  {
    "name": "Dulwich Park",
    "category": "Parks & Greenspaces",
    "hashtag": "dulwichpark",
    "posts": "9,999",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/dulwichpark.jpg",
    "copy": "A green park situated in Dulwich, south east London. Designed by Sexby who also designed Battersea and Southwark park. Between 2004-06, the park was restored to it's origional Victorian layout. The park is perfect for walking your dog or a family day out, don't forget to hire a boat on a lake",
    "hotness": 1,
    "lat": 51.4430278,
    "lng": -0.0792632999999796
  }
]

var shoppingData = [
  {
    "name": "Harrods",
    "category": "Shopping",
    "hashtag": "harrods",
    "posts": "1,228,917",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/harrods.jpg",
    "copy": "Founded in 1834, this famous department store is located in Knightsbridge and is one of the most luxurious shopping destinations in London. ",
    "hotness": 10,
    "lat": 51.4994055,
    "lng": -0.163234399999965
  },
  {
    "name": "Selfridges",
    "category": "Shopping",
    "hashtag": "selfridges",
    "posts": "502,608",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/selfridges.jpg",
    "copy": "Founded by Harry Gordon Selfridge in 1908, Selfridges is a chain of high end department stores. The famous flagship store on Oxford Street is the second largest shop in the UK, after Harrods and opened on 15 March 1909.",
    "hotness": 4.6804,
    "lat": 51.51463,
    "lng": -0.152569999999969
  },
  {
    "name": "Borough Market",
    "category": "Shopping",
    "hashtag": "boroughmarket",
    "posts": "327,713",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/boroughmarket.jpg",
    "copy": "Borough Market is a well known food market in Southwark, London. It is one of the largest and oldest food markets, with the market on the site dating back to at least the 12th century. ",
    "hotness": 3.3994,
    "lat": 51.50544,
    "lng": -0.0910605999999916
  },
  {
    "name": "Baker Street",
    "category": "Shopping",
    "hashtag": "bakerstreet",
    "posts": "266,474",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bakerstreet.jpg",
    "copy": "With one of the oldest surviving underground stations, Baker Street has a lot going on. Located in the Marylebone district of the City of Westminster, it's a popular tourist destination. ",
    "hotness": 2.9509,
    "lat": 51.520818,
    "lng": -0.156810
  },
  {
    "name": "Regent Street",
    "category": "Shopping",
    "hashtag": "regentstreet",
    "posts": "243,750",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/regentstreet.jpg",
    "copy": "A major shopping destination in the West End of London, Regent Street has it all. Famous for it's flagship stores, including Liberty and Hamleys this is a popular shopping destination with both locals and tourists. ",
    "hotness": 2.7845,
    "lat": 51.5120431,
    "lng": -0.139634699999988
  },
  {
    "name": "Carnaby Street",
    "category": "Shopping",
    "hashtag": "carnabystreet",
    "posts": "233,218",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/carnabystreet.jpg",
    "copy": "Carnaby Street is a pedestrianised shopping street in Soho in the City of Westminster, it's become one of the coolest shopping destinations associated with the 1960's Swinging London. ",
    "hotness": 2.7074,
    "lat": 51.513221,
    "lng": -0.138903600000049
  },
  {
    "name": "Portobello Road",
    "category": "Shopping",
    "hashtag": "portobelloroad",
    "posts": "199,856",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/portobelloroad.jpg",
    "copy": "On Saturdays, Portobello Road becomes home to Portobello Road Market, one of London's most famous street markets. With over 1,000 dealers, this is a great destination for second-hand clothing and unique antiques. ",
    "hotness": 2.463,
    "lat": 51.5170287,
    "lng": -0.205886400000054
  },
  {
    "name": "Hamleys",
    "category": "Shopping",
    "hashtag": "hamleys",
    "posts": "150,887",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hamleys.jpg",
    "copy": "Hamleys is a world-renowed, multistorey toy shop with events, demonstrations and elborate displays. Located on Regent Street, it's one of oldest and largest toy shops in the World. ",
    "hotness": 2.1043,
    "lat": 51.512782,
    "lng": -0.140164000000027
  },
  {
    "name": "Bond Street",
    "category": "Shopping",
    "hashtag": "bondstreet",
    "posts": "136,827",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/bondstreet.jpg",
    "copy": "Bond Street is home to some of the most prestigious retailers including Chanel, Burberry and Louis Vuitton. A popular shopping destination known for its wealth of elegant stores and exclusive brands. ",
    "hotness": 2.0014,
    "lat": 51.514027,
    "lng": -0.149408
  },
  {
    "name": "Liberty London",
    "category": "Shopping",
    "hashtag": "libertylondon",
    "posts": "133,632",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/libertylondon.jpg",
    "copy": "Liberty is a well known department store on Great Malborough Street in the West End of London. Selling luxury goods this department store is famous for it's Christmas floor and distinctive exterior design. ",
    "hotness": 1.978,
    "lat": 51.513829,
    "lng": -0.140174999999999
  },
  {
    "name": "Fortnum and Mason",
    "category": "Shopping",
    "hashtag": "fortnumandmason",
    "posts": "126,512",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/fortnumandmason.jpg",
    "copy": "Fortnum & Mason is an upmarket department store in Piccadilly. Established in 1707 by William Fortnum and Hugh Mason, it's one of London's oldest department stores. ",
    "hotness": 1.9258,
    "lat": 51.5083685,
    "lng": -0.138487800000007
  },
  {
    "name": "King's Road",
    "category": "Shopping",
    "hashtag": "kingsroad",
    "posts": "122,040",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kingsroad.jpg",
    "copy": "A major street stretching through Chelsea and Fulham, in eest London. It is strongly associated with 1960's style and fashion figures such as Mary Quant and Vivienne Westwood. ",
    "hotness": 1.8931,
    "lat": 51.485129,
    "lng": -0.174444600000015
  },
  {
    "name": "Sloane Street",
    "category": "Shopping",
    "hashtag": "sloanestreet",
    "posts": "74,127",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/sloanestreet.jpg",
    "copy": "Located in the Royal Borough of Kensington and Chelsea, this is one of London's most glamourous locations for shopping, dining and culture. Why not take a stroll through the square! ",
    "hotness": 1.5421,
    "lat": 51.4973858,
    "lng": -0.159029299999929
  },
  {
    "name": "Cyber Dog",
    "category": "Shopping",
    "hashtag": "cyberdog",
    "posts": "46,432",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/cyberdog.jpg",
    "copy": "This vibrant, neon - lit store for futuristic and flourescent fashions and accessories for men, women and children. Located near Chalk Farm, a popular area for shopping and dining. ",
    "hotness": 1.3393,
    "lat": 51.5422159,
    "lng": -0.147501700000021
  },
  {
    "name": "Columbia Road Flower Market",
    "category": "Shopping",
    "hashtag": "columbiaroadflowermarket",
    "posts": "37,639",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/columbiaroadflowermarket.jpg",
    "copy": "Columbia Road Flower Market is a street market in east London. Open on Sundays this is one of London's most popular flower markets and is popular with locals and tourists. ",
    "hotness": 1.2749,
    "lat": 51.529719,
    "lng": -0.0689740000000256
  },
  {
    "name": "Spitalfields Market",
    "category": "Shopping",
    "hashtag": "spitalfieldsmarket",
    "posts": "35,261",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/spitalfieldsmarket.jpg",
    "copy": "A lively east London market, home to artists, creatives and quirky shops. Open 7 days a week this market is a must see, with over 41 shops and stalls and events running throughout the year!",
    "hotness": 1.2575,
    "lat": 51.5196641,
    "lng": -0.0754435000000058
  },
  {
    "name": "Greenwich Market",
    "category": "Shopping",
    "hashtag": "greenwichmarket",
    "posts": "29,053",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/greenwichmarket.jpg",
    "copy": "Greenwich Market is a longtime running indoor market, with over 120 stalls selling art and antiques. Open Tuesdays to Sunday's this is a great place to check out some unique art pieces. ",
    "hotness": 1.212,
    "lat": 51.4815373,
    "lng": -0.00908640000000105
  },
  {
    "name": "God's Own Junk Yard",
    "category": "Shopping",
    "hashtag": "godsownjunkyard",
    "posts": "27,933",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/godsownjunkyard.jpg",
    "copy": "A Neon wonderland in Walthamstow, if you love neon, you have to go! Also has a cafe which offers a selection of freshly baked foods and alcoholic beverages. ",
    "hotness": 1.2038,
    "lat": 51.5840695,
    "lng": -0.00834169999995993
  },
  {
    "name": "Leadenhall Market",
    "category": "Shopping",
    "hashtag": "leadenhallmarket",
    "posts": "25,552",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/leadenhallmarket.jpg",
    "copy": "Leadenhall Market is a covered market in London, located on Gracechurch Street, offering unique shopping and dining in the heart of the city of London. ",
    "hotness": 1.1864,
    "lat": 51.5128019,
    "lng": -0.0834833000000117
  },
  {
    "name": "Aspinal of London",
    "category": "Shopping",
    "hashtag": "aspinaloflondon",
    "posts": "18,876",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/aspinaloflondon.jpg",
    "copy": "A luxury designer, manufacturer and retailer of luxury leather goods and accessories for women and men. ",
    "hotness": 1.1375,
    "lat": 51.530182,
    "lng": -0.125480000000039
  },
  {
    "name": "Burlington Arcade",
    "category": "Shopping",
    "hashtag": "burlingtonarcade",
    "posts": "15,484",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/burlingtonarcade.jpg",
    "copy": "A covered shopping arcade in London, that runs behind Bond Street from Piccadilly through to Burlington Gardens. Opening in 1819, this popular shopping arcade is home to some of London's wealthiest stores. ",
    "hotness": 1.1126,
    "lat": 51.5089779,
    "lng": -0.14023700000007
  },
  {
    "name": "One New Change",
    "category": "Shopping",
    "hashtag": "onenewchange",
    "posts": "14,860",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/onenewchange.jpg",
    "copy": "One New Change is located near St Pauls and is home to a mixture of shops and restaurants. Located in a busy area of London, this destination is popular with city workers.",
    "hotness": 1.1081,
    "lat": 51.5138239,
    "lng": -0.0954570000000103
  },
  {
    "name": "Brent Cross",
    "category": "Shopping",
    "hashtag": "brentcross",
    "posts": "14,232",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/brentcross.jpg",
    "copy": "Located in North London, Brent Shopping Centre is a retail facility housing high street stores and restaurants. ",
    "hotness": 1.1035,
    "lat": 51.5763589,
    "lng": -0.223695600000042
  },
  {
    "name": "Westfield London",
    "category": "Shopping",
    "hashtag": "westfieldlondon",
    "posts": "13,514",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/westfieldlondon.jpg",
    "copy": "A large indoor shopping centre located outside of central London. With plenty of shops, restaurants and a cinema this destination is a popular choice for many shopping fans. ",
    "hotness": 1.0982,
    "lat": 51.5090459,
    "lng": -0.220828999999981
  },
  {
    "name": "Stables Market",
    "category": "Shopping",
    "hashtag": "stablesmarket",
    "posts": "12,357",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/stablesmarket.jpg",
    "copy": "Located in Camden, the Stables Market, makes up the largest of Camden's popular market spaces. Over 450 shops and stalls are housed here, selling a variation of clothing, furniture and clothing. ",
    "hotness": 1.0897,
    "lat": 51.5415108,
    "lng": -0.145710799999961
  },
  {
    "name": "Peter Jones",
    "category": "Shopping",
    "hashtag": "peterjones",
    "posts": "7,049",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/peterjones.jpg",
    "copy": "Located in Sloane Square, Peter Jones is a large department store, owned by the John Lewis Partnership. Popular with local residents of the Royal Borough of Kensington and Chelsea.",
    "hotness": 1.0509,
    "lat": 51.49227,
    "lng": -0.158958999999982
  },
  {
    "name": "Cheapside",
    "category": "Shopping",
    "hashtag": "cheapside",
    "posts": "6,720",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/cheapside.jpg",
    "copy": "Cheapside, in the City of London is one of the main shopping streets which runs eastward from St Pauls to Bank. A popular area for city workers and home to many shops, bars and restaurants. ",
    "hotness": 1.0484,
    "lat": 51.5141905,
    "lng": -0.0945291000000452
  },
  {
    "name": "Kensington High Street",
    "category": "Shopping",
    "hashtag": "kensingtonhighstreet",
    "posts": "5,940",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/kensingtonhighstreet.jpg",
    "copy": "A main shopping area in Kensington, London. Located near to a popular Royal park, this destination is always busy with tourists and locals. ",
    "hotness": 1.0427,
    "lat": 51.4993829,
    "lng": -0.197670900000048
  },
  {
    "name": "Smithfield Market",
    "category": "Shopping",
    "hashtag": "smithfieldmarket",
    "posts": "5,767",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/smithfieldmarket.jpg",
    "copy": "Smithfields's meat market dates from the 10th century, and is now London's only remaining wholesale market in continuous operation since medival times. It's also home to one of London's oldest surviving churches. ",
    "hotness": 1.0415,
    "lat": 51.519482,
    "lng": -0.101202999999941
  },
  {
    "name": "Westfield Stratford City",
    "category": "Shopping",
    "hashtag": "westfieldstratfordcity",
    "posts": "2,985",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/westfieldstratfordcity.jpg",
    "copy": "A shopping centre located in east London, at Stratford. Opening in 2011 this popular shopping destination is home to a wide range of shops, bars and restaurants. ",
    "hotness": 1.0211,
    "lat": 51.5431462,
    "lng": -0.00723540000001321
  },
  {
    "name": "Chelsea Harbour Designer Centre",
    "category": "Shopping",
    "hashtag": "chelseaharbourdesigncentre",
    "posts": "2,200",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/chelseaharbourdesigncentre.jpg",
    "copy": "An interioir designer's paradise, the Chelsea Harbour Design Centre is home to a number of suppliers including fabric outlets, bespoke furntiture and paint manufacturers. ",
    "hotness": 1.0153,
    "lat": 51.4760209,
    "lng": -0.182978600000069
  },
  {
    "name": "Hackney Walk",
    "category": "Shopping",
    "hashtag": "hackneywalk",
    "posts": "1,858",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/hackneywalk.jpg",
    "copy": "A luxury outlet district, this popular destination for shopping fans is located in east London near to Hackney's Mare Street. ",
    "hotness": 1.0128,
    "lat": 51.5469395,
    "lng": -0.0485657000000401
  },
  {
    "name": "Notting Hill Market",
    "category": "Shopping",
    "hashtag": "nottinghillmarket",
    "posts": "1,426",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/nottinghillmarket.jpg",
    "copy": "This popular destination includes Portobello road market. Located in the popular area of Notting Hill, this market is easily accessible, the main market runs Friday and Saturday with a small market running Monday to Thursday. ",
    "hotness": 1.0097,
    "lat": 51.5084134,
    "lng": -0.195612500000038
  },
  {
    "name": "Goodhood Store",
    "category": "Shopping",
    "hashtag": "goodhoodstore",
    "posts": "908",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/goodhoodstore.jpg",
    "copy": "A minimalist split level shop for designer male and female streetwear, shoes and homewear. Located near Old Street, this destination is easy to get to!",
    "hotness": 1.0059,
    "lat": 51.526676,
    "lng": -0.0806519999999864
  },
  {
    "name": "Wembley Designer Outlet",
    "category": "Shopping",
    "hashtag": "wembleyoutlet",
    "posts": "790",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/wembleyoutlet.jpg",
    "copy": "London designer outlet, a semi-outdoor shopping centre in Wembley Park located in north west London. The outlet officially opened in October 2013 and is extremely popular with shopping fans. ",
    "hotness": 1.005,
    "lat": 51.5565916,
    "lng": -0.283895900000061
  },
  {
    "name": "Choccywoccydoodah",
    "category": "Shopping",
    "hashtag": "choccywoccydoodahlondon",
    "posts": "687",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/choccywoccydoodahlondon.jpg",
    "copy": "An elaborate and colourful boutique shop, elevating chocolate to an art form with extraordinary cakes and a cafe. Choccywoccydoodah is one for sweet toothed chocolate lovers! ",
    "hotness": 1.0043,
    "lat": 51.514601,
    "lng": -0.125576000000024
  },
  {
    "name": "Petticoat Lane Market",
    "category": "Shopping",
    "hashtag": "petticoatlanemarket",
    "posts": "662",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/petticoatlanemarket.jpg",
    "copy": "Petticoat Lane Market is a fashion and clothing market located in the East End of London. The name came from the sale of petticoats at the market and the old fable tale, where they would steal your petticoat and then sell it back to you. ",
    "hotness": 1.0041,
    "lat": 51.5163688,
    "lng": -0.0763139000000592
  },
  {
    "name": "The Conran Shop",
    "category": "Shopping",
    "hashtag": "theconranshoplondon",
    "posts": "523",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/theconranshoplondon.jpg",
    "copy": "The Conran shop offers a unique and personal blend of furniture, lighting and home accessories from some of the most iconic designers. ",
    "hotness": 1.0031,
    "lat": 51.522374,
    "lng": -0.151221999999962
  },
  {
    "name": "Savile Row",
    "category": "Shopping",
    "hashtag": "savilerowlondon",
    "posts": "168",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/savilerowlondon.jpg",
    "copy": "Tailors started to take premises around Savile Row in the late 18th century. It's a well known area for some of the finest tailored suits and is still as popular as ever, with customers still trusting established tailors to cater for their tailored needs. ",
    "hotness": 1.0005,
    "lat": 51.511494,
    "lng": -0.140825
  },
  {
    "name": "The Mall Wood Green",
    "category": "Shopping",
    "hashtag": "themallwoodgreen",
    "posts": "105",
    "image": "https://www.thistle.com/d/thistle/media/insta_map_assets/thistle/themallwoodgreen.jpg",
    "copy": "The mall has over 100 retail shops, 45 market stalls and an average of 221,000 customers per week. The perfect destination for any shopping fans. ",
    "hotness": 1,
    "lat": 51.594443,
    "lng": -0.108897999999954
  }
]


/* MARKERS LOCATIONS ARRAYS */
var activeMarkers = [];


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
  createMarkers(parksData, 'parks');

  // cluster markers
  markerCluster = new MarkerClusterer(map, activeMarkers, {
    imagePath: 'https://www.thistle.com/d/thistle/media/insta_map_assets/clusters/m'
  });
}

function createMarkers(locationsData, category) {

  // clear map
  clearMarkers(activeMarkers);

  if(screen.width > 800) {
    infoBubble = new InfoBubble({
      map: map,
      shadowStyle: 0,
      padding: 0,
      backgroundColor: '#fff',
      borderRadius: 0,
      arrowSize: 15,
      borderWidth: 0,
      borderColor: 'transparent',
      disableAutoPan: false,
      hideCloseButton: false,
      arrowPosition: 70,
      backgroundClassName: 'info-content',
      arrowStyle: 0,
      minHeight: 286,
      maxHeight: 286,
      minWidth: 780,
      closeSrc: 'https://www.thistle.com/d/thistle/media/insta_map_assets/black/close-btn2x_f74344.png'
    });
  } else {
    infoBubble = new InfoBubble({
      map: map,
      shadowStyle: 0,
      padding: 0,
      backgroundColor: '#fff',
      borderRadius: 0,
      arrowSize: 15,
      borderWidth: 0,
      borderColor: 'transparent',
      disableAutoPan: false,
      hideCloseButton: false,
      arrowPosition: 50,
      backgroundClassName: 'info-content',
      arrowStyle: 0,
      minHeight: 286,
      maxHeight: 286,
      minWidth: 572,
      closeSrc: 'https://www.thistle.com/d/thistle/media/insta_map_assets/black/close-btn2x_f74344.png'
    });
  }


  for (var i = 0; i < locationsData.length; i++) {

    var markerOptions = {
      map: map,
      position: {
        "lat": locationsData[i]["lat"],
        "lng": locationsData[i]["lng"],
      },
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
      infoBubble.setContent('<img src="' + this.image + '" style="max-width: 286px;" /><div class="info" style="display: inline; position: absolute; top: 0; width: 60%; padding: 15px;box-sizing: border-box;"><h4 class="amber">' + this.name + '</h4>' + '<p class="category">' + this.category + '</p>' + '<p><span class="amber">#</span>' + this.hashtag + '</p><p><span class="amber"> Posts: </span>  ' + this.posts + '</p><p class="copy">' + this.copy + '</p></div>');
      infoBubble.open(map, this);

      // add styles to the popup

      if(screen.width > 800) {
        $('.info-content').parent().css('overflow', 'hidden');
      } else {
        $('.info-content').parent().css('overflow-x', 'auto');
        // $('.info-content').parent().css('overflow-y', 'hidden');
      }

      $('.info-content').parent().css('box-shadow', 'rgba(0, 0, 0, 0.3) 0px 4px 2px');
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
      callback(artsData, category);
      break;

    case 'entertainment':
      callback(entertainmentData, category);
      break;

    case 'food':
      callback(foodData, category);
      break;

    case 'gems':
      callback(gemsData, category);
      break;

    case 'landmarks':
      callback(landmarksData, category);
      break;

    case 'parks':
      callback(parksData, category);
      break;

    case 'shopping':
      callback(shoppingData, category);
      break;

    default:
      callback(parksData);
  }

}

function showTopTen(data) {
  // populate the list with the selected category data
  for (var i = 0; i < 10; i++) {
    $($('#topTen li')[i]).html('<div class="list-content"><img src="' + data[i].image + '" /> <div class="top-ten-info"><p><span class="amber">' + data[i].category + '</span></p><h4>' + data[i].name + '</h4><p class="copy">' + data[i].copy + '</p></div></div>');
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
  markerCluster = new MarkerClusterer(map, activeMarkers, {
    imagePath: 'https://www.thistle.com/d/thistle/media/insta_map_assets/clusters/m'
  });

});

$('.top-ten-select').change(function() {

  var category = $('.top-ten-select option:selected').attr('value');

  getCategoryData(category, showTopTen);

});



initMap();

showTopTen(parksData);
