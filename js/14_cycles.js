let num = 10;
while (num <= 15) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num <= 15);

let n = 50;
for (let i = 1; i < 8; i++) {
    console.log(n);
    n++;
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        break;
    }
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;
    }
    console.log(i);
}