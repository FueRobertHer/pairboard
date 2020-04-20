// 54. Spiral Matrix

// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:
// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]

// Example 2:
// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

//[1,2,3]
//[6,9]
//[8,7]
//[4]
//[5]


//[1, 2, 3, 4]
//[8,12]
//[11,10,9]
//[5]
//[6,7]


// var spiralOrder = function(matrix) {
//     let res = [];

//     let x = 0;
//     let y = 0;
//     let top =0;
//     let bottom = matrix.length;
//     let left = 0;
//     let right = matrix[0].length;
//     //while
//     while(top<bottom && left < right){
//       if(x===right){
//         y++;
//         right--;
//       }
//       if(x===left){
//         y--;
//         left++;
//       }
//       if(y===top){
//         x++;
//         top--;
//       }
//       if(y===bottom){
//         x--;
//         bottom++;
//       }
//       console.log('x',x, 'y',y)
//       let val = matrix[x][y]
//       res.push(val)
//     }

//     return res;

// };


// var spiralOrder = function(matrix) {
//     if (!matrix.length) return [];
//     const res = [];
//     const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
//     const range = [matrix[0].length, matrix.length - 1];
    
//     let d = 0, r = 0, c = -1;
//     while (range[d % 2] > 0) {
//         for (let i = 0; i < range[d % 2]; i++) {
//             r += dirs[d][0];
//             c += dirs[d][1];
//             res.push(matrix[r][c]);
//         }
//         range[d % 2]--;
//         d = (d + 1) % 4;
//     }
//     return res;
// };

// spiralOrder([
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ])