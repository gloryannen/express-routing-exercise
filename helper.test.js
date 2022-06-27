const {getMean, getMedian, getMode} = require('./helper')

describe("getMean", function () {
    it("Get avg of nums in an array", function () { 
        expect(getMean([-1,0,1,2,3])).toEqual(1)
      })
    it("Get avg of nums in an array that is empty", function () { 
      expect(getMean([])).toEqual(0)
    })
  })
  
describe("getMedian", function(){
    it("Get middle num in a even assorted array of nums", function(){ 
      expect(getMedian([-1,0,1,2])).toEqual(0.5)
    })
    it("Get middle num in a odd assorted array of nums", function () { 
      expect(getMedian([-1,0,1,2,3])).toEqual(1)
    })
  })

  describe("getMode", function () {
    it("Get num that appears that most", function () { 
      expect(getMode([-1,0,1,2,3,3])).toEqual(3)
    })
    it("Checks for non-numeric strings to be falsy", function () { 
      expect(getMode([-1,0,"foo"])).toBeFalsy()
    })
  })