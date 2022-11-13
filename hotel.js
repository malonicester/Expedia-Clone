let products = [
    {
        img: 'https://images.trvl-media.com/hotels/5000000/4660000/4651800/4651727/c9be0802.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "The Leela Palace New Delhi",
        area: "Chanakyapuri",
        price: 26000,
        rating: 4.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/79000000/78470000/78468200/78468159/952f55eb.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "HOTEL Worth Paharganj",
        area: "Paharganj",
        price: 2609,
        rating: 5.0
    },
    {
        img: 'https://images.trvl-media.com/hotels/2000000/1310000/1304400/1304393/f9968404.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Shangri-La Eros,New Delhi",
        area: "Connaught place",
        price: 16200,
        rating: 4.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Holiday Inn ,an IHG HOTEL",
        area: "Connaught place",
        price: 16200,
        rating: 4.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/32000000/31060000/31054200/31054148/fe5729de.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "HOTEL WTI Airport",
        area: "Mahipalpur",
        price: 2652,
        rating: 3.7
    },
    {
        img: 'https://images.trvl-media.com/hotels/88000000/88000000/87996800/87996780/f6e3c7b5.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Haritma Resort",
        area: "New Delhi",
        price: 3600,
        rating: 3.7
    },
    {
        img: 'https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/3000000/2600000/2593100/2593057/50744d35_b.jpg',
        name: "The Connaught,New Delhi",
        area: "Connaught Place",
        price: 12150,
        rating: 4.2
    },
    {
        img: 'https://images.trvl-media.com/hotels/21000000/20170000/20160800/20160759/e31ef8a9.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "The Oberoi,New Delhi",
        area: "Connaught Place",
        price: 28125,
        rating: 4.9
    },
    {
        img: 'https://images.trvl-media.com/hotels/1000000/470000/465100/465005/13a4747e.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Taj Place,New Delhi",
        area: "Connaught Place",
        price: 20531,
        rating: 4.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/1000000/540000/536600/536519/2525421d.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "The Metropolitan,New Delhi",
        area: "Connaught Place",
        price: 9000,
        rating: 4.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/43000000/42460000/42451400/42451303/5cafbd5f.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Gracious by Vishesh Hotels & Home Stay",
        area: "Connaught Place",
        price: 1440,
        rating: 4.1
    },
    {
        img: 'https://images.trvl-media.com/hotels/39000000/38110000/38108300/38108280/368bb2f6.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Hotel Smart Plaza",
        area: "New Delhi",
        price: 2329,
        rating: 4.4
    },
    {
        img: 'https://images.trvl-media.com/hotels/7000000/6180000/6172800/6172750/4b2ff253.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "JW Marriot Hotel Aerocity",
        area: "Aerocity",
        price: 19200,
        rating: 4.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/85000000/84350000/84343700/84343662/adacff9d.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Staybook-Jyoti Mahal A Heritage Hotel",
        area: "Paharganj",
        price: 2333,
        rating: 5.0
    },
    {
        img: 'https://images.trvl-media.com/hotels/1000000/530000/526400/526368/2239d2d7.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Ambassador,New Delhi",
        area: "Paharganj",
        price: 13950,
        rating: 5.0
    },
    {
        img: 'https://images.trvl-media.com/hotels/3000000/2220000/2215100/2215082/c55ae853.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "The Prime Balaji Deluxe",
        area: "Paharganj",
        price: 2470,
        rating: 3.9
    },
    {
        img: 'https://images.trvl-media.com/hotels/1000000/540000/535700/535616/b4b4bc04.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Jaypee Siddharth",
        area: "New Delhi",
        price: 7499,
        rating: 3.9
    },
    {
        img: 'https://images.trvl-media.com/hotels/16000000/15240000/15233900/15233833/b02869f0.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Haveli Dharampura",
        area: "New Delhi",
        price: 15027,
        rating: 4.3
    },
    {
        img: 'https://images.trvl-media.com/hotels/8000000/7540000/7540000/7539986/37601386.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Taj Princess The Boutique Hotel",
        area: "Karol Bagh",
        price: 4500,
        rating: 3.7
    },
    {
        img: 'https://images.trvl-media.com/hotels/5000000/4910000/4907200/4907198/d6a4d3f8.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Hotel Delhi Aerocity",
        area: "Aerocity",
        price: 1514,
        rating: 3.2
    },
    {
        img: 'https://images.trvl-media.com/hotels/3000000/2820000/2811900/2811803/6360870d.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Rockland Hotel - C R Park",
        area: "New Delhi",
        price: 4939,
        rating: 3.8
    },
    {
        img: 'https://images.trvl-media.com/hotels/9000000/8740000/8738300/8738241/9fdc0ad2.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Vivanta New Delhi",
        area: "Dwraka",
        price: 11800,
        rating: 4.2
    },
    {
        img: 'https://images.trvl-media.com/hotels/60000000/59800000/59791800/59791741/c3074c0d.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Best Western Darbar",
        area: "Paharganj",
        price: 5999,
        rating: 4.2
    },
    {
        img: 'https://images.trvl-media.com/hotels/5000000/4160000/4151200/4151135/2ba0d5ad.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Radission Blu Hotel New Delhi",
        area: "New Delhi",
        price: 11865,
        rating: 3.7
    },
    {
        img: 'https://images.trvl-media.com/hotels/4000000/3020000/3018300/3018270/9d9659ca.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Hotel Hari Piorko",
        area: "Paharganj",
        price: 2124,
        rating: 3.5
    },
    {
        img: 'https://images.trvl-media.com/hotels/10000000/10000000/9994600/9994586/72f49e0b.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Pullman New Delhi Aerocity Hotel",
        area: "Aerocity",
        price: 16500,
        rating: 4.2
    },
    {
        img: 'https://images.trvl-media.com/hotels/10000000/9150000/9141400/9141328/b50c24b2.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Novotel New Delhi Aerocity Hotel",
        area: "Aerocity",
        price: 12000,
        rating: 4.0
    },
    {
        img: 'https://images.trvl-media.com/hotels/4000000/3940000/3934400/3934328/4da2e6de.jpg?impolicy=resizecrop&rw=455&ra=fit',
        name: "Hotel Godwin Deluxe",
        area: "Paharganj",
        price: 2640,
        rating: 3.8
    },

]
console.log(products.length)

display(products)
function display(arr) {
    document.querySelector('.container').innerHTML = "";
    arr.forEach((item) => {
        let wrapper = document.createElement('div');
        let img = document.createElement('img');
        img.src = item.img;
        let title = document.createElement('div');
        title.setAttribute('class', 'title');
        let div1 = document.createElement('div');
        let name = createElement('h3', item.name);
        let area = createElement('p', item.area);
        div1.append(name, area);
        let price_component = document.createElement('div');
        price_component.setAttribute('class', 'price-component');
        let rating = document.createElement('p');
        rating.innerText = `Ratings:${item.rating}/5`;
        let price = document.createElement('h3');
        price.innerText = `Price:${item.price}`
        price_component.append(rating, price);
        title.append(div1, price_component)
        wrapper.append(img, title);
        document.querySelector('.container').append(wrapper)
    })
}

function createElement(element, text) {
    let elem = document.createElement(element);
    elem.innerText = text;
    return elem;
}

let price = document.querySelector('#price');
price.addEventListener('change', (e) => {
    if (price.value == "") {
        display(products);
    }
    else if (price.value == "LTH") {
        let filtered = products.sort((a, b) => {
            return a.price - b.price;
        })
        display(filtered)
    }
    else if (price.value == "HTL") {
        let filtered = products.sort((a, b) => {
            return b.price - a.price;
        })
        display(filtered)
    }
});

let ratings = document.querySelector('#ratings');
ratings.addEventListener('change', () => {
    if (ratings.value == "") {
        display(products);
    }
    else if (ratings.value == "LTH") {
        let filtered = products.sort((a, b) => {
            return a.rating - b.rating;
        })
        display(filtered)
    }
    else if (ratings.value == "HTL") {
        let filtered = products.sort((a, b) => {
            return b.rating - a.rating;
        })
        display(filtered)
    }
})

let input = document.querySelector('#eg');
input.addEventListener('input', (e) => {
    let filtered = products.filter((item) => {
       return  item.name.toLowerCase().includes(e.target.value.toLowerCase());
    })
    display(filtered);
})