The most popular story behind the invention of chess contains a very simple yet effective demonstration of a certain mathematical concept. It goes like this: a minister in an Indian court has invented chess. The king is impressed by this new game, and decides to let the inventor have any reward he wishes. The inventor placed a grain of wheat on a chessboard (the same one he invented) and asked for double the previous square until the last square was reached.

The king finds this request to be humourous, a small request for an impressive invention. But this devious man proves that he was indeed the inventor of such a thoughtful and strategic game. Upon calculation, the total amount exceeded what even the royal treasury could afford. One might ask, how does such a simple, innocuous request end up being too much for a king to complete?

The answer lies in the mathematical concept of exponential growth. What is exponential growth? A practical demonstration will help. Click the first square and move on to the next.

As you would see, instead of growing at a constant rate, the difference grows on every successive square and by the end of the board, the number becomes too large to even comprehend. And if we follow the request as it is

Geometric progression is a sequence where the every successive number is achieved by multiplying the previous number with a common ration. Mathematically, with a common ratio of 2 for example:

1, (1 \* 2), (2\*2), (2\*2 \* 2) ...

Calculating this for 64 squares is not easy, as it would require us to repeat the operation multiple times. With a computer, this isn't difficult, if we use a simple for loop. However, for calculation by hand, it is extremely tedious and there is a huge margin for error.



Fortunately, there is a formula for this entire operation. For an initial term "a", and a common ratio "r", the nth term in a geometric progression is given by:

arn-1

So a general geometric progression looks like this:

ar1-1, ar2-1, ar3-1, ar4-1 ...

a, ar, ar2, ar3, ...

For the above case, this progression becomes:

1, 2^1, 2^2, 2^3, ...

Which is exactly what the particular situation transforms to.

But as per the story, the minister asked for the wheat grains in all squares, so they need to be added. In sequences or progressions, the total sum of the progression is termed as a series. A series is generally represented by the symbol:

Sigma n

However, this is a general series notation and not a proper formula. Fortunately, we also have a formula for a geometric series: 

a(rn - 1)/(r-1)

This simple formula allows you to 


