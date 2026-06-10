describe("Gilded Rose", function() {

  it("Once the sell by date has passed, Quality degrades twice as fast", function() {
    items = [ new Item("foo", 0, 10) ];
    update_quality();
    expect(items[0].quality).toEqual(8);
   });



  it("The Quality of an item is never negative", function() {
    
    items = [ new Item("foo1", 1, 10) ];

    for (var i = 0; i < 9; i++) {
      update_quality();
    }
    expect(items[0].quality).toEqual(0);
    });

  it("Aged Brie actually increases in Quality the older it gets", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(1);
   });

  it("The Quality of an item is never more than 50", function() {
    items = [ new Item("Aged Brie", 2, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
   });

  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality();
    expect(items[0].quality).toEqual(80);
   });

  it("Backstage passes, like aged brie, increases in Quality as its SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality(); 
    expect(items[0].quality).toEqual(21);
    items[0].sell_in = 10;
    update_quality(); 
    expect(items[0].quality).toEqual(23);
    items[0].sell_in = 5;
    update_quality(); 
    expect(items[0].quality).toEqual(26);
    items[0].sell_in = 0;
    update_quality(); 
    expect(items[0].quality).toEqual(0);
   });

   it("Conjured items degrade in Quality twice as fast as normal items", function() {
    items = [ new Item("Conjured Mana Cake", 3, 6) ];
    update_quality(); 
    expect(items[0].quality).toEqual(4);
    update_quality(); 
    expect(items[0].quality).toEqual(2);
    update_quality(); 
    expect(items[0].quality).toEqual(0);
   });  

});
