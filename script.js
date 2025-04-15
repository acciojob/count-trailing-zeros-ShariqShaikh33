function trailingZeros(n) {
	let i=1;
	let numofzero=0;
	while(5**i<=n){
		numofzero+=getMultiples(n,5**i);
		i++;
		
	}
	return (numofzero);
  //your JS code here. If required.
}

function getMultiples(n,num){
	let multiples=0;
	for(let i=0;i<n;i++){
		if(i%num==0){
			multiples++;
		}
	}
	return multiples;
	
}


const input = prompt("Enter a number");
alert(trailingZeros(input));

