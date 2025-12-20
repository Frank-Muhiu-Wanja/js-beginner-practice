// 2D array = multi-dimensional array that stores a matrix
//            of data in rows and columns.
//            useful for games, spreadsheets, or representing images

//          [x, 0, x],
//          [0, x, 0],
//          [x, 0, x]

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];

// matrix[0][0] = "x";
// matrix[0][1] = "0";
// matrix[0][2] = "x";

// matrix[1][0] = "0";
// matrix[1][1] = "x";
// matrix[1][2] = "0";

// matrix[2][0] = "z";
// matrix[2][1] = "0";
// matrix[2][2] = "x";

for (let row of matrix) {
  const rowString = row.join(" ");
  console.log(rowString);
}
