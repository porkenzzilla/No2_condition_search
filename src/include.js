export default Object.prototype.includeValue = function(con){
	if(con.condition.include !== undefined){
		let prop;
		for (let key in con.condition.include[0]) {
			prop = key;
			break;
		};
		const includeProp = con.condition.include[0][prop];
		if(this.data){
			const result = this.data
				.filter((i) => i[prop] === includeProp);
			return { result: result };
		}
		if(this.result){
			const result = this.result
				.filter((i) => i[prop] === includeProp);
			return { result: result };
		}
	}
	return this;
};
