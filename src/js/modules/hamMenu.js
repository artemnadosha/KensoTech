const hamIconMenu = document.querySelector('.icon-ham');
const hamMenu = document.querySelector('.wrapper-navbar-ham');
const hamMenuList = hamMenu.querySelector('ul');
export const activeHamFunction = () => {
    [hamMenu, hamIconMenu].forEach(items => {
        items.addEventListener('click', () => {
            hamMenu.classList.add('active');
            hamIconMenu.classList.toggle('active');
            hamMenuList.classList.toggle('disabled');


            if (hamIconMenu.classList.contains('active')) {
                hamMenuList.classList.remove('disabled');
                document.body.style.overflow = 'hidden';
            } else {
                hamMenu.classList.add('disabled');
                setTimeout(() => {
                    hamMenu.classList.remove('disabled');
                    hamMenu.classList.remove('active');
                }, 500);
                document.body.style.overflowY = 'scroll';
            };
        });
    });
};
