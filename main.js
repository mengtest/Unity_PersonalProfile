var inputnum = process.argv[2];
var num = parseInt(inputnum);
var maxline, spacenum, starnum;
var star, space;
for (maxline = 0; maxline < num; maxline++) {
    star = "";
    space = "";
    for (spacenum = 0; spacenum < (num - maxline - 1); spacenum++) {
        space += " ";
    }
    for (starnum = 0; starnum< (2 * maxline + 1); starnum++) {
        star += "*";
    }
    console.log(space + star);
}
