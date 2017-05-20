var myDelay;
        
        function autoPlay() {
                nextBut();
                myDelay = setTimeout("autoPlay()", 5000);
        }
        
		function backBut() {
            clearTimeout(myDelay);
			var img = document.getElementById("khuon-img");
            var hinh = img.src.split(".");
            var chuso = hinh[0].split("/");
            var so = chuso[chuso.length - 1];
            if (so == "1")
                img.src = "32.jpg";
            else 
                img.src = (so - 1) + ".jpg";
            detail(img);
		}
        
        function nextBut() {
            clearTimeout(myDelay);
            var img = document.getElementById("khuon-img");
            var hinh = img.src.split(".");
            var chuso = hinh[0].split("/");
            var so = chuso[chuso.length - 1];
            if (so == "32")
                img.src = "1.jpg";
            else 
                for (var i = 0; i < 31; i++)
                    backBut();
        }
        
        function imgClick(x) {
            clearTimeout(myDelay);
            var img = document.getElementById("khuon-img");
            img.src = x.src;
            clearPicSee();
            picSee(x);
            detail(x);
        }
        
        function clearPicSee() {
            var arr = document.getElementsByClassName("sp");
            for (var i = 0; i < arr.length; i++)
                arr[i].style.border = "none";
        }
        
        function picSee(x) {
            x.style.border = "1px black solid";
        }
        
        function detail(x) {
            var arr = x.src.split(".");
            var arr1 = arr[0].split("/");
            document.getElementById("thong-tin").innerHTML = "Loại sản phẩm: " + arr1[arr1.length - 2] + "<br>Mã số sản phẩm: " + arr1[arr1.length - 2] + arr1[arr1.length - 1];
        }