var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
mongoose.Promise = global.Promise;

var products = [
    new Product({
    imagePath: 'http://images.genius.com/848e8390fd03a29ac5e408a80cc9df86.1000x1000x1.jpg',
    title: 'Nekfeu-Cyborg',
    description: 'Cyborg est le deuxième album studio du rappeur français Nekfeu sorti le 2 décembre 2016 sur le label Seine Zoo.',
    price: 12.99
    }),

    new Product({
        imagePath: 'https://images.greenmangaming.com/cd848ba9a48f4d8e9d13da1570a9b465/a158ed611ddf40d3892e0f583b4777de.jpg',
        title: 'The Witcher 3',
        description: 'Awesome Game, GOTY Edition',
        price: 49.99
    }),

    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/originals/c1/63/73/c16373bc0714acaff289b33252ee80d8.jpg',
        title: 'Joshua Reynolds self portrait',
        description: 'Awesome painting of research of respect',
        price: 125
    }),

    new Product({
        imagePath: 'https://projectluwaksg.files.wordpress.com/2014/02/the-world-s-most-exclusive-coffee-100-genuine-kopi-luwak-blended-ground-gourmet-coffee.jpg',
        title: 'Kopi Luwak',
        description: '1kg du meilleur café du monde',
        price: 5724.99
    }),

    new Product({
        imagePath: 'http://www.chernobogslair.com/lovecraft/Pics/necronomicon2.jpg',
        title: 'Necronomicon',
        description: '« That is not dead which can eternal lie / And with strange aeons even death may die »',
        price: 6.66
    }),

    new Product({
        imagePath: 'http://www.ankama-shop.com/1291/blu-ray-dofus-live-1-julith.jpg',
        title: 'DOFUS : Livre 1 : Julith',
        description: 'Awesome Film by Ankama',
        price: 14.99
    })
];
var done = 0;
for (var i = 0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}