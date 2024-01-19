function changeColors() {
            const container = document.querySelector('.container');
            const button = document.querySelector('button');
            const body = document.body;
            const h1 = document.querySelector('h1');
            const h2Elements = document.querySelectorAll('h2');
            const header = document.querySelector('header');

            container.style.backgroundColor = container.style.backgroundColor === 'black' ? 'whitesmoke' : 'black';
            container.style.color = container.style.color === 'white' ? 'black' : 'white';
            container.style.border = container.style.border === '2px solid whitesmoke' ? '2px solid black' : '2px solid whitesmoke';

            body.style.backgroundColor = body.style.backgroundColor === 'black' ? 'whitesmoke' : 'black';

            button.style.backgroundColor = button.style.backgroundColor === 'whitesmoke' ? 'gray' : 'whitesmoke';
            button.style.color = button.style.color === 'gray' ? 'whitesmoke' : 'gray';

            h1.style.color = h1.style.color === 'whitesmoke' ? 'black' : 'whitesmoke';


            h2Elements.forEach(h2 => {
                h2.style.color = h2.style.color === 'whitesmoke' ? 'black' : 'whitesmoke';
            });

            header.style.borderBottomColor = header.style.borderBottomColor === 'whitesmoke' ? 'black' : 'whitesmoke';
        }