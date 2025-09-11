function countfruits() {     
      let items = document.getElementsByClassName("fruits");  
      let total = items.length;   
      document.getElementById("result").innerText = "Total fruits : " + total;
    } 