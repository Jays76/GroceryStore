function Item(name, price, unit, picDir){
    this.name = name
    this.price = price
    this.unit = unit
    this.picDir = picDir
    this.aisleDisplay = function() {
        var newString = this.name.replace(/([a-z])([A-Z])/g, '$1 $2');
        var newString2 = this.name.replace(/\s/g, '');
        document.write("<a href=\"P3-" + newString2 + ".html\"><img src=" + this.picDir + " class=\"aisleitem\"></a><h3 id=\"" + this.name + "\">" + newString + "</h3>" +
                       "<p>$<label id=\"price" + this.name + "\">" + this.price + "</label> <label id=\"units" + this.name + "\"<i>" + this.unit + "</i></label></p><label>Quantity: </label><input type=\"number\" " +
                       "placeholder=\"0\" min=\"0\" id=\"add" + this.name + "\"/> <button type=\"submit\" " +
                       "onclick=\"addData(" + this.name + ")\">Add to cart</button><br><a href=\"P3-" + newString2 + ".html\"><i>More Details</i></a>")
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

function dynFill(fullAisle, count) {
    var lastRow = Math.ceil(count/3)
    var i = 0;
        for (row = 1; row <= lastRow; row++) {
            document.write("<div class = \"row\">");
            for (col = 0; col < 3; col++, i++) {
                if (i > count) {
                break;
                }
                document.write("<div class=\"col-sm-4\">");
                fullAisle[i].aisleDisplay();
                document.write("</div>");
            }
            document.write("</div>");
            document.write("<hr>");
        }
}

function populateAisle(){
        fullAisle[0] = new Item("Chocolatine","5.99","4x50 g","Bread%20and%20Bakery/chocolatine.png");
        fullAisle[1] = new Item("MiniBaguettes","5.49","5x60 g","Bread%20and%20Bakery/minibaguette.png");
        fullAisle[2] = new Item("SlicedBread","5.69","each","Bread%20and%20Bakery/slicedbread.png");
        fullAisle[3] = new Item("Croissant","4.99","4x60 g","Bread%20and%20Bakery/croissant.png");
        fullAisle[4] = new Item("AppleTurnovers","5.99","6x55 g","Bread%20and%20Bakery/appleturnovers.png");
        fullAisle[5] = new Item("CinnamonRolls", "3.99","4x50 g","Bread%20and%20Bakery/cinnamonroll.png");
}

const fullAisle = [];

populateAisle();
//AisleRow(fullAisle);
dynFill(fullAisle, fullAisle.length);