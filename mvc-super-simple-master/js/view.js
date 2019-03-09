MVC.View = class View {
	constructor(elem) {
		this.elem = elem;
	}

	updateView (datos) {
		for (let key in datos) {
			const nodeFields = this.elem.querySelectorAll(`[name='${key}']`);

			if (nodeFields.length > 1) {
				const fields = Array.from(nodeFields)

				const correctField = fields.find(elem => {
					return elem.value === datos[key];
				});

				correctField.checked = true;
			} else if (nodeFields.length > 0) {
				nodeFields[0].value = datos[key];
			}
		}
	}
}