    let btn = document.querySelector('.click');
    let container = document.querySelector('.container')

    const getJoke = async() =>{
        try{
            let data = await (await fetch('https://api.chucknorris.io/jokes/random')).json();
            let joke = data.value;
            container.textContent = joke;
        } catch(error){
            console.log(error);
        }
    }

    btn.addEventListener('click', getJoke);

    