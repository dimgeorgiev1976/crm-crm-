// hints.js
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/popper.js/dist/popper.min.js'
import './request.js'


	document
		.querySelector('[data-reinit]')
		.addEventListener('click', event => {
			event.stopPropagation()
			dbRequest.reinit(() => location.replace('index.html'))
		})