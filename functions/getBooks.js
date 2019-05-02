exports.handler = function(event, context, callback) {
  const file = [
    {
      title: "1984",
      author: "George Orwell",
      year: "1977",
      isbn: "9780452254268"
    },
    {
      title: "A Clockwork Orange",
      author: "Anthony Burgess",
      year: "1986",
      isbn: "9780393312836"
    },
    {
      title: "A Dance to the Music of Time",
      author: "Anthony Powell",
      year: "1971",
      isbn: "9780434599196"
    },
    {
      title: "A Death in the Family",
      author: "James Agee",
      year: "1985",
      isbn: "9780553270112"
    },
    {
      title: "A Handful of Dust",
      author: "Evelyn Waugh",
      year: "1951",
      isbn: "9780140008227"
    },
    {
      title: "A House for Mr. Biswas",
      author: "V.S. Naipaul",
      year: "1992",
      isbn: "9780140186048"
    },
    {
      title: "A Passage to India",
      author: "E. M. Forster",
      year: "1984",
      isbn: "9780156711425"
    },
    {
      title: "All the King's Men",
      author: "Robert Penn Warren",
      year: "",
      isbn: null
    },
    {
      title: "American Pastoral",
      author: "Philip Roth",
      year: "1997",
      isbn: "9780395860212"
    },
    {
      title: "An American Tragedy",
      author: "Theodore Dreiser",
      year: "2000",
      isbn: "9780451527707"
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      year: "1995",
      isbn: "9780151002177"
    },
    {
      title: "Appointment in Samarra",
      author: "John O'Hara",
      year: "1953",
      isbn: "9780783803760"
    },
    {
      title: "Are You There God? It's Me, Margaret",
      author: "Judy Blume",
      year: null,
      isbn: "9781581180886"
    },
    {
      title: "At Swim-Two-Birds",
      author: "Flann O'Brien",
      year: "1967",
      isbn: "9780140181722"
    },
    {
      title: "Atonement",
      author: "Kim Martin Sadler",
      year: "1996",
      isbn: "9780829811476"
    },
    {
      title: "Beloved",
      author: "Toni Morrison",
      year: "1987",
      isbn: "9780452280625"
    },
    {
      title: "Blood Meridian",
      author: "Cormac McCarthy",
      year: null,
      isbn: "9780844667935"
    },
    {
      title: "Brideshead Revisited",
      author: "Evelyn Waugh",
      year: "1993",
      isbn: "9780679423003"
    },
    {
      title: "Call It Sleep",
      author: "Henry Roth",
      year: "1991",
      isbn: "9780374522926"
    },
    { title: "Catch-22", author: "Joseph Heller", year: "", isbn: "" },
    {
      title: "Death Comes for the Archbishop",
      author: "Willa Cather",
      year: "1999",
      isbn: "9780803214293"
    },
    {
      title: "Deliverance",
      author: "James Dickey",
      year: "1982",
      isbn: "9780809310302"
    },
    {
      title: "Dog Soldiers",
      author: "Robert G. Stone",
      year: "1974",
      isbn: "9780395184813"
    },
    {
      title: "Falconer",
      author: "John Cheever",
      year: "1977",
      isbn: "9780394410715"
    },
    {
      title: "Go Tell it on the Mountain",
      author: "James Baldwin",
      year: "1954",
      isbn: "9780718101619"
    },
    {
      title: "Gone With the Wind",
      author: "Herb Bridges",
      year: "1999",
      isbn: "9780865546721"
    },
    {
      title: "Gravity's Rainbow",
      author: "Tsuboi, Chuji",
      year: "1983",
      isbn: "9780045510733"
    },
    {
      title: "Herzog",
      author: "Jonathan Wilson",
      year: "1990",
      isbn: "9780805779967"
    },
    {
      title: "Housekeeping",
      author: "Marilynne Robinson",
      year: "1980",
      isbn: "9780374173135"
    },
    { title: "I, Claudius", author: "Robert Graves", year: "", isbn: null },
    {
      title: "Infinite Jest",
      author: "David Foster Wallace",
      year: "1996",
      isbn: "9780316920049"
    },
    {
      title: "Invisible Man",
      author: "Ralph Ellison",
      year: "1988",
      isbn: "9780805779776"
    },
    {
      title: "Light in August",
      author: "William Faulkner",
      year: "1979",
      isbn: "9780835704298"
    },
    {
      title: "Lolita",
      author: "Vladimir Vladimirovich Nabokov",
      year: "1983",
      isbn: "9780425089781"
    },
    {
      title: "Lord of the Flies",
      author: "Harold Bloom",
      year: "1999",
      isbn: "9780791047774"
    },
    {
      title: "Loving",
      author: "Henry Green",
      year: "1969",
      isbn: "9780701200800"
    },
    {
      title: "Lucky Jim",
      author: "J. Golden Taylor",
      year: "2003",
      isbn: "9780620295086"
    },
    {
      title: "Midnight's Children",
      author: "Julien Green",
      year: "",
      isbn: "9780704301627"
    },
    {
      title: "Money",
      author: "Sara Pistoia",
      year: "2003",
      isbn: "9781567661163"
    },
    {
      title: "Mrs. Dalloway",
      author: "Virginia Woolf",
      year: null,
      isbn: null
    },
    {
      title: "Naked Lunch",
      author: "William Burroughs",
      year: "1990",
      isbn: "9780802130938"
    },
    {
      title: "Native Son",
      author: "Richard T. Wright",
      year: "1940",
      isbn: "9780816157877"
    },
    {
      title: "Neuromancer",
      author: "William Carleton Gibson",
      year: "1984",
      isbn: "9780932096418"
    },
    {
      title: "Never Let Me Go",
      author: "Kazuo Ishiguro",
      year: "2005",
      isbn: "9781400043392"
    },
    {
      title: "On the Road",
      author: "Jack Kerouac",
      year: "1991",
      isbn: "9780887508417"
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      author: "Ken Kesey",
      year: "1962",
      isbn: "9780670001613"
    },
    {
      title: "Pale Fire",
      author: "Vladimir Vladimirovich Nabokov",
      year: "1992",
      isbn: "9780679410775"
    },
    {
      title: "Play It As It Lays",
      author: "Joan Didion",
      year: "1973",
      isbn: "9780140035629"
    },
    {
      title: "Portnoy's Complaint",
      author: "Philip Roth",
      year: "1994",
      isbn: "9780679756453"
    },
    {
      title: "Possession",
      author: "Erika Bourguignon",
      year: "1976",
      isbn: "9780883165249"
    },
    {
      title: "Rabbit, Run",
      author: "John Updike",
      year: "1996",
      isbn: "9780449911655"
    },
    {
      title: "Ragtime",
      author: "John Edward Hasse",
      year: "1985",
      isbn: "9780028716503"
    },
    {
      title: "Red Harvest",
      author: "Lowell K. Dyson",
      year: "1982",
      isbn: "9780803216594"
    },
    {
      title: "Revolutionary Road",
      author: "Richard Yates",
      year: "1961",
      isbn: "9780679721918"
    },
    {
      title: "Slaughterhouse Five",
      author: "Kurt Vonnegut",
      year: "1997",
      isbn: "9780585109077"
    },
    {
      title: "Snow Crash",
      author: "Neal Stephenson",
      year: "1992",
      isbn: "9780553088533"
    },
    {
      title: "The Adventures of Augie March",
      author: "Saul Bellow",
      year: "1999",
      isbn: "9780140281606"
    },
    {
      title: "The Assistant",
      author: "J. Patrick Law",
      year: "2000",
      isbn: "9780684842615"
    },
    {
      title: "The Berlin Stories",
      author: "Christopher Isherwood",
      year: "1954",
      isbn: "9780837604497"
    },
    {
      title: "The Big Sleep",
      author: "Raymond Chandler",
      year: "1986",
      isbn: "9780910457095"
    },
    {
      title: "The Blind Assassin",
      author: "Margaret Eleanor Atwood",
      year: "2000",
      isbn: "9780385475723"
    },
    {
      title: "The Bridge of San Luis Rey",
      author: "Thornton Wilder",
      year: "1998",
      isbn: "9780060929862"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: "1993",
      isbn: "9780805780284"
    },
    {
      title: "The Confessions of Nat Turner",
      author: "William Styron",
      year: "1992",
      isbn: "9780679736639"
    },
    {
      title: "The Corrections",
      author: "Jonathan Franzen",
      year: "2001",
      isbn: "9780374129989"
    },
    {
      title: "The Crying of Lot 49",
      author: "Thomas Pynchon",
      year: "1974",
      isbn: "9780140037333"
    },
    {
      title: "The Day of the Locust",
      author: "Nathanael West",
      year: "1939",
      isbn: "9780809438402"
    },
    {
      title: "The Death of the Heart",
      author: "Elizabeth Bowen",
      year: "1948",
      isbn: "9780224600521"
    },
    {
      title: "The French Lieutenant's Woman",
      author: "Richard Church",
      year: "1971",
      isbn: "9780434932559"
    },
    {
      title: "The Golden Notebook",
      author: "Doris May Lessing",
      year: "1962",
      isbn: "9780671287702"
    },
    {
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      year: "1972",
      isbn: "9780670018086"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: "1990",
      isbn: "9780805779608"
    },
    {
      title: "The Heart is A Lonely Hunter",
      author: "Carson McCullers",
      year: "",
      isbn: "9780395079782"
    },
    {
      title: "The Heart of the Matter",
      author: "Graham Greene",
      year: "2000",
      isbn: "9780325002804"
    },
    {
      title: "The Lion, The Witch and the Wardrobe",
      author: "C. S. Lewis",
      year: "1995",
      isbn: "9780064433990"
    },
    {
      title: "The Lord of the Rings",
      author: "Jane Chance",
      year: "2001",
      isbn: "9780813190174"
    },
    {
      title: "The Man Who Loved Children",
      author: "Christina Stead",
      year: "1970",
      isbn: "9780140028348"
    },
    {
      title: "The Moviegoer",
      author: "Walker Percy",
      year: "1961",
      isbn: "9780380470761"
    },
    {
      title: "The Painted Bird",
      author: "Jerzy N. Kosinski",
      year: "1978",
      isbn: "9780553205541"
    },
    {
      title: "The Power and the Glory",
      author: "Graham Greene",
      year: "1940",
      isbn: "9780140184990"
    },
    {
      title: "The Prime of Miss Jean Brodie",
      author: "Muriel Spark",
      year: "2000",
      isbn: "9780141181424"
    },
    {
      title: "The Recognitions",
      author: "William Gaddis",
      year: "1993",
      isbn: "9780140187083"
    },
    {
      title: "The Sheltering Sky",
      author: "Paul Bowles",
      year: "1978",
      isbn: "9780912946436"
    },
    {
      title: "The Sot-Weed Factor",
      author: "Ebenezer Cooke",
      year: "1987",
      isbn: "9780585167732"
    },
    {
      title: "The Sound and the Fury",
      author: "William Faulkner",
      year: "1987",
      isbn: "9780393025460"
    },
    {
      title: "The Sportswriter",
      author: "Richard Ford",
      year: "1996",
      isbn: "9780679454519"
    },
    {
      title: "The Spy Who Came in From the Cold",
      author: "John Le Carre",
      year: "1963",
      isbn: "9780553108071"
    },
    {
      title: "The Sun Also Rises",
      author: "",
      year: "1988",
      isbn: "9780805780154"
    },
    {
      title: "Their Eyes Were Watching God",
      author: "Zora Neale Hurston",
      year: "1937",
      isbn: "9780252006869"
    },
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      year: "1996",
      isbn: "9780585106595"
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harold Bloom",
      year: "1999",
      isbn: "9780791047798"
    },
    {
      title: "To the Lighthouse",
      author: "Virginia Woolf",
      year: "1982",
      isbn: "9780701205416"
    },
    {
      title: "Tropic of Cancer",
      author: "Henry Miller",
      year: "1961",
      isbn: "9780345274786"
    },
    {
      title: "Ubik",
      author: "Philip K. Dick",
      year: "1991",
      isbn: "9780679736646"
    },
    {
      title: "Under the Net",
      author: "Iris Murdoch",
      year: "1964",
      isbn: "9780670001620"
    },
    {
      title: "Under the Volcano",
      author: "Malcolm Lowry",
      year: "1947",
      isbn: "9780060153670"
    },
    {
      title: "Watchmen",
      author: "Alan W. Moore",
      year: "2005",
      isbn: "9780930289232"
    },
    {
      title: "White Noise",
      author: "Don DeLillo",
      year: "1985",
      isbn: "9780670803736"
    },
    {
      title: "White Teeth",
      author: "Zadie Smith",
      year: "2000",
      isbn: "9780375501852"
    },
    {
      title: "Wide Sargasso Sea",
      author: "Jean Rhys",
      year: "1966",
      isbn: "9780393000566"
    }
  ];
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(file)
  });
};
