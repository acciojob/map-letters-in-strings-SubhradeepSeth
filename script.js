//your JS code here. If required.
function name(str) {
	let ans={};
	for(let i=0;i<str.length;i++){
		if(ans[str[i]]===true){
			ans[str[i]].push(i);
		}
		else{
			ans[str[i]]=[i];
			// ans["name"]=["sanu"];
			// ans.name="sanu"
		}
	}
	return ans;
}
let str=prompt();
alert(name(str));