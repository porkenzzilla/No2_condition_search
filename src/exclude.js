export default Object.prototype.excludeValue = function(con){
	if(con.condition.exclude !== undefined){
	let prop;
	for (let key in con.condition.exclude[0]) {
		prop = key;
		break;
	};
	const includeProp = con.condition.exclude[0][prop];
	if(this.data){
		const result = this.data
			.filter((i) => i[prop] === !includeProp);
		return { result: result };
	}
	if(this.result){
		const result = this.result
			.filter((i) => i[prop] === !includeProp);
		return { result: result };
	}
	}
	return this;
};
