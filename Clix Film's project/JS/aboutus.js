document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const numberOfCards = 5;

    // Array of custom titles and image paths
    const cardData = [
        { title: 'Amër Ukmata', image: '../IMG/Amer.PNG' },
        { title: 'Gzim Kosumi', image: '../IMG/gimi.jpg' },
        { title: 'Arxhent Halimi', image: '../IMG/xhendi.jpg ' },
        { title: 'Suleyman Zeyd Vizdiklar', image: '../IMG/Zeyd.jpg' },
        { title: 'Erion Hajdari', image: '../IMG/Erioni.jpg' },
    ];

    for (let i = 0; i < numberOfCards; i++) {
        const card = document.createElement('a');
        card.href = '#';
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