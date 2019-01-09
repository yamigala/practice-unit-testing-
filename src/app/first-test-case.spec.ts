describe('my first test-case',()=> {
    let sut;
    
    beforeEach(()=>{
        sut={}
    })
    
    it('should be true if true',()=>{
        //arrange
        sut.a = false;
        //action
        sut.a = true;
        //assert
        expect(sut.a).toBe(true);
    })
    })