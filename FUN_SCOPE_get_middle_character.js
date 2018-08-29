function getMiddle(s) {
if (s.length % 2 === 0) {
    return (s.substring((s.length/2)-1,(s.length/2)+1));
  } else {
  	return s.charAt(Math.floor(s.length/2));
  }
}
console.log(getMiddle("test"));//returns es
console.log(getMiddle("testing"));//returns t
console.log(getMiddle("middle"));//returns dd
console.log(getMiddle("A"));//returns A