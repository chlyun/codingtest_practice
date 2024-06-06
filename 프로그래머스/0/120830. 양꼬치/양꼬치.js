function solution(n, k) {
    var answer = 0;
    let main = 12000;
    let sub = 2000;
    
    answer = (main * n) + (sub * k) - (Math.floor(n/10) * sub);
    return answer;
}