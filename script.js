"use strict";
const url = "https://anapioficeandfire.com/api/books/";

// FETCH Data from the API Server
async function books(url) {
    let data = await fetch(url);
    if (data.ok) {
        return data.json();
    } else {
        return data.status;
    }
}

let books_object = books(url);

books_object
    .then(function(value) {
        console.log(JSON.stringify(value));
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("fetch api ran successfully !");
    });

const data = {
    Book_name: "Baburnama",
    ISBN: "978-055310323",
    numberOfpages: "250",
    "authors": [
        "Babur"
    ],
    "publisher": "Baburbooks",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data)
    //book-2
const data1 = {
    Book_name: "Arthashastra",
    ISBN: "978-055310267",
    numberOfpages: "229",
    "authors": [
        "Kautilya"
    ],
    "publisher": "Kautilyabooks",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data1)
    //book-3

const data2 = {
    Book_name: "Anand Math",
    ISBN: "978-05531099",
    numberOfpages: "782",
    "authors": [
        "Anand Math"
    ],
    "publisher": "Bankimchandra Chattopadhyay",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data2)
    //book-4
const data3 = {
    Book_name: "Mein Kampf",
    ISBN: "978-05531099",
    numberOfpages: "132",
    "authors": [
        "Adolf Hitler"
    ],
    "publisher": "Adolf Hitler books",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data3)

//book-5
const data4 = {
    Book_name: "The Vicar of Wakefield",
    ISBN: "978-05531033",
    numberOfpages: "121",
    "authors": [
        "Oliver Goldsmith"
    ],
    "publisher": "Oliver books",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data4)

//book-6
const data5 = {
    Book_name: "The Decline and Fall of the Roman Empire",
    ISBN: "978-05531022",
    numberOfpages: "412",
    "authors": [
        "Edward Gibbon"
    ],
    "publisher": "Gibbon books",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data5)

//book-7
const data6 = {
    Book_name: "Time Machine",
    ISBN: "978-05531066",
    numberOfpages: "302",
    "authors": [
        "H.G. Wells"
    ],
    "publisher": "H.G. Wells books",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data6)

//book-8
const data7 = {
    Book_name: "A passage to India",
    ISBN: "978-055310321",
    numberOfpages: "390",
    "authors": [
        "E.M.Forster"
    ],
    "publisher": "E.M.Forster books",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data7)

//book-9
const data8 = {
    Book_name: "The Moon and Sixpence",
    ISBN: "978-0553103543",
    numberOfpages: "124",
    "authors": [
        " Somerset Maughan"
    ],
    "publisher": " Somerset Maughan",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data8)

//book-10
const data9 = {
    Book_name: "Far from the Madding Crowd",
    ISBN: "978-0553403543",
    numberOfpages: "674",
    "authors": [
        " Thomas Hardy"
    ],
    "publisher": "Thomas Hardy",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data9)

//book-11
const data10 = {
    Book_name: "From This World to That Which Is to Come",
    ISBN: "978-1253403543",
    numberOfpages: "234",
    "authors": [
        " John Bunyan "
    ],
    "publisher": "John Bunyan ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data10)

//book-12
const data11 = {
    Book_name: "The Merchant of Venice",
    ISBN: "978-12343403543",
    numberOfpages: "221",
    "authors": [
        " Shakespeare "
    ],
    "publisher": "Shakespeare ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data11)

//book-13
const data12 = {
    Book_name: "Geetanjali",
    ISBN: "978-1234323033",
    numberOfpages: "256",
    "authors": [
        " Rabindra Nath Tagore "
    ],
    "publisher": "Shakespeare ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data12)

//book-14
const data13 = {
    Book_name: "Utopia",
    ISBN: "978-1236723033",
    numberOfpages: "296",
    "authors": [
        " Sir Thomas Moor "
    ],
    "publisher": "Thomas Moor ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data13)

//book-15
const data14 = {
    Book_name: "Crime and Punishment",
    ISBN: "978-12367789033",
    numberOfpages: "280",
    "authors": [
        "Dostoevsky"
    ],
    "publisher": "Dostoevsky",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data14)

//book-16
const data15 = {
    Book_name: "Chitra",
    ISBN: "978-12321389033",
    numberOfpages: "290",
    "authors": [
        "R.N.Tagore "
    ],
    "publisher": "R.N.Tagore",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data15)

//book-17

const data16 = {
    Book_name: "Bisarjan",
    ISBN: "978-12321389033",
    numberOfpages: "590",
    "authors": [
        "R.N.Tagore "
    ],
    "publisher": "R.N.Tagore",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data16)

//book-18
const data17 = {
    Book_name: "Divine Comedy",
    ISBN: "978-1011389033",
    numberOfpages: "590",
    "authors": [
        "Dante "
    ],
    "publisher": "Dante",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data17)

//book-19

const data18 = {
    Book_name: "Alice in Wonderland",
    ISBN: "978-1011099033",
    numberOfpages: "500",
    "authors": [
        " Lewis Carrol"
    ],
    "publisher": " Lewis Carrol",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data18)

//book-20

const data19 = {
    Book_name: "Ancient Mariner",
    ISBN: "978-1019099033",
    numberOfpages: "520",
    "authors": [
        "Coleridge"
    ],
    "publisher": "Coleridge",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data19)

//book-21

const data20 = {
    Book_name: "Arms and the Man",
    ISBN: "978-1019099099",
    numberOfpages: "590",
    "authors": [
        "G.B.Shaw"
    ],
    "publisher": "G.B.Shaw",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data20)

//book-22
const data21 = {
    Book_name: "Around the World in eighty days",
    ISBN: "978-1019088099",
    numberOfpages: "690",
    "authors": [
        "Jules Verne"
    ],
    "publisher": "Jules Verne",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data21)

//book-23
const data22 = {
    Book_name: "Anna Karenina",
    ISBN: "978-101903499",
    numberOfpages: "890",
    "authors": [
        "Leo Tolstoy"
    ],
    "publisher": "Leo Tolstoy",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data22)

//book-24
const data23 = {
    Book_name: "Pride and Prejudice",
    ISBN: "978-101267499",
    numberOfpages: "340",
    "authors": [
        "Jane Austeny"
    ],
    "publisher": "Austen",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data23)

//book-25
const data24 = {
    Book_name: "Le Contract Social",
    ISBN: "978-11237499",
    numberOfpages: "381",
    "authors": [
        "Jean Jacques Rousseau"
    ],
    "publisher": "Jean Jacques Rousseau",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data24)

//book-26

const data25 = {
    Book_name: "Gulliver’s Travels",
    ISBN: "978-1217499",
    numberOfpages: "301",
    "authors": [
        "Jonathan Swift"
    ],
    "publisher": "Jonathan Swift",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data25)

//book-27
const data26 = {
    Book_name: "A Dangerous place",
    ISBN: "218-1217499",
    numberOfpages: "391",
    "authors": [
        "D.P. Moynihan"
    ],
    "publisher": "D.P. Moynihan",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data26)

//book-28
const data27 = {
    Book_name: "Ain-i-Akbari",
    ISBN: "218-1217776",
    numberOfpages: "381",
    "authors": [
        "Abul Fazal"
    ],
    "publisher": "Abul Fazal",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data27)

//batch-29
const data28 = {
    Book_name: "The Lady of the Last Minstrel",
    ISBN: "218-12190776",
    numberOfpages: "369",
    "authors": [
        "Sir Walter Scott"
    ],
    "publisher": "Sir Walter Scott",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data28)

//batch-30
const data29 = {
    Book_name: "Adventures of Sherlock Holmes",
    ISBN: "218-1219076",
    numberOfpages: "102",
    "authors": [
        "Arthur Conan Doyle"
    ],
    "publisher": "Arthur Conan Doyle",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data29)

//book-31
const data30 = {
    Book_name: "Raghuvamsa",
    ISBN: "218-1219070",
    numberOfpages: "122",
    "authors": [
        "Kalidas"
    ],
    "publisher": "Kalidas",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data30)

//book-32
const data31 = {
    Book_name: "Discovery of India",
    ISBN: "218-9219070",
    numberOfpages: "200",
    "authors": [
        "Pandit Jawaharlal Nehru"
    ],
    "publisher": "Pandit Jawaharlal Nehru",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data31)

//book-33
const data32 = {
    Book_name: "From This World to That Which Is to Come",
    ISBN: "218-921901270",
    numberOfpages: "300",
    "authors": [
        "John Bunyan "
    ],
    "publisher": "John Bunyan ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data32)

//book-34
const data33 = {
    Book_name: "My Experiments with Truth",
    ISBN: "218-9219012370",
    numberOfpages: "310",
    "authors": [
        "Mahatma M.K.Gandhi "
    ],
    "publisher": "Mahatma M.K.Gandhi ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data33)

//book-35
const data34 = {
    Book_name: "A Tale of Two Cities",
    ISBN: "218-92190112370",
    numberOfpages: "110",
    "authors": [
        "Charles Dickens "
    ],
    "publisher": "Charles Dickens ",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data34)

//book-36

const data35 = {
    Book_name: "One Day in the Life of Ivan Denisovich",
    ISBN: "218-9112112370",
    numberOfpages: "120",
    "authors": [
        "Alexander Solzhenitsyn"
    ],
    "publisher": "Alexander Solzhenitsyn",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data35)

//book-37
const data36 = {
    Book_name: "Origin of Species",
    ISBN: "218-9112312370",
    numberOfpages: "220",
    "authors": [
        "Charles Darwin"
    ],
    "publisher": "Charles Darwin",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data36)

//book-38
const data37 = {
    Book_name: "Das Kapital ",
    ISBN: "218-911237870",
    numberOfpages: "520",
    "authors": [
        "Karl Marx"
    ],
    "publisher": "Karl Marx",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data37)

//book-39
const data38 = {
    Book_name: "Count of Monte Cristo ",
    ISBN: "218-911278870",
    numberOfpages: "920",
    "authors": [
        "Alexander Dumas"
    ],
    "publisher": "Alexander Dumas",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data38)

//book-40
const data39 = {
    Book_name: "Canterbury Tales",
    ISBN: "218-918998870",
    numberOfpages: "720",
    "authors": [
        "Chaucer"
    ],
    "publisher": "Chaucer",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data39)

//book-41

const data40 = {
    Book_name: "The Wild Iris",
    ISBN: "218-934998870",
    numberOfpages: "700",
    "authors": [
        "Louis Gluck"
    ],
    "publisher": "Louis Gluck",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data40)

//book-42
const data41 = {
    Book_name: "Shakuntala",
    ISBN: "218-93495430",
    numberOfpages: "400",
    "authors": [
        "Louis Gluck"
    ],
    "publisher": "Louis Gluck",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data41)

//book-43

const data42 = {
    Book_name: "bheem",
    ISBN: "218-93495430",
    numberOfpages: "430",
    "authors": [
        "Fyodor Dostoevsky"

    ],
    "publisher": "Louis Gluck",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data42)

//book-45
const data44 = {
    Book_name: "Gulliver’s Travels",
    ISBN: "978-1217499",
    numberOfpages: "301",
    "authors": [
        "Jonathan Swift"
    ],
    "publisher": "Jonathan Swift",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data44)

//book-46

const data45 = {
    Book_name: "Gulliver’s Travels",
    ISBN: "978-1217499",
    numberOfpages: "301",
    "authors": [
        "Jonathan Swift"
    ],
    "publisher": "Jonathan Swift",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data45)

//book-47

const data46 = {
    Book_name: "Gulliver’s Travels",
    ISBN: "978-1217499",
    numberOfpages: "301",
    "authors": [
        "Jonathan Swift"
    ],
    "publisher": "Jonathan Swift",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data46)

//book-48
const data47 = {
    Book_name: "Gulliver’s Travels",
    ISBN: "978-1217499",
    numberOfpages: "301",
    "authors": [
        "Jonathan Swift"
    ],
    "publisher": "Jonathan Swift",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data47)

//book-49

const data48 = {
    Book_name: "The Vicar of Wakefield",
    ISBN: "978-05531033",
    numberOfpages: "121",
    "authors": [
        "Oliver Goldsmith"
    ],
    "publisher": "Oliver books",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data48)

//book-50
const data49 = {
    Book_name: "Bisarjan",
    ISBN: "978-12321389033",
    numberOfpages: "590",
    "authors": [
        "R.N.Tagore "
    ],
    "publisher": "R.N.Tagore",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data49)

//book-51
const data50 = {
    Book_name: "Arms and the Man",
    ISBN: "978-13456099099",
    numberOfpages: "100",
    "authors": [
        "G.B.Shaw"
    ],
    "publisher": "G.B.Shaw",
    "released": "1996-08-01T00:00:00",
    "characters": [
        "https://anapioficeandfire.com/api/characters/2",
        "https://anapioficeandfire.com/api/characters/12",
        "https://anapioficeandfire.com/api/characters/13",
        "https://anapioficeandfire.com/api/characters/16",
        "https://anapioficeandfire.com/api/characters/20",
    ]
};

fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },

})
console.log(data50)