/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {

    var sum;



    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j < nums.length; j++) {
            sum = nums[i] + nums[j]        
            if(target == sum && i!=j) {                
                return [i, j];
                
            }

        }
    };

}