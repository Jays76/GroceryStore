function Item(name, price, unit, picDir){
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.picDir = picDir;
    this.aisleDisplay = function(){
        var newString = this.name.replace(/([a-z])([A-Z])/g, '$1 $2');
        var newString2 = this.name.replace(/\s/g, '');
        document.write("<a href=\"P3-" + newString2 + ".html\"><img src="+this.picDir+" class=\"aisleitem\"></a><h3 id=\""+this.name+"\">"+newString+"</h3>" +
            "<p>$<label id=\"price"+this.name+"\">"+this.price+"</label> <label id=\"units"+this.name+"\"<i>"+this.unit+"</i></label></p><label>Quantity: </label><input type=\"number\" " +
            "placeholder=\"0\" min=\"0\" id=\"add"+this.name+"\"/> <button type=\"submit\" " +
            "onclick=\"addData("+this.name+")\">Add to cart</button><br><a href=\"P3-" + newString2 + ".html\"><i>More Details</i></a>")
    }
}

function AisleRow(fullAisle){
    document.write("<div class = \"row\">");
        document.write("<div class=\"col-sm-4\">");
            //document.write("1");
            fullAisle[0].aisleDisplay();
        document.write("</div>");
        document.write("<div class=\"col-sm-4\">");
            //document.write("2");
            fullAisle[1].aisleDisplay();
        document.write("</div>");
        document.write("<div class=\"col-sm-4\">");
            //document.write("3");
            fullAisle[2].aisleDisplay();
        document.write("</div>");
    document.write("</div>");
}

function dynFill(fullAisle, count){
    var lastRow = Math.ceil(count/3)
    var i = 0;
        for (row=1; row<=lastRow; row++){
            document.write("<div class = \"row\">");
                for (col=0; col<3; col++, i++){
                    if (i>count){break;}
                        document.write("<div class=\"col-sm-4\">");
                        fullAisle[i].aisleDisplay();
                        document.write("</div>");
                }
            document.write("</div>");
            document.write("<hr>");
        }
}
function populateAisle() {
    fullAisle[0] = new Item("TurkeyBacon", "1.60", "100g", "Meat%20and%20Poultry/Turkey%20Bacon.jpeg");
    fullAisle[1] = new Item("ChickenBreast", "17.61", "1,000g avg.", "Meat%20and%20Poultry/Chicken%20Breast.jpg");
    fullAisle[2] = new Item("VeggieBurgers", "7.99", "100g", "Meat%20and%20Poultry/Vegie%20Burger.png");
    fullAisle[3] = new Item("LeanGroundBeef", "17.17", "1000g", "Meat%20and%20Poultry/Ground%20Beef.jpeg");
    fullAisle[4] = new Item("SalmonFillet", "15.86", "800g avg", "Meat%20and%20Poultry/Salmon.jpg");
    fullAisle[5] = new Item("RibSteaks", "37.57", "1,100g avg", "Meat%20and%20Poultry/Rib%20Eye%20Steak.jpeg");
}

const fullAisle = [];
populateAisle();
//AisleRow(fullAisle);
dynFill(fullAisle, fullAisle.length);
