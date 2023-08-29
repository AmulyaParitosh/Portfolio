const section = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions() {
	for (let i = 0; i < sectBtn.length; i++){
		sectBtn[i].addEventListener('click', function(){
			let currentBtn = document.querySelectorAll('.active-btn')[0];
			currentBtn.className = currentBtn.className.replace(' active-btn', '');
			this.className += ' active-btn';
		})
	}
}

pageTransitions();
