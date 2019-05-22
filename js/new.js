// new.js
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/popper.js/dist/popper.min.js'

import dbRequest from './request'


document
	.querySelector('[data-create-order]')
	.addEventListener('click', event =>  {
		event.stopPropagation()

		dbRequest.createOrder(
			getOrderData(),
			() => location.replace('index.html')
		)
	})

function getOrderData () {
	return {
		clientName: document.querySelector('[data-new-order-client-name]').value || 'NotName',
		good: document.querySelector('[data-new-order-good]').value || 'NotGood',
		price: parseInt(document.querySelector('[data-new-order-price]').value) * 100 || 1,
		requestStatus: parseInt(document.querySelector('[data-new-order-request-status]').value) || 0,
		paymentStatus: parseInt(document.querySelector('[data-new-order-payment-status]').value) || 0
	}
}