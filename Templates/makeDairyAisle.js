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
    fullAisle[0] = new Item("Almilk", "3.50", "each", "https://images.pexels.com/photos/3735209/pexels-photo-3735209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
    fullAisle[1] = new Item("Milk", "4.50", "each", "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    fullAisle[2] = new Item("Yogurt", "3.00", "for three", "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80");
    fullAisle[3] = new Item("Ghee", "6.00", "per 500 g jar", "https://images.unsplash.com/photo-1573812461383-e5f8b759d12e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80");
    fullAisle[4] = new Item("Cheese", "25.99", "per wheel", "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2553&q=80");
    fullAisle[5] = new Item("Eggs", "2.75", "for half a dozen", "https://images.pexels.com/photos/2985167/pexels-photo-2985167.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
}

const fullAisle = [];
populateAisle();
//AisleRow(fullAisle);
dynFill(fullAisle, fullAisle.length);