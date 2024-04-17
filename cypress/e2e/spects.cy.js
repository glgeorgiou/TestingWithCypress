describe('1st group of tests', () => {
    describe('2nd group of tests inside the first', () => {
        it('1st test inside 2nd group', () => {
            expect('1st inside 2nd').to.equal('1st inside 2nd')
        })
    })
    it('1st test inside 1st group', () => {
        expect('1st inside 1st').to.equal('1st inside 1st')
    })
    it('2st test inside 1st group', () => {
        expect('2st inside 1st').to.equal('2st inside 1st')
    })
    it('3rd test inside 1st group', () => {
        expect('3rd inside 1st').to.equal('3rd inside 1st')
    })
})

context('2nd group of tests', () => {
    it('1st test case inside 2nd group', () => {
        expect('1st inside 2nd').to.equal('1st inside 2nd')
    })
    it('2nd test case inside 2nd group', () => {
        expect('2nd inside 2nd').to.equal('2nd inside 2nd')
    })
})