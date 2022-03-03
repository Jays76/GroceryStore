var arr = new Array();
    function addData(aName){
        getData();
        var strname = aName.innerHTML.replace(/\s/g,'')
        if (document.getElementById("add"+strname).value<1){
            return;
        }

        var i;
        var exst = false;
        for(i=0;i<arr.length;i++){
            if(arr[i].name==strname){
                arr[i].qty=parseInt(arr[i].qty)+parseInt(document.getElementById("add"+strname).value);
                exst = true;
            }
        }
        if(!exst){
            arr.push({
            name:strname,
            price:document.getElementById("price"+strname).innerHTML,
            qty:document.getElementById("add"+strname).value,
            })
        }

        localStorage.setItem("localData", JSON.stringify(arr));
        showData();
    }

    function getData(){
        var str = localStorage.getItem("localData");
        if(str != null)
            arr=JSON.parse(str);
    }

    function deleteData(){
        localStorage.clear()

        var table = document.getElementById("cartTable");

        var x = table.rows.length-1;
        var i = 1;

        arr=[];
        while(x>=i){
            table.deleteRow(x);
            x--
        }
    }

    function showData(){

        getData();
        var table = document.getElementById("cartTable");

        var x = table.rows.length-1;
        var i = 1;

        while(x>=i){
            table.deleteRow(x);
            x--
        }

        var divEmpty = document.getElementById("cartEmpty");
        var divFull = document.getElementById("cartFull");
        if (document.getElementById("cartEmpty").display !== "none"){
            divEmpty.style.display = "none";
            divFull.style.display = "";
        }

        for(var j=1;j<=arr.length;j++){
            var aRow = table.insertRow(j);
            var cartName = aRow.insertCell(0);
            var cartPrice = aRow.insertCell(1);
            var cartQty = aRow.insertCell(2);
            var cartSubtotal = aRow.insertCell(3);
            var cartQST = aRow.insertCell(4);

            var newString = arr[j-1].name.replace(/([a-z])([A-Z])/g, '$1 $2');

            cartName.innerHTML = newString;
            cartPrice.innerHTML = "$" +arr[j-1].price;
            cartQty.innerHTML = arr[j-1].qty;
            cartSubtotal.innerHTML = "$" +  parseFloat(parseFloat(arr[j-1].price)*parseFloat(arr[j-1].qty)).toFixed(2);
            cartQST.innerHTML =  "$" + parseFloat(parseFloat(arr[j-1].price)*parseFloat(arr[j-1].qty)*1.15).toFixed(2);
        }
    }

    function sumCart(){
        getData();
    var subTotal = 0;
    for (var i = 0; i<arr.length; i++){
        subTotal += parseFloat(parseFloat(parseFloat(arr[i].price)*parseFloat(arr[i].qty)*1.15).toFixed(2));
    }
    return subTotal.toFixed(2);
}



        function purchaseClicked(message) {
        var cartCheck = localStorage.getItem("localData");
        if(cartCheck == null){
            alert("Please purchase something!")
        }
        else {
            alert('Thank you for your purchase! Your total for this purchase is: $' + sumCart());
        deleteData();
        }
        }

    function myFunction() {
          var moreText = document.getElementById("extratext");
          var btnText = document.getElementById("myBtn");

          if (moreText.style.display === "none") {
            btnText.innerHTML = "<i>Less info</i>";
            moreText.style.display = "inline";
          } else {
            btnText.innerHTML = "<i>More info</i>";
            moreText.style.display = "none";
          }
        }



