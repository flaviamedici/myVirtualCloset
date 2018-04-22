// var imgArray = new Array();

// imgArray[0] = new Image();
// imgArray[0].src = 'images/img/Splash_image1.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = 'images/img/Splash_image2.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = 'images/img/Splash_image3.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = 'images/img/Splash_image4.jpg';

// imgArray[4] = new Image();
// imgArray[4].src = 'images/img/Splash_image5.jpg';

// imgArray[5] = new Image();
// imgArray[5].src = 'images/img/Splash_image6.jpg';

// function nextImage(element)
// {
//     var img = document.getElementById(element);

//     for(var i = 0; i < imgArray.length;i++)
//     {
//         if(imgArray[i].src == img.src) // << check this
//         {
//             if(i === imgArray.length){
//                 document.getElementById(element).src = imgArray[0].src;
//                 break;
//             }
//             document.getElementById(element).src = imgArray[i+1].src;
//             break;
//         }
//     }
// }



var jackets = new Array(
    "images/jackets/jacket1.jpg", 
    "images/jackets/jacket2.jpg", 
    "images/jackets/jacket3.jpg",
    "images/jackets/jacket4.jpg",
    "images/jackets/jacket5.jpg",
    "images/jackets/jacket6.jpg"
);

var pants = new Array (
    "images/pants/pants1.jpg",
    "images/pants/pants2.jpg",
    "images/pants/pants3.jpg",
    "images/pants/pants4.jpg",
    "images/pants/pants5.jpg",
    "images/pants/pants6.jpg"
);

var scarfs = new Array(
    "images/scarf/scarfs1.jpg",
    "images/scarf/scarfs2.jpg",  
    "images/scarf/scarfs3.jpg", 
    "images/scarf/scarfs4.jpg", 
    "images/scarf/scarfs5.jpg",
    "images/scarf/scarfs6.jpg",  
);

var sweater = new Array (
    "images/sweater/sweater1.jpg",
    "images/sweater/sweater2.jpg",
    "images/sweater/sweater3.jpg",
    "images/sweater/sweater4.jpg",
    "images/sweater/sweater5.jpg",
    "images/sweater/sweater6.jpg",
);
var shoes = new Array (
    "images/shoes/shoes1.jpg",
    "images/shoes/shoes2.jpg",
    "images/shoes/shoes3.jpg",
    "images/shoes/shoes4.jpg",
    "images/shoes/shoes5.jpg",
    "images/shoes/shoes6.jpg",
);
var bottoms = new Array(
    "images/bottoms/bottom1.jpg", 
    "images/bottoms/bottom2.jpg", 
    "images/bottoms/bottom3.jpg",
    "images/bottoms/bottom4.jpg",
    "images/bottoms/bottom5.jpg",
    "images/bottoms/bottom6.jpg"
);
var tankTops = new Array(
    "images/tanktops/tanktop1.jpg", 
    "images/tanktops/tanktop2.jpg", 
    "images/tanktops/tanktop3.jpg",
    "images/tanktops/tanktop4.jpg",
    "images/tanktops/tanktop5.jpg",
    "images/tanktops/tanktop6.jpg"
);
var dresses = new Array(
    "images/dresses/dress1.jpg", 
    "images/dresses/dress2.jpg", 
    "images/dresses/dress3.jpg",
    "images/dresses/dress4.jpg",
    "images/dresses/dress5.jpg",
    "images/dresses/dress6.jpg"
);
var summerShoes = new Array (
    "images/summershoes/summershoes1.jpg",
    "images/summershoes/summershoes2.jpg",
    "images/summershoes/summershoes3.jpg",
    "images/summershoes/summershoes4.jpg",
    "images/summershoes/summershoes5.jpg",
    "images/summershoes/summershoes6.jpg",
);
var accessories = new Array (
    "images/accessories/accessories1.jpg",
    "images/accessories/accessories2.jpg",
    "images/accessories/accessories3.jpg",
    "images/accessories/accessories4.jpg",
    "images/accessories/accessories5.jpg",
    "images/accessories/accessories6.jpg",
);

function NewOutfit()
{
   
    var randomJacket =  Math.floor((Math.random()*jackets.length));
    document.getElementById('jacketDisplay').src = jackets[randomJacket];
   
    var randomPants =  Math.floor((Math.random()*pants.length));
    document.getElementById('pantsDisplay').src = pants[randomPants];
   
    var randomScarf =  Math.floor((Math.random()*scarfs.length));
    document.getElementById('scarfDisplay').src = scarfs[randomScarf];
   
    var randomSweater =  Math.floor((Math.random()*sweater.length));
    document.getElementById('sweaterDisplay').src = sweater[randomSweater];
   
    var randomShoes =  Math.floor((Math.random()*shoes.length));
    document.getElementById('shoesDisplay').src = shoes[randomShoes];
   
    var randomAccessories =  Math.floor((Math.random()*accessories.length));
    document.getElementById('accessoriesDisplay').src = accessories[randomAccessories];

   
}

function summerOutfit()
{
   
    var randomBottom =  Math.floor((Math.random()*bottoms.length));
    document.getElementById('bottomDisplay').src = bottoms[randomBottom];
   
    var randomSummerShoes =  Math.floor((Math.random()*summerShoes.length));
    document.getElementById('sumShoesDisplay').src = summerShoes[randomSummerShoes];
   
    var randomtank =  Math.floor((Math.random()*tankTops.length));
    document.getElementById('tankDisplay').src = tankTops[randomtank];
   
    var randomdress =  Math.floor((Math.random()*dresses.length));
    document.getElementById('dressDisplay').src = dresses[randomdress];
}

//go back button to return to the home page
function goBack() {
    window.history.back();
}