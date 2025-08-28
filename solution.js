function digitalRoot(n) {
    var current = n.toString();
    
    while (current.length > 1) {
        var sum = 0;
        for (var digit of current) {
            sum += parseInt(digit);
        }
        
        if (sum === 13) {
            sum = sum - 4;
        }
        
        current = sum.toString();
    }
    
    return parseInt(current);
}

function solve(input) {
    var lines = input.trim().split('\n');
    var t = parseInt(lines[0]);
    var results = [];
    
    for (let i = 1; i <= t; i++) {
        var n = lines[i];
        var result = digitalRoot(n);
        results.push(result);
    }
    
    return results.join('\n');
}
