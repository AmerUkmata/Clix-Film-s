document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const numberOfCards = 30;

    // Array of custom titles and image paths
    const cardData = [
        { title: 'Die Hard (1988)', image: '../IMG/die hard.jpeg' },
        { title: 'Terminator 2: Judgment Day (1991)', image: '../IMG/terminator.jpeg' },
        { title: 'Mad Max: Fury Road (2015)', image: '../IMG/mad max.jpeg ' },
        { title: 'The Dark Knight (2008)', image: '../IMG/the dark knight.jpeg' },
        { title: 'Lethal Weapon (1987)', image: '../IMG/Lethal Weapon.jpeg' },
        { title: 'John Wick (2014)', image: '../IMG/John Wick.jpeg' },
        { title: 'The Matrix (1999)', image: '../IMG/The Matrix.jpeg' },
        { title: 'Gladiator (2000)', image: '../IMG/Gladiator.jpeg' },
        { title: 'Mission: Impossible - Fallout (2018)', image: '../img/Mission Impossible  Fallout.jpeg' },
        { title: 'Kill Bill: Volume 1 (2003)', image: '../img/Kill Bill Volume 1.jpeg' },
        { title: 'Airplane! (1980)', image: '../img/Airplane!.jpeg' },
        { title: 'Ferris Buellers Day Off (1986)', image: '../img/Ferris Buellers Day Off.jpeg' },
        { title: '22 Jump street (2019)', image: '../img/22 Jump Street.jpeg'},
        { title: 'Superbad (2007)', image: '../img/Superbad.jpeg' },
        { title: 'Bridesmaids (2011)', image: '../img/Bridesmaids.jpeg' },
        { title: 'Dumb and Dumber (1994)', image: '../img/Dumb and Dumber.jpeg' },
        { title: 'The Grand Budapest Hotel (2014)', image: '../img/The Grand Budapest Hotel.jpeg' },
        { title: 'Shaun of the Dead (2004)', image: '../img/Shaun of the Dead.jpeg' },
        { title: '21 Jump Street (2012)', image: '../img/21 Jump Street.jpeg' },
        { title: 'The Hangover (2009)', image: '../img/The Hangover.jpeg' },
        { title: 'Rush Hour (1998)', image: '../img/Rush Hour.jpeg' },
        { title: 'Bad Boys (1995)', image: '../img/Bad Boys.jpeg' },
        { title: 'Hot Fuzz (2007)', image: '../img/Hot Fuzz.jpeg' },
        { title: 'Deadpool (2016)', image: '../img/Deadpool.jpeg' },
        { title: 'Men in Black (1997)', image: '../img/Men in Black.jpeg' },
        { title: 'The Nice Guys (2016)', image: '../img/The Nice Guys.jpeg' },
        { title: 'Avengers EndGame (2022)', image: '../img/Avengers EndGame.jpeg' },
        { title: 'The Other Guys (2010)', image: '../img/The Other Guys.jpeg' },
        { title: 'Kiss Kiss Bang Bang (2005)', image: '../img/Kiss Kiss Bang Bang.jpeg' },
        { title: 'Scott Pilgrim vs. the World (2010)', image: '../img/Scott Pilgrim vs. the World.jpeg' },
    ];

    for (let i = 0; i < numberOfCards; i++) {
        const card = document.createElement('a');
        card.href = 'movie.html';
        card.classList.add('card');

        // Image
        const image = document.createElement('img');
        image.src = cardData[i].image || '';
        image.alt = `Card ${i + 1} Image`;
        card.appendChild(image);

        // H3 Title
        const title = document.createElement('h4');
        title.textContent = cardData[i].title || '';
        card.appendChild(title);

        gridContainer.appendChild(card);
    }
});