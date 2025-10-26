const numsAsc = [...nums].sort((a, b) => a - b);
const numsDesc = [...nums].sort((a, b) => b - a);
console.log("Números asc:", numsAsc);
console.log("Números desc:", numsDesc);