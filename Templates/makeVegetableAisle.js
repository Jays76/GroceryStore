function Item(name, price, unit, picDir) {
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.picDir = picDir;
    this.aisleDisplay = function() {
        var newString = this.name.replace(/\s/g, '');
        document.write("<a href=\"P3-" + newString + ".html\"><img src=" + this.picDir + " , style = \"width: 100%; height: auto; padding: 15px class=\"aisleitem\"></a><h3 id=\"" + this.name + "\">" + newString + "</h3>" +
            "<p>$<label id=\"price" + this.name + "\">" + this.price + "</label> <label id=\"units" + this.name + "\"<i>" + this.unit + "</i></label></p><label>Quantity: </label><input type=\"number\" " +
            "placeholder=\"0\" min=\"0\" id=\"add" + this.name + "\"/> <button type=\"submit\" " +
            "onclick=\"addData(" + this.name + ")\">Add to cart</button><br><a href=\"P3-" + newString + ".html\"><i>More Details</i></a>")
    }
}


function AisleRow(fullAisle) {
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

function dynFill(fullAisle, count) {
    var lastRow = Math.ceil(count / 3)
    var i = 0;
    for (row = 1; row <= lastRow; row++) {
        document.write("<div class = \"row\">");
        for (col = 0; col < 3; col++, i++) {
            if (i > count) { break; }
            document.write("<div class=\"col-sm-4\">");
            fullAisle[i].aisleDisplay();
            document.write("</div>");
        }
        document.write("</div>");
        document.write("<hr>");
    }
}

function populateAisle() {
    var nextIndex = fullAisle.length
    fullAisle[0] = new Item("Brocoli", "3.99", "each", "vegetables/brocoli.jpg");
    fullAisle[1] = new Item("Carrots", "2.49", "each", "vegetables/carrot.jpg");
    fullAisle[2] = new Item("Celery", "2.99", "each", "vegetables/celery.jpg");
    fullAisle[3] = new Item("Cucumber", "2.49", "each", "vegetables/cucumber.jpg");
    fullAisle[4] = new Item("Mushrooms", "4.69", "per 100g box", "vegetables/mushrooms.jpg");
    fullAisle[5] = new Item("Asparagus", "4.93", "per 320 g avg", "vegetables/asparagus.jpg");

}

const fullAisle = [];

populateAisle();
//AisleRow(fullAisle);
dynFill(fullAisle, fullAisle.length);