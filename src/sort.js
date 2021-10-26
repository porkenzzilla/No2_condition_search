export default Object.prototype.sortValue = function(con){
	if(con.condition.sort_by !== undefined){
		const sortByProp = con.condition.sort_by[0];
		if(this.data){
			const result = this.data
				.sort((a, b) => (b[sortByProp] > a[sortByProp] ? -1 : 1));
		}
		if(this.result){
			const result = this.result
				.sort((a, b) => (b[sortByProp] > a[sortByProp] ? -1 : 1));
			return { result: result };
		}
	}
	return this;
};
