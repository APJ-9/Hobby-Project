const counters = document.querySelectorAll('.counter')
let i = 0
function starconnect() {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'loc.json', true);

    xhr.onload = function () {
        if (this.status === 200) {
            const star = JSON.parse(this.responseText);
            console.log(star)
            for (const key in star) {
                card = counters[i]
                card.innerText = '0'
                card.setAttribute('data-target', star[key])
                i = i + 1
            }
        }
        counters.forEach(counter => {
            const updateCounter = () => {

                const target = counter.getAttribute('data-target')
                const c = +counter.innerText
                const increment = target / 500

                if (c < target) {
                    counter.innerText = `${Math.ceil(c + increment)}`
                    setTimeout(updateCounter, 1)
                } else {
                    counter.innerText = target
                }
            }
            updateCounter()

        })
    }
    xhr.send()
}

starconnect()