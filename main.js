const search = document.querySelector('#search');
const output = document.querySelector('#output');
const data = ['JavaScript', 'Python', 'Java', 'React', 'NodeJS', 'Visual Studio Code', 'Makawan', 'Library', 'FrameWork']

search.addEventListener('keyup', () => {
    const value = search.value;
    output.innerHTML = ''
    if (value.length) {
        const newData = data.filter((word) => {
            const lowerWord = word.toLowerCase();
            const lowerValue = value.toLowerCase();
            return lowerWord.includes(lowerValue)
        })
        if(newData.length){
            const ul = document.createElement('ul')

            newData.forEach((data) => {
                ul.innerHTML += `<li>${data}</li>`
            })
            output.appendChild(ul)

            if(document.querySelector('ul li')){
                const li = document.querySelectorAll('li');
                li.forEach((liElement) => {
                    liElement.addEventListener('click',() => {
                        search.value = liElement.innerText;
                        output.removeChild(ul)
                    })
                })
            }
        }
    }

})