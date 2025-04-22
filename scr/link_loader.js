export default function linksLoader(container, links) {
    if (!container || !Array.isArray(links)) {
        console.error("Parámetros inválidos en linksLoader.");
        return;
    }

    const fragment = document.createDocumentFragment();

    links.forEach(([title, url]) => {
        const linkContainer = document.createElement('div');
        linkContainer.classList.add('main__link');

        const link = document.createElement('a');
        link.href = url;
        link.textContent = title[0];

        const paragraph = document.createElement('p');
        paragraph.textContent = title;

        linkContainer.appendChild(link);
        linkContainer.appendChild(paragraph);
        fragment.appendChild(linkContainer);
    });

    container.appendChild(fragment);
}