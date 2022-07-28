'use strict';
class Cs142TemplateProcessor {
	constructor(template) {
        this.template = template;
	}

	fillIn(dictionary) {
        var tmp = this.template;
        for (const key in dictionary) {
            if(Object.prototype.hasOwnProperty.call(dictionary, key)) {
                var re = new RegExp('\\{\\{' + key + '\\}\\}','g');
                tmp = tmp.replace(re, dictionary[key]);      
            }
		}
        tmp = tmp.replace(/\{\{\w+\}\}/, 'g', "");
		return tmp;
	}
}
