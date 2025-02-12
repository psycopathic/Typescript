//generic function 
function add<T>(a:T,b:T):T{
    return (a as any) + (b as any);
}

console.log(add<number>(1,2));
console.log(add<string>('1','2'));
console.log(add<boolean>(true,false));