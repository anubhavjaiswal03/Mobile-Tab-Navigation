const navList = document.querySelectorAll('.phone nav ul li');
const contentList = document.querySelectorAll('.content');

navList.forEach((navItem, idx) => {
	navItem.addEventListener('click', () => {
		const activeNav = document.querySelector('.active');
		const activeContent = document.querySelector('.content.show');

		activeNav.classList.toggle('active');
		navItem.classList.toggle('active');

		activeContent.classList.toggle('show');
		contentList[idx].classList.toggle('show');
	});
});
