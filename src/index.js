/**
 * @param {Type}
 * @return {Type}
 */
export default function (variable, whenempty) {
	if(!whenempty){
		whenempty = "";
	}
	if(!variable){
		variable = whenempty;
	}
	return variable;
}
