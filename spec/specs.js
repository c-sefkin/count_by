describe('countUpBy', function() {

  it("it will count up to a certain amount by a specific multiple", function() {
    expect(countUpBy(5, 30)).to.eql([5,10,15,20,25,30])
  });
});
