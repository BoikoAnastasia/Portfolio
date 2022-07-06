var N = 7;
var S = "Hello"
if (S.length < N)
{
    S.slise(N);
    alert(S);
}
else
{
    for (var i = 0; i < S.length; i++) {
        S = "." + S;
    }
    alert(S);
}