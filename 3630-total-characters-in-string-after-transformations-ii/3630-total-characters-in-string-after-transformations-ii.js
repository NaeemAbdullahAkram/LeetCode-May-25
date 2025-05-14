const R = 1000000007n

// multiply vector by matrix
const f = (v, i, m) => v.map((x, j) => v.reduce((s, x, i) => (s + x * m[i][j]) % R, 0n));

// multiply matrix by itself
const $ = m => m.map(f);

const lengthAfterTransformations = (s, t, n, m) => Number([...t.toString(2)].reduceRight(
    (v, x) => (
        // first init transformation matrix from nums
        // then multiply matrix by itself
        m = m ? $(m) : n.map((x, i) => n.map((y, j) => (25 + j - i) % 26 < x ? 1n : 0n)),
        // if bit in t is set, update vector of letter frequencies
        +x ? f(v, 0, m) : v
    ),
    // convert string into vector of 26 letter frequencies
    [...s].reduce(
        (v, x) => (v[x.charCodeAt(0) - 97]++, v),
        Array(26).fill(0n)
    )
).reduce((s, x) => s + x) % R)