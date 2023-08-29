const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions() {
	sectBtn.forEach((btn) => {
		btn.addEventListener('click', function () {
			let currentBtn = document.querySelectorAll('.active-btn')[0];
			currentBtn.classList.remove('active-btn');
			this.classList.add('active-btn');
		})
	})

	allSections.forEach((sec) => {
		sec.addEventListener('click', (e) => {
			const id = e.target.dataset.id;
			if (id) {
				// sectBtns.forEach((btn) => {
				// 	btn.classList.remove('active')
				// })
				// e.target.classList.add('active')

				sections.forEach((section) => {
					section.classList.remove('active')
				})

				const element = document.getElementById(id);
				element.classList.add('active');
			}
		})
	})
}

pageTransitions();
