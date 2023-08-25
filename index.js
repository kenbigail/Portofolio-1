var active = 3;

const hello_arr = ["Hello", "Hola", "Bonjour","Sup.",  "您好", "こんにちは ", "안녕하세요 ", "Ciao","Χαίρετε ", "مرحباً ", "Olá "];


window.onload = function () {
    const spanHelloContainer = document.querySelector(".span-hello-container");
    const spanHello = document.querySelector(".span-hello");

    let currentIndex = 0;

    function displayNextHello() {
        if (currentIndex < hello_arr.length) {
            spanHello.textContent = hello_arr[currentIndex];
            currentIndex++;
            setTimeout(displayNextHello, 220);
        } else {
            spanHelloContainer.classList.add("translate-animation");
        }
    }

    displayNextHello();
};


