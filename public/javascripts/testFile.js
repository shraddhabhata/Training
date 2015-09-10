function veretechConstructor(param) {
	
    param = param === undefined ? 0 : param;
    this.incrementVar = function() {
		if (typeof param !== 'number') {
	        return 'Error';
	    } else {
			return param + 1;
		    }
		};
		this.decrementVar = function() {
			if (typeof param !== 'number') {
	    	    return 'Error';
	   	 } else {
	   			return param - 1;
			}
		};
}
