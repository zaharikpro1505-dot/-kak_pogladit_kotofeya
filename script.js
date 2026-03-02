function showInstruction() {
    const instructionDiv = document.getElementById("instruction");
    instructionDiv.innerHTML = `
        <h2>Как погладить Котофея:</h2>
        <ol>
            <li>Подойди к Котофею.</li>
            <li>он начнёт просить пожрать.</li>
            <li>не давай ему пожрать.</li>
			<li>пока Котофей спокойный начни его гладить по голове и чесать за ушками.<li>
            <li>он снова будет просить пожрать.</li>
            <li>дай ему пожрать.</li>
        </ol>
    `;
}