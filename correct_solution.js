function digitalRoot(n) {
    let current = n.toString();

    while (current.length > 1) {
        let sum = 0;
        for (let digit of current) {
            sum += parseInt(digit);
        }
        
        if (sum === 13) {
            sum = sum - 4;
        }
        
        current = sum.toString();
        
        if (current.length == 1) {
            break;
        }
    }
    
    return parseInt(current);
}

function solve(input) {
    const lines = input.trim().split('\n');
    const t = parseInt(lines[0]);
    const results = [];
    
    for (let i = 1; i <= t; i++) {
        const n = lines[i];
        const result = digitalRoot(n);
        results.push(result);
    }
    
    return results.join('\n');
}
