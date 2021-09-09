menu_list_array = ["Veg Margherita Pizza","Pepperoni Pizza", "Chicken Pizza", "Cheese Pizza"
                    ];

function getmenu(){
var htmldata;
htmldata=<ol class='menulist'></ol>
menu_list_array.sort();
for (var i=0 ; i<menu_list_array.length;i++){
    htmldata=htmldata+"<li>" +menu_list_array[i]+ "</li>"
}
}

function add_item(){
var htmldata;

var item=document.getElementById("add_item").value;


}

function add_top(){

}